import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, ::after, ::before {
  box-sizing: border-box;
}
body {
  padding: 20px;
  background-color: #2e2e2e;
  font-family: var(--main-font);
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
:root {
  --main-color-button: #FF0000;
  --main-color-text: #FFFF;
  --secondary-color-text: #FF0000;
  --third-color-text: #6D6D6D;
  --main-font: "Montserrat", sans-serif;
 
}
a, :visited, :active{
text-decoration: none;
color: var(--third-color-text)
}
`;

export default GlobalStyles;
