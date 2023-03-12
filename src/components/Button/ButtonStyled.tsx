import styled from "styled-components";

const ButtonStyled = styled.button`
  height: 55px;
  width: 266px;
  background-color: ${(props) => props.theme.colors.mainButton};
  border-radius: 50px;
  color: ${(props) => props.theme.colors.mainText};
  font-weight: bolder;
  font-size: 22px;
`;

export default ButtonStyled;
