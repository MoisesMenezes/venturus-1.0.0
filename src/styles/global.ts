import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f7f3f7;
    --white: #fff;

    --gray-100: #f3f5f7;
    --gray-300: #eeeeee;
    --gray-400: #CDCDCD;
    --gray-600: #515252;
    

    --purple-900: #642f87;

    --pink-100: #f7eef7;
    --pink-500: #b13d7c;
    --pink-300: #d97897;
    --pink-800: #f1295b;

    --red-500: #D54749;

    --gradient-horizontal: linear-gradient(180deg, #bf34b1 0%, #532d8c 100%);
    --gradient: linear-gradient(90deg, rgb(242, 41, 91) 0%, rgb(83, 45, 140) 100%);
    --gradiente-button: linear-gradient(rgb(191, 52, 177) 0%, rgb(83, 45, 140) 100%);
    
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
