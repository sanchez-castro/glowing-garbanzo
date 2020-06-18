import React from "react";
import { Link } from "gatsby";
import Header from './header';
import Sidebar from './sidebar';
import { Container, Row, Col } from "react-bootstrap";
import "../styles/styles.scss";
import styles from './layout.module.scss'

interface Props {
  location: Location;
  title: string;
  children?: any;
}

const Layout = ({ location, title, children }: Props) => {
  /* const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          marginBottom: `1.5rem`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    );
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    );
  } */

  return (
    <Container fluid>
      <Row className={styles.row}>
        <Col lg={2} xl={3} className={styles.sidebar}>
          <Sidebar></Sidebar>
        </Col>
        <Col style={{ padding: 0 }} lg={10} xl={9}>
          <Header></Header>
          <main className={styles.content}>{children}</main>
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
