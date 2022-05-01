import { createGlobalStyle } from 'styled-components';
import { COLORS } from '@/constants';

export default createGlobalStyle`
  *, *::before, *::after {
  box-sizing: border-box;
  }

  * {
  margin: 0;
  }

  html {
  --color-text: ${COLORS.text};
  --color-background: ${COLORS.background};
  --color-primary: ${COLORS.primary};
  font-size: 16px;
  }

  html, body {
  height: 100%;
  }

  body {
  line-height: 1.666;
  -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
  }

  input, button, textarea, select {
  font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
  }
  
  #root, #__next {
  isolation: isolate;
  }
`;
