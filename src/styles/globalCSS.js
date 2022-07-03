import { createGlobalStyle } from "styled-components";
import Raleway from "./fonts/Raleway-Bold.ttf";
import Roboto from "./fonts/Roboto-Regular.ttf";

const GlobalStyles = createGlobalStyle`
  @font-face{
    font-family: 'Raleway';
    font-weight: bold;
    src: url(${Raleway}) format('truetype');
  }

  @font-face{
    font-family: 'Roboto';
    font-weight: 400;
    src: url(${Roboto}) format('truetype');
  }

  *{
    padding: 0;
    margin: 0;
  }
`;

export const colors = {
  primary: "#F7F7E8",
  secondary: "#C7CFB7",
  accent1: "#9DAD7F",
  accent2: "#557174",
  neutral1: "#fff",
  neutral2: "#000",
};

export default GlobalStyles;
