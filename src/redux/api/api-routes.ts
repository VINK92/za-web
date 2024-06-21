export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
export const AUTHORIZATION_URL = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`;

export const API_ROUTES = {
  private: {
    TRANSACTIONS: '/transactions',
    WALLETS: '/wallets',
    ASSETS: '/assets',
    USERS_ME: '/users/me',
    PERSONAL_IDENTITIES: '/personal-identities',
    BUSINESS_IDENTITIES: '/business-identities',
    CUSTODIAL_ACCOUNTS: '/custodial-accounts',
  },
  public: {
    OAUTH_TOKEN: '/oauth/token',
  },
};

export const PRIVATE_ROUTES = Object.values(API_ROUTES.private);
