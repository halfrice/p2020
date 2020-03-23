import styled from "styled-components"
import mixins from "./mixins"

const { padding } = mixins

const Main = styled.main`
  ${padding.left};
  ${padding.right};
  margin: 0 auto;
  width: 100%;
`

export default Main
