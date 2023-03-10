import Button from "../Button/Button";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  return (
    <LoginFormStyled className="login-form">
      <input
        type="text"
        id="username"
        placeholder="Username"
        className="login-form__field"
      />
      <input
        type="text"
        id="password"
        placeholder="Password"
        className="login-form__field"
      />

      <Button text="SEND"></Button>
    </LoginFormStyled>
  );
};
export default LoginForm;
