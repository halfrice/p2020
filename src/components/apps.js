import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { Video } from "~components"
import { device, mixins, Section, theme } from "~styles"
import { IconFolder } from "~components/icons"

const { color, fontSize } = theme
const { flex } = mixins

const AppsContainer = styled(Section)`
  ${flex.center};
  align-items: flex-start;
  flex-direction: column;
  max-width: 75rem;
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
  height: 100%;
  align-self: start;
  transition: ${theme.transition};
  cursor: default;
  &:hover,
  &:focus {
    outline: 0;
  }
`
const AppInner = styled.div`
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
const Media = styled.div`
  svg {
    fill: ${color.blue};
    width: 50%;
    height: 50%;
  }
`
const IconContainer = styled.div`
  padding-bottom: 56.25%;
  background-color: ${color.dark};
  overflow: hidden;
`
const Icon = styled.iframe`
  border: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  padding: 1.5rem 1.25rem;
  ${device.tablet`padding: 1.25rem 1rem;`};
  width: 100%;
`
const AppName = styled.h5`
  margin: 0 0 1rem;
  color: ${color.blue};
`
const AppDescription = styled.div`
  margin-bottom: 2rem;
`
const AppTech = styled.ul`
  ${flex.end};
  flex-grow: 1;
  flex-wrap: wrap;
  width: 100%;
  li {
    border-radius: 3px;
    padding: 0 6px;
    margin-bottom: 3px;
    color: ${color.orange};
    font-size: ${fontSize.xs};
    white-space: nowrap;
  }
`

const Apps = ({ data }) => {
  const apps = data.filter(({ node }) => node.frontmatter.show === "true")

  return (
    <AppsContainer id="apps">
      <TransitionContainer>
        {apps &&
          apps.map(({ node }, i) => {
            const { frontmatter, html } = node
            const { image, tech, title, video } = frontmatter
            return (
              <CSSTransition
                key={i}
                classNames="fadeup"
                timeout={i * 300}
                exit={false}
              >
                <App
                  style={{
                    transitionDelay: `${i * 100}ms`,
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
                            <Icon />
                          </IconContainer>
                        )}
                      </Media>
                    </MediaContainer>
                    <ContentContainer>
                      <AppName>{title}</AppName>
                      <AppDescription
                        dangerouslySetInnerHTML={{ __html: html }}
                      />
                      {tech && (
                        <AppTech>
                          {tech.map((tech, i) => (
                            <li key={i}>{tech}</li>
                          ))}
                        </AppTech>
                      )}
                    </ContentContainer>
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
