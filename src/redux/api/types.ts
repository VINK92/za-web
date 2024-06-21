export interface AuthResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
}

export interface AuthConfig {
  audience: string | undefined;
  scope: string | undefined;
  client_id: string | undefined;
}

export interface CollectionResponse<T> {
  meta: {
    pageCount: number;
    resourceCount: number;
  };
  data: T[];
}

export interface Paginated {
  page?: number;
  pageSize?: number;
}

export interface RtkLazyQueryHookReturnValue<T> {
  data: T | undefined;
  currentData: T | undefined;
  error: object | undefined;
  isUninitialized: boolean;
  isLoading: boolean;
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
}
