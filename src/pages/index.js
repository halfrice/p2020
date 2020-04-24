import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { About, Apps, Contact, Featured, Hero, Layout } from "~components"
import { Main } from "~styles"

const IndexPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Main>
        <Hero data={data.hero.edges} />
        <About data={data.about.edges} />
        <Featured data={data.featured.edges} />
        <Apps data={data.apps.edges} />
        <Contact data={data.contact.edges} />
      </Main>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
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
                fluid(maxWidth: 360, maxHeight: 360, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
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
                fluid(maxWidth: 900, maxHeight: 506, quality: 90) {
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
    featured: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/featured/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            appleStore
            date
            github
            googlePlay
            image {
              childImageSharp {
                fluid(maxWidth: 1080, maxHeight: 506, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            tech
            title
            url
            video
            youtube
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
            appleStore
            date
            github
            googlePlay
            image {
              childImageSharp {
                fluid(maxWidth: 640, maxHeight: 360, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            show
            tech
            title
            url
            youtube
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
