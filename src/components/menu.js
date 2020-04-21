import React from "react"
import PropTypes from "prop-types"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { navLinks } from "~config"
import styled from "styled-components"
import { Themer } from "~components"
import { FormattedIcon } from "~components/icons"
import { Button, Main, mixins, theme } from "~styles"

const { color, easing, fontSize, time } = theme
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
  background-color: ${color.black};
`
const Links = styled.nav`
  width: 100%;
  margin-top: ${props =>
    props.isDirty ? props.navHeight + 24 + "px" : props.navHeight + "px"};
  margin-bottom: ${props => (props.isPristine ? "1.5rem" : "1rem")};
  transition: margin ${time.medium} ${easing};
`
const LinksList = styled.ol`
  width: 100%;
`
const LinksListItem = styled.li`
  ${flex.end};
  margin: 0 auto;
  width: 100%;
  height: 3rem;
  font-size: ${fontSize.md};
  font-weight: 600;
  opacity: ${props => (props.isMenuOpen ? 1 : 0)};
  transition: opacity ${time.medium} ${easing} 0.25s;
  border-top: 1px solid ${color.darkGrey};
`
const MenuLink = styled(AnchorLink)`
  ${flex.center};
  /* ${mixins.button}; */

`
const MenuLinkButton = styled(Button)`
  margin-right: -0.75rem;
  transition: ${theme.shortTransition};
  color: ${props => props.theme.nav.text.primary};
  pointer-events: none;
  svg {
    width: ${fontSize.lg};
    height: ${fontSize.lg};
    fill: ${props => props.theme.nav.icon.primary};
    margin-right: 0.375rem;
    z-index: 20;
  }
`
const ThemerRow = styled.div`
  width: 100%;
`

const Menu = ({ isMenuOpen, isDirty, toggleMenu, navHeight }) => {
  const handleMenuClick = e => {
    const target = e.target
    const isLink = target.hasAttribute("href") || target.hasAttribute("to")
    const isNotMenu =
      target.classList && target.classList[0].includes("MenuContainer")

    console.log("isLink:", isLink, " isNotMenu:", isNotMenu)
    console.log(e.target)

    if (isLink || isNotMenu) {
      toggleMenu()
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
      <DropdownMenu>
        <Links navHeight={navHeight} isDirty={isDirty}>
          <LinksList>
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <LinksListItem key={i} isMenuOpen={isMenuOpen}>
                  <MenuLink href={url} offset={-32} tabIndex={-1}>
                    <MenuLinkButton>
                      <FormattedIcon name={name} />
                      {name}
                    </MenuLinkButton>
                  </MenuLink>
                </LinksListItem>
              ))}
            <ThemerRow>
              <LinksListItem isMenuOpen={isMenuOpen}>
                <Themer isDirty={isDirty} isMobile={isMenuOpen} />
              </LinksListItem>
            </ThemerRow>
          </LinksList>
        </Links>
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
