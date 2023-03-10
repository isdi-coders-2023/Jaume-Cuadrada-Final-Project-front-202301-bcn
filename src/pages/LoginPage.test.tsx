import { screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";
import renderWithProviders from "../utils/renderWithProviders";
import LoginPage from "./LoginPage";

describe("Given a login page", () => {
  describe("When rendered", () => {
    test("Then it should show a heading with text 'Login'", () => {
      const headingText = "LOGIN";

      renderWithProviders(
        <ThemeProvider theme={mainTheme}>
          <LoginPage />
        </ThemeProvider>
      );

      const expectHeading = screen.getByRole("heading", { name: headingText });

      expect(expectHeading).toBeInTheDocument();
    });
  });
});
