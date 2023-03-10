import { screen } from "@testing-library/react";
import Button from "./Button";
import renderWithProviders from "../../testUtil";

describe("Given a Button component", () => {
  describe("When its rendered", () => {
    test("Then it should show a button with text 'SEND' on it", () => {
      const buttonText = "SEND";

      renderWithProviders(<Button text="SEND" />);

      const expectedButtonText = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedButtonText).toBeInTheDocument();
    });
  });
});
