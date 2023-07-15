import { createGlobalStyle } from "styled-components";
import variables from "./variables";


const GlobalStyle = createGlobalStyle`
${variables};

html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: var(--black);
    background: var(--black);
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  :focus:not(:focus-visible) {
    outline: none;
    outline-offset: 0px;
  }
  :focus-visible {
    outline: none;
  }
  ::-webkit-scrollbar {
    width: 12px;
    display: none;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--dark-gray);
    border-radius: 10px;
  }
  body {
    font-family: 'Space Grotesk';
    color: var(--white); 
    margin: 0;
  }


  h1 {
    font-size: 88px;
    font-weight: 700;
    line-height: 88px; /* 100% */
    letter-spacing: -2.5px;
  }
  h2 {
    font-size: 48px;
    font-weight: 700;
    line-height: 56px; /* 116.667% */
    letter-spacing: -1.5px;
  }
  h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
  }
  p {
    font-size: 18px;
    font-weight: 500;
    line-height: 28px; /* 155.556% */
  }


  button {
    border: none;
    background-color: transparent;
    padding: 0;
    cursor: pointer;
  }
  input, textarea {
    border: none;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
`

export default GlobalStyle