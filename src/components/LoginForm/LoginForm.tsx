import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  return (
    <LoginFormStyled className="login-form">
      <h1>LOGIN</h1>
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

      <button>SEND</button>
    </LoginFormStyled>
  );
};
export default LoginForm;
