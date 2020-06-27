import React, { Fragment } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import PostPreview from '../components/post-preview'
import SEO from "../components/seo";
import styles from './index.module.scss'
import "../global.scss";
import { Card, Row, Col, Container } from "react-bootstrap";
import Subscribe from "../components/subscribe";
import scientistIcon from '../assets/icon/data-scientist.svg'
import analystIcon from '../assets/icon/data-analyst.svg'
import biIcon from '../assets/icon/bi-analyst.svg'

interface Props {
  data: {
    allMarkdownRemark: any;
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const BlogIndex = ({ data }: Props) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={window.location}>
      <Container fluid>
        <LearningPaths></LearningPaths>
        <Row className="justify-content-md-center">
          <Col lg={10} xl={10}>
            <Row className={styles.explore}>
              <Col className={styles.title}>
                Explore
              </Col>
            </Row>

            {posts.map(({ node }: any, index: number) => {
              return (
                <Fragment>
                  <PostPreview 
                    key={node.frontmatter.title}
                    title={node.frontmatter.title}
                    date={node.frontmatter.date}
                    excerpt={node.frontmatter.description || node.excerpt}
                    type={node.frontmatter.type}
                    tags={node.frontmatter.tags}
                    featuredImage={node.frontmatter.featuredImage ? node.frontmatter.featuredImage.childImageSharp.fluid.src : null}
                    link={node.fields.slug}
                    extended={index == 0 ? true : false}
                  ></PostPreview>
                  {index == 4 ? <Subscribe></Subscribe> : ''}
                </Fragment>
              )
            })}

            <div className={styles.loadPosts}>
              Load More
            </div>

          </Col>
        </Row>
      </Container>
      <SEO title="All posts" />
    </Layout>
  );
};

const LearningPaths = () => {
  return (
    <Row className={["justify-content-md-center", styles.learningPaths].join(" ")}>
      <Col lg={12} xl={12} className={styles.title}>
        Learning paths
      </Col>
      <Col lg={12} xl={12} className={styles.cards}>
        <Card className={styles.card}>
          <Card.Body>
          <Card.Title className={styles.cardImage}><img src={scientistIcon}/></Card.Title>
          <Card.Subtitle className={styles.cardTitle}>Data Scientist</Card.Subtitle>
          <Card.Text className={styles.cardText}>
            With this path you will learn how to become a great data scientist.
          </Card.Text>
          </Card.Body>
        </Card>

        <Card className={styles.card}>
          <Card.Body>
          <Card.Title className={styles.cardImage}><img src={analystIcon}/></Card.Title>
          <Card.Subtitle className={styles.cardTitle}>Data Analyst</Card.Subtitle>
          <Card.Text className={styles.cardText}>
            With this path you will learn how to become a great data analyst.
          </Card.Text>
          </Card.Body>
        </Card>

        <Card className={styles.card}>
          <Card.Body>
          <Card.Title className={styles.cardImage}><img src={biIcon}/></Card.Title>
          <Card.Subtitle className={styles.cardTitle}>BI Analyst</Card.Subtitle>
          <Card.Text className={styles.cardText}>
            With this path you will learn how to become a great BI scientist.
          </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
