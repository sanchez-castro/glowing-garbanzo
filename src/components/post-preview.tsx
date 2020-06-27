import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./post-preview.module.scss";
import PostType from './shared/post-type'
import Tags from "./shared/post-tags";

interface PostProps {
  title: string;
  date: string;
  excerpt?: string;
  type?: Array<string>;
  tags?: Array<string>;
  featuredImage?: any;
  link: string;
  extended?: boolean;
}

const PostPreview = (props: PostProps) => {
  return props.extended ? (
    <ExtendedView
      title={props.title}
      date={props.date}
      excerpt={props.excerpt}
      type={props.type}
      tags={props.tags}
      featuredImage={props.featuredImage}
      link={props.link}
    ></ExtendedView>
  ) : (
    <RegularView
      title={props.title}
      date={props.date}
      excerpt={props.excerpt}
      type={props.type}
      tags={props.tags}
      featuredImage={props.featuredImage}
      link={props.link}
    ></RegularView>
  );
};

const RegularView = (props: PostProps) => {
  return (
    <Container fluid className={styles.container}>
      <Row className={styles.row}>
        <Col className={styles.contentCol}>
          <Link className={styles.title} to={props.link}>
            {props.title}
          </Link>
          <p className={styles.date}>{props.date}</p>
          { props.type ? <PostType types={props.type}></PostType> : '' }
          <p className={styles.excerpt}>{props.excerpt}</p>
          { props.tags ? <Tags tags={props.tags}></Tags> : ''}
        </Col>
        {props.featuredImage ? (
          <Col lg={4} xl={4} className={styles.imageCol}>
            <Link to={props.link}>
              <img src={props.featuredImage} alt="" />
            </Link>
          </Col>
        ) : (
          ""
        )}
      </Row>
    </Container>
  );
};

const ExtendedView = (props: PostProps) => {
  return (
    <Container fluid className={styles.extendedContainer}>
      <Row className={styles.row}>
        {props.featuredImage ? (
          <Col lg={5} xl={5} className={styles.imageCol}>
            <Link to={props.link}>
              <img src={props.featuredImage} alt="" />
            </Link>
          </Col>
        ) : (
          ""
        )}
        <Col className="p-0">
          <Link className={styles.title} to={props.link}>
            {props.title}
          </Link>
          <p className={styles.date}>{props.date}</p>
          { props.type ? <PostType types={props.type}></PostType> : '' }
          <p className={styles.excerpt}>{props.excerpt}</p>
          { props.tags ? <Tags tags={props.tags}></Tags> : ''}
        </Col>
      </Row>
    </Container>
  );
};

export default PostPreview;
