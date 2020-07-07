import React from "react";
import styles from './post-tags.module.scss'
import {Link, navigate} from 'gatsby'
import { kebabCase } from "lodash";

interface Props {
    tags: Array<string>
}

const Tags = (props: Props) => {

    const goToTag = (tag: string) => {
        navigate(`/tags/${kebabCase(tag)}/`)
    }
    return(
        <div className={styles.tags}>
            {
                props.tags.map((tag :string) => (
                    <div key={tag} onClick={() => goToTag(tag)} className={styles.tag}>
                        {tag}
                    </div> 
                ))
            }
        </div>
    ) 
}

export default Tags