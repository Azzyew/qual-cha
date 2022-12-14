import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const fonts = {
  heading: `'Spline Sans Mono', sans-serif`,
  body: `'Spline Sans', sans-serif`,
};

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
});

const theme = extendTheme({
  colors: {
    lightGray: '#EBEBEB',
    lightGreen: '#92BD88',
    darkGreen: '#486541',
  },
  fonts,
  breakpoints,
});

export default theme;
