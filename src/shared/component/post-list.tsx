import React, { Fragment, Component } from "react";
import { PostsData } from "../models/post";
import PostPreview from "./post-preview";
import Subscribe from "./subscribe";
import styles from "./post-list.module.scss";
import _ from "lodash";
import { Edge } from "../models/post";
import { Col, Row } from "react-bootstrap";

interface PostListProps {
  list: PostsData;
  result?: boolean;
  mobile?: boolean;
}

interface PostListState {
  visiblePosts: Edge[];
  fullList: boolean;
}

class PostList extends Component<PostListProps, PostListState> {
  private postList: PostsData;
  private resultList: boolean;
  constructor(props: PostListProps) {
    super(props);
    this.postList = _.cloneDeep(props.list);
    this.resultList = props.result ? props.result : false;
    this.state = {
      visiblePosts: [],
      fullList: false,
    };
  }

  componentDidMount() {
    this.loadMore();
  }

  componentWillReceiveProps(props: PostListProps) {
    this.postList = _.cloneDeep(props.list);

    this.setState(
      {
        visiblePosts: [],
        fullList: false,
      },
      () => this.loadMore()
    );
  }

  loadMore() {
    const listLength = this.state.visiblePosts.length;

    this.setState({
      visiblePosts: this.postList.allMarkdownRemark.edges.slice(
        0,
        listLength + 6
      ),
      fullList: listLength == this.postList.allMarkdownRemark.edges.length,
    });
  }

  render() {
    return (
      <Fragment>
        {this.state.visiblePosts.map(({ node }: any, index: number) => {
          const {
            title,
            date,
            description,
            contentType,
            tags,
            featuredImage,
          } = node.frontmatter;
          const slug = node.fields.slug;
          return (
            <Fragment key={index}>
              <PostPreview
                key={slug}
                title={title}
                date={date}
                excerpt={description || node.excerpt}
                contentType={contentType}
                tags={tags}
                featuredImage={
                  featuredImage ? featuredImage.childImageSharp.fluid.src : null
                }
                link={slug}
                extended={index == 0 && !this.resultList ? true : false}
                mobile={this.props.mobile}
              ></PostPreview>
              {index == 4 && !this.resultList ? <Subscribe></Subscribe> : ""}
            </Fragment>
          );
        })}

        {this.state.fullList ? (
          ""
        ) : (
          <Row className="justify-content-center">
            <Col xs={10} sm={10} md={10} lg={12}>
              <div className={styles.loadPosts} onClick={() => this.loadMore()}>
                Cargar más
              </div>
            </Col>
          </Row>
        )}
      </Fragment>
    );
  }
}

export default PostList;
