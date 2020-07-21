import React, { Fragment } from "react";
import PostPreview from "./post-preview";
import { useStaticQuery, graphql } from "gatsby";
import { PostsData } from "../models/post";
import Fuse from "fuse.js";
import _ from "lodash";

interface Props {
  title: string;
  tags: string[];
  parentId: string;
  mobile?: boolean;
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
    keys: ["node.excerpt", "node.frontmatter.title", "node.frontmatter.tags"],
  };

  const fuse = new Fuse(posts.allMarkdownRemark.edges, options);
  const tagsResult = fuse.search(props.tags.join(" "));
  const titleResult = fuse.search(props.title);

  const result = tagsResult.concat(titleResult).sort(function (a, b) {
    const keyA = a.score || 0,
      keyB = b.score || 0;
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });

  const reducedArray = _.uniq(
    result
      .map((result) => result.item)
      .filter((item) => item.node.id !== props.parentId)
  ).slice(0, 3);
  posts.allMarkdownRemark.edges = reducedArray;

  return (
    <Fragment>
      <p
        className="headline-2 d-none d-lg-block"
        style={{ margin: "10vh 0 5vh 0" }}
      >
        Publicaciones relacionadas
      </p>
      <p
        className="headline-2 d-block d-lg-none text-center"
        style={{ margin: "5vh 0 5vh 0" }}
      >
        Publicaciones relacionadas
      </p>
      {posts.allMarkdownRemark.edges.map(({ node }: any, index: number) => {
        const {
          title,
          date,
          description,
          type,
          tags,
          featuredImage,
        } = node.frontmatter;
        const slug = node.fields.slug;
        const mobile = props.mobile ? true : false;
        return (
          <Fragment key={index}>
            <PostPreview
              key={slug}
              title={title}
              date={date}
              excerpt={description || node.excerpt}
              contentType={type}
              tags={tags}
              featuredImage={
                featuredImage ? featuredImage.childImageSharp.fluid.src : null
              }
              link={slug}
              extended={false}
              mobile={mobile}
            ></PostPreview>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default RelatedPosts;
