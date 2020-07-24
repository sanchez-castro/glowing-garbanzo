import React from "react";
import { graphql } from "gatsby";

import Layout from "../shared/component/layout";
import SEO from "../components/seo";

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const NotFoundPage = ({ data }: Props) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>Chale, esta ruta no existe.</p>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
