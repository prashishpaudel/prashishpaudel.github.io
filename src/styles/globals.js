import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&family=Unbounded:wght@300;400;500;600;700;800&display=swap');

  ${normalize};

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${props => props.theme.fonts.body};
    font-size: 1.5rem;
    line-height: 1.55;
    background: ${props => props.theme.colors.bg};
    color: ${props => props.theme.colors.ink};
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.display};
    font-weight: 400;
    letter-spacing: -0.01em;
  }

  button {
    font-family: ${props => props.theme.fonts.body};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    list-style: none;
  }

  ::selection {
    background: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.bg};
  }
`;

export default GlobalStyles;
