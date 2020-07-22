import React from "react";
import Layout from "../shared/component/layout";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./vitals.module.scss";
import { graphql, navigate } from "gatsby";
import { PostsData } from "../shared/models/post";
import PostList from "../shared/component/post-list";
import { IPostsData } from "../shared/interfaces/post";

interface PerspectivesProps {
  data: IPostsData;
}

const Modules = (props: PerspectivesProps) => {
  const postList: PostsData = new PostsData(props.data);

  return (
    <Layout>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col
            lg={10}
            className={[styles.header, "d-none d-lg-block p-0"].join(" ")}
          >
            <p className={["headline-1", styles.moduleTitle].join(" ")}>
              Módulos
            </p>
            <p className="headline-3">
              Lenguajes y ambientes de programación para ayudar en desarrollo e implementación de productos de datos.
            </p>
          </Col>
          <Col lg={10} className="d-block d-lg-none">
            <p
              className={[
                "headline-1 text-center",
                styles.moduleMobileTitle,
              ].join(" ")}
            >
              Módulos
            </p>
            <p className="headline-3">
              Lenguajes y ambientes de programación para ayudar en desarrollo e implementación de productos de datos.
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

export default Modules;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "modulo" } } }
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
