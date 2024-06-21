import { configureStore } from '@reduxjs/toolkit';
import { mainApi } from 'redux/api/main-api';
import { authApi } from 'redux/api/auth-api';
import bannerSlice from 'redux/banner';

export const store = configureStore({
  reducer: {
    [mainApi.reducerPath]: mainApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [bannerSlice.name]: bannerSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(mainApi.middleware, authApi.middleware),
});
