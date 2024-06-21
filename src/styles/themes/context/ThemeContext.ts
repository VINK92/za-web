import React from 'react';
import { THEME_NAMES } from 'styles/themes/theme-constants';

type SetThemeFunction = (v: keyof typeof THEME_NAMES) => void;
export type ThemeContextValue = [keyof typeof THEME_NAMES, SetThemeFunction];

export const ThemeContext = React.createContext<ThemeContextValue>([THEME_NAMES.main, () => {}]);
