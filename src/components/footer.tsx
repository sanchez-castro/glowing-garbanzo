import React, { useState } from "react";
import { Link } from "gatsby";
import { Container, Row, Col, Toast } from "react-bootstrap";
import styles from "./footer.module.scss";
import twitterIcon from "../assets/icon/twitter.svg";
import facebookIcon from "../assets/icon/facebook.svg";
import instagramIcon from "../assets/icon/instagram.svg";
import addToMailchimp from "gatsby-plugin-mailchimp";

interface SubscribeState {
  email: string;
  result: any;
  displayToast: boolean;
}

interface FooterProps {
  mobile?: boolean;
}

const Footer = (props: FooterProps) => {
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
  const handleSubmit = async () => {
    const result = await addToMailchimp(state.email);
    setState({ email: state.email, result: result, displayToast: true });
  };

  return (
    <footer className={styles.footer}>
      <Container
        className={props.mobile ? styles.mobileContainer : styles.container}
        fluid
      >
        <Row>
          <Col xs={12} sm={12} md={3} lg={3} className="headline-3">
            Data Product Design
          </Col>
          <Col xs={12} sm={12} md={9} lg={3}>
            <ul
              className={[
                styles.links,
                "paragraph",
                props.mobile ? styles.mobileLinks : "",
              ].join(" ")}
            >
              <li>
                <Link
                  className={styles.navItem}
                  activeClassName={styles.activeNavItem}
                  to="/"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  className={styles.navItem}
                  activeClassName={styles.activeNavItem}
                  to="/about-us"
                >
                  Acerca
                </Link>
              </li>
              <li>
                <Link
                  className={styles.navItem}
                  activeClassName={styles.activeNavItem}
                  to="/philosophy"
                >
                  Filosofía
                </Link>
              </li>
              <li>
                <Link
                  className={styles.navItem}
                  activeClassName={styles.activeNavItem}
                  to="/privacy"
                >
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={3} sm={3} md={3} lg={2} className={styles.socialMedia}>
            <p className={["headline-4", props.mobile ? "m-0" : ""].join(" ")}>
              Síguenos
            </p>
            <div className={styles.socialIcons}>
              <img src={twitterIcon} alt="" />
              <img src={facebookIcon} alt="" />
              <img src={instagramIcon} alt="" />
            </div>
          </Col>
          <Col xs={9} sm={9} md={9} lg={4} className={styles.subscribe}>
            <p className={["headline-4", props.mobile ? "m-0" : ""].join(" ")}>
              Subscribir
            </p>
            <input
              className={styles.email}
              placeholder="Tu dirección de correo"
              type="text"
              onKeyUp={handleChange}
            />
          </Col>
        </Row>
      </Container>
      <Toast
        delay={3000}
        autohide
        show={state.displayToast}
        onClose={() =>
          setState({
            email: state.email,
            result: state.result,
            displayToast: false,
          })
        }
        className={styles.toast}
      >
        <Toast.Header className={styles.toastHeader}>
          <strong className="mr-auto">Data Product Design</strong>
        </Toast.Header>
        <Toast.Body>
          {state.result ? (
            <div dangerouslySetInnerHTML={{ __html: state.result.msg }} />
          ) : (
            ""
          )}
        </Toast.Body>
      </Toast>
    </footer>
  );
};

export default Footer;
