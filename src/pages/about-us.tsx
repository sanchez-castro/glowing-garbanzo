import React, { Fragment } from "react";
import Layout from "../shared/component/layout";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./about-us.module.scss";

//assets
import { graphql } from "gatsby";
import { Author } from "../shared/models/author";
import { ChildImageSharp } from "../shared/models/image";
import title from "../assets/icon/about-title.svg";
import email from "../assets/icon/about-email.svg";
import github from "../assets/icon/about-github.svg";
import location from "../assets/icon/about-location.svg";
import twitter from "../assets/icon/twitter.svg";
import SEO from "../components/seo";

interface Props {
  data: any;
}

const AboutUs = (props: Props) => {
  const authors = props.data.allAuthorYaml.edges.map(
    (edge: any) => new Author(edge.node)
  );
  const founder = authors.find(
    (author: Author) => author.id == "adrian@ianalytics.org"
  );
  const collaborators = authors.filter(
    (author: Author) => author.id !== "adrian@ianalytics.org"
  );

  return (
    <Layout>
      <SEO title="Acerca de nosotros" />
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col
            lg={10}
            className={[styles.header, "d-block d-lg-none"].join(" ")}
          >
            <p className="headline-1 text-center">Sobre nosotros</p>
            <p className="headline-3 text-center">
              Aquellos que tengan la capacidad para tratar grandes volumenes de datos tendrán la capacidar para incidir en la forma en cómo evolucionamos como sociedad. Nosotros queremos democratizar su uso y desarrollar el pensamiento crítico en las personas para que puedan crear soluciones a problemas comunes a través de productos de datos más humanos. 
            </p>
          </Col>
          <Col
            lg={10}
            className={[styles.header, "d-none d-lg-block"].join(" ")}
          >
            <p className="headline-1">Sobre nosotros</p>
            <p className="headline-3">
              Aquellos que tengan la capacidad para tratar grandes volumenes de datos tendrán la capacidar para incidir en la forma en cómo evolucionamos como sociedad. Nosotros queremos democratizar su uso y desarrollar el pensamiento crítico en las personas para que puedan crear soluciones a problemas comunes a través de productos de datos más humanos. 
            </p>
          </Col>
          <Col lg={8} className="d-block d-lg-none">
            <About
              name={founder.name}
              bio={founder.bio}
              title={founder.title}
              location={founder.location}
              email={founder.id}
              twitter={founder.twitter}
              github={founder.github}
              image={founder.image}
              mobile={true}
            ></About>
          </Col>
          <Col lg={8} className="d-none d-lg-block">
            <About
              name={founder.name}
              bio={founder.bio}
              title={founder.title}
              location={founder.location}
              email={founder.id}
              twitter={founder.twitter}
              github={founder.github}
              image={founder.image}
            ></About>
          </Col>
          <Col lg={12} className="p-0">
            <hr />
          </Col>
          {collaborators.length > 0 ? (
            <Fragment>
              <Col lg={10} className="d-block d-lg-none text-center">
                <p className="headline-1">Colaboradores</p>
              </Col>
              <Col
                lg={10}
                className={[styles.collaborators, "d-none d-lg-block"].join(
                  " "
                )}
              >
                <p className="headline-1">Colaboradores</p>
              </Col>
              <Col lg={8} className="d-block d-lg-none">
                {collaborators.map((collaborator: any) => (
                  <About
                    key={collaborator.name}
                    name={collaborator.name}
                    bio={collaborator.bio}
                    title={collaborator.title}
                    location={collaborator.location}
                    email={collaborator.id}
                    twitter={collaborator.twitter}
                    github={collaborator.github}
                    image={collaborator.image}
                    mobile={true}
                  ></About>
                ))}
              </Col>
              <Col sm={12} className="d-none d-lg-block">
                {collaborators.map((collaborator: any) => (
                  <About
                    key={collaborator.name}
                    name={collaborator.name}
                    bio={collaborator.bio}
                    title={collaborator.title}
                    location={collaborator.location}
                    email={collaborator.id}
                    twitter={collaborator.twitter}
                    github={collaborator.github}
                    image={collaborator.image}
                  ></About>
                ))}
              </Col>
            </Fragment>
          ) : (
            ""
          )}
        </Row>
      </Container>
    </Layout>
  );
};

interface AboutProps {
  name: string;
  bio: string;
  title: string;
  location?: string;
  email?: string;
  twitter?: string;
  github?: string;
  avatar?: string;
  image?: any;
  mobile?: true;
}

const About = (props: AboutProps) => {
  return (
    <Container
      className={[styles.about, props.mobile ? styles.aboutMobile : ""].join(
        " "
      )}
    >
      <Row className="justify-content-md-center">
        <Col
          xs={12}
          sm={12}
          md={3}
          lg={3}
          xl={3}
          className={[
            styles.imageCol,
            props.mobile ? "justify-content-center" : "",
          ].join(" ")}
        >
          {props.image ? (
            <img
              className={[
                styles.avatar,
                props.mobile ? styles.mobileAvatar : "",
              ].join(" ")}
              src={props.image.childImageSharp.fluid.src}
              alt=""
            />
          ) : (
            ""
          )}
        </Col>
        <Col lg={9} className={props.mobile ? "" : styles.contentCol}>
          <p
            className={[
              "headline-3 m-0",
              props.mobile ? "text-center" : "",
            ].join(" ")}
          >
            {props.name}{" "}
            {!props.mobile ? (
              <label className={[styles.twitterHandle, "headline-4"].join(" ")}>
                <a
                  href={"https://www.twitter.com/" + props.twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  @{props.twitter}
                </a>
              </label>
            ) : (
              ""
            )}
          </p>
          {props.mobile ? (
            <p className="text-center m-0">
              {" "}
              <label className={[styles.twitterHandle, "headline-4"].join(" ")}>
                <a
                  href={"https://www.twitter.com/" + props.twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  @{props.twitter}
                </a>
              </label>
            </p>
          ) : (
            ""
          )}
          <p className="paragraph">{props.bio}</p>
          <Container>
            <Row className="m-0">
              <Col className={[styles.logo, "p-0"].join(" ")} xs={1}>
                <img src={title} alt="title" />
              </Col>
              <Col className="p-0" xs={11}>
                <label className="small-text">{props.title}</label>
              </Col>
            </Row>
            <Row className="m-0">
              <Col className={[styles.logo, "p-0"].join(" ")} xs={1}>
                <img src={location} alt="title" />
              </Col>
              <Col className="p-0" xs={11}>
                <label className="small-text">{props.location}</label>
              </Col>
            </Row>
            <Row className="m-0">
              <Col className={[styles.logo, "p-0"].join(" ")} xs={1}>
                <img src={email} alt="title" />
              </Col>
              <Col className="p-0" xs={11}>
                <label className="small-text">{props.email}</label>
              </Col>
            </Row>
            <Row className="m-0">
              <Col className={[styles.logo, "p-0"].join(" ")} xs={1}>
                <img src={twitter} alt="title" />
              </Col>
              <Col className="p-0" xs={11}>
                <label className="small-text">{props.twitter}</label>
              </Col>
            </Row>
            <Row className="m-0">
              <Col className={[styles.logo, "p-0"].join(" ")} xs={1}>
                <img src={github} alt="title" />
              </Col>
              <Col className="p-0" xs={11}>
                <label className="small-text">{props.github}</label>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;

export const pageQuery = graphql`
  query AuthorsQuery {
    allAuthorYaml {
      edges {
        node {
          id
          bio
          name
          github
          location
          title
          twitter
          image {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
