import React, { useCallback, useEffect, useState } from "react"
import { Link } from "gatsby"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import AnchorLink from "react-anchor-link-smooth-scroll"
import styled from "styled-components"
import { navLinks } from "~config"
import { Button, device, Main, mixins, theme } from "~styles"
import { throttle, useEventListener } from "~utils"

const { color, nav } = theme
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
  max-width: 75rem;
  height: 100%;
  overflow: visible;
`
const TransitionContainer = styled(TransitionGroup)`
  height: 100%;
`
const Logo = styled.div`
  ${flex.center};
`
const LogoButton = styled(Button)`
  margin-left: -0.75rem;
`
const Links = styled.div`
  ${flex.center};
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
  const [scrollDirection, setScrollDirection] = useState("none")
  const [prevY, setPrevY] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 0)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  const scrollHandler = useCallback(
    throttle(() => {
      const y = window.scrollY
      const delta = 5

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

  useEventListener("scroll", scrollHandler)

  return (
    <NavContainer scrollDirection={scrollDirection}>
      <NavInner>
        <Logo>
          <TransitionContainer>
            {isMounted && (
              <CSSTransition classNames="fadedown" timeout={3000}>
                <LogoButton>
                  <Link to="/" style={{ transitionDelay: `100ms` }}>
                    P2020
                  </Link>
                </LogoButton>
              </CSSTransition>
            )}
          </TransitionContainer>
        </Logo>

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
    </NavContainer>
  )
}

export default Nav
