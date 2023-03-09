import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mainFont: string;
    colors: {
      background: string;
      mainButton: string;
      mainText: string;
      seccondaryText: string;
      seccondaryGrey: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
    radius: {
      loginInputs: string;
      feedbackComponent: string;
      filterComponent: string;
    };
  }
}
