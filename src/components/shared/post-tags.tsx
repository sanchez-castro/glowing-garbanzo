import React from "react";
import styles from './post-tags.module.scss'

interface Props {
    tags: Array<string>
}

const Tags = (props: Props) => {
    return(
        <div className={styles.tags}>
            {
                props.tags.map((tag :string) => (
                    <div className={styles.tag}>
                        {tag}
                    </div> 
                ))
            }
        </div>
    ) 
}

export default Tags