import React, { Component, Fragment } from "react";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./layout.module.scss";
import collapse from "../../assets/icon/collapse-arrow.svg";
import menuIcon from "../../assets/icon/hamburguer.svg";

interface LayoutProps {
  title?: string;
  children?: any;
}

interface LayoutState {
  collapsedSidebar: boolean;
}

class Layout extends Component<LayoutProps, LayoutState> {
  constructor(props: LayoutProps) {
    super(props);
    this.state = {
      collapsedSidebar: true,
    };
  }

  componentDidMount() {
    const landing = window.location.pathname == "/"
    this.setState({
      collapsedSidebar: !landing
    })
  }

  contentWidth = 9;
  hiddenClass = "fixed-top one";
  contentClass = "two";

  toggleHideHandler = () => {
    this.setState({
      collapsedSidebar: !this.state.collapsedSidebar,
    });
  };

  render() {
    return (
      <Container fluid className={styles.container}>
        <Row className={styles.row}>
          <Col className="d-block d-lg-none p-0">
            <Mobile
              collapsedSidebar={!this.state.collapsedSidebar}
              toggleHideHandler={this.toggleHideHandler}
            >
              {this.props.children}
            </Mobile>
          </Col>
          <Col className="d-none d-lg-block p-0">
            <Landscape
              collapsedSidebar={this.state.collapsedSidebar}
              toggleHideHandler={this.toggleHideHandler}
            >
              {this.props.children}
            </Landscape>
          </Col>
        </Row>
      </Container>
    );
  }
}

const Mobile = (props: any) => {
  return (
    <Fragment>
      <div
        className={[
          styles.sidebar,
          props.collapsedSidebar ? styles.hidden : styles.mobileVisible,
        ].join(" ")}
      >
        <Sidebar
          hidden={props.collapsedSidebar}
          closeHandle={props.toggleHideHandler}
          mobile={true}
        ></Sidebar>
      </div>
      {typeof window !== `undefined` ? (
        <Header
          extendedSearchbar={
            window.location.pathname == "/" ||
            window.location.pathname == "/search-result/"
              ? true
              : false
          }
          mobile={true}
          toggleHide={props.toggleHideHandler}
        ></Header>
      ) : (
        ""
      )}
      <body className={styles.body}>
        <main>{props.children}</main>
        <Footer mobile={true}></Footer>
      </body>
    </Fragment>
  );
};

const Landscape = (props: any) => {
  return (
    <Fragment>
      <div
        className={[
          styles.sidebar,
          props.collapsedSidebar ? styles.hidden : styles.visible,
        ].join(" ")}
      >
        <Sidebar hidden={props.collapsedSidebar}></Sidebar>
      </div>

      <div
        className={[
          "d-none d-lg-block ",
          styles.content,
          !props.collapsedSidebar ? styles.contentOffset : "",
        ].join(" ")}
      >
        <div
          className={[
            props.collapsedSidebar ? styles.rotated : "",
            styles.hideButton,
          ].join(" ")}
          onClick={props.toggleHideHandler}
        >
          <img src={collapse} alt="" />
        </div>
        {typeof window !== `undefined` ? (
          <Header
            extendedSearchbar={
              window.location.pathname == "/" ||
              window.location.pathname == "/search-result/"
                ? true
                : false
            }
          ></Header>
        ) : (
          ""
        )}
        <body className={styles.body}>
          <main>{props.children}</main>
          <Footer></Footer>
        </body>
      </div>
    </Fragment>
  );
};

export default Layout;
