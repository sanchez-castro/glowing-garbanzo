import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/layout";

// Components
import { Helmet } from "react-helmet";
import { PageProps, Link, graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

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
              <h5 className="tag-title">{tag.fieldValue}</h5>
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

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
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
