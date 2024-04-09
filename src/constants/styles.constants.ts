export const BREAKPOINTS = {
  mobileMax: 600,
  tabletMax: 950,
  laptopMax: 1300,
};

export const QUERIES = {
  mobileAndLess: `@media(max-width: ${BREAKPOINTS.mobileMax / 16}rem)`,
  tabletAndLess: `@media(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  laptopAndLess: `@media(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
};

export const COLORS = {
  white: '0deg 0% 100%',
  offwhite: '240deg 85% 97%',
  black: '0deg 0% 0%',
  gray: {
    100: '185deg 5% 95%',
    300: '190deg 5% 80%',
    500: '196deg 4% 60%',
    700: '220deg 5% 40%',
    900: '220deg 3% 20%',
  },
  secondary: '340deg 65% 47%',
  primary: '240deg 60% 63%',
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};
