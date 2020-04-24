import { theme } from "~styles"

const { color } = theme

const light = {
  name: "light",
  icon: "Sun",
  background: {
    primary: color.lightest,
  },
  text: {
    primary: color.dark,
  },
  title: {
    primary: color.darkerSlate,
  },
  nav: {
    background: color.white + "F8",
    text: { primary: color.darkerSlate, pristine: color.darkestSlate },
    icon: { primary: color.darkerSlate, pristine: color.darkestSlate },
    logo: {
      primary: color.darkerSlate,
      hover: color.darkSlate,
      pristine: color.darkestSlate,
    },
  },
  themer: {
    icon: { primary: color.peach, pristine: color.redmoon },
  },
  hero: {
    name: color.darkestSlate,
    title: color.darkerSlate,
    location: color.darkSlate,
  },
  apps: {
    background: color.light,
    media: color.white,
    title: color.darkerSlate,
    description: color.darkerestSlate,
    technology: color.darkSlate,
  },
  footer: {
    text: color.dark,
    links: color.lightRed,
  },
}

export default light
