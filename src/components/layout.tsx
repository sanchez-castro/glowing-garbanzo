import React, { Component } from "react";
import { Link } from "gatsby";
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import { Container, Row, Col } from "react-bootstrap";
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
  }

  contentWidth: number = 9;
  hiddenClass: string = '';

  toggleHideHandler = () => {
    this.setState(
      {
        collapsedSidebar: !this.state.collapsedSidebar,
      },
      this.setContentWidth
    );
  };

  setContentWidth = () => {
    if(this.state.collapsedSidebar) {
      this.contentWidth = 12;
      this.hiddenClass = 'd-none';
    }else{
      this.contentWidth = 9;
      this.hiddenClass = '';
    }
    this.forceUpdate()
  }


  render() {
    return (
      <Container fluid className={styles.container}>
        <Row className={styles.row}>
          <Col
            lg={3}
            xl={3}
            className={ [this.hiddenClass, styles.sidebar].join(" ")}
          >
            <Sidebar
              hidden={this.state.collapsedSidebar}
            ></Sidebar>
          </Col>
          <Col style={{ padding: 0 }} lg={this.contentWidth} xl={this.contentWidth}>
            <Header 
              extendedSearchbar={this.props.location.pathname == '/' ? true : false}
              hiddenBar={this.state.collapsedSidebar}
              hideHandler={this.toggleHideHandler}></Header>
            <main className={styles.content}>{this.props.children}</main>
            <Footer></Footer>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Layout;
