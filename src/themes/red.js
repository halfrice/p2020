import { theme } from "~styles"

const { color } = theme

const red = {
  name: "red",
  icon: "Moon",
  background: {
    primary: color.red,
  },
  text: {
    primary: color.darkest,
  },
  title: {
    primary: color.black,
  },
  nav: {
    background: color.black + "EE",
    text: { primary: color.darkerSlate, pristine: color.darkest },
    icon: { primary: color.darkestSlate, pristine: color.darkest },
    logo: { primary: color.darkestSlate, pristine: color.darkest },
  },
  themer: {
    icon: { primary: color.orange, pristine: color.yellow },
  },
  hero: {
    name: color.black,
    title: color.darker,
    location: color.dark,
  },
  apps: {
    background: color.black,
    media: color.dark,
    title: color.darkerSlate,
    description: color.lightSlate,
    technology: color.darkestSlate,
  },
  footer: {
    text: color.darker,
    links: color.black,
  },
}

export default red
