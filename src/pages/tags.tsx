import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { PageProps, Link, graphql } from "gatsby"

interface Data {
  allMarkdownRemark: {
    group: {
      fieldValue: string
      edges: {
        node: {
          fields: {
            slug: string
          }
          frontmatter: {
            title: string
          }
        }
      } []
    } []
  },
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const TagsPage = ({ data, location}: PageProps<Data>) => {
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout location={location} title={siteTitle}>
            <div>
            <h1>Tags</h1>
            <ul>
                {data.allMarkdownRemark.group.map(tag => (
                <li key={tag.fieldValue}>
                    {/* <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    {tag.fieldValue} ({tag.totalCount})
                    </Link> */}
                    <h2>{tag.fieldValue}</h2>
                    {tag.edges.map(edge => (
                        <Link to={edge.node.fields.slug}>
                            <p>{edge.node.frontmatter.title}</p>
                        </Link>
                    ))}
                </li>
                ))}
            </ul>
            </div>
        </Layout>
    )
  
}

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
        edges {
            node {
                fields {
                    slug
                }
                frontmatter {
                  title
                }
            }
        }
      }
    }
  }
`