import React from "react";
import { Link, graphql, navigate } from "gatsby";
import Layout from "../shared/component/layout";
import PostPreview from "../shared/component/post-preview";
import { Row, Col, Container } from "react-bootstrap";
import styles from './tags.module.scss'

interface Props {
  data: {
    allMarkdownRemark: any;
  };
  pageContext: {
    topic: string
  };
}

const Topics = ({ pageContext, data }: Props) => {
  const { topic } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const topicHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } for ${topic}`;

  const allTopics = () => {
    navigate(`/topics`)
  }

  return (
    <Layout>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col lg={12} xl={12}>
            <h1>{totalCount} post{totalCount ===1 ? "" : "s"} for <span style={{ textTransform: "capitalize"}}>{topic}</span></h1>
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
                  contentType={node.frontmatter.contentType}
                  tags={node.frontmatter.tags}
                  featuredImage={node.frontmatter.featuredImage ? node.frontmatter.featuredImage.childImageSharp.fluid.src : null}
                  link={node.fields.slug}
                  extended={index == 0 ? true : false}
                ></PostPreview>
              );
            })}
          </Col>
          <Col lg={12} xl={12}>
            <div className={styles.allTags} onClick={() => allTopics()}>
              All topics
            </div>
          </Col>
        </Row>
      </Container>
      
    </Layout>
  );
};

export default Topics;

export const pageQuery = graphql`
  query($topic: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { topics: { in: [$topic] } } }
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
            topics
            contentType
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
