import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, ::after, ::before {
  box-sizing: border-box;
}

body {
  padding: 12px;
  background-color: #2e2e2e;
  font-family: "Montserrat";
  color: white;
  min-height: 100vh;
}

.container{
  margin: 20px;
  margin-bottom: 100px;
}

h1,h2{
  padding: 0;
  margin: 0;
}

ol, ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

button{
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: inherit;
}

input{
  background-color: transparent;
}

a, :visited, :active{
  text-decoration: none;
  color: #FF0000;
}

::placeholder {
  color: #6d6d6d;
  font-weight: 50;
}

`;

export default GlobalStyles;
