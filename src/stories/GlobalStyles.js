// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --background: ${(props) => props.theme.background};
    --text-color: ${(props) => props.theme.text};
    --primary-color: ${(props) => props.theme.primary};
    --secondary-color: ${(props) => props.theme.secondary};
    --font-family: ${(props) => props.theme.fontFamily};
  }

  body {
    background-color: var(--background);
    color: var(--text-color);
    font-family: var(--font-family);
    transition: background-color 0.3s, color 0.3s;
  }
`;

export default GlobalStyles;
