import React from "react";
import styles from "./post-tags.module.scss";
import { Link, navigate } from "gatsby";
import { kebabCase } from "lodash";

interface Props {
  tags: Array<string>;
}

const Tags = (props: Props) => {
  const selectTag = (tag: string) => {
    navigate("/search-result/", {
      state: { searchTerm: "", tags: [tag] },
    });
  };
  return (
    <div className={styles.tags}>
      {props.tags.map((tag: string) => (
        <div
          key={tag}
          onClick={() => selectTag(tag)}
          className={[styles.tag, "small-text"].join(" ")}
        >
          {tag}
        </div>
      ))}
    </div>
  );
};

export default Tags;
