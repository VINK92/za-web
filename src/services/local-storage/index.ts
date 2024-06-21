class LocalStorage {
  private readonly events: { [key: number]: Function };

  constructor() {
    this.events = {};
  }

  subscribe(func: Function): number {
    const id = Object.keys(this.events).length;
    this.events[id] = func;
    return id;
  }

  unsubscribe(id: number): boolean {
    if (this.events[id]) {
      delete this.events[id];
      return true;
    }
    return false;
  }

  static getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
    Object.values(this.events).forEach(func => func(key, value));
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
    Object.values(this.events).forEach(func => func(key));
  }
}

const localStorageSingleton = new LocalStorage();

export const ACCESS_TOKEN = 'access_token';
export const REFRESH_TOKEN = 'refresh_token';

export const getAccessToken = () => {
  return window.localStorage.getItem(ACCESS_TOKEN);
};

export const setAccessToken = (token: string) => {
  localStorageSingleton.setItem(ACCESS_TOKEN, token);
};

export const removeAccessToken = () => {
  localStorageSingleton.removeItem(ACCESS_TOKEN);
};

export const getRefreshToken = () => {
  return window.localStorage.getItem(REFRESH_TOKEN);
};

export const setRefreshToken = (token: string) => {
  localStorageSingleton.setItem(REFRESH_TOKEN, token);
};

export const removeRefreshToken = () => {
  localStorageSingleton.removeItem(REFRESH_TOKEN);
};

export default localStorageSingleton;
