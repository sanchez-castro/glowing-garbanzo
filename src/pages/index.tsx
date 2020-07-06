import React, { Fragment, Component, createRef } from "react";
import { Link, graphql, navigate } from "gatsby";
import { Card, Row, Col, Container } from "react-bootstrap";
import { PostsData } from "../shared/models/post";
import { postsFragment } from '../shared/fragments/posts';

//Components
import Layout from "../shared/component/layout";
import SEO from "../components/seo";
import ExtendedSearchbar from "../shared/component/extended-searchbar";
import PostList from "../shared/component/post-list";

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
}

class BlogIndex extends Component<IndexProps, IndexState> {
  selectedTags: Array<string> = []
  constructor(props: IndexProps) {
    super(props);
    this.state = {
      postsData: new PostsData(props.data)
    };
  }

  searchInputHandler(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      const target = event.target as HTMLInputElement
      navigate(
        "/search-result/",
        {
          state: { searchTerm: target.value, tags: this.selectedTags },
        }
      )
    }
  }

  tagSelectHandler = (tags: Array<string>) => {
    this.selectedTags = tags
  }  

  render() {
    return (
      <Layout location={window.location}>
        <Container fluid>
          <ExtendedSearchbar
            onTagSelected={this.tagSelectHandler}
            onKeyUp={this.searchInputHandler.bind(this)}
          ></ExtendedSearchbar>
          <LearningPaths></LearningPaths>
          <Row className="justify-content-md-center">
            <Col lg={10} xl={10}>
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

const LearningPaths = () => {
  return (
    <Row
      className={["justify-content-md-center", styles.learningPaths].join(" ")}
    >
      <Col lg={10} xl={10} className={styles.title}>
        Learning paths
      </Col>
      <Col lg={10} xl={10} className={styles.cards}>
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
  query {
    ...PostsFragment
  }
`;
