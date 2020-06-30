import React from 'react'
import PostPreview from './post-preview';
import { useStaticQuery, graphql } from "gatsby";

interface Props {
    //tags: Array<string>
}

const RelatedPosts = (tags: Props) => {
    const { site } = useStaticQuery(
        graphql`
        query {
            site {
                siteMetadata {
                    title
                }   
            }
            allMarkdownRemark(limit: 1000, sort: { fields: [frontmatter___date], order: DESC }) {
              edges {
                node {
                  excerpt(pruneLength: 400)
                  fields {
                    slug
                  }
                  frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                    tags
                    type
                    featuredImage {
                      childImageSharp {
                        fluid(maxWidth: 800) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `
      );

      console.log(site)
      return (
          <div></div>
      )
}

export default RelatedPosts