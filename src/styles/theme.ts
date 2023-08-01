import { Colors } from '@/constants';

import { CommonTheme } from './types';

export const commonTheme: CommonTheme = {
  dimensions: {
    mobile: 495,
  },
  colors: {
    WHITE: Colors.WHITE,
    BLACK: Colors.BLACK,
    CHARCOAL: Colors.CHARCOAL,
    GRAY: Colors.GRAY,
    BRONZED: Colors.BRONZED,
    ROSEY: Colors.ROSEY,
    BEIGE: Colors.BEIGE,
    PINK: Colors.PINK,
    LIGHT_PINK: Colors.LIGHT_PINK,
    TRANSLUSENT: Colors.TRANSLUSENT,
  },
  fontWeights: {
    xxs: 200,
    xs: 300,
    s: 400,
    m: 500,
    l: 600,
    xl: 700,
  },
  fontSizes: {
    xxs: 14,
    xs: 16,
    ss: 22,
    s: 26,
    m: 30,
    mm: 32,
    mmm: 40,
    l: 63,
    ll: 66,
    xl: 70,
  },
  fontFamilies: {
    cormorant: "'Cormorant', sans-serif",
    cinzelDecorative: "'Cinzel Decorative', sans-serif",
    tangerine: "'Tangerine', sans-serif",
  },
  width: {
    xxs: 24,
    xs: 72,
    s: 100,
    ss: 128,
    ssss: 180,
    ssm: 200,
    ssmm: 250,
    sm: 332,
    smm: 366,
    smmm: 400,
    sss: 478,
    m: 498,
    mm: 751,
  },
  height: {
    xxs: 12,
    xss: 24,
    xs: 52,
    ss: 58,
    sm: 80,
    s: 110,
    m: 330,
    l: 420,
    xl: 484,
  },
  margins: {
    xxxs: 0,
    xxs: 15,
    xs: 25,
    s: 50,
  },
  paddings: {
    xxxs: 0,
    xxs: 8,
    xs: 25,
  },
  borders: {
    xxs: 1,
    xs: 4,
    s: 6,
  },
  borderRadiuses: {
    s: 8,
    m: 30,
  },
  opacities: {
    s: 0.2,
    m: 0.5,
    l: 1,
  },
  zIndexes: {
    s: 1000,
    m: 2000,
  },
  top: {
    s: 100,
  },
};
