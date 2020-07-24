import { graphql } from "gatsby";

export const postsFragment = graphql`
  fragment PostsFragment on Query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt(pruneLength: 400)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            contentType
            topics
            type
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            author {
              id
              bio
              name
              twitter
            }
          }
        }
      }
    }
  }
`;
