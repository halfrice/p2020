import styled from "styled-components"

const Button = styled.button`
  border: 1px solid transparent;
  border-radius: 3px;
  color: ${props => props.theme.text.primary};
  cursor: pointer;
  background-color: transparent;
  padding: 0.5rem 0.75rem;
  text-decoration: none;
  &:hover,
  &:focus,
  &:active {
    border: 1px solid ${props => props.theme.nav.text.primary};
    background-color: ${props => props.theme.background.primary};
    /* opacity: 0.5; */
  }
  &:after {
    display: none !important;
  }
`

export default Button
