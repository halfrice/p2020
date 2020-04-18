import React from "react"
import PropTypes from "prop-types"
import {
  IconCodepen,
  IconContact,
  IconFacebook,
  IconHike,
  IconGithub,
  IconGoogle,
  IconLinkedin,
  IconMoon,
  IconSmartphone,
  IconSun,
  IconTwitter,
} from "~components/icons"

const FormattedIcon = ({ name }) => {
  switch (name) {
    // nav links
    case "About":
      return <IconHike />
    case "Apps":
      return <IconSmartphone />
    case "Contact":
      return <IconContact />

    case "Moon":
      return <IconMoon />
    case "Sun":
      return <IconSun />

    // social links
    case "Codepen":
      return <IconCodepen />
    case "Facebook":
      return <IconFacebook />
    case "Github":
      return <IconGithub />
    case "Google":
      return <IconGoogle />
    case "Linkedin":
      return <IconLinkedin />
    case "Twitter":
      return <IconTwitter />
    default:
      return <IconTwitter />
  }
}

FormattedIcon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default FormattedIcon
