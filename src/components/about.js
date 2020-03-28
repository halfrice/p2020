import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { device, mixins, theme, Section, Title } from "~styles"

const { color } = theme

const AboutContainer = styled(Section)`
  max-width: 75rem;
  height: calc(200vh);
`
const FlexContainer = styled.div`
  ${mixins.flex.between};
  align-items: flex-start;
  ${device.tablet`flex-direction: column-reverse;`};
`
const ContentContainer = styled.div`
  width: 55%;
  max-width: 48rem;
  ${device.tablet`width: 100%;`};
`
const Content = styled.div`
  color: ${color.lightGreen};
`
const ImageContainer = styled.div`
  background: transparent;
  border: 1px solid transparent;
  border-radius: 3px;
  width: 45%;
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
const Avatar = styled.div`
  background-color: ${color.dark};
  width: 100%;
  height: 18rem;
  ${device.tablet`height: 15rem`};
`

const About = ({ data }) => {
  const { frontmatter, html } = data
  const { title } = frontmatter

  return (
    <AboutContainer id="about">
      <Title>{title}</Title>
      <FlexContainer>
        <ContentContainer>
          <Content dangerouslySetInnerHTML={{ __html: html }} />
        </ContentContainer>
        <ImageContainer>
          <AvatarContainer>
            <Avatar />
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
