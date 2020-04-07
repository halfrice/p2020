import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"
import { mixins, Section, theme } from "~styles"

const { color, nav } = theme
const { flex } = mixins

const HeroContainer = styled(Section)`
  ${flex.center};
  max-width: 64rem;
  height: calc(100vh - (${nav.heightPristine}));
  min-height: 24rem;
  margin-top: ${nav.heightPristine};
`
const TransitionContainer = styled(TransitionGroup)`
  width: 100%;
`
const Avatar = styled(Img)`
  border-radius: 50%;
  border: 1px solid transparent;
  margin: 0 0 1.5rem 0;
  width: 7rem;
  height: 7rem;
  overflow: hidden;
`
const Name = styled.h1`
  color: ${color.cyberAqua};
  margin-top: 0;
`
const Title = styled.h2`
  color: ${color.cyberDarkPurple};
`
const Location = styled.h3`
  color: ${color.cyberGreen};
`
const Content = styled.p`
  color: ${color.retroPink};
`

const Hero = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false)

  const { frontmatter, html } = data

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 500)
    return () => clearTimeout(timeout)
  }, [])

  const avatar = () => (
    <Avatar
      style={{ transitionDelay: "100ms" }}
      fluid={frontmatter.avatar.childImageSharp.fluid}
      alt="Avatar"
    />
  )
  const name = () => (
    <Name style={{ transitionDelay: "200ms" }}>{frontmatter.name}</Name>
  )
  const title = () => (
    <Title style={{ transitionDelay: "300ms" }}>{frontmatter.title}</Title>
  )
  const location = () => (
    <Location style={{ transitionDelay: "400ms" }}>
      {frontmatter.location}
    </Location>
  )
  const content = () => (
    <Content
      style={{ transitionDelay: "500ms" }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )

  const items = [avatar, name, title, location, content]

  return (
    <HeroContainer>
      <TransitionContainer>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames={`fadeup`} timeout={3000}>
              {item}
            </CSSTransition>
          ))}
      </TransitionContainer>
    </HeroContainer>
  )
}

Hero.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Hero
