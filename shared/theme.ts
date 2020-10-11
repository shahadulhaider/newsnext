import { createGlobalStyle, ThemeProps } from 'styled-components';

export const theme = {
  fonts: {
    basic: 'Helvetica, sans-serif',
    accent: `"Permanent Marker", cursive`,
  },
  colors: {
    orange: '#ffa500',
    blue: '#4169e1',
    pink: '#ff1493',
  },
};

export type MainThemeProps = ThemeProps<typeof theme>;

export const GlobalStyle = createGlobalStyle<MainThemeProps>`
  body {
    margin: 0;
    font-family: ${(props) => props.theme.fonts.basic};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  a {
    color: ${(props) => props.theme.colors.blue}
  }

  a:hover {
    color: ${(props) => props.theme.colors.pink}
  }

  .main {
    padding: 70px 0 20px;
    min-height: calc(100vh - 50px);
  }
`;
