import React, { useState, Fragment } from "react";
import { Collapse } from "react-bootstrap";
import styles from "./sidebar.module.scss";
import collapseArrowIcon from "../assets/icon/accent-collapse-arrow.svg";
import closeIcon from "../assets/icon/close.svg";
import { navigate } from "gatsby";
import { kebabCase } from "lodash";

interface LayoutProps {
  hidden: boolean;
  mobile?: boolean;
  closeHandle?: any;
}

const Sidebar = (props: LayoutProps) => {
  const home = () => {
    navigate("/");
  };

  return (
    <div className={props.hidden ? styles.hiddenBar : ""}>
      {props.mobile ? (
        <div className={styles.closeIcon}>
          <img onClick={props.closeHandle} src={closeIcon} alt="close icon" />
        </div>
      ) : (
        ""
      )}
      <div className={styles.titleContainer}>
        <p onClick={() => home()} className={styles.title}>
          Data <br /> Product <br /> Design
        </p>
        <p className={[styles.bio, "paragraph"].join(" ")}>
          El mejor sitio en español para aprender Ciencia de Datos.
        </p>
      </div>

      <div className={styles.learningTopics}>
        <div className={[styles.topics, "headline-4"].join(" ")}>
          Learning topics
        </div>

        <CollapsableMenu
          parent={"Data Science"}
          nodes={["data mining"]}
        ></CollapsableMenu>
        <CollapsableMenu
          parent={"Machine Learning"}
          nodes={["Supervised Learning", "Clustering", "K-Modes"]}
        ></CollapsableMenu>
        <CollapsableMenu parent={"Deep Learning"} nodes={[]}></CollapsableMenu>
        <CollapsableMenu
          parent={"Business Intelligence"}
          nodes={[]}
        ></CollapsableMenu>
        <CollapsableMenu parent={"Technology"} nodes={[]}></CollapsableMenu>
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

  const selectTopic = (topic: string) => {
    navigate(`/topics/${kebabCase(topic)}/`);
  };

  return (
    <div className={styles.collapsable}>
      <div
        className={styles.header}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {props.parent}
        <img
          src={collapseArrowIcon}
          className={open ? styles.rotated : ""}
          alt=""
        />
      </div>
      <Collapse in={open}>
        <div>
          {props.nodes.map((node) => (
            <div
              key={node}
              className={styles.node}
              onClick={() => selectTopic(node)}
            >
              {node}
            </div>
          ))}
        </div>
      </Collapse>
    </div>
  );
};

export default Sidebar;
