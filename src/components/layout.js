import React from "react"
import styled from "styled-components"
import "normalize.css/normalize.css"
import { Globals, Title, theme } from "~styles"

const { color } = theme

const TitleGreen = styled(Title)`
  color: ${color.green};
`

const Layout = ({ children }) => {
  return (
    <>
      <Globals />
      <TitleGreen>Layout</TitleGreen>
      {children}
    </>
  )
}

export default Layout
