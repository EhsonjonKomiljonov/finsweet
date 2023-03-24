import { createGlobalStyle } from 'styled-components';
import PoppinsWoff2Medium from './assets/fonts/poppins-v20-latin-500.woff2';
import PoppinsWoffMedium from './assets/fonts/poppins-v20-latin-500.woff';
import PoppinsWoff2Semibold from './assets/fonts/poppins-v20-latin-600.woff';
import PoppinsWoffSemibold from './assets/fonts/poppins-v20-latin-600.woff';

export const GlobalStyles = createGlobalStyle`

  ::selection {
    background-color: #0010FF1A;
    color: #0011ff;
  }

  @font-face {
    font-display: swap;   
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    src: url(${PoppinsWoff2Medium}) format('woff2'),  
        url(${PoppinsWoffMedium}) format('woff');
  }

  @font-face {
    font-display: swap;  
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    src: url(${PoppinsWoff2Semibold}) format('woff2'), 
        url(${PoppinsWoffSemibold}) format('woff');  
  }

  html::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #5c64d566;
  }

  html::-webkit-scrollbar
  {
    width: 10px;
    background-color: transparent;
  }
  
  html::-webkit-scrollbar-thumb
  {
    background-color: #232ed166;
    border-radius: 5px;
  }

  html {
    height: 100%;
    scroll-behavior: smooth;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  body {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0;
    font-family: "Poppins", serif;
  }
  
  main {
    flex-grow: 1;
  }
  
  img {
    vertical-align: middle;
    object-fit: cover;
  }
  
  ul,
  ol {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  a {
    text-decoration: none;
  }

  p {
    margin: 0;
  }

  .visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;
