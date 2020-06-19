import React, { useState } from "react";
import Tree from "./tree";
import styles from "./sidebar.module.scss";

interface LayoutProps {
  hideHandler: (event: React.MouseEvent<HTMLImageElement>) => void;
  hidden: boolean;
}

const Sidebar = (props: LayoutProps) => {
  const refs = Array(3)
    .fill(0)
    .map(() => React.useRef<Tree>() as React.MutableRefObject<Tree>);
  const [tree, setTree] = useState({ extended: true });

  const handleToggle = () => {
    refs.forEach((ref) => {
      const node = ref.current;
      if (node) {
        node.toggleMenu();
      }
    });

    setTree({
      extended: !tree.extended,
    });
  };

  return (
    <div className={props.hidden ? styles.hiddenBar : styles.bar}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>Data-Collective</p>
        {!props.hidden ? <div className={styles.titleBackground}></div> : ""}
      </div>
      <p className={styles.bio}>
        I spend my time trying to change the way we understand social phenomenon
        through data science to resolve problems for social good.
      </p>

      <img
        className={[props.hidden ? styles.rotated : "", styles.hideButton].join(
          " "
        )}
        onClick={props.hideHandler}
        src={"icon/hide-sidebar.svg"}
        alt=""
      />

      <div className={styles.toggleTitle} onClick={handleToggle}>
        Learning topics
        <img
          className={tree.extended ? styles.rotated : ""}
          src={"icon/arrow-ios-up.svg"}
          alt="collapse arrow"
        />
      </div>

      <div className={styles.treeContainer}>
        <Tree
          ref={refs[0]}
          parent={"DATA SCIENCE"}
          nodes={["DATA MINING"]}
        ></Tree>
      </div>

      <div className={styles.treeContainer}>
        <Tree
          ref={refs[1]}
          parent={"MACHINE LEARNING"}
          nodes={["SUPERVISED LEARNING", "CLUSTERING", "K-MODES"]}
        ></Tree>
      </div>

      <div className={styles.treeContainer}>
        <Tree ref={refs[2]} parent={"DEEP LEARNING"} nodes={[]}></Tree>
      </div>
    </div>
  );
};

export default Sidebar;
