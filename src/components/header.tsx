import React, { Fragment, useState } from "react";
import { Link } from "gatsby";
import styles from "./header.module.scss";
import { Container, Row, Col } from "react-bootstrap";

interface HeaderProps {
  hideHandler: (event: React.MouseEvent<HTMLImageElement>) => void;
  hiddenBar: boolean;
  extendedSearchbar: boolean;
}

const Header = (props: HeaderProps) => {
  return (
    <header>
      <div
        className={[
          props.hiddenBar ? styles.rotated : "",
          styles.hideButton
        ].join(" ")}
        onClick={props.hideHandler}
      >
        &#10095;
      </div>

      <Container fluid>
        <Row className={styles.headerRow}>
          <Col lg={6}>
            <input
              className={[
                props.extendedSearchbar ? "d-none" : "",
                styles.navSearch
              ].join(" ")}
              type="text"
              placeholder="Search"
            />
          </Col>
          <Col lg={6}>
            <ul className={styles.navList}>
              <li>
                <Link
                  className={styles.navItem}
                  activeClassName={styles.activeNavItem}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={styles.navItem}
                  activeClassName={styles.activeNavItem}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={styles.navItem}
                  activeClassName={styles.activeNavItem}
                  to="/philosophy"
                >
                  Collective Philosophy
                </Link>
              </li>
              <li>
                <button className={styles.navButton}>Subscribe</button>
              </li>
            </ul>
          </Col>
        </Row>
        {props.extendedSearchbar ? <ExtendedSearchbar></ExtendedSearchbar> : ""}
      </Container>
    </header>
  );
};

const ExtendedSearchbar = () => {
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
          <input
            className={styles.extendedSearchbar}
            type="text"
            placeholder="What do you want to learn today?"
          />
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

export default Header;
