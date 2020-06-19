import React, { Component } from "react";
import styles from "./tree-menu.module.scss";

interface TreeProps {
  parent: string;
  nodes: Array<string>;
}

interface TreeState {
  toggle: boolean;
}

class Tree extends Component<TreeProps, TreeState> {
  constructor(props: TreeProps) {
    super(props);

    this.state = {
      toggle: false,
    };
  }

  toggleMenu = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  render() {
    return (
      <div className={styles.treeMenu}>
        <ul className={styles.tree}>
          <li key={this.props.parent}>
            <button className={styles.box} onClick={() => this.toggleMenu()}>
              {this.props.parent}
            </button>
            <ul
              className={styles.nested}
              style={{ display: this.state.toggle ? "none" : "block" }}
            >
              {this.props.nodes.map((node) => (
                <li key={node}>
                  <button className={styles.node}>{node}</button>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default Tree;
