import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When its rendered", () => {
    test("Then it should show a button with text 'SEND' on it", () => {
      const buttonText = "SEND";

      render(
        <ThemeProvider theme={mainTheme}>
          <Button text="SEND" />
        </ThemeProvider>
      );

      const expectedButtonText = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedButtonText).toBeInTheDocument();
    });
  });
});
