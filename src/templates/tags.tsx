import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, navigate } from "gatsby";
import Layout from "../components/layout";
import PostPreview from "../shared/component/post-preview";
import { Row, Col, Container } from "react-bootstrap";
import styles from './tags.module.scss'

interface Props {
  data: {
    allMarkdownRemark: any;
  };
  pageContext: any;
}

const Tags = ({ pageContext, data }: Props) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;

  const allTags = () => {
    navigate(`/tags`)
  }

  return (
    <Layout location={window.location}>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col lg={12} xl={12}>
            <h1>{tagHeader}</h1>
          </Col>
          <Col lg={12} xl={12}>
            {edges.map(({ node }: any, index: number) => {
              const { slug } = node.fields;
              const { title } = node.frontmatter;
              return (
                <PostPreview 
                  key={node.fields}
                  title={node.frontmatter.title}
                  date={node.frontmatter.date}
                  excerpt={node.frontmatter.description || node.excerpt}
                  type={node.frontmatter.type}
                  tags={node.frontmatter.tags}
                  featuredImage={node.frontmatter.featuredImage ? node.frontmatter.featuredImage.childImageSharp.fluid.src : null}
                  link={node.fields.slug}
                  extended={index == 0 ? true : false}
                ></PostPreview>
              );
            })}
          </Col>
          <Col lg={12} xl={12}>
            <div className={styles.allTags} onClick={() => allTags()}>
              All tags
            </div>
          </Col>
        </Row>
      </Container>
      
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
`;
