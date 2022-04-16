import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body {
    width: 100%;
    height: 100%;
  }

  body: {
    font-size: 14px
  }

  html, body, h1, h2, h3, h4, h5, h6, a, li, div, p, span {
    font-family: NanumSquareRound;
    font-weight: 400;
    font-size: 14px;
    color: black;
    line-height: 1;
  }
`;

export default GlobalStyle;
