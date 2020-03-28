import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import AnchorLink from "react-anchor-link-smooth-scroll"
import styled from "styled-components"
import { navLinks } from "~config"
import { Button, device, Main, mixins, theme } from "~styles"

const { color, nav } = theme
const { flex } = mixins

const NavContainer = styled(Main)`
  ${flex.center};
  position: fixed;
  top: 0;
  width: 100%;
  height: ${nav.height};
  ${device.tablet`height: ${nav.heightMobile};`};
  background-color: ${color.black};
  overflow-x: auto;
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
  max-width: 700px;
`
const LogoButton = styled(Button)`
  margin-left: -0.75rem;
`
const Logo = styled.div``
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

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 0)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <NavContainer>
      <NavInner>
        <TransitionContainer>
          {isMounted && (
            <CSSTransition classNames="fadedown" timeout={3000}>
              <LogoButton>
                <Link to="/" style={{ transitionDelay: `100ms` }}>
                  <Logo>P2020</Logo>
                </Link>
              </LogoButton>
            </CSSTransition>
          )}
        </TransitionContainer>

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
