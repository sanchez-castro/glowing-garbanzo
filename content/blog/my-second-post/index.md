---
title: My Second Post!
date: "2015-05-06T23:46:37.121Z"
tags: ['programming', 'ai']
contentType: ["artículo", "video"]
author: adrian@ianalytics.org
topics: historia
type: proyecto
---

Wow! I love blogging so much already.

```jsx
class BlogIndex extends Component<IndexProps, IndexState> {
  selectedTags: Array<string> = []
  constructor(props: IndexProps) {
    super(props);
    this.state = {
      postsData: new PostsData(props.data)
    };
    console.log(this.state.postsData)
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
      <Layout>
        <Container fluid>
          <ExtendedSearchbar
            onTagSelected={this.tagSelectHandler}
            onKeyUp={this.searchInputHandler.bind(this)}
          ></ExtendedSearchbar>
          <LearningPaths></LearningPaths>
          <Row className="justify-content-md-center">
            <Col lg={10} xl={10}>
              <Row className={styles.explore}>
                <Col className="headline-1">Explore</Col>
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
```

Did you know that "despite its name, salted duck eggs can also be made from
chicken eggs, though the taste and texture will be somewhat different, and the
egg yolk will be less rich."?
([Wikipedia Link](https://en.wikipedia.org/wiki/Salted_duck_egg))

Yeah, I didn't either.
