import LoginForm from "../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = () => {
  return (
    <LoginPageStyled>
      <img src="media/photos/WCcolor.png" alt="waxcrate logo" />
      <h1>LOGIN</h1>
      <LoginForm />
      <div className="image-container"></div>
    </LoginPageStyled>
  );
};

export default LoginPage;
