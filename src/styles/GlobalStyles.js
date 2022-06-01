import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.typography.fontFamily};
    color: ${(props) => props.theme.colors.black};
    margin: 0;
  }
`;

export default GlobalStyles;