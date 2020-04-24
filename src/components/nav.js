import React, { useCallback, useContext, useEffect, useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import { Hamburger, Menu } from "~components"
import { FormattedIcon, IconLogo } from "~components/icons"
import { navLinks } from "~config"
import { device, Main, mixins, theme } from "~styles"
import { ThemeContext } from "~themes"
import { throttle, useEventListener } from "~utils"

const { font, fontSize, nav } = theme
const { flex } = mixins

const NavContainer = styled(Main)`
  ${flex.center};
  position: fixed;
  top: 0;
  width: 100%;
  height: ${props => (props.isDirty ? nav.height : nav.heightPristine)};
  ${device.tablet`height: ${props =>
    props.isDirty ? nav.heightMobile : nav.heightPristine};`};
  background-color: ${props =>
    props.isDirty ? props.theme.nav.background : "transparent"};
  transition: ${theme.transition};
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  overflow-y: hidden;
  z-index: 21;
  ${props =>
    props.isToggled ? null : props.isDirty ? mixins.boxShadow : null};
`
const Navbar = styled.nav`
  ${flex.between};
  position: relative;
  width: 100%;
  max-width: 64rem;
  font-family: ${font.ubuntuMono};
  font-size: ${fontSize.md};
  font-weight: 600;
  z-index: 22;
`
const Logo = styled.div`
  ${flex.center};
  a {
    display: block;
    margin: 0 auto;
    width: ${props => (props.isDirty ? fontSize.h3 : fontSize.h2)};
    height: ${props => (props.isDirty ? fontSize.h3 : fontSize.h2)};
    transition: ${theme.transition};
    &:hover,
    &:focus {
      svg {
        #circle {
          stroke: ${props => props.theme.nav.logo.hover};
        }
        #n {
          stroke: ${props => props.theme.nav.logo.hover};
        }
      }
    }
    svg {
      fill: none;
      transition: ${theme.shortTransition};
      user-select: none;
      #circle {
        stroke: ${props =>
          props.isToggled
            ? props.isDirty
              ? props.theme.nav.logo.primary
              : props.theme.nav.logo.pristine
            : props.isDirty
            ? props.theme.nav.logo.primary
            : props.theme.nav.logo.pristine};
      }
      #n {
        stroke: ${props =>
          props.isToggled
            ? props.isDirty
              ? props.theme.nav.logo.primary
              : props.theme.nav.logo.pristine
            : props.isDirty
            ? props.theme.nav.logo.primary
            : props.theme.nav.logo.pristine};
      }
    }
  }
`
const HamburgerButton = styled.div`
  ${flex.center};
  display: none;
  ${device.tablet`display: flex;`};
  margin: 0 -0.5rem 0 0;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  text-transform: none;
  overflow: visible;
`
const Links = styled.div`
  ${flex.center};
  ${device.tablet`display: none;`};
  div {
    ${flex.between};
  }
`
const LinkButton = styled.div`
  margin: 0 0.625rem;
  padding: 0.5rem 0.25rem;
  color: ${props =>
    props.isDirty
      ? props.theme.nav.text.primary
      : props.theme.nav.text.pristine};
  font-weight: 600;
  transition: ${theme.shortTransition};
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
  margin-right: -0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  overflow: visible;
`
const Themer = styled.div`
  position: relative;
  z-index: 21;
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
`

const Nav = ({ isHome }) => {
  const [isMounted, setIsMounted] = useState(!isHome)
  const [isDeviceMobile, setIsDeviceMobile] = useState(false)
  const [isHamburgerCooked, setIsHamburgerCooked] = useState(false)
  const [scrollDirection, setScrollDirection] = useState("none")
  const [prevY, setPrevY] = useState(0)

  const isDirty = scrollDirection !== "none"
  const timeout = isHome ? 3000 : 0

  const themeContext = useContext(ThemeContext)

  const toggleHamburger = () => {
    setIsHamburgerCooked(!isHamburgerCooked)
  }

  const setDevice = () => {
    if (window.innerWidth <= 900) {
      setIsDeviceMobile(true)
    } else {
      setIsDeviceMobile(false)
    }
  }

  const getNavHeight = () => {
    const scale = parseInt(fontSize.default)
    return scrollDirection === "none"
      ? parseFloat(nav.heightPristine) * scale
      : isDeviceMobile
      ? parseFloat(nav.heightMobile) * scale
      : parseFloat(nav.height) * scale
  }

  const handleScroll = useCallback(
    throttle(() => {
      const y = window.scrollY
      const delta = 4

      if (!isMounted || Math.abs(prevY - y) <= delta) {
        return
      }

      if (y < delta) {
        setScrollDirection("none")
      } else if (y > prevY) {
        if (scrollDirection !== "down") {
          setScrollDirection("down")
        }
      } else if (y < prevY) {
        if (scrollDirection !== "up") {
          setScrollDirection("up")
        }
      }
      setPrevY(y)
    }, 100),
    [isMounted, prevY, scrollDirection]
  )

  const handleResize = useCallback(
    throttle(() => {
      setDevice()
      if (!isDeviceMobile && isHamburgerCooked) {
        toggleHamburger()
      }
    }, 100),
    [isDeviceMobile]
  )

  const handleKeydown = useCallback(
    throttle(e => {
      if (e.which === 27 || e.key === "Escape") {
        toggleHamburger()
      }
    }, 100),
    [isHamburgerCooked]
  )

  useEffect(() => {
    setDevice()
    const timeout = setTimeout(() => setIsMounted(true), 0)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  useEventListener("scroll", handleScroll)
  useEventListener("resize", handleResize)
  useEventListener("keydown", e => handleKeydown(e))

  return (
    <NavContainer
      scrollDirection={scrollDirection}
      isDirty={isDirty}
      isToggled={isHamburgerCooked}
    >
      <Helmet>
        <body className={isHamburgerCooked ? "hidden" : ""} />
      </Helmet>
      <Navbar>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames="fade" timeout={timeout}>
              <Logo
                isToggled={isHamburgerCooked}
                isDirty={isDirty}
                tabindex="-1"
              >
                {isHome ? (
                  <a href="/" aria-label="home">
                    <IconLogo />
                  </a>
                ) : (
                  <Link to="/" aria-label="home">
                    <IconLogo />
                  </Link>
                )}
              </Logo>
            </CSSTransition>
          )}
        </TransitionGroup>

        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames="fade" timeout={timeout}>
              <HamburgerButton onClick={toggleHamburger} tabindex="-1">
                <Hamburger isToggled={isHamburgerCooked} isDirty={isDirty} />
              </HamburgerButton>
            </CSSTransition>
          )}
        </TransitionGroup>

        <Links>
          <TransitionGroup component={null}>
            {isMounted &&
              navLinks &&
              navLinks.map(({ url, name }, i) => (
                <CSSTransition
                  key={i}
                  classNames={`fadedown`}
                  timeout={timeout}
                >
                  <Link
                    to={url}
                    style={{
                      transitionDelay: `${isHome ? (i + 1) * 100 : 0}ms`,
                    }}
                  >
                    <LinkButton isDirty={isDirty}>
                      <FormattedIcon name={name} />
                      {name}
                    </LinkButton>
                  </Link>
                </CSSTransition>
              ))}
            {isMounted && (
              <CSSTransition classNames="fadedown" timeout={timeout}>
                <ThemerButton
                  onClick={themeContext.toggleTheme}
                  style={{
                    transitionDelay: `${isHome ? navLinks.length * 100 : 0}ms`,
                  }}
                  tabindex="0"
                >
                  <Themer isDirty={isDirty} isMobile={isDeviceMobile}>
                    <FormattedIcon name={themeContext.theme.icon} />
                  </Themer>
                </ThemerButton>
              </CSSTransition>
            )}
          </TransitionGroup>
        </Links>
      </Navbar>

      {isDeviceMobile && (
        <Menu
          isMenuOpen={isHamburgerCooked}
          isDirty={isDirty}
          navHeight={getNavHeight()}
          toggleMenu={toggleHamburger}
        />
      )}
    </NavContainer>
  )
}

Nav.propTypes = {
  isHome: PropTypes.bool.isRequired,
}

export default Nav
