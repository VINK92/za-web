import { Theme } from '@mui/material/styles';
import { lightTheme } from './light';
import { mainTheme } from './main';

export enum THEME_NAMES {
  main = 'main',
  light = 'light',
}

export type THEMES = {
  [key in keyof typeof THEME_NAMES]: Theme;
};

export const themes: THEMES = {
  [THEME_NAMES.main]: mainTheme,
  [THEME_NAMES.light]: lightTheme,
};
