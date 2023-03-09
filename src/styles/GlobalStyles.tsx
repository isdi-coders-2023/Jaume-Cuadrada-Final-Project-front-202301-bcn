import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, ::after, ::before {
  box-sizing: border-box;
}
body {
  padding: 12px;
  background-color: ${(props) => props.theme.colors.background};
  font-family: ${(props) => props.theme.mainFont};
  color: ${(props) => props.theme.colors.mainText};
  min-height: 100vh;
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
color: ${(props) => props.theme.colors.seccondaryText}
}

::placeholder {
  color: ${(props) => props.theme.colors.mainText};
  font-weight: 50;
}

`;

export default GlobalStyles;
