import React, { useContext } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Button, theme } from "~styles"
import { ThemeContext } from "~themes"
import { FormattedIcon } from "~components/icons"

const { fontSize } = theme

const ThemerContainer = styled.div`
  position: relative;
  z-index: 21;
`
const ThemerButton = styled(Button)`
  margin-right: ${props => (props.isMobile ? `-0.75rem` : null)};
  z-index: 22;
  color: ${props =>
    props.isDirty
      ? props.theme.nav.text.primary
      : props.isMobile
      ? props.theme.nav.text.primary
      : props.theme.nav.text.pristine};
  transition: ${theme.transition};
  svg {
    width: ${fontSize.lg};
    height: ${fontSize.lg};
    fill: ${props =>
      props.isDirty
        ? props.theme.themer.icon.primary
        : props.isMobile
        ? props.theme.themer.icon.primary
        : props.theme.themer.icon.pristine};
    transition: ${theme.transition};
  }
  &:active {
    opacity: 1;
  }
`

const Themer = ({ isDirty, isMobile }) => {
  const context = useContext(ThemeContext)

  return (
    <ThemerContainer>
      <ThemerButton
        onClick={context.toggleTheme}
        isDirty={isDirty}
        isMobile={isMobile}
        aria-label="Theme"
      >
        <FormattedIcon name={context.theme.icon} />
      </ThemerButton>
    </ThemerContainer>
  )
}

Themer.defaultProps = {
  isDirty: false,
  isMobile: false,
}

Themer.propTypes = {
  isDirty: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
}

export default Themer
