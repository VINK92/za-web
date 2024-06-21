import { AuthConfig } from 'redux/api/types';

export const DEFAULT_PAGE_SIZE = 50;
export const FIRST_PAGE = 1;

export const authConfig: AuthConfig = {
  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  scope: process.env.REACT_APP_AUTH0_SCOPE,
  client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
};
