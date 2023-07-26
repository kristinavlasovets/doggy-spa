import { Colors } from '@/constants';

import { CommonTheme } from './types';

export const commonTheme: CommonTheme = {
  dimensions: {
    mobile: 495,
    tablet: 768,
    laptop: 1024,
    bigScreen: 1920,
  },
  colors: {
    WHITE: Colors.WHITE,
    BLACK: Colors.BLACK,
    CHARCOAL: Colors.CHARCOAL,
    BRONZED: Colors.BRONZED,
    ROSEY: Colors.ROSEY,
    BEIGE: Colors.BEIGE,
    PINK: Colors.PINK,
    LIGHT_PINK: Colors.LIGHT_PINK,
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
    xs: 20,
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
};
