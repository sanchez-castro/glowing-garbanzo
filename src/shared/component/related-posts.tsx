import React, { Fragment } from "react";
import PostPreview from "./post-preview";
import { useStaticQuery, graphql } from "gatsby";
import { PostsData } from "../models/post";
import Fuse from "fuse.js";
import _ from "lodash";

interface Props {
  title: string;
  tags: string[];
  parentId: string
}

const RelatedPosts = (props: Props) => {
  const postsQuery = useStaticQuery(
    graphql`
      query {
        ...PostsFragment
      }
    `
  );

  const posts = new PostsData(postsQuery);
  const options = {
    includeScore: true,
    keys: ["node.excerpt", "node.frontmatter.title", "node.frontmatter.tags"]
  };

  const fuse = new Fuse(posts.allMarkdownRemark.edges, options);
  const tagsResult = fuse.search(props.tags.join(" "));
  const titleResult = fuse.search(props.title);

  const result = tagsResult.concat(titleResult).sort(function (a, b) {
    var keyA = a.score || 0, keyB = b.score || 0;
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });

  const reducedArray = _.uniq(result
                        .map(result => result.item)
                        .filter( item => item.node.id !== props.parentId))
                        .slice(0, 3);
  posts.allMarkdownRemark.edges = reducedArray;

  return (
    <Fragment>
      <h2 style={{ margin: "10vh 0 5vh 0" }}>Related articles</h2>
      {posts.allMarkdownRemark.edges.map(({ node }: any) => {
        const {
          title,
          date,
          description,
          type,
          tags,
          featuredImage
        } = node.frontmatter;
        const slug = node.fields.slug;
        return (
          <Fragment>
            <PostPreview
              key={slug}
              title={title}
              date={date}
              excerpt={description || node.excerpt}
              type={type}
              tags={tags}
              featuredImage={
                featuredImage ? featuredImage.childImageSharp.fluid.src : null
              }
              link={slug}
              extended={false}
            ></PostPreview>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default RelatedPosts;
