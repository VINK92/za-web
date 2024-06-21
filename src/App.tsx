import React from 'react';
import { Typography } from '@mui/material';
import { ThemeProvider } from 'styles/themes/context/ThemeProvider';
import { THEME_NAMES } from 'styles/themes/theme-constants';

const App: React.FC = () => (
  <ThemeProvider defaultTheme={THEME_NAMES.main}>
    <Typography variant="h1">Woman</Typography>
    <Typography variant="h2">Woman</Typography>
    <Typography variant="h3">Woman</Typography>
    <Typography variant="h4">Woman</Typography>
    <Typography variant="h5">What are you looking for?</Typography>
    <Typography variant="h6">Woman</Typography>
    <Typography variant="body1">MENU</Typography>
    <Typography variant="h1">Woman</Typography>
    <Typography variant="h1">Woman</Typography>
    <Typography variant="h1">Woman</Typography>
    <Typography variant="h1">Woman</Typography>
  </ThemeProvider>
);

export default App;
