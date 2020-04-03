import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { About, Apps, Contact, Hero, Layout } from "~components"
import { Main } from "~styles"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Main>
        <Hero data={data.hero.edges[0].node} />
        <About data={data.about.edges[0].node} />
        <Apps data={data.apps.edges} />
        <Contact data={data.contact.edges[0].node} />
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
            avatar {
              childImageSharp {
                fluid(maxWidth: 360, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            name
            title
            location
          }
          html
        }
      }
    }
    about: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about/" } }
    ) {
      edges {
        node {
          frontmatter {
            image {
              childImageSharp {
                fluid(maxWidth: 900, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            title
          }
          html
        }
      }
    }
    apps: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/apps/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            image {
              childImageSharp {
                fluid(maxWidth: 640, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            title
            date
            url
            github
            youtube
            appleStore
            googlePlay
            tech
            show
          }
          html
        }
      }
    }
    contact: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/contact/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`
