import React, { Fragment } from "react";
import Layout from "../shared/component/layout";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./about-us.module.scss";

//assets
import user from "../assets/image/philosophy-banner.jpg";
import { graphql } from "gatsby";
import { Author } from "../shared/models/author";
import { ChildImageSharp } from '../shared/models/image';

interface Props {
  data: any;
}

const AboutUs = (props: Props) => {
  const authors = props.data.allAuthorYaml.edges.map( (edge: any) => new Author(edge.node))
  const founder = authors.find((author: Author) => author.id == "adrian@ianalytics.org")
  const collaborators = authors.filter(
    (author: Author) => author.id !== "adrian@ianalytics.org"
  );

  return (
    <Layout>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col lg={10} className={styles.header}>
            <p className="headline-1">About us</p>
            <p className="headline-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
          <Col lg={8}>
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
              <Col lg={10} className={styles.collaborators}>
                <p className="headline-1">Collaborators</p>
              </Col>
              <Col lg={8}>
                {collaborators.map( (collaborator: any) => (
                    <About
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
  image?: any
}

const About = (props: AboutProps) => {
  return (
    <Container className={styles.about}>
      <Row className="justify-content-md-center">
        <Col lg={3} className={styles.imageCol}>
          {props.image ? <img src={props.image.childImageSharp.fluid.src} alt="" /> : ''}
        </Col>
        <Col lg={9} className={styles.contentCol}>
          <p className="headline-3">
            {props.name}{" "}
            <label className={[styles.twitterHandle, "headline-4"].join(" ")}>
              {props.twitter}
            </label>
          </p>
          <p className="paragraph">{props.bio}</p>
          <div className={styles.title}>
            <label className="small-text">{props.title}</label>
          </div>
          <div className={styles.location}>
            <label className="small-text">{props.location}</label>
          </div>
          <div className={styles.email}>
            <label className="small-text">{props.email}</label>
          </div>
          <div className={styles.twitter}>
            <label className="small-text">{props.twitter}</label>
          </div>
          <div className={styles.github}>
            <label className="small-text">{props.github}</label>
          </div>
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
