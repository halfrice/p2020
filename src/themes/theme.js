import React, { useState } from "react"
import { ThemeProvider } from "styled-components"
import { dark, light } from "~themes"

export const ThemeContext = React.createContext()

const Theme = ({ children }) => {
  const [theme, setTheme] = useState(dark)

  const toggleTheme = () => {
    const inverse = theme.name === "light" ? dark : light
    setTheme(inverse)
  }

  const config = { theme, toggleTheme }

  return (
    <ThemeContext.Provider value={config} toggleTheme={toggleTheme}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default Theme
