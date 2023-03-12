import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/renderWithProviders";
import NavBar from "./NavBar";

describe("Given a navBar component", () => {
  describe("When it renders", () => {
    test("Then it should show two buttons on screen", () => {
      renderWithProviders(<NavBar />);

      const buttons = screen.getAllByRole("button");

      expect(buttons).toHaveLength(2);
    });
  });
});
