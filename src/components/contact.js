import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Social } from "~components"
import { mixins, Section, Title } from "~styles"
import { scrollreveal } from "~utils"
import { scrollrevealConfig } from "~config"

const { flex } = mixins

const ContactContainer = styled(Section)`
  ${flex.center};
  align-items: flex-start;
  flex-direction: column;
  max-width: 48rem;
`
const TitleContainer = styled.div`
  ${flex.start};
  margin: 0 auto;
`
const ContentContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`
const Content = styled.div``

const Contact = ({ data }) => {
  const { frontmatter, html } = data
  const { title } = frontmatter

  const revealTitle = useRef(null)
  const revealContent = useRef(null)
  const revealSocial = useRef(null)
  useEffect(() => {
    scrollreveal.reveal(revealTitle.current, scrollrevealConfig(200))
    scrollreveal.reveal(revealContent.current, scrollrevealConfig(400))
    scrollreveal.reveal(revealSocial.current, scrollrevealConfig(600))
  }, [])

  return (
    <ContactContainer id="contact">
      <TitleContainer ref={revealTitle}>
        <Title>{title}</Title>
      </TitleContainer>
      <ContentContainer ref={revealContent}>
        <Content dangerouslySetInnerHTML={{ __html: html }} />
        <Social />
      </ContentContainer>
    </ContactContainer>
  )
}

Contact.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Contact
