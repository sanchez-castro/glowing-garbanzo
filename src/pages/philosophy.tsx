import React from "react";
import Layout from "../shared/component/layout";
import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "./philosophy.module.scss";

//Assets
import banner from "../assets/image/philosophy-banner.jpg";
import scientistIcon from "../assets/icon/data-scientist.svg";
import analystIcon from "../assets/icon/data-analyst.svg";
import biIcon from "../assets/icon/bi-analyst.svg";
import { navigate } from "gatsby";

const Philosophy = () => {
  const navigateTo = (path: string) => {
    navigate(path);
  };
  return (
    <Layout>
      <Container fluid className={styles.container}>
        <Row className="justify-content-md-center">
          <Col lg={12} xl={12} className="p-0">
            <div className={[styles.jumbotron, "d-none d-lg-block"].join(" ")}>
              <div className={styles.bannerText}>
                <p className="headline-1">Filosofía</p>
                <p className="headline-3">
                  Acercamos el conocimiento de ciencia de datos en español para ayudarte a desarrollar las habilidades de programación y el pensamiento crítico requerido para diseñar productos de datos más humanos en Latinoamerica.
                </p>
              </div>
            </div>
            <div
              className={["d-block d-lg-none", styles.jumbotronMobile].join(
                " "
              )}
            >
              <div className={styles.bannerText}>
                <p className="headline-1">Filosofía</p>
                <p className="headline-3">
                Acercamos el conocimiento de ciencia de datos en español para ayudarte a desarrollar las habilidades de programación y el pensamiento crítico requerido para diseñar productos de datos más humanos en Latinoamerica.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={10} xl={10} className={styles.colContent}>
            <Row>
              <Col xs={12} sm={12} md={8} lg={8}>
                <p className={styles.headline}>Nuestra óptica</p>
                <p>
                  Creeo que un conocimiento holístico sobre la aplicación de ciencia de datos conlleva entender 5 ciones:

                  <ul>
                    <li>De su evolución;  de donde viene y que és</li>
                    <li>De su programación; como se aplica</li>
                    <li>De sus aplicación:  desde una perspectiva de su función objetivo; cuando se aplica</li>
                    <li>De sus implicación: desde una perspectiva de pensamiento crítico;  porqué se aplica</li>
                    <li>Ideación</li>
                  </ul>
                  
                </p>
              </Col>
              <Col xs={12} sm={12} md={8} lg={4} className={styles.imageCol}>
                <img
                  className="d-none d-lg-block"
                  src={banner}
                  alt="man programming"
                />
              </Col>
            </Row>
          </Col>
          <Col className="d-block d-lg-none p-0" xs={12} sm={12}>
            <img
              className={styles.mobileBlockImage}
              src={banner}
              alt="man programming"
            />
          </Col>
          <Col
            lg={10}
            className={[styles.colContent, "d-none d-lg-block"].join(" ")}
          >
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
                <span className={styles.quoteAuthor}>–Jamie Boyle</span>
              </p>
            </div>
          </Col>

          <Col
            lg={10}
            className={[styles.colContent, "d-block d-lg-none"].join(" ")}
          >
            <div className={styles.mobileQuote}>
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
                <span className={styles.quoteAuthor}>–Jamie Boyle</span>
              </p>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col
            lg={10}
            xl={10}
            className="text-center headline-1 d-block d-lg-none"
            style={{ marginBottom: "2vh" }}
          >
            Nuestros vitales
          </Col>
          <Col
            lg={10}
            xl={10}
            className="headline-1 d-none d-lg-block"
            style={{ marginBottom: "5vh" }}
          >
            Nuestros vitales
          </Col>
          <Col lg={10} xl={10} className={styles.cards}>
            <Row>
              <Col
                xs={12}
                sm={12}
                md={4}
                lg={4}
                xl={4}
                className="d-flex justify-content-center"
              >
                <Card
                  className={[styles.card, styles.modules].join(" ")}
                  onClick={() => navigateTo("/modules")}
                >
                  <Card.Body>
                    <div className={styles.cardImage}>
                      <img src={scientistIcon} />
                    </div>
                    <Card.Title className="headline-3 text-center">
                      Módulos
                    </Card.Title>
                    <Card.Subtitle className="headline-4 text-center">
                      Habilidades y pensamiento crítico
                    </Card.Subtitle>
                    <Card.Text
                      className={["paragraph", styles.cardText].join(" ")}
                    >
                      Lenguajes y ambientes de programación para ayudar en
                      desarrollo e implementación de productos de datos.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col
                xs={12}
                sm={12}
                md={4}
                lg={4}
                xl={4}
                className="d-flex justify-content-center"
              >
                <Card
                  className={[styles.card, styles.perspectives].join(" ")}
                  onClick={() => navigateTo("/perspectives")}
                >
                  <Card.Body>
                    <div className={styles.cardImage}>
                      <img src={analystIcon} />
                    </div>
                    <Card.Title className="headline-3 text-center">
                      Perspectivas
                    </Card.Title>
                    <Card.Subtitle className="headline-4 text-center">
                      Inspiración en ciencia de datos
                    </Card.Subtitle>
                    <Card.Text
                      className={["paragraph", styles.cardText].join(" ")}
                    >
                      Experiencias, visiones e ideas alrededor de la ciencia de
                      datos.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col
                xs={12}
                sm={12}
                md={4}
                lg={4}
                xl={4}
                className="d-flex justify-content-center"
              >
                <Card
                  className={[styles.card, styles.projects].join(" ")}
                  onClick={() => navigateTo("/projects")}
                >
                  <Card.Body>
                    <div className={styles.cardImage}>
                      <img src={biIcon} />
                    </div>
                    <Card.Title className="headline-3 text-center">
                      Proyectos
                    </Card.Title>
                    <Card.Subtitle className="headline-4 text-center">
                      Conocimiento aplicado
                    </Card.Subtitle>
                    <Card.Text
                      className={["paragraph", styles.cardText].join(" ")}
                    >
                      Problemas y soluciones escalables para tus primeros
                      proyectos en ciencia de datos.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Philosophy;
