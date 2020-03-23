import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"
import { mixins, theme } from "~styles"

const { color } = theme
const { flex } = mixins

const HeroContainer = styled.div`
  ${flex.center};
  min-height: calc(100vh);
`
const Name = styled.h1`
  color: ${color.lightRed};
  margin-top: 0;
`
const TransitionContainer = styled(TransitionGroup)`
  width: 100%;
  max-width: 900px;
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
    <Name style={{ transitionDelay: "30ms" }}>{frontmatter.name}</Name>
  )
  const title = () => (
    <Title style={{ transitionDelay: "600ms" }}>{frontmatter.title}</Title>
  )
  const location = () => (
    <Location style={{ transitionDelay: "900ms" }}>
      {frontmatter.location}
    </Location>
  )
  const content = () => (
    <Content
      style={{ transitionDelay: "1200ms" }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )

  const items = [name, title, location, content]

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
