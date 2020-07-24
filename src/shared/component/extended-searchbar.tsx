import React, { useState, Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./extended-searchbar.module.scss";
import searchIcon from "../../assets/icon/search.svg";
import { useStaticQuery, graphql } from "gatsby";

interface SearchbarState {
  selectedTags: Array<string>;
  visibleTags: Tag[];
}

const ExtendedSearchbar = (props: any) => {
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
      active: props.selectedTags
        ? props.selectedTags.includes(tag.fieldValue)
        : false,
    };
  });

  const [state, setState] = useState<SearchbarState>({
    selectedTags: props.selectedTags ? props.selectedTags : [],
    visibleTags: props.mobile ? tags.slice(0, 5) : tags.slice(0, 10),
  });

  const addTag = (title: string) => {
    let selectedTags = state.selectedTags;
    if (selectedTags.includes(title)) {
      selectedTags = selectedTags.filter((tag: string) => tag !== title);
    } else {
      selectedTags.push(title);
    }
    const visibleTags = state.visibleTags.map((tag) => {
      return { title: tag.title, active: selectedTags.includes(tag.title) };
    });
    setState({
      selectedTags: selectedTags,
      visibleTags: visibleTags,
    });
    if (props.onTagSelected) {
      props.onTagSelected(selectedTags);
    }
    console.log(state);
  };

  const displayAllTags = () => {
    setState({
      selectedTags: state.selectedTags,
      visibleTags: tags,
    });
  };

  return (
    <div>
      <Row className="justify-content-md-center">
        <Col
          className="d-flex justify-content-center"
          sm={10}
          md={10}
          lg={10}
          xl={10}
        >
          <div className={styles.extendedInputContainer}>
            <input
              className={[
                styles.extendedSearchbar,
                props.mobile ? styles.searchbarMobile : "",
              ].join(" ")}
              type="text"
              placeholder={
                !props.mobile
                  ? "¿Qué quieres aprender el día de hoy?"
                  : "Buscar"
              }
              onKeyUp={props.onKeyUp}
            />
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <small>Filtrar por etiqueta</small>
      </Row>
      <Row className="justify-content-center">
        <Col className="d-flex justify-content-center" lg={7} xl={7}>
          <div className={styles.tags}>
            {state.visibleTags.map((tag: Tag) => (
              <div
                className={styles.tagContainer}
                onClick={() => addTag(tag.title)}
                key={tag.title}
              >
                <Tag title={tag.title} active={tag.active}></Tag>
              </div>
            ))}
          </div>
        </Col>
      </Row>
      <Row
        className={[
          "justify-content-center",
          styles.moreTags,
          props.mobile ? styles.moreTagsMobile : "",
        ].join(" ")}
      >
        {state.visibleTags.length < tags.length ? (
          <small onClick={() => displayAllTags()}>
            Ver todas las etiquetas
          </small>
        ) : (
          ""
        )}
      </Row>
    </div>
  );
};

interface Tag {
  title: string;
  active: boolean;
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
