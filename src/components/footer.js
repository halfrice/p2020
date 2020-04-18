import React from "react"
import styled from "styled-components"
import { Clock } from "~components"
import { device, Main, mixins, theme } from "~styles"
import { footerLinks } from "~config"

const { font, fontSize, color } = theme
const { flex } = mixins

const FooterContainer = styled(Main)`
  ${flex.center};
  background-color: ${color.lightBlack};
  font-family: ${font.ubuntuMono};
  font-size: ${fontSize.xxs};
  ${device.tablet`font-size: ${fontSize.xxs};`};
  color: ${props => props.theme.footer.text};
`
const FooterInner = styled.div`
  ${flex.between};
  ${device.tablet`${flex.center};`};
  flex-direction: row;
  ${device.tablet`flex-direction: column;`};
  margin: 0;
  ${device.tablet`padding: 3rem 0;`};
  ${device.phone`padding: 1.5rem 0;`};
  width: 100%;
  max-width: 64rem;
  height: 100px;
  ${device.tablet`height: auto;`};
`
const LegaleseContainer = styled.div`
  ${flex.start};
  padding: 0.375rem 0;
  width: 33%;
  ${device.tablet`width: 100%;`};
`
const Legalese = styled.div``
const Links = styled.div`
  ${flex.center};
  ${device.tablet`${flex.start};`};
  width: 34%;
  ${device.tablet`width: 100%;`}
`
const Link = styled.a`
  ${flex.center};
  ${device.tablet`:first-of-type { margin-left: -0.625rem; }`};
  padding: 0.5rem 0.75rem;
  ${device.tablet`padding: 0.5rem 0.625rem;`}
  color: ${props => props.theme.footer.links};
  transition: ${theme.shortTransition};
  &:active,
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`
const ClockContainer = styled.div`
  ${flex.end};
  ${device.tablet`${flex.start}`};
  padding: 0.375rem 0;
  width: 33%;
  ${device.tablet`width: 100%;`};
  text-align: right;
  ${device.phone`text-align: left;`};
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInner>
        <LegaleseContainer>
          <Legalese>© {new Date().getFullYear()} Corporation Inc</Legalese>
        </LegaleseContainer>
        <Links>
          {footerLinks &&
            footerLinks.map(({ name, url }, i) => (
              <Link
                key={i}
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={name}
              >
                {name}
              </Link>
            ))}
        </Links>
        <ClockContainer>
          <Clock />
        </ClockContainer>
      </FooterInner>
    </FooterContainer>
  )
}

export default Footer
