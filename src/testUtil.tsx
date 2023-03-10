import { PreloadedState } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { RootState, setupStore, store } from "./store/store";
import { ThemeProvider } from "styled-components";
import mainTheme from "./styles/mainTheme";

const renderWithProviders = (
  ui: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const testStore = preloadedState ? setupStore(preloadedState) : store;

  const Wrapper = ({ children }: PropsWithChildren): JSX.Element => {
    return (
      <Provider store={testStore}>
        <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
      </Provider>
    );
  };

  return render(ui, { wrapper: Wrapper });
};

export default renderWithProviders;
