import React from "react"
import PropTypes from "prop-types"
import {
  IconCodepen,
  IconFacebook,
  IconGithub,
  IconGoogle,
  IconLinkedin,
  IconTwitter,
} from "~components/icons"

const FormattedIcon = ({ name }) => {
  switch (name) {
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
