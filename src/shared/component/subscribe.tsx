import React, { useState, Fragment } from "react";
import { Container, Row, Col, Toast } from "react-bootstrap";
import styles from "./subscribe.module.scss";
import arrowIcon from "../../assets/icon/right-arrow.svg";
import addToMailchimp from "gatsby-plugin-mailchimp";
import ResultToast from "./result-toast";

interface SubscribeState {
  email: string;
  result: any;
  displayToast: boolean;
}

interface SubscribeProps {
  modal?: boolean;
  handleSubmit?: any;
}

const Subscribe = (props: SubscribeProps) => {
  const [state, setState] = useState<SubscribeState>({
    email: "",
    result: null,
    displayToast: false,
  });
  const handleChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const email = target.value ? target.value : "";
    setState({ email: email, result: null, displayToast: false });
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleClose = () =>
    setState({ email: state.email, result: state.result, displayToast: false });
  const handleSubmit = async () => {
    const result = await addToMailchimp(state.email);
    setState({ email: state.email, result: result, displayToast: true });
    if (props.modal) {
      props.handleSubmit({
        email: state.email,
        result: result,
        displayToast: true,
      });
    }
  };
  return (
    <Fragment>
      <Container
        fluid
        className={[styles.container, "d-none d-lg-block"].join(" ")}
      >
        {props.modal ? (
          <Modal handleSubmit={handleSubmit} handleChange={handleChange}></Modal>
        ) : (
          <Landscape handleSubmit={handleSubmit} handleChange={handleChange}></Landscape>
        )}
      </Container>

      <Container
        fluid
        className={[
          styles.container,
          styles.mobileContainer,
          "d-block d-lg-none",
        ].join(" ")}
      >
        <Mobile handleSubmit={handleSubmit} handleChange={handleChange}></Mobile>
      </Container>

      {!props.modal ? (
        <ResultToast
          displayToast={state.displayToast}
          result={state.result}
          handleClose={handleClose}
        ></ResultToast>
      ) : (
        ""
      )}
    </Fragment>
  );
};

const Mobile = (props: any) => {
  return (
    <Row className={styles.row}>
      <Col sm={12}>
        <p className={[styles.title, "headline-3"].join(" ")}>
          Suscríbete a nuestras ideas
        </p>
        <p className={[styles.title, "paragraph"].join(" ")}>
          Obtendrás las últimas y mejores noticias, artículos y publicaciones.
          esto es mobil
        </p>
      </Col>
      <Col sm={12}>
        <div className={styles.inputContainer}>
          <input
            placeholder="Tu dirección de correo"
            className={styles.email}
            type="text"
            onKeyUp={props.handleChange}
          />
          <img onClick={props.handleSubmit} className={styles.inputIcon} src={arrowIcon} alt="" />
        </div>
      </Col>
    </Row>
  );
};

const Modal = (props: any) => {
  return (
    <Row className={styles.row}>
      <Col sm={12} lg={12}>
        <p className={[styles.title, "headline-3"].join(" ")}>
          Suscríbete a nuestras ideas
        </p>
        <p className={[styles.title, "paragraph"].join(" ")}>
          Obtendrás las últimas y mejores noticias, artículos y publicaciones.
          esto es mobil
        </p>
      </Col>
      <Col sm={12} lg={12}>
        <div className={styles.inputContainer}>
          <input
            placeholder="Tu dirección de correo"
            className={styles.email}
            type="text"
            onKeyUp={props.handleChange}
          />
          <img onClick={props.handleSubmit} className={styles.inputIcon} src={arrowIcon} alt="" />
        </div>
      </Col>
    </Row>
  );
};

const Landscape = (props: any) => {
  return (
    <Row className={styles.row}>
      <Col lg={6}>
        <p className={[styles.title, "headline-3"].join(" ")}>
          Suscríbete a nuestras ideas
        </p>
        <p className={[styles.title, "paragraph"].join(" ")}>
          Obtendrás las últimas y mejores noticias, artículos y publicaciones.
        </p>
      </Col>
      <Col lg={6}>
        <div className={styles.inputContainer}>
          <input
            placeholder="Tu dirección de correo"
            className={styles.email}
            type="text"
            onKeyUp={props.handleChange}
          />
          <img onClick={props.handleSubmit} className={styles.inputIcon} src={arrowIcon} alt="" />
        </div>
      </Col>
    </Row>
  );
};

export default Subscribe;
