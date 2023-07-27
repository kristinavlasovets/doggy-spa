export interface CommonTheme {
  dimensions: {
    mobile: number;
    tablet: number;
    laptop: number;
    bigScreen: number;
  };
  colors: {
    WHITE: string;
    BLACK: string;
    CHARCOAL: string;
    BRONZED: string;
    ROSEY: string;
    BEIGE: string;
    PINK: string;
    LIGHT_PINK: string;
  };
  fontWeights: {
    xxs: number;
    xs: number;
    s: number;
    m: number;
    l: number;
    xl: number;
  };
  fontSizes: {
    xxs: number;
    xs: number;
    ss: number;
    s: number;
    m: number;
    mm: number;
    mmm: number;
    l: number;
    ll: number;
    xl: number;
  };
  fontFamilies: {
    cormorant: string;
    cinzelDecorative: string;
    tangerine: string;
  };
  width: {
    xs: number;
    s: number;
  };
  height: {
    xxs: number;
    xs: number;
    s: number;
    l: number;
    xl: number;
  };
  margins: {
    xxxs: number;
    xs: number;
    s: number;
  };
  paddings: {
    xxxs: 0;
    xs: 25;
  };
}
