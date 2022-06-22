import { createGlobalStyle } from 'styled-components';

export const GlobalCss = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    border: 0 none;
    outline: 0;
  }

  html { 
    font-size: 62.5%;
  }

  body { 
    font-family: 'Bebas Neue', cursive;
    font-family: 'Permanent Marker', cursive;
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;