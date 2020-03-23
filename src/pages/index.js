import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Hero, Layout } from "~components"
import { Main } from "~styles"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Main>
        <Hero data={data.hero.edges[0].node} />
      </Main>
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
