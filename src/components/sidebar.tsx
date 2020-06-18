import React, { Component } from 'react'
import Tree from './tree'
import styles from './sidebar.module.scss'

const Sidebar = () => {

    const refs = Array(3).fill(0).map(() => React.useRef<Tree>() as React.MutableRefObject<Tree>);

    const handleToggle = () => {
        refs.forEach( ref => {
            const node = ref.current
            if(node) {
                node.toggleMenu()
            }
        })
    }

    return (
        <div className={styles.bar}>
            <p className={styles.title}>Data-Collective</p>
            <p className={styles.bio}>I spend my time trying to change the way we understand social phenomenon through data science to resolve problems for social good.</p>
            
            <div className={styles.toggleTitle} onClick={handleToggle}>
                Learning topics
                <img src={'icon/arrow-ios-up.svg'} alt="collapse arrow"/>
            </div>

            <Tree ref={refs[0]} parent={"DATA SCIENCE"} nodes={['DATA MINING']}></Tree>
            <Tree ref={refs[1]} parent={"MACHINE LEARNING"} nodes={['SUPERVISED LEARNING', 'CLUSTERING', 'K-MODES']}></Tree>
            <Tree ref={refs[2]} parent={"DEEP LEARNING"} nodes={[]}></Tree>
        </div>
    )
}

export default Sidebar