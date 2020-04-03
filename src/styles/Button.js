import styled from "styled-components"
import theme from "./theme.yaml"

const { color } = theme

const Button = styled.button`
  color: ${color.lightSlate};
  cursor: pointer;
  background-color: transparent;
  border-radius: 3px;
  /* height: 100%; */
  padding: 0.5rem 0.75rem;
  text-decoration: none;
  transition: none;

  &:hover,
  &:focus,
  &:active {
    background-color: ${color.darkSlate + "21"};
  }
`

export default Button
