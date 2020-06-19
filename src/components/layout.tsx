import React, { Component } from "react";
import { Link } from "gatsby";
import Header from "./header";
import Sidebar from "./sidebar";
import { Container, Row, Col, Collapse } from "react-bootstrap";
import "../styles/styles.scss";
import styles from "./layout.module.scss";

interface LayoutProps {
  location: Location;
  title: string;
  children?: any;
}

interface LayoutState {
  collapsedSidebar: boolean;
}

class Layout extends Component<LayoutProps, LayoutState> {
  constructor(props: LayoutProps) {
    super(props);

    this.state = {
      collapsedSidebar: false,
    };
    this.sidebarWidth = 3;
  }

  sidebarWidth: number;

  toggleHideHandler = () => {
    this.setState(
      {
        collapsedSidebar: !this.state.collapsedSidebar,
      },
      this.setBarWidth
    );
  };

  setBarWidth = () => {
    if (this.state.collapsedSidebar) {
      this.sidebarWidth = 1;
    } else {
      this.sidebarWidth = 3;
    }
    this.forceUpdate();
  };

  render() {
    return (
      <Container fluid className={styles.container}>
        <Row className={styles.row}>
          <Col
            lg={this.sidebarWidth}
            xl={this.sidebarWidth}
            className={styles.sidebar}
          >
            <Sidebar
              hidden={this.state.collapsedSidebar}
              hideHandler={this.toggleHideHandler}
            ></Sidebar>
          </Col>
          <Col style={{ padding: 0 }} lg={10} xl={9}>
            <Header></Header>
            <main className={styles.content}>{this.props.children}</main>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Layout;
