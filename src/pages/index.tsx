import React, { Fragment, Component, createRef } from "react";
import { Link, graphql, navigate } from "gatsby";
import { Card, Row, Col, Container } from "react-bootstrap";
import { PostsData } from "../shared/models/post";
import { postsFragment } from "../shared/fragments/posts";

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
  data: PostsData;
}

interface IndexState {
  postsData: PostsData;
  searchTerm: string;
  selectedTags: string[];
}

class BlogIndex extends Component<IndexProps, IndexState> {
  constructor(props: IndexProps) {
    super(props);
    this.state = {
      postsData: new PostsData(props.data),
      searchTerm: "",
      selectedTags: [],
    };
  }

  searchInputHandler(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      navigate("/search-result/", {
        state: {
          searchTerm: this.state.searchTerm,
          tags: this.state.selectedTags,
        },
      });
    }
    const target = event.target as HTMLInputElement;
    this.setState({ searchTerm: target.value });
  }

  tagSelectHandler = (tags: Array<string>) => {
    this.setState({ selectedTags: tags });
    navigate("/search-result/", {
      state: {
        searchTerm: this.state.searchTerm,
        tags: this.state.selectedTags,
      },
    });
  };

  render() {
    return (
      <Layout>
        <Container fluid>
          <div className="d-block d-lg-none">
            <ExtendedSearchbar
              onTagSelected={this.tagSelectHandler}
              onKeyUp={this.searchInputHandler.bind(this)}
              mobile={true}
            ></ExtendedSearchbar>
          </div>
          <div className="d-none d-lg-block">
            <ExtendedSearchbar
              onTagSelected={this.tagSelectHandler}
              onKeyUp={this.searchInputHandler.bind(this)}
            ></ExtendedSearchbar>
          </div>
          <LearningPaths></LearningPaths>
          <Row className="justify-content-center">
            <Col lg={10} xl={10} className="d-none d-lg-block">
              <Row className={styles.explore}>
                <Col className="headline-1">Explora</Col>
              </Row>

              <div className="headline-1 d-none d-lg-block">
                <PostList list={this.state.postsData}></PostList>
              </div>
            </Col>
            <Col xs={12} sm={12} className="d-block d-lg-none p-0">
              <Row className={styles.explore}>
                <Col className="headline-1 text-center">Explora</Col>
              </Row>
              <PostList list={this.state.postsData} mobile={true}></PostList>
            </Col>
          </Row>
        </Container>
        <SEO title="All posts" />
      </Layout>
    );
  }
}

const LearningPaths = () => {
  const navigateTo = (path: string) => {
    navigate(path);
  };
  return (
    <Row
      className={["justify-content-md-center", styles.learningPaths].join(" ")}
    >
      <Col
        lg={10}
        xl={10}
        className="text-center headline-1 d-block d-lg-none"
        style={{ marginBottom: "2vh" }}
      >
        Nuestros vitales
      </Col>
      <Col
        lg={10}
        xl={10}
        className="headline-1 d-none d-lg-block"
        style={{ marginBottom: "5vh" }}
      >
        Nuestros vitales
      </Col>
      <Col lg={10} xl={10} className={styles.cards}>
        <Row className="justify-content-center">
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={4}
            xl={4}
            className="d-flex justify-content-center"
          >
            <Card
              className={[styles.card, styles.modules].join(" ")}
              onClick={() => navigateTo("/modules")}
            >
              <Card.Body>
                <div className={styles.cardImage}>
                  <img src={scientistIcon} />
                </div>
                <Card.Title className="headline-3 text-center">
                  Módulos
                </Card.Title>
                <Card.Subtitle className="headline-4 text-center">
                  Habilidades y pensamiento crítico
                </Card.Subtitle>
                <Card.Text className={["paragraph", styles.cardText].join(" ")}>
                  Lenguajes y ambientes de programación para ayudar en
                  desarrollo e implementación de productos de datos.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col
            xs={12}
            sm={12}
            md={12}
            lg={4}
            xl={4}
            className="d-flex justify-content-center"
          >
            <Card
              className={[styles.card, styles.perspectives].join(" ")}
              onClick={() => navigateTo("/perspectives")}
            >
              <Card.Body>
                <div className={styles.cardImage}>
                  <img src={analystIcon} />
                </div>
                <Card.Title className="headline-3 text-center">
                  Perspectivas
                </Card.Title>
                <Card.Subtitle className="headline-4 text-center">
                  Inspiración en ciencia de datos
                </Card.Subtitle>
                <Card.Text className={["paragraph", styles.cardText].join(" ")}>
                  Experiencias, visiones e ideas alrededor de la ciencia de
                  datos.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col
            xs={12}
            sm={12}
            md={12}
            lg={4}
            xl={4}
            className="d-flex justify-content-center"
          >
            <Card
              className={[styles.card, styles.projects].join(" ")}
              onClick={() => navigateTo("/projects")}
            >
              <Card.Body>
                <div className={styles.cardImage}>
                  <img src={biIcon} />
                </div>
                <Card.Title className="headline-3 text-center">
                  Proyectos
                </Card.Title>
                <Card.Subtitle className="headline-4 text-center">
                  Conocimiento aplicado
                </Card.Subtitle>
                <Card.Text className={["paragraph", styles.cardText].join(" ")}>
                  Problemas y soluciones escalables para tus primeros proyectos
                  en ciencia de datos.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
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
