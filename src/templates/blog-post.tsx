import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../shared/component/layout";
import SEO from "../components/seo";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./blog-post.module.scss";
import Tags from "../shared/component/post-tags";
import PostType from "../shared/component/post-type";
import Subscribe from "../shared/component/subscribe";
import RelatedPosts from '../shared/component/related-posts'

interface Props {
  data: {
    markdownRemark: any;
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
  pageContext: any;
}

const BlogPostTemplate = ({ data, pageContext }: Props) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={window.location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <Container fluid className="p-0">
        <Row className={styles.row}>
          {post.frontmatter.featuredImage ? (
            <Col lg={12} xl={12} className="p-0">
              <div className={styles.jumbotron}>
                <img
                  src={post.frontmatter.featuredImage.childImageSharp.fluid.src}
                  alt="post image"
                />
              </div>
            </Col>
          ) : (
            ""
          )}
          <Col lg={12} xl={12} className={styles.header}>
            <h1>{post.frontmatter.title}</h1>
            <p className={styles.date}>{post.frontmatter.date}</p>
            <div className={styles.metaContainer}>
              {post.frontmatter.type ? (
                <PostType types={post.frontmatter.type}></PostType>
              ) : (
                ""
              )}
              {post.frontmatter.tags ? (
                <Tags tags={post.frontmatter.tags}></Tags>
              ) : (
                ""
              )}
            </div>
          </Col>
          <Col lg={12} xl={12} className={styles.content}>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </Col>
          <Col lg={12} xl={12} className={styles.subscribe}>
            <Subscribe></Subscribe>
          </Col>
          <Col lg={12} xl={12}>
            <RelatedPosts></RelatedPosts>
          </Col>
          <Col lg={12} xl={12}>
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author {
          name
          summary
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
        type
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
