import { createGlobalStyle } from "styled-components"
import theme from "./theme.yaml"

const { color } = theme

const Globals = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    background-color: ${color.dark};
    font-weight: 400;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${color.darkPink};
    font-weight: 600;
  }

  a {
    color: ${color.blue};
    cursor: pointer;
    display: inline-block;
    position: relative;
    text-decoration: none;
    transition: ${theme.transition};
    &:hover {
      color: ${color.darkSlate};
      outline: 0;
    }
  }
`
export default Globals
