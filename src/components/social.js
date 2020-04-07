import React, { useEffect, useRef } from "react"
import { socialMedia } from "~config"
import { FormattedIcon } from "~components/icons"
import styled from "styled-components"
import { device, mixins, theme } from "~styles"
import { scrollreveal } from "~utils"
import { scrollrevealConfig } from "~config"

const { color } = theme
const { flex } = mixins

const SocialContainer = styled.div`
  ${flex.center};
  margin-top: 3rem;
  ${device.tablet`margin-top: 2.5rem;`};
`
const Grid = styled.div`
  display: inline-grid;
  grid-template-columns: 1 1fr;
  grid-template-rows: auto;
  margin: 0 auto;
  overflow: hidden;
`
const Link = styled.a`
  ${flex.start};
  padding: 0.5rem 0.75rem;
  min-height: 3rem;
  transition: ${theme.shortTransition};
  &:active,
  &:hover,
  &:focus {
    opacity: 0.5;
  }
  svg {
    fill: ${color.slate};
    fill: ${props => (props.color ? props.color : color.darkSlate)};
    width: 2rem;
    ${device.tablet`width: 1.75rem;`};
    height: 2rem;
    ${device.tablet`height: 1.75rem;`};
  }
`
const Icon = styled.div`
  ${flex.end};
`
const Username = styled.div`
  ${flex.start};
  padding: 0.625rem;
  margin-left: 0.625rem;
  color: ${props => (props.color ? props.color : color.darkSlate)};
`

const Social = () => {
  const revealContainer = useRef(null)

  useEffect(() => {
    scrollreveal.reveal(revealContainer.current, scrollrevealConfig())
  }, [])

  return (
    <SocialContainer ref={revealContainer}>
      <Grid>
        {socialMedia &&
          socialMedia.map(({ name, url, color, username }, i) => (
            <React.Fragment key={i}>
              <Link
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                color={color}
                aria-label={name}
              >
                <Icon>
                  <FormattedIcon name={name} />
                </Icon>
                <Username color={color}>{username}</Username>
              </Link>
            </React.Fragment>
          ))}
      </Grid>
    </SocialContainer>
  )
}

export default Social
