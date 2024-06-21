import React, { useState, useMemo } from 'react';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { themes as defaultThemes, THEMES, THEME_NAMES } from 'styles/themes/theme-constants';
import { ThemeContextValue, ThemeContext } from './ThemeContext';

type ThemeProviderProps = {
  themes?: THEMES;
  defaultTheme: keyof typeof THEME_NAMES;
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ themes = {}, defaultTheme, children }) => {
  const [themeName, setThemeName] = useState(defaultTheme);
  const value: ThemeContextValue = useMemo(() => [themeName, setThemeName], [themeName]);

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={themes[themeName] || defaultThemes[themeName]}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
