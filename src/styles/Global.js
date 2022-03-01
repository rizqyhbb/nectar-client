import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Gilroy';
    src: url('Gilroy-Regular.woff2') format('woff2'),
        url('Gilroy-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

  * {
    font-family: 'Gilroy', Arial, sans-serif;
  }

  h1 {
    font-weight: bold;
    font-size: 48px;
    margin: 0;
  }

  h4 {
    font-weight: bold;
    font-size: 18px;
    margin: 0;
  }

  p {
    font-size: 16px;
}
`