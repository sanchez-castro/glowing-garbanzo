import React from "react";
import PropTypes from "prop-types";
import Layout from "../shared/component/layout";

// Components
import { Helmet } from "react-helmet";
import { PageProps, Link, graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import { kebabCase } from "lodash";

interface Data {
  allMarkdownRemark: {
    group: {
      fieldValue: string;
      edges: {
        node: {
          fields: {
            slug: string;
          };
          frontmatter: {
            title: string;
          };
        };
      }[];
    }[];
  };
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

const TagsPage = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <Container>
        <Row>
          {data.allMarkdownRemark.group.map((tag) => (
            <Col key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                <h5 className="tag-title">{tag.fieldValue}</h5>
              </Link>
              <div>
                {tag.edges.map((edge) => (
                  <Link key={edge.node.fields.slug} to={edge.node.fields.slug}>
                    <p>{edge.node.frontmatter.title}</p>
                  </Link>
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  }
`;
