import { theme } from "~styles"

const { color } = theme

const light = {
  name: "light",
  icon: "Moon",
  background: {
    primary: color.lightest,
  },
  text: {
    primary: color.darkerestSlate,
  },
  title: {
    primary: color.darkestSlate,
  },
  nav: {
    background: color.black + "EE",
    text: { primary: color.lightSlate, pristine: color.darkerSlate },
    icon: { primary: color.darkerSlate, pristine: color.darkestSlate },
    logo: { primary: color.darkerSlate, pristine: color.darkestSlate },
  },
  themer: {
    icon: { primary: color.lightPink, pristine: color.redmoon },
  },
  hero: {
    name: color.darkestSlate,
    title: color.darkerSlate,
    location: color.darkSlate,
  },
  apps: {
    background: color.light,
    media: color.lighter,
    title: color.darkerSlate,
    description: color.darkerestSlate,
    technology: color.darkSlate,
  },
  footer: {
    text: color.darkerSlate,
    links: color.darkestSlate,
  },
}

export default light
