import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"
import { theme } from "~styles"

const { color } = theme

const HeroContainer = styled.div`
  min-height: calc(100vh);
`
const Name = styled.h1`
  color: ${color.lightRed};
`
const Title = styled.h2`
  color: ${color.blue};
`
const Location = styled.h3`
  color: ${color.green};
`
const Content = styled.p`
  color: ${color.light};
`

const Hero = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false)

  const { frontmatter, html } = data

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 200)
    return () => clearTimeout(timeout)
  }, [])

  const name = () => (
    <Name style={{ transitionDelay: "200ms" }}>{frontmatter.name}</Name>
  )
  const title = () => (
    <Title style={{ transitionDelay: "400ms" }}>{frontmatter.title}</Title>
  )
  const location = () => (
    <Location style={{ transitionDelay: "600ms" }}>
      {frontmatter.location}
    </Location>
  )
  const content = () => (
    <Content
      style={{ transitionDelay: "800ms" }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )

  const items = [name, title, location, content]

  return (
    <HeroContainer>
      <TransitionGroup>
        {isMounted &&
          items.map((item, i) => {
            return (
              <CSSTransition key={i} classNames={`fadeup`} timeout={3000}>
                {item}
              </CSSTransition>
            )
          })}
      </TransitionGroup>
    </HeroContainer>
  )
}

Hero.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Hero
