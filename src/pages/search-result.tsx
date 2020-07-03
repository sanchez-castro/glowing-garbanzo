import React, { useState, Component, Fragment } from 'react'
import Layout from "../shared/component/layout";
import { Container, Row, Col } from 'react-bootstrap'
import ExtendedSearchbar from '../shared/component/extended-searchbar';
import { useStaticQuery, graphql } from 'gatsby';
import { postsFragment } from '../shared/fragments/posts';
import { PostsData } from "../shared/models/post";
import { IPostsData } from '../shared/interfaces/post';
import _ from 'lodash'
import PostList from '../shared/component/post-list';

interface ResultProps {
    location: any,
    data: IPostsData
}

interface ResultState {
    query: string
    filteredData: PostsData
    selectedTags: string[]
}

class ResultPage extends Component<ResultProps, ResultState> {

    constructor(props: ResultProps) {
        super(props)
        this.state = {
            filteredData: new PostsData(props.data),
            query: props.location.state ? props.location.state.searchTerm.toLowerCase() : "",
            selectedTags: props.location.state ? props.location.state.tags : []
        }
        console.log(this.state)
    }

    componentDidMount() {
        this.search(this.state.query, this.state.selectedTags)
    }

    searchInputHandler(event: React.KeyboardEvent<HTMLInputElement>) {
        const query = event.target as HTMLInputElement
        this.search(query.value, this.state.selectedTags)
    } 

    search(query: string, selectedTags: Array<string>) {
        const dummyData = {...this.props.data};
        const posts = dummyData.allMarkdownRemark.edges || [];
        const filteredData = posts.filter((post: any) => {
            let { description, title, tags } = post.node.frontmatter;
            description = description ? description.toLowerCase() : "";
            title = title ? title.toLowerCase() : "";
            return (
            description.includes(query) ||
            title.includes(query) ||
            (tags && tags.join("").toLowerCase().includes(query)) ||
            (_.intersection(tags, selectedTags).length > 0)
            );
        });

        dummyData.allMarkdownRemark.edges = filteredData

        this.setState({
            ...this.state,
            filteredData: dummyData,
            query: query
        })
    }

    tagSelectHandler = (tags: Array<string>) => {
        this.setState({
            ...this.state, selectedTags: tags
        }, () => this.search(this.state.query, this.state.selectedTags))
    }  

    render() {
        return (
            <Layout location={window.location}>
                <Container fluid>
                    <ExtendedSearchbar 
                        selectedTags={this.state.selectedTags}
                        onTagSelected={this.tagSelectHandler}
                        onKeyDown={this.searchInputHandler.bind(this)}
                    ></ExtendedSearchbar>
                    <Row className="justify-content-md-center">
                        <Col lg={10} xl={10}>
                            <PostList list={this.state.filteredData}></PostList>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        );
    }
}

export default ResultPage

export const pageQuery = graphql`
  query {
    ...PostsFragment
  }
`;
