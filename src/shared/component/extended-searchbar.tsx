import React, { useState, Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./extended-searchbar.module.scss";
import searchIcon from "../../assets/icon/search.svg";
import { useStaticQuery, graphql } from "gatsby";

interface SearchbarState {
  selectedTags: Array<string>
}

const ExtendedSearchbar = (props: any) => {
  const [state, setState] = useState<SearchbarState>({
    selectedTags: props.selectedTags ? props.selectedTags : [""]
  });

  const data = useStaticQuery(
    graphql`
      query Tags {
        allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `
  );

  const tags: Array<Tag> = data.allMarkdownRemark.group.map((tag: any) => {
    return { 
      title: tag.fieldValue, 
      active: state.selectedTags.includes(tag.fieldValue) 
    };
  });

  const addTag = (title: string) => {
    let selectedTags = state.selectedTags;
    if (selectedTags.includes(title)) {
      selectedTags = selectedTags.filter((tag: string) => tag !== title);
    } else {
      selectedTags.push(title);
    }
    setState({ selectedTags: selectedTags });
    if (props.onTagSelected) {
      props.onTagSelected(selectedTags);
    }
  };

  return (
    <div>
      <Row className="justify-content-md-center">
        <Col className="d-flex justify-content-center" lg={10} xl={10}>
          <div className={styles.extendedInputContainer}>
            <input
              className={styles.extendedSearchbar}
              type="text"
              placeholder="What do you want to learn today?"
              onKeyDown={props.onKeyDown}
            />
            <img className={styles.inputIcon} src={searchIcon} alt="" />
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <small>Filter by tag</small>
      </Row>
      <Row className="justify-content-md-center">
        <Col className="d-flex justify-content-center" lg={7} xl={7}>
          <div className={styles.tags}>
            {tags.map((tag: Tag) => (
              <div
                className={styles.tagContainer}
                onClick={() => addTag(tag.title)}
              >
                <Tag title={tag.title} active={tag.active}></Tag>
              </div>
            ))}
          </div>
        </Col>
      </Row>
      <Row className={["justify-content-md-center", styles.moreTags].join(" ")}>
        <small>See all tags</small>
      </Row>
    </div>
  );
};

interface Tag {
  title: string
  active: boolean
}

const Tag = (props: Tag) => {
  return (
    <button
      className={[props.active ? styles.activeTag : "", styles.tag].join(" ")}
    >
      {props.title}
      {props.active ? (
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

export default ExtendedSearchbar;
