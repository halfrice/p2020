import { createGlobalStyle } from "styled-components"

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
    font-weight: 400;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: deeppink;
    font-weight: 600;
  }
`
export default Globals
