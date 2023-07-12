import * as React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import normalize from 'react-native-normalize';

import { metrics } from '~/styles/metrics';
import { IStringMap, StringToNumberMap } from '~/utils';

const { defaultSpace } = metrics;

export const space = [
  ...Array.from({ length: 24 }, (_, k) => defaultSpace(k + 1)),
];

export const fontSizes: IStringMap = {
  tiny: '10px',
  xsmall: '11px',
  small: '12px',
  default: '13px',
  big: '18px',
  large: '20px',
  xlarge: '24px',
  h1: '13px',
  h2: '15px',
  h3: '12px',
  h4: '14px',
  h5: '14px',
  h6: '12px',
  h7: '19px',
  h8: '13px',
  tabBar: '12px',
  body: '13px',
  title: '21px',
  XXG: '60px',
  desk: '16px',
  link: '12px',
};

export const fontSizesNumber: StringToNumberMap = {
  tiny: normalize(10),
  xsmall: normalize(11),
  small: normalize(12),
  default: normalize(13),
  big: normalize(18),
  large: normalize(20),
  xlarge: normalize(24),
  h1: normalize(13),
  h2: normalize(15),
  h3: normalize(12),
  h4: normalize(14),
  h5: normalize(14),
  h6: normalize(12),
  h7: normalize(19),
  h8: normalize(13),
  tabBar: normalize(12),
  body: normalize(13),
  title: normalize(21),
  XXG: normalize(60),
  por: normalize(10),
  desk: normalize(16),
};

export const colors: IStringMap = {
  white: '#FFFFFF',
  transparent: 'transparent',
  ORANGE: '#f37321',
  TEXT: '#221E1E',
  SUBLABEL: '#777777',
  primary: '#A00F2D',
  secondary: '#E55531',
  support: '#6E2828',
  text: '#221E1E',
  background: '#F1F1F1',
  active: '#E6AF32',
  inactive: '#C6C6C6',
  moldals: '#FEFEFE',
  modals: '#FEFEFE',
  alerts: '#F30A42',
  success: '#0f853E',
  splash: '#c6c6c6',
  facebook: '#1778F2',
  mastercard: '#FC8F2E',
};

export const fonts: IStringMap = {
  regular: 'Regular',
  italic: 'Italic',
  light: 'Light',
  black: 'Black',
  bold: 'Bold',
  medium: 'Medium',
  thin: 'Thin',
  blackItalic: 'Black-Italic',
  boldItalic: 'Bold-Italic',
  lightItalic: 'Light-Italic',
  mediumItalic: 'Medium-Italic',
  thinItalic: 'Thin-Italic',
};

export const radii: StringToNumberMap = {
  light: defaultSpace() / 2,
  medium: defaultSpace(),
  icon: 10,
  creditCard: 10,
  slider: 25,
  imageList: 15,
  button: 15,
  fullImageList: 20,
  card: 20,
  fullImageCategoryList: 12,
  circle: 100,
  tiny: 10,
  progressBar: 2.5,
};

export const shadows: IStringMap = {
  cell: '0px 0px 8px rgba(0,0,0,0.12)',
  list: '0px 6px 10px rgba(34,30,30,0.15)',
  card: '0px 6px 10px rgba(34,30,30,0.15)',
  button: '0px 6px 10px rgba(34,30,30,0.15)',
  paymentWrapped: '0px 0px 14px rgba(0, 0, 0, 0.02)',
  bottomSpotlight: '0px -4px 15px rgba(0,0,0,0.15)',
};

export const breakpoints: number[] = [768, 834, 1024];

export const theme = {
  space,
  radii,
  colors,
  fonts,
  shadows,
  fontSizes,
};

export const ThemeProvider: React.FC = ({ children }) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);
