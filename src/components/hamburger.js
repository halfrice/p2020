import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { theme } from "~styles"

const { hamburger } = theme

const HamburgerContainer = styled.div`
  width: ${hamburger.width};
  height: ${hamburger.width};
  background-color: transparent;
`
const HamburgerBars = styled.div`
  position: absolute;
  top: 50%;
  width: ${hamburger.width};
  height: 2px;
  border-radius: 3px;
  &:before,
  &:after {
    content: "";
    display: block;
    background-color: ${props =>
      props.isDirty
        ? props.theme.nav.text.primary
        : props.isToggled
        ? props.theme.nav.text.primary
        : props.theme.nav.text.pristine};
    position: absolute;
    width: ${hamburger.width};
    height: 2px;
  }
  &:before {
    top: ${props => (props.isToggled ? `0` : `-7px`)};
    transform: rotate(${props => (props.isToggled ? `45deg` : `0deg`)});
    transition: ${props =>
      props.isToggled ? hamburger.beforeActive : hamburger.before};
  }
  &:after {
    bottom: ${props => (props.isToggled ? `0` : `-7px`)};
    transform: rotate(${props => (props.isToggled ? `-45deg` : `0deg`)});
    transition: ${props =>
      props.isToggled ? hamburger.afterActive : hamburger.after};
  }
`

const Hamburger = props => {
  const { isDirty, isToggled } = props
  return (
    <HamburgerContainer>
      <HamburgerBars isToggled={isToggled} isDirty={isDirty} />
    </HamburgerContainer>
  )
}

Hamburger.propTypes = {
  isDirty: PropTypes.bool,
  isToggled: PropTypes.bool.isRequired,
}

export default Hamburger
