import React, { Component } from "react";
import Layout from "../shared/component/layout";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./vitals.module.scss";
import PostPreview from "../shared/component/post-preview";
import { graphql, navigate } from "gatsby";
import { kebabCase } from "lodash";
import { IPostsData } from "../shared/interfaces/post";

interface PerspectivesState {
  authorPerspectives: any;
  currentPerspective: any;
  latestPerspectives: any;
}

interface PerspectivesProps {
  data: IPostsData;
}

class Perspectives extends Component<PerspectivesProps, PerspectivesState> {
  constructor(props: any) {
    super(props);
    const currentPerspective = props.data.latestPerspectives.edges.find(
      (perspective: any) => perspective.node.frontmatter.featuredImage
    );
    this.state = {
      authorPerspectives: props.data.authorPerspectives,
      currentPerspective: currentPerspective,
      latestPerspectives: props.data.latestPerspectives,
    };
    this.selectPerspective = this.selectPerspective.bind(this);
  }

  selectPerspective(perspectiveId: string) {
    const perspective = this.state.latestPerspectives.edges.find(
      (perspective: any) => perspective.node.id == perspectiveId
    );
    this.setState({ currentPerspective: perspective });
  }

  render() {
    return (
      <Layout>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col
              lg={10}
              className={[styles.header, "d-none d-lg-block"].join(" ")}
            >
              <p className={["headline-1", styles.perspectiveTitle].join(" ")}>
                Perspectivas
              </p>
              <p className="headline-3">
                  Experiencias, visiones e ideas alrededor de la ciencia de datos.
              </p>
            </Col>
            <Col lg={10} className="d-block d-lg-none">
              <p
                className={[
                  "headline-1 text-center",
                  styles.perspectiveMobileTitle,
                ].join(" ")}
              >
                Perspectivas
              </p>
              <p className="headline-3">
                Experiencias, visiones e ideas alrededor de la ciencia de datos.
              </p>
            </Col>
            {this.state.latestPerspectives.edges.length > 0 ? (
              <Col lg={10}>
                <p className="headline-1 d-none d-lg-block">
                  Perspectivas más actuales
                </p>
                <p className="headline-1 d-block d-lg-none text-center">
                  Perspectivas más actuales
                </p>
                <Container className="d-none d-lg-block">
                  <LandscapeLatestPerspectives
                    perspectives={this.state.latestPerspectives}
                    currentPerspective={this.state.currentPerspective}
                    selectPerspectiveHandler={this.selectPerspective}
                  ></LandscapeLatestPerspectives>
                </Container>
                <Container className="d-block d-lg-none">
                  <MobileLatestPerspectives
                    perspectives={this.state.latestPerspectives}
                    currentPerspective={this.state.currentPerspective}
                    selectPerspectiveHandler={this.selectPerspective}
                  ></MobileLatestPerspectives>
                </Container>
              </Col>
            ) : (
              " "
            )}
            <Col lg={10}></Col>
            <Col
              lg={10}
              style={{ marginTop: "5vh" }}
              className="p-0 d-none d-lg-block"
            >
              {this.state.authorPerspectives.group.map(
                (perspectives: any, index: number) => (
                  <AuthorPerspectivesLandscape
                    key={index}
                    perspectives={perspectives}
                  ></AuthorPerspectivesLandscape>
                )
              )}
            </Col>
            <Col
              xs={12}
              sm={12}
              style={{ marginTop: "5vh" }}
              className="p-0 d-block d-lg-none"
            >
              {this.state.authorPerspectives.group.map(
                (perspectives: any, index: number) => (
                  <AuthorPerspectivesMobile
                    key={index}
                    perspectives={perspectives}
                  ></AuthorPerspectivesMobile>
                )
              )}
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

const MobileLatestPerspectives = (props: LatestPerspectivesProps) => {
  function selectHandler(id: string) {
    props.selectPerspectiveHandler(id);
  }
  return (
    <Row>
      <Col lg={12}>
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgb(0, 0, 0)), url(${props.currentPerspective.node.frontmatter.featuredImage.childImageSharp.fluid.src})`,
          }}
          className={styles.currentPerspectiveMobile}
        >
          <div className={styles.content}>
            <p className="headline-3 m-0">
              Perspectivas de{" "}
              {props.currentPerspective.node.frontmatter.author.name} sobre{" "}
              {props.currentPerspective.node.frontmatter.title}
            </p>
            <p className={["pharagraph", styles.excerpt].join(" ")}>
              {props.currentPerspective.node.excerpt}
            </p>
            <div
              className={[styles.button, "headline-4"].join(" ")}
              onClick={() =>
                navigate(props.currentPerspective.node.fields.slug)
              }
            >
              Leer más
            </div>
          </div>
        </div>
      </Col>
      <Col lg={12}>
        <div className={styles.mobilePerspectiveScroll}>
          {props.perspectives.edges.map((perspective: any) =>
            perspective.node.frontmatter.featuredImage ? (
              <div
                style={{
                  backgroundImage: `url(${perspective.node.frontmatter.featuredImage.childImageSharp.fluid.src})`,
                }}
                className={[styles.preview, styles.mobilePreview].join(" ")}
                onClick={() => selectHandler(perspective.node.id)}
              >
                <div className={styles.overlay}></div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </Col>
    </Row>
  );
};

interface LatestPerspectivesProps {
  perspectives: any;
  currentPerspective: any;
  selectPerspectiveHandler: any;
}

const LandscapeLatestPerspectives = (props: LatestPerspectivesProps) => {
  function selectHandler(id: string) {
    props.selectPerspectiveHandler(id);
  }
  return (
    <Row>
      <Col lg={2}>
        <div className={styles.perspectiveScroll}>
          {props.perspectives.edges.map((perspective: any) =>
            perspective.node.frontmatter.featuredImage ? (
              <div
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgb(0, 0, 0)), url(${perspective.node.frontmatter.featuredImage.childImageSharp.fluid.src})`,
                }}
                className={styles.preview}
                onClick={() => selectHandler(perspective.node.id)}
              >
                <div className={styles.overlay}></div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </Col>
      <Col lg={10}>
        <div
          style={{
            backgroundImage: `url(${props.currentPerspective.node.frontmatter.featuredImage.childImageSharp.fluid.src})`,
          }}
          className={styles.currentPerspective}
        >
          <div className={styles.content}>
            <p className="headline-2 m-0">
              Perspectivas de{" "}
              {props.currentPerspective.node.frontmatter.author.name} sobre{" "}
              {props.currentPerspective.node.frontmatter.title}
            </p>
            <p className="pharagraph">
              {props.currentPerspective.node.excerpt}
            </p>
            <div
              className={[styles.button, "headline-4"].join(" ")}
              onClick={() =>
                navigate(props.currentPerspective.node.fields.slug)
              }
            >
              Leer más
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

interface AuthorProps {
  perspectives: any;
}

const AuthorPerspectivesLandscape = (props: AuthorProps) => {
  const author = props.perspectives.edges[0].node.frontmatter.author;
  const viewAll = () => {
    navigate(`/perspectives/${kebabCase(author.id)}/`);
  };
  return (
    <Container className={["m-0", styles.authorPerspectives].join(" ")}>
      <Row className={styles.perspectivesHeader}>
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
        <Col lg={11} className={styles.authorText}>
          <p className={styles.name}>
            {" "}
            <span className="headline-3">{author.name}</span>{" "}
            <a
              href={"https://www.twitter.com/" + author.twitter}
              target="_blank"
              rel="noreferrer"
              className={["headline-4", styles.twitter].join(" ")}
            >
              @{author.twitter}
            </a>
          </p>
          <p className="headline-2">Perspectivas</p>
        </Col>
      </Row>

      {props.perspectives.edges.map((perspective: any) => {
        const {
          title,
          date,
          description,
          contentType,
          tags,
          featuredImage,
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

      <Row className="justify-content-end">
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

const AuthorPerspectivesMobile = (props: AuthorProps) => {
  const author = props.perspectives.edges[0].node.frontmatter.author;
  const viewAll = () => {
    navigate(`/perspectives/${kebabCase(author.id)}/`);
  };
  return (
    <Container
      className={[
        styles.authorPerspectives,
        styles.authorPerspectivesMobile,
      ].join(" ")}
    >
      <Row>
        <Col lg={1} className="p-0 text-center">
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
        <Col lg={11} className={styles.authorText}>
          <p className="headline-3 text-center">{author.name}</p>
          <p className="text-center">
            <a
              href={"https://www.twitter.com/" + author.twitter}
              target="_blank"
              rel="noreferrer"
              className={["headline-4", styles.twitter].join(" ")}
            >
              @{author.twitter}
            </a>
          </p>
          <p className="headline-3 text-center">Perspectivas</p>
        </Col>
      </Row>
      {props.perspectives.edges.map((perspective: any) => {
        const {
          title,
          date,
          description,
          contentType,
          tags,
          featuredImage,
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
            mobile={true}
          ></PostPreview>
        );
      })}
      <Row>
        <Col
          xs={12}
          sm={12}
          className={[styles.readMore, "d-flex justify-content-center"].join(
            " "
          )}
        >
          <div
            className={[
              styles.button,
              styles.buttonMobile,
              "headline-4 text-center",
            ].join(" ")}
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
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "perspectiva" } } }
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
              type
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
    latestPerspectives: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 15
      filter: { frontmatter: { type: { eq: "perspectiva" } } }
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
