import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';

export const resources = { en } as const;

export const defaultNS = 'common';

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  defaultNS,
});

export default i18n;
