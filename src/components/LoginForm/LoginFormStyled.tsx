import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  input {
    border-radius: ${(props) => props.theme.radius.loginInputs};
    border: 2px solid ${(props) => props.theme.colors.seccondaryGrey};
    height: 55px;
    min-width: 300px;
    font-size: ${(props) => props.theme.fontSizes.medium};
    padding-left: 50px;
    color: white;
  }

  button {
    margin-top: 30px;
  }
`;

export default LoginFormStyled;
