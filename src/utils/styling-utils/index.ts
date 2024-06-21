/**
 * Default browser root font size
 */
const ROOT_FONT_SIZE = 16;

/**
 * Design screen dimensions
 */
export const DESIGN_DEVICE_DIMENSIONS_DESKTOP = {
  WIDTH: 1920,
  HEIGHT: 1080,
};

export const DESIGN_DEVICE_DIMENSIONS_MOBILE = {
  WIDTH: 375,
  HEIGHT: 812,
};

/**
 * Utils to convert pixels to rems
 *
 * Recommended using with: width, height of elements (e.g. buttons), fontSize, lineHeight, paddings, margins, text properties
 */
export const pxToRem = (px: number): string => `${+(px / ROOT_FONT_SIZE).toFixed(4)}rem`;

/**
 * Utils to convert design pixels to vw or vh
 *
 * Recommended using with: margin, padding, width of root container, basic containers sizes, spacer sizes
 */
export const pxToVw = (px: number): string => `${+((px * 100) / DESIGN_DEVICE_DIMENSIONS_DESKTOP.WIDTH).toFixed(4)}vw`;

export const pxToVh = (px: number): string => `${+((px * 100) / DESIGN_DEVICE_DIMENSIONS_DESKTOP.HEIGHT).toFixed(4)}vh`;
