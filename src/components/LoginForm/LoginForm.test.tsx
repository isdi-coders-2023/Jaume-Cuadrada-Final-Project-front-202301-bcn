import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import { act, render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import GlobalStyles from "../../styles/GlobalStyles";
import { UserCredentials } from "../../hooks/useUser/types";
import renderWithProviders from "../../utils/renderWithProviders";
import userEvent from "@testing-library/user-event";

const mockLoginUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  loginUser: mockLoginUser,
}));

describe("Given a LoginForm component", () => {
  describe("When its rendered", () => {
    test("Then it should show a button with text 'SEND' on it", () => {
      const buttonText = "SEND";

      render(
        <ThemeProvider theme={mainTheme}>
          <GlobalStyles />
          <LoginForm />
        </ThemeProvider>
      );

      const expectedButtonText = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedButtonText).toBeInTheDocument();
    });
  });
  describe("When the user submits the form", () => {
    test("The loginUser function should be called", async () => {
      const usernameInputPlaceholderText = "Username";
      const passwordInputPlaceholderText = "Password";

      const mockUser: UserCredentials = {
        username: "Jaume",
        password: "Jaume1234",
      };

      renderWithProviders(<LoginForm />);

      const usernameInputPlaceholder = screen.getByPlaceholderText(
        usernameInputPlaceholderText
      );

      const passwordInputPlaceholder = screen.getByPlaceholderText(
        passwordInputPlaceholderText
      );

      const submitButton = screen.getByRole("button");

      await act(
        async () =>
          await userEvent.type(usernameInputPlaceholder, mockUser.username)
      );

      await act(
        async () =>
          await userEvent.type(passwordInputPlaceholder, mockUser.password)
      );
      await act(async () => await userEvent.click(submitButton));

      expect(mockLoginUser).toHaveBeenCalledWith(mockUser);
    });
  });
});
