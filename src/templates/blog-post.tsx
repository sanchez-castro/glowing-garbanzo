import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../shared/component/layout";
import SEO from "../components/seo";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./blog-post.module.scss";
import Tags from "../shared/component/post-tags";
import PostType from "../shared/component/post-type";
import Subscribe from "../shared/component/subscribe";
import RelatedPosts from "../shared/component/related-posts";
import { PostData } from "../shared/models/post";

interface Props {
  data: PostData;
  pageContext: any;
}

const BlogPostTemplate = (props: Props) => {
  const postData = new PostData(props.data);
  const post = postData.markdownRemark;
  const { previous, next } = props.pageContext;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />

      <Container fluid className="d-none d-lg-block">
        <Landscape post={post} pageContext={props.pageContext}></Landscape>
      </Container>
      <Container fluid className="d-block d-lg-none">
        <Mobile post={post} pageContext={props.pageContext}></Mobile>
      </Container>
    </Layout>
  );
};

const Mobile = (props: any) => {
  const post = props.post;
  const { previous, next } = props.pageContext;
  return (
    <Row className="justify-content-center">
      {post.frontmatter.featuredImage ? (
        <Col lg={12} xl={12} className="p-0">
          <div className={styles.jumbotronMobile}>
            <img
              src={post.frontmatter.featuredImage.childImageSharp.fluid.src}
              alt="post image"
            />
          </div>
        </Col>
      ) : (
        ""
      )}
      <Col xs={11} sm={11} className={styles.mobileHeader}>
        <p className="headline-1">{post.frontmatter.title}</p>
        <p className={[styles.date, "paragraph"].join(" ")}>
          {post.frontmatter.date}
        </p>
        <div className={styles.metaContainer}>
          {post.frontmatter.contentType ? (
            <PostType postType={post.frontmatter.type} types={post.frontmatter.contentType}></PostType>
          ) : (
            ""
          )}
          {post.frontmatter.tags ? (
            <Tags tags={post.frontmatter.tags}></Tags>
          ) : (
            ""
          )}
        </div>
      </Col>
      <Col xs={11} sm={11} className={styles.mobileContent}>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Col>
      <Col sm={12} className="p-0">
        <Subscribe></Subscribe>
      </Col>
      <Col xs={12} sm={12} className="p-0">
        <RelatedPosts
          mobile={true}
          parentId={post.id}
          title={post.frontmatter.title}
          tags={post.frontmatter.tags}
        ></RelatedPosts>
      </Col>
      <Col xs={10} sm={10}>
        <ul className={[styles.linkUl, styles.linkUlMobile].join(" ")}>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Col>
    </Row>
  );
};

const Landscape = (props: any) => {
  const post = props.post;
  const { previous, next } = props.pageContext;
  return (
    <Row className="justify-content-center">
      {post.frontmatter.featuredImage ? (
        <Col lg={12} xl={12} className="p-0">
          <div className={styles.jumbotron}>
            <img
              src={post.frontmatter.featuredImage.childImageSharp.fluid.src}
              alt="post image"
            />
          </div>
        </Col>
      ) : (
        ""
      )}
      <Col lg={10} xl={10} className={styles.header}>
        <p className="headline-1">{post.frontmatter.title}</p>
        <p className={[styles.date, "paragraph"].join(" ")}>
          {post.frontmatter.date}
        </p>
        <div className={styles.metaContainer}>
          {post.frontmatter.contentType ? (
            <PostType postType={post.frontmatter.type} types={post.frontmatter.contentType}></PostType>
          ) : (
            ""
          )}
          {post.frontmatter.tags ? (
            <Tags tags={post.frontmatter.tags}></Tags>
          ) : (
            ""
          )}
        </div>
      </Col>
      <Col lg={10} xl={10} className={styles.content}>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Col>
      <Col lg={10} xl={10} className="p-0">
        <Subscribe></Subscribe>
      </Col>
      <Col lg={10} xl={10}>
        <RelatedPosts
          parentId={post.id}
          title={post.frontmatter.title}
          tags={post.frontmatter.tags}
        ></RelatedPosts>
      </Col>
      <Col lg={10} xl={10} className="p-0">
        <ul className={styles.linkUl}>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Col>
    </Row>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
        contentType
        type
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
