import React, { Component } from "react";
import Layout from "../shared/component/layout";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./perspectives.module.scss";
import PostPreview from "../shared/component/post-preview";
import { graphql, navigate } from "gatsby";
import { kebabCase } from "lodash";

interface PerspectivesState {
  authorPerspectives: any;
  currentPerspective: any;
  latestPerspectives: any;
}

interface PerspectivesProps {
  data: any;
}

class Perspectives extends Component<PerspectivesProps, PerspectivesState> {
  constructor(props: any) {
    super(props);
    const currentPerspective = props.data.latestPerspectives.edges.find((perspective: any) => perspective.node.frontmatter.featuredImage )
    this.state = {
      authorPerspectives: props.data.authorPerspectives,
      currentPerspective: currentPerspective,
      latestPerspectives: props.data.latestPerspectives
    };
  }

  selectPerspective(perspectiveId: string) {
    const perspective = this.state.latestPerspectives.edges.find((perspective: any) => perspective.node.id == perspectiveId)
    this.setState({ currentPerspective: perspective })
  }

  render() {
    return (
      <Layout>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col lg={10} className={styles.header}>
              <p className="headline-1">Perspectives</p>
              <p className="headline-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Col>
            <Col lg={10}>
              <p className="headline-1">Latest perspectives</p>
            </Col>
            <Col lg={10}>
              <Row>
                <Col lg={2}>
                  <div className={styles.perspectiveScroll}>
                    {this.state.latestPerspectives.edges.map(
                      (perspective: any) =>
                        perspective.node.frontmatter.featuredImage ? (
                          <div style={{ backgroundImage: `url(${perspective.node.frontmatter.featuredImage.childImageSharp.fluid.src})` }} className={styles.preview} onClick={() => this.selectPerspective(perspective.node.id)}>
                            <div className={styles.overlay}></div>
                          </div>
                        ) : (
                          ""
                        )
                    )}
                  </div>
                </Col>
                <Col lg={10}>
                  <div style={{ backgroundImage: `url(${this.state.currentPerspective.node.frontmatter.featuredImage.childImageSharp.fluid.src})` }} className={styles.currentPerspective}>
                    <div className={styles.content}>
                      <p className="headline-2 m-0">
                        {this.state.currentPerspective.node.frontmatter.author.name}’s perspective on {this.state.currentPerspective.node.frontmatter.title}
                      </p>
                      <p className="pharagraph">
                        {this.state.currentPerspective.node.excerpt}
                      </p>
                      <div className={[styles.button, "headline-4"].join(" ")} onClick={() => navigate(this.state.currentPerspective.node.fields.slug)}>
                        Read more
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={10} style={{ marginTop: "5vh" }}>
              {this.state.authorPerspectives.group.map((perspectives: any) => (
                <AuthorPerspectives
                  perspectives={perspectives}
                ></AuthorPerspectives>
              ))}
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

interface AuthorProps {
  perspectives: any;
}

const AuthorPerspectives = (props: AuthorProps) => {
  const author = props.perspectives.edges[0].node.frontmatter.author;
  const viewAll = () => {
    navigate(`/perspectives/${kebabCase(author.id)}/`);
  };
  return (
    <Container className={["m-0", styles.authorPerspectives].join(" ")}>
      <Row className={styles.perspectivesHeader}>
        <Col lg={1} className="p-0">
          {author.image ? <img className={styles.avatar} src={author.image.childImageSharp.fluid.src} alt="" /> : ''}
        </Col>
        <Col lg={11} className={styles.authorText}>
          <p className={styles.name}>
            {" "}
            <span className="headline-3">{author.name}</span>{" "}
            <span className={["headline-4", styles.twitter].join(" ")}>
              {author.twitter}
            </span>
          </p>
          <p className="headline-2">Perspectives on</p>
        </Col>
      </Row>
      {props.perspectives.edges.map((perspective: any) => {
        const {
          title,
          date,
          description,
          contentType,
          tags,
          featuredImage
        } = perspective.node.frontmatter;
        const slug = perspective.node.fields.slug;
        return (
          <PostPreview
            key={slug}
            title={title}
            date={date}
            excerpt={description || perspective.node.excerpt}
            contentType={contentType}
            tags={tags}
            featuredImage={
              featuredImage ? featuredImage.childImageSharp.fluid.src : null
            }
            link={slug}
          ></PostPreview>
        );
      })}
      <Row className="justify-content-md-end">
        <Col lg={3} className={styles.readMore}>
          <div
            className={[styles.button, "headline-4"].join(" ")}
            onClick={() => viewAll()}
          >
            Read more
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Perspectives;

export const pageQuery = graphql`
  query {
    authorPerspectives: allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      group(field: frontmatter___author___id, limit: 3) {
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
    latestPerspectives: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 15
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 400)
          fields {
            slug
          }
          frontmatter {
            title
            author {
              name
            }
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
