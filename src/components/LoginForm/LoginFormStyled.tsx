import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 58px;

  input {
    border-radius: ${(props) => props.theme.radius.loginInputs};
    border: 2px solid ${(props) => props.theme.colors.seccondaryGrey};
    height: 55px;
    width: 404px;
    font-size: ${(props) => props.theme.fontSizes.medium};
    padding-left: 50px;
    color: white;
  }

  button {
    margin-top: 50px;
  }
`;

export default LoginFormStyled;
