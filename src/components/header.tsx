import React, { Fragment, useState } from "react";
import { Link, navigate } from "gatsby";
import styles from "./header.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import menuIcon from "../assets/icon/hamburguer.svg";

interface HeaderProps {
  extendedSearchbar: boolean;
  mobile?: boolean;
  toggleHide?: any;
}

const Header = (props: HeaderProps) => {
  const searchInputHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const target = event.target as HTMLInputElement;
      navigate("/search-result/", {
        state: { searchTerm: target.value, tags: [] },
      });
    }
  };
  return (
    <header>
      <Container fluid>
        <Row className={[styles.headerRow, "justify-content-center"].join(" ")}>
          {!props.mobile ? (
            <Col lg={5} xl={5}>
              <div className={styles.inputContainer}>
                <input
                  className={[
                    props.extendedSearchbar ? "d-none" : "",
                    styles.navSearch,
                  ].join(" ")}
                  type="text"
                  placeholder="Buscar"
                  onKeyUp={searchInputHandler}
                />
              </div>
            </Col>
          ) : (
            <div className={styles.menuIcon}>
              <img onClick={props.toggleHide} src={menuIcon} alt="menu icon" />
            </div>
          )}
          <Col sm={12} md={7} lg={7}>
            <ul
              className={[
                styles.navList,
                props.mobile ? styles.navMobile : "",
              ].join(" ")}
            >
              <li>
                <Link
                  className={styles.navItem}
                  activeClassName={styles.activeNavItem}
                  to="/"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  className={styles.navItem}
                  activeClassName={styles.activeNavItem}
                  to="/about-us"
                >
                  Acerca
                </Link>
              </li>
              <li>
                <Link
                  className={styles.navItem}
                  activeClassName={styles.activeNavItem}
                  to="/philosophy"
                >
                  Filosofía
                </Link>
              </li>
              {!props.mobile ? (
                <li>
                  <button className={[styles.navButton, "paragraph"].join(" ")}>
                    Subscribir
                  </button>
                </li>
              ) : (
                ""
              )}
            </ul>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
