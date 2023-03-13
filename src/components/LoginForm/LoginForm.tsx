import { useState } from "react";
import useUser from "../../hooks/useUser/useUser";
import Button from "../Button/Button";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(value);
  };

  const handlePassword = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(value);
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await loginUser({ username, password });
  };

  return (
    <LoginFormStyled className="login-form" onSubmit={onSubmitHandler}>
      <input
        type="text"
        id="username"
        placeholder="Username"
        className="login-form__field"
        autoComplete="off"
        onChange={handleUsername}
      />
      <input
        type="text"
        id="password"
        placeholder="Password"
        className="login-form__field"
        aria-label="password-textbox"
        autoComplete="off"
        onChange={handlePassword}
      />

      <Button text="SEND" />
    </LoginFormStyled>
  );
};
export default LoginForm;
