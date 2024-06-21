import React from 'react';
import { createTheme, ThemeOptions, Theme } from '@mui/material/styles';
import GothamProBlack from 'assets/fonts/GothamPro/GothamProBlack.ttf';
import GothamProBold from 'assets/fonts/GothamPro/GothamProBold.ttf';
import GothamProLight from 'assets/fonts/GothamPro/GothamProLight.ttf';
import GothamProMedium from 'assets/fonts/GothamPro/GothamProMedium.ttf';
import GothamProRegular from 'assets/fonts/GothamPro/GothamProRegular.ttf';

export interface GapDimensions {
  _8px: number;
  _12px: number;
  _16px: number;
  _20px: number;
  _24px: number;
  _32px: number;
  _40px: number;
  _48px: number;
  _56px: number;
}

interface CustomShadowDimensions {
  _2dp: string;
  _4dp: string;
  _8dp: string;
  _16dp: string;
  _24dp: string;
  _32dp: string;
}

declare module '@mui/material/styles' {
  /**
   * extend palette with new type
   * by adding new field to
   * Palette and PaletteOptions
   */
  interface Palette {
    transparent: string;
  }
  interface PaletteOptions {
    transparent?: string;
  }

  /**
   * extend with new color type
   * by adding new field to
   * PaletteColor and SimplePaletteColorOptions
   */
  // interface PaletteColor {
  //   light2?: string;
  //   light3?: string;
  //   dark2?: string;
  // }
  // interface SimplePaletteColorOptions {
  //   light2?: string;
  //   light3?: string;
  //   dark2?: string;
  // }
  interface Theme {
    customShadows: {
      grey: CustomShadowDimensions;
      teal: CustomShadowDimensions;
      red: CustomShadowDimensions;
      orange: CustomShadowDimensions;
      green: CustomShadowDimensions;
      blue: CustomShadowDimensions;
    };
    gaps: GapDimensions;
  }
  interface ThemeOptions {
    customShadows?: {
      grey: CustomShadowDimensions;
      teal: CustomShadowDimensions;
      red: CustomShadowDimensions;
      orange: CustomShadowDimensions;
      green: CustomShadowDimensions;
      blue: CustomShadowDimensions;
    };
    gaps?: GapDimensions;
  }
  interface TypographyVariants {
    // bodyDefaultBook: React.CSSProperties;
    // bodyDefaultItalic: React.CSSProperties;
    // bodyDefaultMedium: React.CSSProperties;
    // bodySmallBook: React.CSSProperties;
    // bodySmallMedium: React.CSSProperties;
    // bodySmallBold: React.CSSProperties;
    // bodyDefaultBookLink: React.CSSProperties;
    // bodyDefaultBold: React.CSSProperties;
    // subtitleBook: React.CSSProperties;
    // subtitleMedium: React.CSSProperties;
    // captionMedium: React.CSSProperties;
    // overlineDefaultBold: React.CSSProperties;
    // overlineSmallBold: React.CSSProperties;
    // buttonSmall: React.CSSProperties;
    // buttonMedium: React.CSSProperties;
    // buttonLarge: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    // bodyDefaultBook?: React.CSSProperties;
    // bodyDefaultItalic?: React.CSSProperties;
    // bodyDefaultMedium?: React.CSSProperties;
    // bodySmallBook?: React.CSSProperties;
    // bodySmallMedium?: React.CSSProperties;
    // bodySmallBold?: React.CSSProperties;
    // bodyDefaultBookLink?: React.CSSProperties;
    // bodyDefaultBold?: React.CSSProperties;
    // subtitleBook?: React.CSSProperties;
    // subtitleMedium?: React.CSSProperties;
    // captionMedium?: React.CSSProperties;
    // overlineDefaultBold?: React.CSSProperties;
    // overlineSmallBold?: React.CSSProperties;
    // overlineSmallMedium?: React.CSSProperties;
    // buttonLarge?: React.CSSProperties;
    // buttonMedium?: React.CSSProperties;
    // buttonSmall?: React.CSSProperties;
  }
}
// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body1: true;
    body2: false;
    button: false;
    caption: false;
    overline: false;
    subtitle1: false;
    subtitle2: false;
    bodyDefaultBook: true;
    bodyDefaultItalic: true;
    bodyDefaultMedium: true;
    bodyDefaultBookLink: true;
    bodyDefaultBold: true;
    bodySmallBook: true;
    bodySmallMedium: true;
    bodySmallBold: true;
    subtitleBook: true;
    subtitleMedium: true;
    captionMedium: true;
    overlineDefaultBold: true;
    overlineSmallBold: true;
    buttonLarge: true;
    buttonMedium: true;
    buttonSmall: true;
  }
}

const createBasicTheme = (options: ThemeOptions): Theme =>
  createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'GothamProBlack';
            font-weight: 700;
            font-style: black;
            src: url(${GothamProBlack});
          }
          @font-face {
            font-family: 'GothamProBold';
            font-weight: 500;
            font-style: normal;
            src: url(${GothamProBold});
          }
          @font-face {
            font-family: 'GothamProLight';
            font-weight: 400;
            font-style: normal;
            src: url(${GothamProLight});
          }
          @font-face {
            font-family: 'GothamProMedium';
            font-weight: 500;
            font-style: normal;
            src: url(${GothamProMedium});
          }
          @font-face {
            font-family: 'GothamProRegular';
            font-weight: 500;
            font-style: normal;
            src: url(${GothamProRegular});
          }
          *:focus {
            outline: none;
          }
        `,
      },
    },
    ...options,
  });

export { createBasicTheme };
