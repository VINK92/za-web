import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/dist/query/react';
import i18next from 'i18next';
import { setAccessToken, setRefreshToken } from 'services/local-storage';
import { API_ROUTES, AUTHORIZATION_URL } from 'redux/api/api-routes';
import { authConfig } from 'redux/api/constants';
import { MessageType, setBannerData } from 'redux/banner';

export type AuthResponse = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
};

export type Credentials = {
  email: string;
  password: string;
};

export const authBaseQuery = fetchBaseQuery({ baseUrl: AUTHORIZATION_URL });

const extendedAuthBaseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  const result = await authBaseQuery(args, api, extraOptions);
  if (!navigator.onLine) {
    api.dispatch(setBannerData({ type: MessageType.error, message: i18next.t('offlineNetworkMessage') }));
    return result;
  }
  // set error banner when server doesn't respond;
  if (result.error && result.error.status !== 403) {
    api.dispatch(setBannerData({ type: MessageType.error, message: i18next.t('serverErrorBanner') }));
    return result;
  }
  return result;
};

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: extendedAuthBaseQuery,
  tagTypes: ['auth'],
  endpoints: builder => ({
    login: builder.mutation<AuthResponse, Credentials>({
      query: ({ email, password }) => ({
        url: API_ROUTES.public.OAUTH_TOKEN,
        method: 'POST',
        body: {
          ...authConfig,
          grant_type: 'password',
          password,
          username: email,
        },
      }),
      transformResponse: baseQueryReturnValue => {
        setAccessToken((baseQueryReturnValue as AuthResponse).access_token);
        setRefreshToken((baseQueryReturnValue as AuthResponse).refresh_token);
        return {} as AuthResponse;
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
