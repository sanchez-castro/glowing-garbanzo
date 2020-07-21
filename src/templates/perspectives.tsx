import React from "react";
import { graphql } from "gatsby";
import Layout from "../shared/component/layout";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./perspectives.module.scss";
import banner from "../assets/image/philosophy-banner.jpg";
import PostList from "../shared/component/post-list";
import { PostsData } from "../shared/models/post";

const AuthorPerspectives = (props: any) => {
  const author =
    props.data.allMarkdownRemark.group[0].nodes[0].frontmatter.author;
  const posts = new PostsData(props.data);
  return (
    <Layout>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col lg={10} className="d-none d-lg-block">
            <Row className={styles.header}>
              <Col lg={1} className="p-0">
                {author.image ? (
                  <img
                    className={styles.avatar}
                    src={author.image.childImageSharp.fluid.src}
                    alt=""
                  />
                ) : (
                  ""
                )}
              </Col>
              <Col lg={11} className={[styles.authorData, "p-0"].join(" ")}>
                <p className={styles.name}>
                  {" "}
                  <span className="headline-3">{author.name}</span>{" "}
                  <a
                    href={"https://www.twitter.com/" + author.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className={["headline-4", styles.twitter].join(" ")}
                  >
                    {" "}
                    @{author.twitter}
                  </a>
                </p>
                <p className="headline-2">Perspectivas</p>
              </Col>
            </Row>
          </Col>
          <Col lg={10} className="d-block d-lg-none p-0">
            <Row className={styles.mobileHeader}>
              <Col lg={1} className="p-0 d-flex justify-content-center">
                {author.image ? (
                  <img
                    className={styles.avatar}
                    src={author.image.childImageSharp.fluid.src}
                    alt=""
                  />
                ) : (
                  ""
                )}
              </Col>
              <Col lg={11} className="p-0">
                <p className="headline-3 text-center m-0">{author.name}</p>{" "}
                <p className="text-center m-0">
                  <a
                    href={"https://www.twitter.com/" + author.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className={["headline-4", styles.twitter].join(" ")}
                  >
                    {" "}
                    @{author.twitter}
                  </a>
                </p>
                <p className="headline-3 text-center m-0">Perspectivas</p>
              </Col>
            </Row>
          </Col>
          <Col lg={10} className="d-none d-lg-block">
            <PostList result={true} list={posts}></PostList>
          </Col>
          <Col sm={12} className="d-block d-lg-none p-0">
            <PostList mobile={true} result={true} list={posts}></PostList>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default AuthorPerspectives;

export const pageQuery = graphql`
  query($author: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { author: { id: { eq: $author } } } }
    ) {
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
      group(field: frontmatter___author___id, limit: 1) {
        nodes {
          frontmatter {
            author {
              name
              twitter
              id
              image {
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
  }
`;
