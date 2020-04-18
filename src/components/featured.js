import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"
import { Download, Technology, Video } from "~components"
import { device, mixins, theme, Section, Title } from "~styles"
import { scrollreveal } from "~utils"
import { scrollrevealConfig } from "~config"

const { flex } = mixins
const { fontSize } = theme

const FeaturedContainer = styled(Section)`
  padding-bottom: 0;
  ${device.tablet`padding-bottom: 0;`};
  max-width: 48rem;
`
const FeaturedInner = styled.div`
  ${flex.between};
  align-items: flex-start;
  flex-direction: column;
  margin: 0 auto;
`
const AppContainer = styled.div`
  border-radius: 3px;
  margin-bottom: 2rem;
  ${device.tablet`margin-bottom: 1.5rem;`};
  width: 100%;
  overflow: hidden;
  ${mixins.shadow};
`
const App = styled.div`
  align-items: flex-start;
  flex-direction: column;
  border-radius: 3px;
  height: 100%;
  background-color: ${props => props.theme.apps.background};
`
const MediaContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 3px;
`
const ContentContainer = styled.div`
  padding: 1.5rem 1.25rem;
  ${device.tablet`padding: 1.25rem 1rem;`};
  width: 100%;
  height: 100%;
`
const AppName = styled.h5`
  margin: 0 0 1rem;
  color: ${props => props.theme.apps.title};
  font-size: ${fontSize.md};
  ${device.tablet`font-size: ${fontSize.sm};`}
`
const AppDescription = styled.div`
  margin-bottom: 1rem;
  font-size: ${fontSize.md};
  ${device.tablet`font-size: ${fontSize.sm};`};
  color: ${props => props.theme.apps.description};
`
const FooterContainer = styled.footer`
  padding: 0 1.25rem 1.5rem;
  ${device.tablet`padding: 0 1rem 1.25rem;`};
  width: 100%;
`

const Featured = ({ data }) => {
  const apps = data

  const revealContainer = useRef(null)
  useEffect(
    () => scrollreveal.reveal(revealContainer.current, scrollrevealConfig()),
    []
  )
  const revealTitle = useRef(null)
  const revealApps = useRef([])
  useEffect(() => {
    scrollreveal.reveal(revealTitle.current, scrollrevealConfig(200))
    revealApps.current.forEach((ref, i) => {
      scrollreveal.reveal(ref, scrollrevealConfig((i + 3) * 100))
    })
  }, [])

  return (
    <FeaturedContainer id="apps">
      <Title ref={revealTitle}>Apps</Title>

      <FeaturedInner>
        {apps &&
          apps.map(({ node }, i) => {
            const { frontmatter, html } = node
            const {
              appleStore,
              github,
              googlePlay,
              image,
              tech,
              title,
              url,
              video,
              youtube,
            } = frontmatter
            const links = {
              url,
              github,
              youtube,
              appleStore,
              googlePlay,
            }

            return (
              <AppContainer key={i} ref={app => (revealApps.current[i] = app)}>
                <App>
                  <MediaContainer>
                    {video ? (
                      <Video url={video} title={title} />
                    ) : (
                      <Img fluid={image.childImageSharp.fluid} />
                    )}
                  </MediaContainer>
                  <ContentContainer>
                    <AppName>{title}</AppName>
                    <AppDescription
                      dangerouslySetInnerHTML={{ __html: html }}
                    />
                    <Download links={links} />
                  </ContentContainer>
                  <FooterContainer>
                    {tech && <Technology tech={tech} />}
                  </FooterContainer>
                </App>
              </AppContainer>
            )
          })}
      </FeaturedInner>
    </FeaturedContainer>
  )
}

Featured.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Featured
