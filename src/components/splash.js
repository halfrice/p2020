import React, { useState, useEffect, useCallback } from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import anime from "animejs"
import styled from "styled-components"
import { device, mixins, theme } from "~styles"
import { IconLogo } from "~components/icons"

const { flex } = mixins
const { color } = theme

const SplashContainer = styled.div`
  ${flex.center};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`
const LogoContainer = styled.div`
  width: max-content;
  max-width: 100px;
  ${device.tablet`max-width: 80px;`};
  ${device.phone`max-width: 70px;`};
  transition: ${theme.transition};
  opacity: ${props => (props.isMounted ? 1 : 0)};
  svg {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
    fill: none;
    user-select: none;
    #circle {
      opacity: 0;
      stroke: ${color.lightGreen};
    }
    #n {
      opacity: 0;
      stroke: ${color.lightGreen};
    }
  }
`

const Splash = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false)

  const animate = useCallback(() => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    })

    loader
      .add({
        targets: "#logo #circle",
        delay: 500,
        duration: 2000,
        easing: "easeInOutQuart",
        strokeDashoffset: [anime.setDashoffset, 0],
        opacity: 1,
      })
      .add({
        targets: "#logo #n",
        duration: 800,
        easing: "easeInOutQuart",
        strokeDashoffset: [anime.setDashoffset, 0],
        opacity: 1,
      })
      .add({
        targets: "#logo",
        delay: 700,
        duration: 300,
        easing: "easeInOutQuart",
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: ".splash",
        duration: 200,
        easing: "easeInOutQuart",
        opacity: 0,
        zIndex: -1,
      })
  }, [finishLoading])

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10)
    animate()
    return () => clearTimeout(timeout)
  }, [animate])

  return (
    <SplashContainer className="splash">
      <Helmet bodyAttributes={{ class: `hidden` }} />
      <LogoContainer isMounted={isMounted}>
        <IconLogo />
      </LogoContainer>
    </SplashContainer>
  )
}

Splash.propTypes = {
  finishLoading: PropTypes.func.isRequired,
}

export default Splash
