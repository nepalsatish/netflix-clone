import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
html,body{
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antiliased;
    -moz-osx-font-smoothing: grayscale;
    background-color:#000;
    color:#333;
    font-size: 16px
}

`;
