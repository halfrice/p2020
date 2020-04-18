import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { device, mixins, theme } from "~styles"

const { flex } = mixins
const { font, fontSize } = theme

const TechnologyContainer = styled.div``
const List = styled.ul`
  ${flex.start};
  flex-grow: 1;
  flex-wrap: wrap;
  width: 100%;
`
const Item = styled.li`
  border-radius: 3px;
  margin-bottom: 0.2rem;
  margin-left: -0.5rem;
  padding: 0 0.5rem;
  color: ${props => props.theme.apps.technology};
  font-family: ${font.ubuntuMono};
  font-size: ${fontSize.xxs};
  ${device.tablet`font-size ${fontSize.xxxs};`};
  white-space: nowrap;
`

const Technology = ({ tech }) => {
  return (
    <TechnologyContainer>
      <List>
        {tech.map((tech, i) => (
          <Item key={i}>{tech}</Item>
        ))}
      </List>
    </TechnologyContainer>
  )
}

Technology.propTypes = {
  tech: PropTypes.array.isRequired,
}

export default Technology
