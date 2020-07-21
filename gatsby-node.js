const path = require("path");
const _ = require("lodash");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve("./src/templates/blog-post.tsx");
  const topicTemplate = path.resolve("./src/templates/topics.tsx");
  const authorPerspective = path.resolve("./src/templates/perspectives.tsx");
  const result = await graphql(
    `
      {
        postsRemark: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
              }
            }
          }
        }
        topics: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___topics) {
            fieldValue
          }
        }
        authors: allMarkdownRemark {
          group(field: frontmatter___author___id) {
            fieldValue
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.postsRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;
    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });

  const topics = result.data.topics.group;

  topics.forEach((topic) => {
    createPage({
      path: `/topics/${_.kebabCase(topic.fieldValue)}/`,
      component: topicTemplate,
      context: {
        topic: topic.fieldValue,
      },
    });
  });

  const authors = result.data.authors.group;

  authors.forEach((author) => {
    createPage({
      path: `/perspectives/${_.kebabCase(author.fieldValue)}/`,
      component: authorPerspective,
      context: {
        topic: author.fieldValue,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }

    type Frontmatter {
      author: AuthorYaml @link(by: "id")
    }
  `;
  createTypes(typeDefs);
};
