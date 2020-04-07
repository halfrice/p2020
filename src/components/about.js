import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"
import { device, mixins, theme, Section, Title } from "~styles"
import { scrollreveal } from "~utils"
import { scrollrevealConfig } from "~config"

const { color } = theme

const AboutContainer = styled(Section)`
  max-width: 64rem;
`
const FlexContainer = styled.div`
  ${mixins.flex.between};
  align-items: flex-start;
  ${device.tablet`flex-direction: column-reverse;`};
`
const ContentContainer = styled.div`
  width: 50%;
  ${device.tablet`width: 100%;`};
`
const Content = styled.div`
  color: ${color.lightGreen};
`
const ImageContainer = styled.div`
  background: transparent;
  border: 1px solid transparent;
  border-radius: 3px;
  width: 50%;
  ${device.tablet`width: 100%;`};
  ${device.tablet`margin-bottom: 1rem`};
  transition: ${theme.transition};
`
const AvatarContainer = styled.div`
  border-radius: 3px;
  margin-left: 3em;
  ${device.tablet`margin: 0 auto;`};
  overflow: hidden;
`
const Avatar = styled(Img)`
  background-color: ${color.dark};
  border-radius: 3px;
  width: 100%;
  height: 18rem;
  ${device.tablet`height: 15rem`};
  transition: ${theme.transition};
  object-fit: cover;
  &:hover {
    transform: scale(1.1);
    ${device.tablet`transform: none`};
  }
`

const About = ({ data }) => {
  const { frontmatter, html } = data
  const { image, title } = frontmatter

  const revealTitle = useRef(null)
  const revealContent = useRef(null)
  useEffect(() => {
    scrollreveal.reveal(revealTitle.current, scrollrevealConfig(200))
    scrollreveal.reveal(revealContent.current, scrollrevealConfig(300))
  }, [])

  return (
    <AboutContainer id="about">
      <Title ref={revealTitle}>{title}</Title>
      <FlexContainer ref={revealContent}>
        <ContentContainer>
          <Content dangerouslySetInnerHTML={{ __html: html }} />
        </ContentContainer>
        <ImageContainer>
          <AvatarContainer>
            <Avatar fluid={image.childImageSharp.fluid} alt="About image" />
          </AvatarContainer>
        </ImageContainer>
      </FlexContainer>
    </AboutContainer>
  )
}

About.propTypes = {
  data: PropTypes.object.isRequired,
}

export default About
