import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;

  input {
    border: 2px solid ${(props) => props.theme.colors.seccondaryGrey};
    border-radius: ${(props) => props.theme.radius.loginInputs};
    height: 55px;
    width: 100%;
    font-size: ${(props) => props.theme.fontSizes.medium};
    padding-left: 50px;
  }

  button {
    background-color: ${(props) => props.theme.colors.mainButton};
  }
`;

export default LoginFormStyled;
