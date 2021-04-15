import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f7f3f7;
    --white: #fff;

    --gray-100: #f3f5f7;
    --gray-600: #515252;

    --purple-900: #642f87;
    --pink-500: #b13d7c;

    --gradient: linear-gradient(90deg, rgba(177,61,124,1) 50%, rgba(100,47,135,1) 100%);
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 93.75%; // 14px
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    -webit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`;
