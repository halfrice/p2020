import React, { useCallback, useEffect, useState } from "react"
import { Link } from "gatsby"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import AnchorLink from "react-anchor-link-smooth-scroll"
import styled from "styled-components"
import { Hamburger, Menu } from "~components"
import { IconLogo } from "~components/icons"
import { navLinks } from "~config"
import { Button, device, Main, mixins, theme } from "~styles"
import { throttle, useEventListener } from "~utils"

const { color, fontSize, nav } = theme
const { flex } = mixins

const NavContainer = styled(Main)`
  ${flex.center};
  position: fixed;
  top: 0;
  width: 100%;
  height: ${props =>
    props.scrollDirection === "none" ? nav.heightPristine : nav.height};
  ${device.tablet`height: ${props =>
    props.scrollDirection === "none"
      ? nav.heightPristine
      : nav.heightMobile};`};
  background-color: ${props =>
    props.scrollDirection === "none" ? "transparent" : color.black};
  transition: ${theme.transition};
  overflow-x: auto;
  z-index: 20;
`
const NavInner = styled.nav`
  ${flex.between};
  align-items: center;
  width: 100%;
  max-width: 80rem;
  height: 100%;
  overflow: visible;
`
const TransitionContainer = styled(TransitionGroup)`
  height: 100%;
`
const LogoContainer = styled.div``
const LogoButton = styled(Button)`
  ${flex.center};
  margin-left: -0.75rem;
`
const Logo = styled.div`
  width: 2rem;
  height: 2rem;
  svg {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    fill: none;
    user-select: none;
    transition: ${theme.shortTransition};
    #circle {
      stroke: ${color.lightGreen};
    }
    #n {
      stroke: ${color.lightGreen};
    }
    &:focus,
    &:hover {
      opacity: 0.5;
    }
  }
`
const Bread = styled.div`
  display: none;
  ${device.tablet`display: flex;`};
`
const HamburgerButton = styled(Button)`
  margin-right: -0.75rem;
`
const Links = styled.div`
  ${flex.center};
  ${device.tablet`display: none;`};
  height: 100%;
`
const List = styled.ol`
  height: 100%;
  div {
    ${flex.between};
  }
`
const ListItem = styled(Button)`
  :last-of-type {
    margin-right: -0.75rem;
  }
`
const NavLink = styled(AnchorLink)``

const Nav = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [isDeviceMobile, setIsDeviceMobile] = useState(false)
  const [isHamburgerCooked, setIsHamburgerCooked] = useState(false)
  const [scrollDirection, setScrollDirection] = useState("none")
  const [prevY, setPrevY] = useState(0)

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
    <NavContainer scrollDirection={scrollDirection}>
      <NavInner>
        <LogoContainer>
          <TransitionContainer>
            {isMounted && (
              <CSSTransition classNames="fadedown" timeout={3000}>
                <LogoButton>
                  <Link
                    to="/"
                    onClick={isHamburgerCooked ? toggleHamburger : null}
                    style={{ transitionDelay: `100ms` }}
                  >
                    <Logo>
                      <IconLogo />
                    </Logo>
                  </Link>
                </LogoButton>
              </CSSTransition>
            )}
          </TransitionContainer>
        </LogoContainer>

        <Bread>
          <TransitionContainer>
            {isMounted && (
              <CSSTransition classNames="fadedown" timeout={3000}>
                <HamburgerButton
                  onClick={toggleHamburger}
                  style={{ transitionDelay: `200ms` }}
                >
                  <Hamburger isToggled={isHamburgerCooked} />
                </HamburgerButton>
              </CSSTransition>
            )}
          </TransitionContainer>
        </Bread>

        <Links>
          <List>
            <TransitionContainer>
              {isMounted &&
                navLinks &&
                navLinks.map(({ url, name }, i) => (
                  <CSSTransition key={i} classNames="fadedown" timeout={3000}>
                    <ListItem style={{ transitionDelay: `${(i + 1) * 100}ms` }}>
                      <NavLink href={url}>{name}</NavLink>
                    </ListItem>
                  </CSSTransition>
                ))}
            </TransitionContainer>
          </List>
        </Links>
      </NavInner>

      <Menu
        isMenuOpen={isHamburgerCooked}
        toggleMenu={toggleHamburger}
        navHeight={getNavHeight()}
      />
    </NavContainer>
  )
}

export default Nav
