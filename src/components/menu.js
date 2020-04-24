import React, { useContext } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { navLinks } from "~config"
import styled from "styled-components"
import { Themer } from "~components"
import { FormattedIcon } from "~components/icons"
import { Main, mixins, theme } from "~styles"
import { ThemeContext } from "~themes"

const { color, easing, font, fontSize, time } = theme
const { flex } = mixins

const MenuContainer = styled.div`
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  outline: none;
  transition: all ${time.medium} ${easing};
  transform: translateY(${props => (props.isMenuOpen ? 0 : -100)}vh);
  visibility: ${props => (props.isMenuOpen ? "visible" : "hidden")};
  z-index: 20;
  overflow-y: scroll;
`
const DropdownMenu = styled(Main)`
  ${flex.center};
  width: 100%;
  background-color: ${props => props.theme.nav.background};
  ${props => (props.isMenuOpen ? mixins.boxShadow : null)};
  font-family: ${font.ubuntuMono};
  font-size: ${fontSize.md};
  font-weight: 600;
`
const LinksContainer = styled.div`
  ${flex.center};
  width: 100%;
  margin-top: ${props =>
    props.isDirty ? props.navHeight + 16 + "px" : props.navHeight + "px"};
  margin-bottom: ${props => (props.isDirty ? "1rem" : "1.5rem")};
  transition: margin ${time.medium} ${easing};
`
const Links = styled.div`
  width: 100%;
`
const RowContainer = styled.div`
  ${flex.end};
  border-top: 1px solid ${color.darkGrey};
  opacity: ${props => (props.isMenuOpen ? 1 : 0)};
  transition: opacity ${time.medium} ${easing} 0.25s;
`
const MenuLink = styled(Link)``
const LinkButton = styled.div`
  margin: 0.25rem -0.5rem 0.25rem 0;
  padding: 0.5rem;
  color: ${props =>
    props.isDirty
      ? props.theme.nav.text.primary
      : props.theme.nav.text.pristine};
  font-weight: 600;
  transition: ${theme.shortTransition};
  pointer-events: none;
  svg {
    width: ${fontSize.lg};
    height: ${fontSize.lg};
    fill: ${props =>
      props.isDirty
        ? props.theme.nav.icon.primary
        : props.theme.nav.icon.pristine};
    margin-right: 0.375rem;
    transition: ${theme.shortTransition};
  }
`
const ThemerButton = styled.div`
  margin: 0.25rem -0.5rem 0.25rem 0;
  padding: 0.5rem;
  cursor: pointer;
  overflow: visible;
`

const Menu = ({ isMenuOpen, isDirty, toggleMenu, navHeight }) => {
  const themeContext = useContext(ThemeContext)

  const handleMenuClick = e => {
    const target = e.target
    const isLink = target.hasAttribute("href") || target.hasAttribute("to")
    const isNotMenu =
      target.classList && target.classList[0].includes("MenuContainer")
    const isThemer = target.classList && target.classList[0].includes("Themer")

    if (isLink || isNotMenu) {
      toggleMenu()
    }

    if (isThemer) {
      themeContext.toggleTheme()
    }
  }

  return (
    <MenuContainer
      isMenuOpen={isMenuOpen}
      navHeight={navHeight}
      onClick={handleMenuClick}
      aria-hidden={!isMenuOpen}
      tabIndex={isMenuOpen ? 1 : -1}
    >
      <DropdownMenu isMenuOpen={isMenuOpen}>
        <LinksContainer navHeight={navHeight} isDirty={isDirty}>
          <Links>
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <RowContainer key={i} isMenuOpen={isMenuOpen}>
                  <MenuLink to={url}>
                    <LinkButton isDirty={isDirty}>
                      <FormattedIcon name={name} />
                      {name}
                    </LinkButton>
                  </MenuLink>
                </RowContainer>
              ))}
            <RowContainer isMenuOpen={isMenuOpen}>
              <ThemerButton>
                <Themer isDirty={isDirty} isMobile={isMenuOpen} />
              </ThemerButton>
            </RowContainer>
          </Links>
        </LinksContainer>
      </DropdownMenu>
    </MenuContainer>
  )
}

Menu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  isDirty: PropTypes.bool.isRequired,
  navHeight: PropTypes.number.isRequired,
  toggleMenu: PropTypes.func.isRequired,
}

export default Menu
