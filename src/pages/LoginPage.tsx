import LoginForm from "../components/LoginForm/LoginForm";
import NavBar from "../components/NavBar/NavBar";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = () => {
  return (
    <LoginPageStyled>
      <img src="media/photos/WCcolor.png" alt="waxcrate logo" />
      <h1>LOGIN</h1>
      <LoginForm />
      <NavBar />
      <div className="image-container"></div>
    </LoginPageStyled>
  );
};

export default LoginPage;
