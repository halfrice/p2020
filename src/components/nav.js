import React, { useCallback, useEffect, useState } from "react"
import { Link } from "gatsby"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { Helmet } from "react-helmet"
import AnchorLink from "react-anchor-link-smooth-scroll"
import styled from "styled-components"
import { Hamburger, Menu, Themer } from "~components"
import { FormattedIcon, IconLogo } from "~components/icons"
import { navLinks } from "~config"
import { Button, device, Main, mixins, theme } from "~styles"
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
  font-family: ${font.ubuntuMono};
  font-size: ${fontSize.md};
  font-weight: 600 !important;
  transition: ${theme.transition};
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  z-index: 21;
  ${props => (props.isDirty ? mixins.boxShadow : null)};
`
const NavInner = styled.nav`
  ${flex.between};
  position: relative;
  width: 100%;
  max-width: 64rem;
  height: 100%;
  z-index: 22;
`
const TransitionContainer = styled(TransitionGroup)`
  height: 100%;
`
const LogoContainer = styled.div`
  ${flex.center};
`
const LogoButton = styled(Button)`
  margin-left: -0.75rem;
`
const Logo = styled.div`
  width: ${props => (props.isPristine ? "2.5rem" : "2rem")};
  height: ${props => (props.isPristine ? "2.5rem" : "2rem")};
  transition: ${theme.transition};
  svg {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    fill: none;
    user-select: none;
    transition: ${theme.transition};
    #circle {
      stroke: ${props =>
        props.isDirty
          ? props.theme.nav.logo.primary
          : props.isToggled
          ? props.theme.nav.logo.primary
          : props.theme.nav.logo.pristine};
      transition: ${theme.transition};
    }
    #n {
      stroke: ${props =>
        props.isDirty
          ? props.theme.nav.logo.primary
          : props.isToggled
          ? props.theme.nav.logo.primary
          : props.theme.nav.logo.pristine};
      transition: ${theme.transition};
    }
  }
`
const Bread = styled.div`
  display: none;
  ${device.tablet`display: flex;`};
`
const HamburgerButton = styled(Button)`
  margin-right: -0.75rem;
  &:active,
  &:hover,
  &:focus {
    opacity: 1;
  }
`
const Links = styled.div`
  ${flex.center};
  ${device.tablet`display: none;`};
  div {
    ${flex.between};
  }
`
const NavLink = styled(AnchorLink)`
  ${mixins.button};
  ${flex.between};
  transition: ${theme.shortTransition};
`
const LinkWrapper = styled.div`
  color: ${props =>
    props.isDirty
      ? props.theme.nav.text.primary
      : props.theme.nav.text.pristine};
  font-weight: 600;
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
const ThemerWrapper = styled.div`
  margin-right: -0.75rem;
`

const Nav = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [isDeviceMobile, setIsDeviceMobile] = useState(false)
  const [isHamburgerCooked, setIsHamburgerCooked] = useState(false)
  const [scrollDirection, setScrollDirection] = useState("none")
  const [prevY, setPrevY] = useState(0)

  const isPristine = scrollDirection === "none"
  const isDirty = scrollDirection !== "none"
  const timeout = isPristine ? 3000 : 0

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
    [isMounted, prevY, scrollDirection, window]
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

  useEffect(() => {
    setDevice()
    const timeout = setTimeout(() => setIsMounted(true), 0)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  useEventListener("scroll", handleScroll)
  useEventListener("resize", handleResize)

  return (
    <NavContainer scrollDirection={scrollDirection} isDirty={isDirty}>
      <Helmet>
        <body className={isHamburgerCooked ? "hidden" : ""} />
      </Helmet>
      <NavInner>
        <LogoContainer>
          <TransitionContainer>
            {isMounted && (
              <CSSTransition classNames="fade" timeout={timeout}>
                <Link to="/" style={{ transitionDelay: `0ms` }}>
                  <LogoButton>
                    <Logo isToggled={isHamburgerCooked} isDirty={isDirty}>
                      <IconLogo />
                    </Logo>
                  </LogoButton>
                </Link>
              </CSSTransition>
            )}
          </TransitionContainer>
        </LogoContainer>

        <Bread>
          <TransitionContainer>
            {isMounted && (
              <CSSTransition classNames="fade" timeout={timeout}>
                <HamburgerButton
                  onClick={toggleHamburger}
                  style={{ transitionDelay: `100ms` }}
                >
                  <Hamburger isToggled={isHamburgerCooked} isDirty={isDirty} />
                </HamburgerButton>
              </CSSTransition>
            )}
          </TransitionContainer>
        </Bread>

        <Links>
          <TransitionContainer>
            {isMounted &&
              navLinks &&
              navLinks.map(({ url, name }, i) => (
                <CSSTransition key={i} classNames="fadedown" timeout={timeout}>
                  <NavLink
                    href={url}
                    offset={-32}
                    style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                  >
                    <LinkWrapper isDirty={isDirty}>
                      <FormattedIcon name={name} />
                      {name}
                    </LinkWrapper>
                  </NavLink>
                </CSSTransition>
              ))}
            {isMounted && (
              <CSSTransition classNames="fadedown" timeout={timeout}>
                <ThemerWrapper style={{ transitionDelay: `400ms` }}>
                  <Themer isDirty={isDirty} />
                </ThemerWrapper>
              </CSSTransition>
            )}
          </TransitionContainer>
        </Links>
      </NavInner>

      <Menu
        isMenuOpen={isHamburgerCooked}
        isDirty={isDirty}
        navHeight={getNavHeight()}
        toggleMenu={toggleHamburger}
      />
    </NavContainer>
  )
}

export default Nav
