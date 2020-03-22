import React from "react"
import "normalize.css/normalize.css"
import { Globals } from "~styles"

const Layout = ({ children }) => {
  return (
    <>
      <Globals />
      <h2>Layout</h2>
      {children}
    </>
  )
}

export default Layout
