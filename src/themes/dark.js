import { theme } from "~styles"

const { color } = theme

const dark = {
  name: "dark",
  icon: "Sun",
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
    background: color.black + "EE",
    text: { primary: color.darkSlate, pristine: color.slate },
    icon: { primary: color.darkestSlate, pristine: color.darkerSlate },
    logo: { primary: color.darkestSlate, pristine: color.darkerSlate },
  },
  themer: {
    icon: { primary: color.orange, pristine: color.yellow },
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
    description: color.lightSlate,
    technology: color.darkerSlate,
  },
  footer: {
    text: color.slate,
    links: color.darkerSlate,
  },
}

export default dark
