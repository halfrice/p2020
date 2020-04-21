import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"
import { device, mixins, Section, theme } from "~styles"

const { fontSize } = theme
const { flex } = mixins

const HeroContainer = styled(Section)`
  ${flex.center};
  max-width: 64rem;
  min-height: 100vh;
`
const TransitionContainer = styled(TransitionGroup)`
  width: 100%;
`
const Avatar = styled(Img)`
  border-radius: 50%;
  border: 1px solid transparent;
  margin: 0 0 0.5rem 0;
  border-radius: 50%;
  border: 1px solid transparent;
  width: 8rem;
  ${device.desktop`width: 7.5rem;`};
  ${device.tablet`width: 6.75rem;`};
  ${device.phone`width: 6rem;`};
  height: 8rem;
  ${device.desktop`height: 7.5rem;`};
  ${device.tablet`height: 6.75rem;`};
  ${device.phone`height: 6rem;`};
  overflow: hidden;
`
const Name = styled.h1`
  margin: 0 0 0 -5px;
  ${device.phone`margin: 0 0 0 -4px;`};
  padding: 0;
  font-size: ${fontSize.h1};
  ${device.desktop`font-size: 2.884rem;`};
  ${device.tablet`font-size: 2.667rem;`};
  ${device.phone`font-size: ${fontSize.h2};`};
  color: ${props => props.theme.hero.name};
`
const Title = styled.h2`
  margin: 0 0 0.15rem -3px;
  padding: 0;
  font-size: ${fontSize.h2};
  ${device.desktop`font-size: 2.33rem;`};
  ${device.tablet`font-size: 2.17rem;`};
  ${device.phone`font-size: ${fontSize.h3};`};
  color: ${props => props.theme.hero.title};
`
const Location = styled.h3`
  margin: 0 0 0.5rem -2px;
  padding: 0;
  font-size: ${fontSize.h3};
  ${device.desktop`font-size: ${fontSize.xxxl};`};
  ${device.tablet`font-size: ${fontSize.xxl};`};
  ${device.phone`font-size: ${fontSize.xl};`};
  color: ${props => props.theme.hero.location};
`
const Content = styled.p`
  margin: 0 0 0 -1px;
  padding: 0;
  font-size: ${fontSize.md};
  ${device.tablet`font-size: ${fontSize.sm};`};
  ${device.phone`font-size: ${fontSize.xs};`};
`

const Hero = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false)

  const { frontmatter, html } = data[0].node

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000)
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
  data: PropTypes.array.isRequired,
}

export default Hero
