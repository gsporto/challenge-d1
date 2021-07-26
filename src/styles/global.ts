import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Gotham-Book';
      src: local('Gotham-Book'),
        url('fonts/Gotham-Book.woff') format('woff'),
        url('fonts/Gotham-Book.woff2') format('woff2'),
        url('fonts/Gotham-Book.ttf') format('ttf'),
        url('fonts/Gotham-Book.svg') format('svg'),
        url('fonts/Gotham-Book.eok') format('eok');
  }

  @font-face {
      font-family: 'Gotham-Bold';
      src: local('Gotham-Bold'),
        url('fonts/Gotham-Bold.woff') format('woff'),
        url('fonts/Gotham-Bold.woff2') format('woff2'),
        url('fonts/Gotham-Bold.ttf') format('ttf'),
        url('fonts/Gotham-Bold.svg') format('svg'),
        url('fonts/Gotham-Bold.eok') format('eok');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.textBody};
  }

  #root {
    display: flex;
  }

  body, input , button {
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: ${({ theme }) => theme.fonts.bold};
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;

export { GlobalStyle };
