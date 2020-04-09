import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import config from "~config"
import favicon from "~images/icons/favicon.ico"

const Seo = ({ metadata }) => {
  return (
    <Helmet>
      <html lang="en" prefix="og: http://ogp.me/ns#" />
      <title itemProp="name" lang="en">
        {metadata.title}
      </title>
      <link rel="shortcut icon" href={favicon} />
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={config.site.keywords} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metadata.url} />
      <meta property="og:site_name" content={metadata.title} />
    </Helmet>
  )
}

Seo.propTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Seo
