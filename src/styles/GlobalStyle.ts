import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&family=Roboto:wght@300;400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body, #root {
    height: 100%;
  }
  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'IBM Plex Sans', sans-serif;
  }
  
  :root {
    --purple: #B1B0CE;
    --purple-2: #6E6CB0;
    --purple-3: #3734B6;
    --purple-4: #1D1B86;

    --gray: #A7A7A7;
    --gray-2: #848484;
    --gray-3: #5B5454;
    --black: #000000;

    --white: #FFFFFF;
    --white-2: #F1EEEE;
    --white-3:#F8F8F8;
    
  }

  .regular-weight {
    font-weight: 400;
  }

  .medium-weight {
    font-weight: 500;
  }

  .bold {
    font-weight: 700;
  }

  .xs-font {
    font-size: 8px;
  }

  .s-font {
    font-size: 12px;
  }

  .m-font {
    font-size: 16px;
  }

  .l-font {
    font-size: 18px;
  }

  h1, h2 {
    font-weight: 700;
  }

  h4 {
    font-weight: 400;
  }

  h3, h5 {
    font-weight: 500;
  }


`;