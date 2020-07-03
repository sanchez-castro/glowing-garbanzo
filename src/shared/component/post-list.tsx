import React, { Fragment } from 'react'
import { PostsData } from '../models/post';
import PostPreview from './post-preview';
import Subscribe from './subscribe';
import styles from './post-list.module.scss'


interface PostListProps {
    list: PostsData;
}  

const PostList = (props: PostListProps) => {
    const posts = props.list.allMarkdownRemark.edges;
    return (
      <Fragment>
        {posts.map(({ node }: any, index: number) => {
          const {
            title,
            date,
            description,
            type,
            tags,
            featuredImage
          } = node.frontmatter;
          const slug = node.fields.slug
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
                extended={index == 0 ? true : false}
              ></PostPreview>
              {index == 4 ? <Subscribe></Subscribe> : ""}
            </Fragment>
          );
        })}
  
        <div className={styles.loadPosts}>Load More</div>
      </Fragment>
    );
  };

  export default PostList