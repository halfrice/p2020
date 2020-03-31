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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              quality: 90,
              backgroundColor: "transparent",
            },
          },
        ],
      },
    },
  ],
}
