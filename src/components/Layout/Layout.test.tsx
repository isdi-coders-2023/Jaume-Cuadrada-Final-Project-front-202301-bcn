import { screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import renderWithProviders from "../../utils/renderWithProviders";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When rendered", () => {
    test("Then it should show a navigation bar", () => {
      renderWithProviders(
        <ThemeProvider theme={mainTheme}>
          <Layout />
        </ThemeProvider>
      );

      const navigationBar = screen.getByRole("navigation");

      expect(navigationBar).toBeInTheDocument();
    });
  });
});
