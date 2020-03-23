import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Hero, Layout } from "~components"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero data={data.hero.edges[0].node} />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const indexPageQuery = graphql`
  {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            name
            title
            location
          }
          html
        }
      }
    }
  }
`
