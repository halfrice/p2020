import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Layout } from "~components"
import { Main, mixins, theme, Section, Title } from "~styles"

const { color } = theme
const { flex } = mixins

const NotFoundContainer = styled(Section)`
  ${flex.center};
  flex-direction: column;
  width: 100%;
  max-width: 64rem;
  min-height: calc(100vh - 100px);
`
const NotFoundWrapper = styled.div`
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
    <Main>
      <NotFoundContainer>
        <NotFoundWrapper>
          <TitleRed>Error 404</TitleRed>
          <Description>Page Not Found</Description>
          <HomeLink to="/">Home</HomeLink>
        </NotFoundWrapper>
      </NotFoundContainer>
    </Main>
  </Layout>
)

export default NotFoundPage
