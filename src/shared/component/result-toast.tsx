import React from "react";
import { Toast } from "react-bootstrap";
import styles from "./result-toast.module.scss";

const ResultToast = (props: any) => {
  return (
    <Toast
      delay={3000}
      autohide
      show={props.displayToast}
      onClose={props.handleClose}
      className={styles.resultToast}
    >
      <Toast.Header className={styles.toastHeader}>
        <strong className="mr-auto">Data Product Design</strong>
      </Toast.Header>
      <Toast.Body>
        {props.result ? (
          <div dangerouslySetInnerHTML={{ __html: props.result.msg }} />
        ) : (
          ""
        )}
      </Toast.Body>
    </Toast>
  );
};

export default ResultToast;
