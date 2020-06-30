import React, { Fragment, Component } from "react";
import { Link, graphql } from "gatsby";
import { Card, Row, Col, Container } from "react-bootstrap";
import { PostsData } from "../shared/models/post";
import { IPostsData } from "../shared/interfaces/post";

//Components
import Subscribe from "../shared/component/subscribe";
import Layout from "../components/layout";
import PostPreview from "../shared/component/post-preview";
import SEO from "../components/seo";
import ExtendedSearchbar from "../shared/component/extended-searchbar";

// Assets
import scientistIcon from "../assets/icon/data-scientist.svg";
import analystIcon from "../assets/icon/data-analyst.svg";
import biIcon from "../assets/icon/bi-analyst.svg";

//Styles
import styles from "./index.module.scss";
import "../global.scss";

interface IndexProps {
  data: {
    allMarkdownRemark: any;
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

interface IndexState {
  postsData: PostsData;
  searchTerm: string;
}

class BlogIndex extends Component<IndexProps, IndexState> {
  constructor(props: IndexProps) {
    super(props);
    this.state = {
      postsData: new PostsData(props.data),
      searchTerm: ""
    };
  }

  searchInputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const query = event.target.value.toLowerCase();
    const dummyData = {...this.state.postsData};
    const posts = dummyData.allMarkdownRemark.edges || [];
    const filteredData = posts.filter((post: any) => {
      let { description, title, tags } = post.node.frontmatter;
      description = description ? description.toLowerCase() : "";
      title = title ? title.toLowerCase() : "";
      return (
        description.toLowerCase().includes(query) ||
        title.toLowerCase().includes(query) ||
        (tags && tags.join("").toLowerCase().includes(query))
      );
    });
    dummyData.allMarkdownRemark.edges = filteredData
    this.setState(
      {
        postsData: dummyData,
        searchTerm: query
      }
    )
  }

  render() {
    console.log(this.state);
    return (
      <Layout location={window.location}>
        <Container fluid>
          <ExtendedSearchbar
            onChange={this.searchInputHandler.bind(this)}
          ></ExtendedSearchbar>
          <LearningPaths></LearningPaths>
          <Row className="justify-content-md-center">
            <Col lg={12} xl={12}>
              <Row className={styles.explore}>
                <Col className={styles.title}>Explore</Col>
              </Row>
              <PostList list={this.state.postsData}></PostList>
            </Col>
          </Row>
        </Container>
        <SEO title="All posts" />
      </Layout>
    );
  }
}

interface PostListProps {
  list: PostsData;
}

const PostList = (props: PostListProps) => {
  const posts = props.list.allMarkdownRemark.edges;
  return (
    <Fragment>
      {posts.map(({ node }: any, index: number) => {
        const {
          title,
          date,
          description,
          type,
          tags,
          featuredImage,
          slug
        } = node.frontmatter;
        return (
          <Fragment>
            <PostPreview
              key={slug}
              title={title}
              date={date}
              excerpt={description || node.excerpt}
              type={type}
              tags={tags}
              featuredImage={
                featuredImage ? featuredImage.childImageSharp.fluid.src : null
              }
              link={slug}
              extended={index == 0 ? true : false}
            ></PostPreview>
            {index == 4 ? <Subscribe></Subscribe> : ""}
          </Fragment>
        );
      })}

      <div className={styles.loadPosts}>Load More</div>
    </Fragment>
  );
};

const LearningPaths = () => {
  return (
    <Row
      className={["justify-content-md-center", styles.learningPaths].join(" ")}
    >
      <Col lg={12} xl={12} className={styles.title}>
        Learning paths
      </Col>
      <Col lg={12} xl={12} className={styles.cards}>
        <Card className={styles.card}>
          <Card.Body>
            <Card.Title className={styles.cardImage}>
              <img src={scientistIcon} />
            </Card.Title>
            <Card.Subtitle className={styles.cardTitle}>
              Data Scientist
            </Card.Subtitle>
            <Card.Text className={styles.cardText}>
              With this path you will learn how to become a great data
              scientist.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className={styles.card}>
          <Card.Body>
            <Card.Title className={styles.cardImage}>
              <img src={analystIcon} />
            </Card.Title>
            <Card.Subtitle className={styles.cardTitle}>
              Data Analyst
            </Card.Subtitle>
            <Card.Text className={styles.cardText}>
              With this path you will learn how to become a great data analyst.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className={styles.card}>
          <Card.Body>
            <Card.Title className={styles.cardImage}>
              <img src={biIcon} />
            </Card.Title>
            <Card.Subtitle className={styles.cardTitle}>
              BI Analyst
            </Card.Subtitle>
            <Card.Text className={styles.cardText}>
              With this path you will learn how to become a great BI scientist.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query Posts {
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
