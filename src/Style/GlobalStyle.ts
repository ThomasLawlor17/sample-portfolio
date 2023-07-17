import { createGlobalStyle } from "styled-components";
import variables from "./variables";
import { fonts } from "./fonts";


const GlobalStyle = createGlobalStyle`
${variables};
${fonts};

html {
    box-sizing: border-box;
    width: 100vw;
    overflow-x: hidden;
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
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
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
  @media (max-width: 769px) {
    h1 {
      font-size: 72px;
      line-height: 72px;
      letter-spacing: -2.045px;
    }
  }
  @media (max-width: 414px) {
    h1 {
      font-size: 40px;
      line-height: 40px;
      letter-spacing: -1.136px;
    }
    h2 {
      font-size: 32px;
      line-height: 40px;
      letter-spacing: -1px;
    }
    p {
      font-size: 16px;
      line-height: 26px;
    }
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

  @keyframes scale {
    from {scale: 0};
    to {scale: 1};
  }
  @keyframes slide-appear-lr {
    from {
      transform: translateX(-40px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slide-appear-rl {
    from {
      transform: translateX(40px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slide-appear-du {
    from {
      transform: translateY(40px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slide-appear-ud {
    from {
      transform: translateY(-40px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

`

export default GlobalStyle