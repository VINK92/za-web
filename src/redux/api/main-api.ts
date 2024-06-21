import { createApi, fetchBaseQuery, BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import i18next from 'i18next';
import {
  setAccessToken,
  setRefreshToken,
  getRefreshToken,
  getAccessToken,
  removeAccessToken,
  removeRefreshToken,
} from 'services/local-storage';
import { authBaseQuery } from 'redux/api/auth-api';
import { API_BASE_URL, API_ROUTES, PRIVATE_ROUTES } from 'redux/api/api-routes';
import { checkTokenExpiration } from 'redux/api/utils/check-token-expiration';
import { AuthResponse } from 'redux/api/types';
import { authConfig } from 'redux/api/constants';
import { MessageType, setBannerData } from 'redux/banner';

const mainBaseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: headers => {
    const accessToken = getAccessToken();
    const refreshToken = getRefreshToken();
    if (accessToken && refreshToken) {
      headers.set('authorization', `Bearer ${accessToken}`);
    }

    return headers;
  },
});

const mainQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  let result = await mainBaseQuery(args, api, extraOptions);

  if (!navigator.onLine) {
    api.dispatch(setBannerData({ type: MessageType.error, message: i18next.t('offlineNetworkMessage') }));
    return result;
  }

  if (result.error && result.error.status === 400) {
    // filter validation error
    api.dispatch(setBannerData({ type: MessageType.error, message: i18next.t('filters.error.title') }));
    return result;
  }

  if (result.error && result.error.status === 401) {
    removeAccessToken();
    removeRefreshToken();
    return result;
  }

  // set error banner when server doesn't respond;
  if (result.error && result.error.status !== 403) {
    api.dispatch(setBannerData({ type: MessageType.error, message: i18next.t('serverErrorBanner') }));
    return result;
  }

  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken();

  if (accessToken && refreshToken && PRIVATE_ROUTES.includes(`/${(args as FetchArgs).url}`)) {
    if (checkTokenExpiration(accessToken)) {
      const refreshResult = await authBaseQuery(
        {
          url: API_ROUTES.public.OAUTH_TOKEN,
          method: 'POST',
          body: {
            ...authConfig,
            grant_type: 'refresh_token',
            refresh_token: refreshToken,
          },
        },
        api,
        extraOptions,
      );
      if (refreshResult.data) {
        setAccessToken((refreshResult.data as AuthResponse).access_token);
        setRefreshToken((refreshResult.data as AuthResponse).refresh_token);
        // retry the initial query
        result = await mainBaseQuery(args, api, extraOptions);
      } else {
        removeAccessToken();
        removeRefreshToken();
      }
    }
  }

  return result;
};

export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: mainQueryWithReauth,
  tagTypes: ['transactions'],
  endpoints: () => ({}),
});
