import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Layout } from "~components"
import { theme, Title } from "~styles"

const { color } = theme

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const TitleRed = styled(Title)`
  color: ${color.red};
`
const Description = styled.h3`
  color: ${color.lightSlate};
`
const HomeLink = styled(Link)`
  color: ${color.lightGreen};
  text-decoration: underline;
`

const NotFoundPage = () => (
  <Layout>
    <NotFoundContainer>
      <TitleRed>Error 404</TitleRed>
      <Description>Page Not Found</Description>
      <HomeLink to="/">Home</HomeLink>
    </NotFoundContainer>
  </Layout>
)

export default NotFoundPage
