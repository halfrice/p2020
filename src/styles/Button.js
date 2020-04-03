import styled from "styled-components"
import theme from "./theme.yaml"

const { color } = theme

const Button = styled.button`
  color: ${color.lightSlate};
  cursor: pointer;
  background-color: transparent;
  border-radius: 3px;
  padding: 0.5rem 0.75rem;
  text-decoration: none;
  transition: none;

  &:hover,
  &:focus {
    color: ${color.darkSlate};
  }
`

export default Button
