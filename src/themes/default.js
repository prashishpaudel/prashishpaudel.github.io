const fonts = {
  display: "'Unbounded', 'Space Grotesk', -apple-system, sans-serif",
  body: "'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif",
  mono: "'Space Mono', Menlo, Consolas, monospace",
  title: "'Unbounded', sans-serif",
  main: "'Space Grotesk', sans-serif",
};

const breakpoints = {
  sm: 'screen and (max-width: 640px)',
  md: 'screen and (max-width: 768px)',
  lg: 'screen and (max-width: 1024px)',
  xl: 'screen and (max-width: 1280px)',
};

export const light = {
  mode: 'light',
  fonts,
  breakpoints,
  colors: {
    bg: '#FAF8F3',
    ink: '#1A1A1A',
    muted: '#6B6B6B',
    soft: '#9A9A9A',
    rule: '#D8D4C8',
    paper: '#F0ECE1',
    accent: '#C1440E',
    primary1: '#1A1A1A',
    background1: '#FAF8F3',
    accent1: '#C1440E',
    button: '#C1440E',
    background2: '#F0ECE1',
  },
};

export const dark = {
  mode: 'dark',
  fonts,
  breakpoints,
  colors: {
    bg: '#0E0E0E',
    ink: '#F2EFE6',
    muted: '#9F9D94',
    soft: '#5E5C55',
    rule: '#262523',
    paper: '#1A1A1A',
    accent: '#E87441',
    primary1: '#F2EFE6',
    background1: '#0E0E0E',
    accent1: '#E87441',
    button: '#E87441',
    background2: '#1A1A1A',
  },
};

export default light;
