import React, { Fragment, useState } from "react";
import { Link } from "gatsby";
import styles from "./header.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import searchIcon from '../assets/icon/search.svg'

interface HeaderProps {
  extendedSearchbar: boolean;
}

const Header = (props: HeaderProps) => {
  return (
    <header>
      <Container fluid>
        <Row className={styles.headerRow}>
          <Col lg={6}>
            <div className={styles.inputContainer}>
              <input 
                className={[
                  props.extendedSearchbar ? "d-none" : "",
                  styles.navSearch
                ].join(" ")}
                type="text"
                placeholder="Search"
              />
              <img className={styles.inputIcon} src={searchIcon} alt=""/>
            </div>
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
      </Container>
    </header>
  );
};

export default Header;
