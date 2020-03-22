const config = require("./src/config/index")
const { site, manifest } = config

module.exports = {
  siteMetadata: {
    title: site.title,
    description: site.description,
    siteUrl: site.url,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: manifest.name,
        short_name: manifest.shortName,
        start_url: manifest.startUrl,
        background_color: manifest.backgroundColor,
        theme_color: manifest.themeColor,
        display: manifest.display,
        lang: manifest.lang,
        icon: "./src/images/icons/logo.png",
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
  ],
}
