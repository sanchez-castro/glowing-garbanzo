import React, { useState, Fragment } from "react";
import { Collapse } from "react-bootstrap";
import styles from "./sidebar.module.scss";
import collapseArrowIcon from "../assets/icon/accent-collapse-arrow.svg";
import closeIcon from "../assets/icon/close.svg";
import { navigate, useStaticQuery, graphql, Link } from "gatsby";
import { Container, Row, Col, Image } from "react-bootstrap";
import Img from "gatsby-image";

interface LayoutProps {
  hidden: boolean;
  mobile?: boolean;
  closeHandle?: any;
}

const Sidebar = (props: LayoutProps) => {
  const home = () => {
    navigate("/");
  };

  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: { frontmatter: { sidebar: { eq: true } } }) {
          group(field: frontmatter___type) {
            nodes {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
            fieldValue
          }
        }
        file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    `
  );

  return (
    <Container className={props.hidden ? styles.hiddenBar : ""}>
      {props.mobile ? (
        <div className={styles.closeIcon}>
          <img onClick={props.closeHandle} src={closeIcon} alt="close icon" />
        </div>
      ) : (
        ""
      )}
      <Row>
        <Col sm={12} className={styles.titleContainer}>
          <div onClick={() => home()} className={styles.title}>
            <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
          </div>
          <p className={[styles.bio, "paragraph"].join(" ")}>
            El mejor sitio en español para aprender Ciencia de Datos.
          </p>
        </Col>
        <Col sm={12}>
          <div className={styles.learningTopics}>
            <div className={[styles.topics, "headline-4"].join(" ")}>
              Vitales
            </div>
            {data
              ? data.allMarkdownRemark.group.map((item: any) => (
                  <CollapsableMenu
                    parent={item.fieldValue}
                    nodes={item.nodes}
                  ></CollapsableMenu>
                ))
              : ""}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

interface MenuProps {
  parent: string;
  nodes: Array<{ fields: { slug: string }; frontmatter: { title: string } }>;
}

const CollapsableMenu = (props: MenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.collapsable}>
      <div
        className={styles.header}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {props.parent}s
        <img
          src={collapseArrowIcon}
          className={open ? styles.rotated : ""}
          alt="collapse button"
        />
      </div>
      <Collapse in={open}>
        <div>
          {props.nodes.map(node => (
            <div key={node.frontmatter.title} className={styles.node}>
              <Link
                className={[styles.link, "paragraph"].join(" ")}
                to={node.fields.slug}
              >
                {node.frontmatter.title}
              </Link>
            </div>
          ))}
        </div>
      </Collapse>
    </div>
  );
};

export default Sidebar;
