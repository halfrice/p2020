import React from "react"
import styled from "styled-components"
import "normalize.css/normalize.css"
import { Footer, Nav } from "~components"
import { Globals } from "~styles"

const LayoutContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
  min-height: 100vh;
`

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Globals />
      <Nav />
      {children}
      <Footer />
    </LayoutContainer>
  )
}

export default Layout
