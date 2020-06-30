import React, { useState, Fragment } from 'react'
import { Row, Col } from 'react-bootstrap';
import styles from './extended-searchbar.module.scss'
import searchIcon from '../../assets/icon/search.svg'
import { useStaticQuery, graphql } from 'gatsby';

const ExtendedSearchbar = (props: any) => {
  const emptyQuery = ""
  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const { tagss } = useStaticQuery(
    graphql`
    query Tags{
        allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `
  );

  console.log(tagss)
  
  const tags = [
    "Data Science",
    "Machine Learning",
    "Programming",
    "AI",
    "Data Science",
    "Business Intelligence",
    "Knowledge",
    "Business",
    "Culture"
  ];

  return (
    <Fragment>
      <Row className="justify-content-md-center">
        <Col className="d-flex justify-content-center" lg={10} xl={10}>
          <div className={styles.extendedInputContainer}>
            <input 
              className={styles.extendedSearchbar}
              type="text"
              placeholder="What do you want to learn today?"
              onChange={props.onChange}
            />
            <img className={styles.inputIcon} src={searchIcon} alt=""/>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
          <small>Filter by tag</small>
      </Row>
      <Row className="justify-content-md-center">
        <Col className="d-flex justify-content-center" lg={7} xl={7}>
          <div className={styles.tags}>
            {tags.map(tag => (
              <Tag title={tag}></Tag>
            ))}
          </div>
        </Col>
      </Row>
      <Row className={["justify-content-md-center", styles.moreTags].join(" ")}>
          <small>See all tags</small>
      </Row>
    </Fragment>
  );
};

interface TagProps {
  title: string;
}

const Tag = (props: TagProps) => {
  const [select, setSelected] = useState(false);
  return (
    <button
      onClick={() => setSelected(!select)}
      className={[select ? styles.activeTag : "", styles.tag].join(" ")}
    >
      {props.title}
      {select ? (
        <label className={styles.deleteTag}>
          <small>&#10005;</small>
        </label>
      ) : (
        <label className={styles.addTag}>
          <small>&#10005;</small>
        </label>
      )}
    </button>
  );
};

export default ExtendedSearchbar