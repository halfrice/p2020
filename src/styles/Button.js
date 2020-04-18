import styled from "styled-components"

const Button = styled.button`
  color: ${props => props.theme.text.primary};
  cursor: pointer;
  background-color: transparent;
  border-radius: 3px;
  padding: 0.5rem 0.75rem;
  text-decoration: none;
  &:hover,
  &:active {
    opacity: 0.5;
  }
`

export default Button
