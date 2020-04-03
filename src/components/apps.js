import React from "react"
import PropTypes from "prop-types"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"
import { device, mixins, Section, theme } from "~styles"

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
  grid-template-columns: repeat(auto-fill, minmax(22.5rem, 1fr));
  ${device.desktop`grid-template-columns: repeat(auto-fill, minmax(18.75rem, 1fr));`};
  ${device.tablet`grid-template-columns: repeat(auto-fill, minmax(15.625rem, 1fr));`};
  ${device.phone`grid-template-columns: repeat(auto-fill, minmax(12.5rem, 1fr));`};
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

const ContentContainer = styled.div`
  padding: 2rem 1.75rem;
  ${device.tablet`padding: 1.25rem 1rem;`};
  width: 100%;
  height: 100%;
`
const AppName = styled.h5`
  margin-bottom: 1rem;
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
            const { title, tech } = frontmatter
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
