import React from "react";
import styles from "./post-type.module.scss";
import articleIcon from "../../assets/icon/document.svg";
import videoIcon from "../../assets/icon/video.svg";
import scientistIcon from "../../assets/icon/data-scientist.svg";
import analystIcon from "../../assets/icon/data-analyst.svg";
import biIcon from "../../assets/icon/bi-analyst.svg";

interface Props {
  types: Array<string>;
  postType?: string;
};

const PostType = (props: Props) => {
  return (
    <div className={styles.postTypes}>
      {
        props.types.map((type) => (
          <div className={styles.postType} key={type}>
            <img src={checkContentType(type)} alt="post type" />
            <label className={[styles.title, "small-text"].join(" ")}>
              {type}
            </label>
          </div>
        ))
      }
      {props.postType ? (
        <div className={styles.postType}>
          <img className={styles.typeLogo} src={checkPostType(props.postType)} alt="" />
          <label className={[styles.title, "small-text"].join(" ")}>
            {props.postType}
          </label>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

const checkContentType = (type: string): string => {
  type = type.toLowerCase();
  switch (type) {
    case "artículo":
      return articleIcon;
    case "video":
      return videoIcon;
    default:
      return articleIcon;
  }
};

const checkPostType = (type: string) => {
  type = type.toLowerCase();
  switch (type) {
    case "modulo":
      return scientistIcon;
    case "perspectiva":
      return analystIcon;
    case "proyecto":
      return biIcon;
    default:
      return analystIcon;
  }
};

export default PostType;

