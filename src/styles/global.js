import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
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
    font-size: 14px;

    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
