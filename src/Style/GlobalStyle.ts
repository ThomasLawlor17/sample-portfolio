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
  }

`

export default GlobalStyle