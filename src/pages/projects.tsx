import React, { Component } from "react";
import Layout from "../shared/component/layout";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./vitals.module.scss";
import { graphql, navigate } from "gatsby";
import { PostsData } from "../shared/models/post";
import PostList from "../shared/component/post-list";
import { IPostsData } from "../shared/interfaces/post";

interface ProjectProps {
  data: IPostsData;
}

const Projects = (props: ProjectProps) => {
  const postList: PostsData = new PostsData(props.data);

  return (
    <Layout>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col
            lg={10}
            className={[styles.header, "d-none d-lg-block"].join(" ")}
          >
            <p className={["headline-1", styles.projectTitle].join(" ")}>
              Proyectos
            </p>
            <p className="headline-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
          <Col lg={10} className="d-block d-lg-none">
            <p
              className={[
                "headline-1 text-center",
                styles.moduleProjectTitle,
              ].join(" ")}
            >
              Proyectos
            </p>
            <p className="headline-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
          <Col
            lg={10}
            style={{ marginTop: "5vh" }}
            className="p-0 d-none d-lg-block"
          >
            <PostList list={postList}></PostList>
          </Col>
          <Col
            xs={12}
            sm={12}
            style={{ marginTop: "5vh" }}
            className="p-0 d-block d-lg-none"
          >
            <PostList list={postList} mobile={true}></PostList>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Projects;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "proyecto" } } }
    ) {
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
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            author {
              id
              name
              twitter
              image {
                childImageSharp {
                  fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
