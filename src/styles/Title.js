import styled from "styled-components"
import { device, theme } from "~styles"

const { fontSize } = theme

const Title = styled.h2`
  color: ${props => props.theme.title.primary};
  font-size: ${fontSize.h3};
  ${device.tablet`font-size: ${fontSize.xxxl};`};
  ${device.phone`font-size: ${fontSize.xxl};`};
  font-weight: 600;
  white-space: nowrap;
`

export default Title
