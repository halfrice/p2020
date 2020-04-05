import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"
import { Download, Technology, Video } from "~components"
import { device, mixins, theme, Section, Title } from "~styles"

const { flex } = mixins
const { color } = theme

const FeaturedContainer = styled(Section)`
  padding-bottom: 0;
  ${device.tablet`padding-bottom: 0;`};
  max-width: 56rem;
`
const FeaturedInner = styled.div`
  ${flex.between};
  align-items: flex-start;
  flex-direction: column;
  margin: 0 auto;
`
const AppContainer = styled.div`
  border-radius: 3px;
  margin-bottom: 1rem;
  width: 100%;
  overflow: hidden;
`
const App = styled.div`
  align-items: flex-start;
  flex-direction: column;
  border-radius: 3px;
  height: 100%;
  background-color: ${color.black};
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
  color: ${color.blue};
`
const AppDescription = styled.div``
const FooterContainer = styled.footer`
  padding: 1.5rem 1.25rem;
  ${device.tablet`padding: 1.25rem 1rem;`};
  width: 100%;
`

const Featured = ({ data }) => {
  const apps = data

  return (
    <FeaturedContainer id="apps">
      <Title>Apps</Title>

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
              <AppContainer key={i}>
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
                    <Download links={links} />
                    <AppDescription
                      dangerouslySetInnerHTML={{ __html: html }}
                    />
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
