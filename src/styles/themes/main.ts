import { pxToRem } from 'utils/styling-utils';
import { createBasicTheme } from './create-basic-theme';

const mainTheme = createBasicTheme({
  palette: {
    grey: {
      700: '#000000', // grey700
      600: '#383838', // grey600
      500: '#8D8D8D', // grey500
      400: '#A8A8A8', // grey400
      300: '#C4C4C4', // grey300
      200: '#D2D2D2', // grey200
      100: '#E0E0E0', // grey100
      50: '#FFFFFF',
    },

    primary: {
      dark: '#793979',
      main: '#DBBDDB',
      light: '#F1EBF1',
    },
    secondary: {
      dark: '#0B4D4D',
      main: '#137F7F',
      light: '#87CCCC',
    },
    error: {
      dark: '#A23030', // errorDark
      main: '#D43636', // errorDefault
      light: '#F99E9E', // errorLight
    },
    warning: {
      dark: '#D6530A', // warningDark
      main: '#F6851D', // warningDefault
      light: '#F6CA92', // warningLight
    },
    success: {
      dark: '#006644', // successDark
      main: '#00875A', // successDefault
      light: '#ABF5D1', // successLight
    },
    info: {
      dark: '#0A3977', // infoDark
      main: '#0F56B3', // infoDefault
      light: '#8AB9F6', // infoLight
    },
    background: {
      paper: '#FFFFFF', // backgroundWhite
      default: '#FAFAFA', // backgroundGrey
    },
    text: {
      primary: '#313131', // textPrimary
      secondary: '#A8A8A8', // textSecondary
      disabled: '#C4C4C4', // textDisabled
    },
    transparent: 'transparent',
  },
  typography: {
    h1: {
      fontFamily: 'GothamProBold',
      fontStyle: 'bold',
      fontWeight: 700,
      fontSize: pxToRem(150),
      lineHeight: '150%',
      letterSpacing: '-0.015em',
      WebkitTextStroke: '1px',
      WebkitTextStrokeColor: '#313131',
      color: 'transparent',
    },
    h2: {
      fontFamily: 'GothamProBold',
      fontStyle: 'bold',
      fontWeight: 700,
      fontSize: pxToRem(150),
      lineHeight: '150%',
      letterSpacing: '-0.015em',
      color: '#313131',
    },
    h3: {
      fontFamily: 'GothamProBold',
      fontStyle: 'bold',
      fontWeight: 700,
      fontSize: pxToRem(52),
      lineHeight: '150%',
      letterSpacing: '-0.015em',
      WebkitTextStroke: '1px',
      WebkitTextStrokeColor: '#313131',
      color: 'transparent',
    },
    h4: {
      fontFamily: 'GothamProBold',
      fontStyle: 'bold',
      fontWeight: 700,
      fontSize: pxToRem(52),
      lineHeight: '150%',
      letterSpacing: '-0.015em',
      color: '#313131',
    },
    h5: {
      fontFamily: 'GothamProLight',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: pxToRem(72),
      lineHeight: '150%',
      letterSpacing: '0.15em',
      color: '#383838',
      opacity: '0.3',
    },
    h6: {
      // fontFamily: 'GothamProBold',
      // fontStyle: 'bold',
      // fontWeight: 700,
      // fontSize: pxToRem(16),
      // lineHeight: '138%',
      // letterSpacing: '0.0075em',
      // color: '#1C1C1C', // grey700,
    },
    body1: {
      fontFamily: 'GothamProBold',
      fontStyle: 'bold',
      fontWeight: 600,
      fontSize: pxToRem(14),
      lineHeight: '150%',
      letterSpacing: '1.5em',
      color: '#383838',
    },
    body2: {},
  },
  customShadows: {
    grey: {
      _2dp: '0px 1px 2px rgba(112, 112, 112, 0.1), 0px 2px 4px rgba(112, 112, 112, 0.1)',
      _4dp: '0px 1px 4px rgba(112, 112, 112, 0.1), 0px 4px 8px rgba(112, 112, 112, 0.1)',
      _8dp: '0px 2px 8px rgba(112, 112, 112, 0.12), 0px 6px 16px rgba(112, 112, 112, 0.12)',
      _16dp: '0px 8px 16px 2px rgba(112, 112, 112, 0.1), 0px 16px 32px 2px rgba(112, 112, 112, 0.1)',
      _24dp: '0px 12px 24px 6px rgba(112, 112, 112, 0.08), 0px 24px 48px 6px rgba(112, 112, 112, 0.08)',
      _32dp: '0px 24px 48px 10px rgba(112, 112, 112, 0.06), 0px 32px 64px 10px rgba(112, 112, 112, 0.06)',
    },
    teal: {
      _2dp: '0px 1px 2px rgba(0, 119, 106, 0.2), 0px 2px 4px rgba(0, 119, 106, 0.2)',
      _4dp: '0px 2px 4px rgba(0, 119, 106, 0.18), 0px 4px 8px rgba(0, 119, 106, 0.18)',
      _8dp: '0px 4px 8px rgba(0, 119, 106, 0.14), 0px 8px 16px rgba(0, 119, 106, 0.14)',
      _16dp: '0px 8px 16px 2px rgba(0, 119, 106, 0.1), 0px 16px 32px 2px rgba(0, 119, 106, 0.1)',
      _24dp: '0px 12px 24px 6px rgba(0, 119, 106, 0.08), 0px 24px 48px 6px rgba(0, 119, 106, 0.08)',
      _32dp: '0px 24px 48px 10px rgba(0, 119, 106, 0.06), 0px 32px 64px 10px rgba(0, 119, 106, 0.06)',
    },
    red: {
      _2dp: '0px 1px 2px rgba(212, 54, 54, 0.2), 0px 2px 4px rgba(212, 54, 54, 0.2)',
      _4dp: '0px 2px 4px rgba(212, 54, 54, 0.18), 0px 4px 8px rgba(212, 54, 54, 0.18)',
      _8dp: '0px 4px 8px rgba(212, 54, 54, 0.14), 0px 8px 16px rgba(212, 54, 54, 0.14)',
      _16dp: '0px 8px 16px 2px rgba(212, 54, 54, 0.1), 0px 16px 32px 2px rgba(212, 54, 54, 0.1)',
      _24dp: '0px 12px 24px 6px rgba(212, 54, 54, 0.08), 0px 24px 48px 6px rgba(212, 54, 54, 0.08)',
      _32dp: '0px 24px 48px 10px rgba(212, 54, 54, 0.06), 0px 32px 64px 10px rgba(212, 54, 54, 0.06)',
    },
    orange: {
      _2dp: '0px 1px 2px rgba(191, 113, 15, 0.2), 0px 2px 4px rgba(191, 113, 15, 0.2)',
      _4dp: '0px 2px 4px rgba(191, 113, 15, 0.18), 0px 4px 8px rgba(191, 113, 15, 0.18)',
      _8dp: '0px 4px 8px rgba(191, 113, 15, 0.14), 0px 8px 16px rgba(191, 113, 15, 0.14)',
      _16dp: '0px 8px 16px 2px rgba(191, 113, 15, 0.1), 0px 16px 32px 2px rgba(191, 113, 15, 0.1)',
      _24dp: '0px 12px 24px 6px rgba(191, 113, 15, 0.08), 0px 24px 48px 6px rgba(191, 113, 15, 0.08)',
      _32dp: '0px 24px 48px 10px rgba(191, 113, 15, 0.06), 0px 32px 64px 10px rgba(191, 113, 15, 0.06)',
    },
    green: {
      _2dp: '0px 1px 2px rgba(0, 135, 90, 0.2), 0px 2px 4px rgba(0, 135, 90, 0.2)',
      _4dp: '0px 2px 4px rgba(0, 135, 90, 0.18), 0px 4px 8px rgba(0, 135, 90, 0.18)',
      _8dp: '0px 4px 8px rgba(0, 135, 90, 0.14), 0px 8px 16px rgba(0, 135, 90, 0.14)',
      _16dp: '0px 8px 16px 2px rgba(0, 135, 90, 0.1), 0px 16px 32px 2px rgba(0, 135, 90, 0.1)',
      _24dp: '0px 12px 24px 6px rgba(0, 135, 90, 0.08), 0px 24px 48px 6px rgba(0, 135, 90, 0.08)',
      _32dp: '0px 24px 48px 10px rgba(0, 135, 90, 0.06), 0px 32px 64px 10px rgba(0, 135, 90, 0.06)',
    },
    blue: {
      _2dp: '0px 1px 2px rgba(15, 86, 179, 0.2), 0px 2px 4px rgba(15, 86, 179, 0.2)',
      _4dp: '0px 2px 4px rgba(15, 86, 179, 0.18), 0px 4px 8px rgba(15, 86, 179, 0.18)',
      _8dp: '0px 4px 8px rgba(15, 86, 179, 0.14), 0px 8px 16px rgba(15, 86, 179, 0.14)',
      _16dp: '0px 8px 16px 2px rgba(15, 86, 179, 0.1), 0px 16px 32px 2px rgba(15, 86, 179, 0.1)',
      _24dp: '0px 12px 24px 6px rgba(15, 86, 179, 0.08), 0px 24px 48px 6px rgba(15, 86, 179, 0.08)',
      _32dp: '0px 24px 48px 10px rgba(15, 86, 179, 0.06), 0px 32px 64px 10px rgba(15, 86, 179, 0.06)',
    },
  },
  gaps: {
    _8px: 8,
    _12px: 12,
    _16px: 16,
    _20px: 20,
    _24px: 24,
    _32px: 32,
    _40px: 40,
    _48px: 48,
    _56px: 56,
  },
});

export { mainTheme };
