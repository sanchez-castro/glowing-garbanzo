import React, { useState } from "react";
import { Collapse } from 'react-bootstrap'
import styles from "./sidebar.module.scss";
import collapseArrowIcon from "../assets/icon/accent-collapse-arrow.svg"

interface LayoutProps {
  hidden: boolean;
}

const Sidebar = (props: LayoutProps) => {
  const [tree, setTree] = useState({ extended: true });

  const handleToggle = () => {
    setTree({
      extended: !tree.extended,
    });
  };

  return (
    <div className={props.hidden ? styles.hiddenBar : ''}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>Data <br/> Product <br/> Design</p>
        <p className={styles.bio}>
          I spend my time trying to change the way we understand social phenomenon
          through data science to resolve problems for social good.
        </p>
      </div>

      <div className={styles.learningTopics}>
        <div className={styles.topics} >Learning topics</div>

        <CollapsableMenu parent={'Data Science'} nodes={['Data Mining']}></CollapsableMenu>
        <CollapsableMenu parent={'Machine Learning'} nodes={['Supervised Learning', 'Clustering', 'K-Modes']}></CollapsableMenu>
        <CollapsableMenu parent={'Deep Learning'} nodes={[]}></CollapsableMenu>
        <CollapsableMenu parent={'Business Intelligence'} nodes={[]}></CollapsableMenu>
        <CollapsableMenu parent={'Technology'} nodes={[]}></CollapsableMenu>
      </div>
    </div>
  );
};

interface MenuProps {
  parent: string;
  nodes: Array<string>;
}

const CollapsableMenu = (props: MenuProps) => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className={styles.collapsable}>
      <div
        className={styles.header}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}>
          {props.parent}
          <img src={collapseArrowIcon} className={open ? styles.rotated : ''} alt=""/>
      </div>
      <Collapse in={open}>
        <div>
          {props.nodes.map((node) => (
            <div key={node} className={styles.node}>
              {node}
            </div>
          ))}
        </div>
    </Collapse>
    </div>
  );
}

export default Sidebar;
