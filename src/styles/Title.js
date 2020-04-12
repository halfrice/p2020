import styled from "styled-components"
import theme from "./theme.yaml"
import { device } from "~styles"

const { color, fontSize } = theme

const Title = styled.h2`
  color: ${color.lightGreen};
  font-size: ${fontSize.h3};
  ${device.tablet`font-size: ${fontSize.xxxl};`};
  ${device.phone`font-size: ${fontSize.xxl};`};
  font-weight: 600;
  white-space: nowrap;
`

export default Title
