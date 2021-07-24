import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Gotham-Book';
      src: local('Gotham-Book'),
          url('../assets/fonts/Gotham-Book.woff') format('woff'),
          url('../assets/fonts/Gotham-Book.woff2') format('woff2');
  }

  @font-face {
      font-family: 'Gotham-Bold';
      src: local('Gotham-Bold'),
          url('../assets/fonts/Gotham-Bold.woff') format('woff'),
          url('../assets/fonts/Gotham-Bold.woff2') format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background: #FAFBFF;
    color: #3E4157;
  }

  #root {
    display: flex;
  }

  body, input , button {
    font-family: 'Gotham-Book',sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;

export { GlobalStyle };
