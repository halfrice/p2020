import React from "react"
import styled from "styled-components"
import { Layout } from "~components"
import { Title, theme } from "~styles"

const { color } = theme

const TitlePurple = styled(Title)`
  color: ${color.darkPurple};
`

const IndexPage = () => (
  <Layout>
    <TitlePurple>P2020</TitlePurple>
  </Layout>
)

export default IndexPage
