import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import "normalize.css/normalize.css"
import { Footer, Nav, Seo, Splash } from "~components"
import { Globals } from "~styles"
import { Theme } from "~themes"

import "typeface-ubuntu"
import "typeface-ubuntu-mono"

if (typeof window !== "undefined") {
  require("smooth-scroll")("a[href*='#']")
}

const LayoutContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
  min-height: 100vh;
`
const Display = styled.div``

const Layout = ({ children, location }) => {
  const [isLoading, setIsLoading] = useState(false)

  const isHome = location.pathname === "/"

  useEffect(() => {
    if (isLoading) {
      return
    }
    if (location.hash) {
      const id = location.hash.substring(1)
      setTimeout(() => {
        const e = document.getElementById(id)
        if (e) {
          e.scrollIntoView()
          e.focus()
        }
      }, 0)
    }
  }, [isLoading, location])

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
        <Theme>
          <LayoutContainer id="layout">
            <Seo metadata={site.siteMetadata} />
            <Globals />

            {isLoading && isHome ? (
              <Splash finishLoading={() => setIsLoading(false)} />
            ) : (
              <Display id="display">
                <Nav isHome={isHome} />
                {children}
                <Footer />
              </Display>
            )}
          </LayoutContainer>
        </Theme>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

export default Layout
