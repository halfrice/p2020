import React, { useState } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import "normalize.css/normalize.css"
import { Footer, Nav, Seo, Splash } from "~components"
import { Globals } from "~styles"

import "typeface-ubuntu"
import "typeface-ubuntu-mono"

const LayoutContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
  min-height: 100vh;
`
const Display = styled.div``

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              description
              title
              url
            }
          }
        }
      `}
      render={({ site }) => (
        <LayoutContainer id="layout">
          <Seo metadata={site.siteMetadata} />
          <Globals />

          {isLoading ? (
            <Splash finishLoading={() => setIsLoading(false)} />
          ) : (
            <Display id="display" className="display">
              <Nav />
              {children}
              <Footer />
            </Display>
          )}
        </LayoutContainer>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
