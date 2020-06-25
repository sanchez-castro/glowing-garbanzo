import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./post-preview.module.scss";

interface PostPreviewProps {
  post: PostProps;
  extended?: boolean;
}

interface PostProps {
  title: string;
  date: string;
  contentPreview: string;
  postTypes: Array<string>;
  tags: Array<string>;
  imagePath: string;
}

const PostPreview = (props: PostPreviewProps) => {
  return (
    props.extended ? 
    <ExtendedView 
      title={props.post.title} 
      date={props.post.date} 
      contentPreview={props.post.contentPreview} 
      postTypes={props.post.postTypes}
      tags={props.post.tags}
      imagePath={props.post.imagePath}
    ></ExtendedView> : 
    <RegularView 
      title={props.post.title} 
      date={props.post.date} 
      contentPreview={props.post.contentPreview} 
      postTypes={props.post.postTypes}
      tags={props.post.tags}
      imagePath={props.post.imagePath}
    ></RegularView>
  );
};

const checkType = (type: string): string => {
  switch (type) {
    case 'Article':
      return "icon/document.svg";
    case 'Video':
      return "icon/video.svg";
    default:
      return "icon/document.svg";
  }
};

const RegularView = (props: PostProps) => {
  return (
    <Container fluid className={styles.container}>
      <Row className={styles.row}>
        <Col lg={8} xl={8} className="p-0">
          <p className={styles.title}>{props.title}</p>
          <p className={styles.date}>{props.date}</p>
          <div className={styles.tags}>
            {props.postTypes.map(postType => (
              <div className={styles.postType}>
                <img src={checkType(postType)} alt="post type" />
                <label>{postType}</label>
              </div>
            ))}
          </div>
          <p className={styles.contentPreview}>{props.contentPreview}</p>
          <div className={styles.tags}>
            {props.tags.map(tag => (
              <div className={styles.tag}>{tag}</div>
            ))}
          </div>
        </Col>
        <Col lg={4} xl={4} className={[styles.imageCol, "p-0"].join(" ")}>
            <img src={props.imagePath} alt=""/>
        </Col>
      </Row>
    </Container>
  )
}

const ExtendedView = (props: PostProps) => {
  return (
    <Container fluid className={styles.extendedContainer}>
      <Row className={styles.row}>
        <Col lg={5} xl={5} className={[styles.imageCol, "p-0"].join(" ")}>
            <img src={props.imagePath} alt=""/>
        </Col>
        <Col lg={7} xl={7} className="p-0">
          <p className={styles.title}>{props.title}</p>
          <p className={styles.date}>{props.date}</p>
          <div className={styles.tags}>
            {props.postTypes.map(postType => (
              <div className={styles.postType}>
                <img src={checkType(postType)} alt="post type" />
                <label>{postType}</label>
              </div>
            ))}
          </div>
          <p className={styles.contentPreview}>{props.contentPreview}</p>
          <div className={styles.tags}>
            {props.tags.map(tag => (
              <div className={styles.tag}>{tag}</div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default PostPreview;
