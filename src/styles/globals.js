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
    background-color: ${color.darkest};
    font-family: sans-serif;
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
    color: inherit;
    cursor: pointer;
    display: inline-block;
    position: relative;
    text-decoration: none;
  }

  p {
    margin: 0;
    padding: 0;
  }

  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  button {
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
  }

  svg {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }

  .fadeup-enter {
    opacity: 0.01;
    transform: translateY(50px);
    transition: opacity 500ms ${theme.easing}, transform 500ms ${theme.easing};
  }
  .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 500ms ${theme.easing}, transform 500ms ${theme.easing};
  }
  .fadedown-enter {
    opacity: 0.01;
    transform: translateY(-25px);
    transition: opacity 500ms ${theme.easing}, transform 500ms ${theme.easing};
  }
  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 500ms ${theme.easing}, transform 500ms ${theme.easing};
  }
  .fadeleft-enter {
    opacity: 0.01;
    transform: translateX(-50px);
    transition: opacity 500ms ${theme.easing}, transform 500ms ${theme.easing};
  }
  .fadeleft-enter-active {
    opacity: 1;
    transform: translateX(0px);
    transition: opacity 500ms ${theme.easing}, transform 500ms ${theme.easing};
  }
  .faderight-enter {
    opacity: 0.01;
    transform: translateX(50px);
    transition: opacity 500ms ${theme.easing}, transform 500ms ${theme.easing};
  }
  .faderight-enter-active {
    opacity: 1;
    transform: translateX(0px);
    transition: opacity 500ms ${theme.easing}, transform 500ms ${theme.easing};
  }
  .fade-enter {
    opacity: 0;
    transition: opacity 1000ms ${theme.easing};
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 1000ms ${theme.easing};
  }
`

export default Globals
