import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { Download, Video, Technology } from "~components"
import { device, mixins, Section, theme } from "~styles"
import { scrollreveal } from "~utils"
import { scrollrevealConfig } from "~config"
import { IconFolder } from "~components/icons"

const { color, fontSize } = theme
const { flex } = mixins

const AppsContainer = styled(Section)`
  ${flex.center};
  align-items: flex-start;
  flex-direction: column;
  max-width: 64rem;
  padding-top: 0;
  ${device.tablet`padding-top: 0;`};
  color: ${color.lightSlate};
`
const TransitionContainer = styled(TransitionGroup)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  ${device.desktop`grid-template-columns: repeat(2, 1fr);`};
  ${device.tablet`grid-template-columns: repeat(2, 1fr);`};
  ${device.phone`grid-template-columns: repeat(1, 1fr);`};
  ${device.smallPhone`grid-template-columns: repeat(1, 1fr);`};
  grid-gap: 1rem;
  ${device.tablet`grid-gap: 0.75rem;`};
`
const App = styled.div`
  border-radius: 3px;
  overflow: hidden;
`
const AppInner = styled.div`
  ${flex.between};
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
  background-color: ${color.black};
`
const MediaContainer = styled.div`
  position: relative;
  width: 100%;
`
const Media = styled.div`
  svg {
    fill: ${color.darkerSlate};
    width: ${fontSize.h1};
    height: ${fontSize.h1};
  }
`
const IconContainer = styled.div`
  padding-bottom: 56.25%;
  background-color: ${color.dark};
  overflow: hidden;
`
const FolderContainer = styled.div`
  ${flex.center};
  align-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${color.lightBlack};
`
const ContentContainer = styled.div`
  margin: 0;
  padding: 1.5rem 1.25rem 1rem;
  ${device.tablet`padding: 1.25rem 1rem 1rem;`};
  width: 100%;
  height: 100%;
`
const AppName = styled.h5`
  margin: 0 0 1rem;
  color: ${color.darkSlate};
  font-size: ${fontSize.lg};
  ${device.tablet`font-size: ${fontSize.md};`};
`
const AppDescription = styled.div`
  margin-bottom: 1rem;
  color: ${color.light};
  font-size: ${fontSize.md};
  ${device.tablet`font-size: ${fontSize.sm};`};
`
const FooterContainer = styled.footer`
  padding: 0 1.25rem 1.5rem;
  ${device.tablet`padding: 0 1rem 1.25rem;`};
  width: 100%;
`

const Apps = ({ data }) => {
  const apps = data.filter(({ node }) => node.frontmatter.show === "true")

  const revealApps = useRef([])
  useEffect(() => {
    revealApps.current.forEach((ref, i) =>
      scrollreveal.reveal(ref, scrollrevealConfig((i + 2) * 100))
    )
  }, [])

  return (
    <AppsContainer id="apps">
      <TransitionContainer>
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
              <CSSTransition
                key={i}
                classNames="fadeup"
                timeout={i * 300}
                exit={false}
              >
                <App
                  ref={app => (revealApps.current[i] = app)}
                  style={{
                    transitionDelay: `${(i + 1) * 100}ms`,
                  }}
                >
                  <AppInner>
                    <MediaContainer>
                      <Media>
                        {video ? (
                          <Video url={video} title={title} />
                        ) : image ? (
                          <Img
                            fluid={image.childImageSharp.fluid}
                            objectPosition="50% 50%"
                          />
                        ) : (
                          <IconContainer>
                            <FolderContainer>
                              <IconFolder />
                            </FolderContainer>
                          </IconContainer>
                        )}
                      </Media>
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
                  </AppInner>
                </App>
              </CSSTransition>
            )
          })}
      </TransitionContainer>
    </AppsContainer>
  )
}

Apps.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Apps
