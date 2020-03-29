import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { mixins, Section, theme, Title } from "~styles"

const { color } = theme
const { flex } = mixins

const ContactContainer = styled(Section)`
  ${flex.center};
  align-items: flex-start;
  flex-direction: column;
  max-width: 37.5rem;
  margin-bottom: 6.25rem;
`
const TitleContainer = styled.div`
  margin: 0 auto;
`
const ContentContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`
const Content = styled.div`
  color: ${color.lightSlate};
`

const Contact = ({ data }) => {
  const { frontmatter, html } = data
  const { title } = frontmatter

  return (
    <ContactContainer id="contact">
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <ContentContainer>
        <Content dangerouslySetInnerHTML={{ __html: html }} />
      </ContentContainer>
    </ContactContainer>
  )
}

Contact.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Contact
