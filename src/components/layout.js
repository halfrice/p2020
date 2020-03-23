import React from "react"
import "normalize.css/normalize.css"
import { Globals } from "~styles"

const Layout = ({ children }) => {
  return (
    <>
      <Globals />
      {children}
    </>
  )
}

export default Layout
