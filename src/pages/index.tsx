import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import PostPreview from '../components/post-preview'
import SEO from "../components/seo";
import styles from './index.module.scss'
import "../global.scss";
import { Card, Row, Col, Container } from "react-bootstrap";

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
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  const mockPost = {
    title: "Getting and Cleaning Data",
    date: "June 10, 2020",
    contentPreview: "In this post you will get an introduction to the main tools and ideas in the data scientist's toolbox. The course gives an overview of the data, questions, and tools that data analysts and data scientists work with…",
    postTypes: ['Article', 'Video'],
    tags: ['Data Science', 'AI', 'Business'],
    imagePath: "https://picsum.photos/500/700"
  }

  return (
    <Layout location={window.location} title={siteTitle}>
      <Container fluid>
        <LearningPaths></LearningPaths>
        <Row className="justify-content-md-center">
          <Col lg={10} xl={10}>
            <Row className={styles.explore}>
              <Col className={styles.title}>
                Explore
              </Col>
            </Row>
            <PostPreview post={mockPost} extended={true}></PostPreview>
            <PostPreview post={mockPost}></PostPreview>
            <PostPreview post={mockPost}></PostPreview>
            <PostPreview post={mockPost}></PostPreview>
            <PostPreview post={mockPost}></PostPreview>
          </Col>
        </Row>
      </Container>
      <SEO title="All posts" />
      {/* {posts.map(({ node }: any) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <div key={node.fields.slug}>
            <h3
              style={{
                marginBottom: 1 / 4,
              }}
            >
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </div>
        );
      })} */}
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
          <Card.Title className={styles.cardImage}><img src={"icon/data-scientist.svg"}/></Card.Title>
          <Card.Subtitle className={styles.cardTitle}>Data Scientist</Card.Subtitle>
          <Card.Text className={styles.cardText}>
            With this path you will learn how to become a great data scientist.
          </Card.Text>
          </Card.Body>
        </Card>

        <Card className={styles.card}>
          <Card.Body>
          <Card.Title className={styles.cardImage}><img src={"icon/data-analyst.svg"}/></Card.Title>
          <Card.Subtitle className={styles.cardTitle}>Data Analyst</Card.Subtitle>
          <Card.Text className={styles.cardText}>
            With this path you will learn how to become a great data analyst.
          </Card.Text>
          </Card.Body>
        </Card>

        <Card className={styles.card}>
          <Card.Body>
          <Card.Title className={styles.cardImage}><img src={"icon/bi-analyst.svg"}/></Card.Title>
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
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
