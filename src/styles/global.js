import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;

    @media (max-width: 1410px) {
      font-size: 54%;
    }
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #FFF;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #222;
    font-size: 1.6rem;

    /* @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap'); */
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
