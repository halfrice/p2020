import React from "react"
import PropTypes from "prop-types"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { navLinks } from "~config"
import styled from "styled-components"
import { device, Main, mixins, theme } from "~styles"

const { color, easing, fontSize, time } = theme
const { flex } = mixins

const MenuContainer = styled.div`
  display: none;
  ${device.tablet`display: block;`};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  outline: 0;
  transition: all ${time.medium} ${easing};
  transform: translateY(${props => (props.isMenuOpen ? 0 : -100)}vh);
  z-index: -1;
`
const DropdownMenu = styled(Main)`
  ${flex.center};
  width: 100%;
  background-color: ${color.black};
`
const Links = styled.nav`
  width: 100%;
  margin-top: ${props => props.navHeight + "px"};
  margin-bottom: ${props => props.navHeight / 2 + "px"};
  transition: margin ${time.medium} ${easing};
`
const LinksList = styled.ol`
  width: 100%;
`
const LinksListItem = styled.li`
  width: 100%;
  height: 3rem;
  margin: 0 auto;
  font-size: ${fontSize.md};
  font-weight: 600;
  opacity: ${props => (props.isMenuOpen ? 1 : 0)};
  transition: opacity ${time.medium} ${easing} 0.25s;
`
const MenuLink = styled(AnchorLink)`
  ${flex.end};
  border-bottom: 1px solid ${color.darkGrey};
  width: 100%;
  height: 100%;
  color: ${color.lightSlate};
  text-align: left;
  transition: ${theme.shortTransition};
`

const Menu = ({ isMenuOpen, toggleMenu, navHeight }) => {
  const handleMenuClick = e => {
    const target = e.target
    const isLink = target.hasAttribute("href") || target.hasAttribute("to")
    const isNotMenu =
      target.classList && target.classList[0].includes("MenuContainer")

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
      className={"menu-container"}
    >
      <DropdownMenu>
        <Links navHeight={navHeight}>
          <LinksList>
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <LinksListItem key={i} isMenuOpen={isMenuOpen}>
                  <MenuLink href={url} offset={-30}>
                    {name}
                  </MenuLink>
                </LinksListItem>
              ))}
          </LinksList>
        </Links>
      </DropdownMenu>
    </MenuContainer>
  )
}

Menu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  navHeight: PropTypes.number.isRequired,
}

export default Menu
