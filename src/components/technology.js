import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { mixins, theme } from "~styles"

const { flex } = mixins
const { color, fontSize } = theme

const TechnologyContainer = styled.div``
const List = styled.ul`
  ${flex.end};
  flex-grow: 1;
  flex-wrap: wrap;
  width: 100%;
`
const Item = styled.li`
  border-radius: 3px;
  padding: 0 6px;
  margin-bottom: 3px;
  color: ${color.lightGrey};
  font-size: ${fontSize.xs};
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
