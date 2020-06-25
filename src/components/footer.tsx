import React from 'react';
import { Link } from "gatsby";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from './footer.module.scss'

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <Container className={styles.container} fluid>
                <Row>
                    <Col className={styles.title}>
                        Data-Collective
                    </Col>
                    <Col>
                        <ul className={styles.links}>
                            <li>
                                <Link
                                className={styles.navItem}
                                activeClassName={styles.activeNavItem}
                                to="/"
                                >
                                Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                className={styles.navItem}
                                activeClassName={styles.activeNavItem}
                                to="/about"
                                >
                                About us
                                </Link>
                            </li>
                            <li>
                                <Link
                                className={styles.navItem}
                                activeClassName={styles.activeNavItem}
                                to="/philosophy"
                                >
                                Collective Philosophy
                                </Link>
                            </li>
                            <li>
                                <Link
                                className={styles.navItem}
                                activeClassName={styles.activeNavItem}
                                to="/privacy"
                                >
                                Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col className={styles.socialMedia}>
                        <p className={styles.strong}>Follow us</p>
                        <img src={"icon/twitter.svg"} alt=""/>
                        <img src={"icon/facebook.svg"} alt=""/>
                        <img src={"icon/instagram.svg"} alt=""/>
                    </Col>
                    <Col className={styles.subscribe}>
                        <p className={styles.strong}>Subscribe</p>
                        <input className={styles.email} placeholder="Your email address" type="text"/>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer