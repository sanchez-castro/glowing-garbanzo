import React, { useState, Component, Fragment, KeyboardEvent } from "react";
import Layout from "../shared/component/layout";
import { Container, Row, Col } from "react-bootstrap";
import ExtendedSearchbar from "../shared/component/extended-searchbar";
import { useStaticQuery, graphql } from "gatsby";
import { postsFragment } from "../shared/fragments/posts";
import { PostsData } from "../shared/models/post";
import { IPostsData } from "../shared/interfaces/post";
import _ from "lodash";
import PostList from "../shared/component/post-list";
import Fuse from "fuse.js";

interface ResultProps {
  location: any;
  data: PostsData;
}

interface ResultState {
  query: string;
  filteredData: PostsData;
  selectedTags: string[];
}

class ResultPage extends Component<ResultProps, ResultState> {
  constructor(props: ResultProps) {
    super(props);
    this.state = {
      filteredData: new PostsData(_.cloneDeep(props.data)),
      query: props.location.state
        ? props.location.state.searchTerm.toLowerCase()
        : "",
      selectedTags: props.location.state ? props.location.state.tags : [],
    };
  }

  componentDidMount() {
    this.search();
  }

  searchInputHandler(event: React.KeyboardEvent<HTMLInputElement>) {
    const query = event.target as HTMLInputElement;
    this.setState(
      {
        query: query.value,
      },
      () => this.search()
    );
  }

  search() {
    if (!this.state.query.trim() && this.state.selectedTags.length == 0) {
      this.setState({
        filteredData: _.cloneDeep(this.props.data),
      });
      return;
    }
    const dummyData = _.cloneDeep(this.props.data);
    let posts = dummyData.allMarkdownRemark.edges || [];
    const options = {
      keys: [
        "node.excerpt",
        "node.frontmatter.title",
        "node.frontmatter.tags",
        "node.frontmatter.type",
      ],
    };
    const fuse = new Fuse(posts, options);
    const result = fuse.search(this.state.query);
    posts = result.map((result) => result.item);
    dummyData.allMarkdownRemark.edges = posts;
    this.setState(
      {
        filteredData: dummyData,
      },
      () => (this.state.selectedTags.length > 0 ? this.filterByTags() : "")
    );
  }

  filterByTags() {
    let dummyData: PostsData;
    if (!this.state.query.trim()) {
      dummyData = _.cloneDeep(this.props.data);
    } else {
      dummyData = { ...this.state.filteredData };
    }
    const posts = dummyData.allMarkdownRemark.edges || [];
    const filteredData = posts.filter((post: any) => {
      const { tags } = post.node.frontmatter;
      return _.intersection(tags, this.state.selectedTags).length > 0;
    });
    dummyData.allMarkdownRemark.edges = filteredData;
    this.setState({
      filteredData: dummyData,
    });
  }

  tagSelectHandler = (tags: Array<string>) => {
    if (tags.length > 0) {
      this.setState(
        {
          selectedTags: tags,
        },
        () => this.filterByTags()
      );
    } else {
      this.setState(
        {
          selectedTags: tags,
        },
        () => this.search()
      );
    }
  };

  render() {
    const size = this.state.filteredData.allMarkdownRemark.edges.length;
    const searchText = `${size} ${
      size > 1 ? "publicaciones" : "publicación"
    } encontrada${size > 1 ? "s" : ""} para ${
      !this.state.query.trim() ? "tu búsqueda" : '"' + this.state.query + '"'
    }`;
    return (
      <Layout>
        <Container fluid>
          <ExtendedSearchbar
            selectedTags={this.state.selectedTags}
            onTagSelected={this.tagSelectHandler}
            onKeyUp={this.searchInputHandler.bind(this)}
            value={this.state.query}
            mobile={true}
          ></ExtendedSearchbar>
          <Row className="justify-content-center">
            <Col lg={10} className="d-none d-lg-block">
              <p className="headline-1" style={{ margin: "5vh 0 5vh 0" }}>
                {searchText}
              </p>
            </Col>
            <Col xs={10} sm={10} md={10} className="d-block d-lg-none">
              <p className="headline-2" style={{ margin: "5vh 0 5vh 0" }}>
                {searchText}
              </p>
            </Col>
            <Col lg={10} xl={10} className="d-none d-lg-block">
              <PostList result={true} list={this.state.filteredData}></PostList>
            </Col>
            <Col xs={12} sm={12} className="d-block d-lg-none p-0">
              <PostList
                mobile={true}
                result={true}
                list={this.state.filteredData}
              ></PostList>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

export default ResultPage;

export const resultPageQuery = graphql`
  query {
    ...PostsFragment
  }
`;
