import React from "react";
import Layout from "../shared/component/layout";
import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "./philosophy.module.scss";

//Assets
import banner from "../assets/image/philosophy-banner.jpg";
import scientistIcon from "../assets/icon/data-scientist.svg";
import analystIcon from "../assets/icon/data-analyst.svg";
import biIcon from "../assets/icon/bi-analyst.svg";

const Philosophy = () => {
  return (
    <Layout>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col lg={12} xl={12} className="p-0">
            <div className={styles.jumbotron}>
              <img src={banner} alt="banner image" />
              <div className={styles.bannerText}>
                <h1>DPD Philosophy</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={10} xl={10} className={styles.colContent}>
            <Row>
              <Col lg={8}>
                <p className={styles.headline}>You'll learn to love data</p>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. "Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat.
                </p>
              </Col>
              <Col lg={4} className={styles.imageCol}>
                <img src={banner} alt="man programming" />
              </Col>
            </Row>
          </Col>
          <Col lg={10} className={styles.colContent}>
            <div className={styles.quote}>
              <p>
                Big data es como el sexo en la adolescencia:
                <br />
                Todos hablan de ello;
                <br />
                nadie en realidad sabe como hacerlo;
                <br />
                todos piensan que todos los demás lo hacen;
                <br />
                Así que todos dicen estarlo hacerlo.
                <br />
                –Jamie Boyle
              </p>
            </div>
          </Col>
        </Row>

        <Row
          className="justify-content-md-center"
        >
          <Col lg={10} xl={10} className={styles.vitalsTitle}>
            Our vitals
          </Col>
          <Col lg={10} xl={10} className={styles.cards}>
            <Card className={styles.card}>
              <Card.Body>
                <Card.Title className={styles.cardImage}>
                  <img src={scientistIcon} />
                </Card.Title>
                <Card.Subtitle className={styles.cardTitle}>
                  Learning Hub
                </Card.Subtitle>
                <Card.Text className={styles.cardText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className={styles.card}>
              <Card.Body>
                <Card.Title className={styles.cardImage}>
                  <img src={analystIcon} />
                </Card.Title>
                <Card.Subtitle className={styles.cardTitle}>
                  Projects
                </Card.Subtitle>
                <Card.Text className={styles.cardText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className={styles.card}>
              <Card.Body>
                <Card.Title className={styles.cardImage}>
                  <img src={biIcon} />
                </Card.Title>
                <Card.Subtitle className={styles.cardTitle}>
                  Perspectives
                </Card.Subtitle>
                <Card.Text className={styles.cardText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Philosophy;
