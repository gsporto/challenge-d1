import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      regular: string;
      bold: string;
    };
    colors: {
      primary: string;
      secondary: string;
      background: string;
      textBody: string;
      textLight: string;
    };
  }
}
