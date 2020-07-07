import React from "react";
import styles from './post-type.module.scss'
import articleIcon from '../../assets/icon/document.svg'
import videoIcon from '../../assets/icon/video.svg'

interface Props {
    types: Array<string>
}

const PostType = (props: Props) => {
    return (
        <div className={styles.postTypes}>
            {
                props.types.map( type => (
                    <div className={styles.postType} key={type}>
                        <img src={checkType(type)} alt="post type" />
                        <label className={styles.title}>{type}</label>
                    </div>
                ))
            }
        </div>
    )
}

const checkType = (type: string): string => {
    type = type.toLowerCase();
    switch (type) {
      case "Article":
        return articleIcon;
      case "Video":
        return videoIcon;
      default:
        return articleIcon;
    }
};

export default PostType