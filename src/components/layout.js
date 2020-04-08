import React, { useState } from "react"
import styled from "styled-components"
import "normalize.css/normalize.css"
import { Footer, Nav, Splash } from "~components"
import { Globals } from "~styles"

const LayoutContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
  min-height: 100vh;
`
const Display = styled.div``

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <LayoutContainer id="layout">
      <Globals />

      {isLoading ? (
        <Splash finishLoading={() => setIsLoading(false)} />
      ) : (
        <Display id="display">
          <Nav />
          {children}
          <Footer />
        </Display>
      )}
    </LayoutContainer>
  )
}

export default Layout
