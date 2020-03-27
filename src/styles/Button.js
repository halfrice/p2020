import styled from "styled-components"
import theme from "./theme.yaml"

const { color } = theme

const Button = styled.button`
  color: ${color.lightSlate};
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-radius: 3px;
  height: 100%;
  text-decoration: none;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  transition: ${theme.shortTransition};

  &:hover,
  &:focus,
  &:active {
    background-color: ${color.darkSlate + "21"};
    outline: none;
  }
  &:after {
    display: none !important;
  }
`

export default Button
