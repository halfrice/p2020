import { theme } from "~styles"

const { color } = theme

const dark = {
  name: "dark",
  icon: "Moon",
  background: {
    primary: color.darker,
  },
  text: {
    primary: color.light,
  },
  title: {
    primary: color.darkSlate,
  },
  nav: {
    background: color.black + "F8",
    text: { primary: color.darkSlate, pristine: color.slate },
    icon: { primary: color.darkestSlate, pristine: color.darkerSlate },
    logo: {
      primary: color.darkestSlate,
      hover: color.darkSlate,
      pristine: color.darkerSlate,
    },
  },
  themer: {
    icon: { primary: color.redmoon, pristine: color.peach },
  },
  hero: {
    name: color.darkestSlate,
    title: color.darkerSlate,
    location: color.darkSlate,
  },
  apps: {
    background: color.black,
    media: color.dark,
    title: color.darkerSlate,
    description: color.light,
    technology: color.lighterSlate,
  },
  footer: {
    text: color.slate,
    links: color.lightRed,
  },
}

export default dark
