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
    
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

  * {
    font-family: 'Gilroy', Arial, sans-serif;
    box-sizing: border-box;
  }

  h1 {
    font-weight: bold;
    font-size: 48px;
    margin: 0;
  }

  h3 {
    font-weight: bold;
    font-size: 26px;
    margin: 0;
  }

  h4 {
    font-weight: bold;
    font-size: 18px;
    margin: 0;
  }

  p {
    font-size: 16px;
    margin: 8px 0;
    color: grey;
}
`