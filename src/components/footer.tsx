import React, { useState } from 'react';
import { Link } from "gatsby";
import { Container, Row, Col, Button, Toast } from "react-bootstrap";
import styles from './footer.module.scss';
import twitterIcon from '../assets/icon/twitter.svg'
import facebookIcon from '../assets/icon/facebook.svg'
import instagramIcon from '../assets/icon/instagram.svg'
import addToMailchimp from 'gatsby-plugin-mailchimp'

interface SubscribeState {
    email: string;
    result: any;
}

const Footer = () => {
    const [state, setState] = useState<SubscribeState>({
        email: "", result: null
      });
    const handleChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement
        const email = target.value ? target.value : ''
        setState({ email: email, result: null })
        if (event.key === 'Enter') {
            handleSubmit()
        }
    }
    const handleSubmit = async () => {
        const result = await addToMailchimp(state.email)
        console.log(result)
        setState({ email: state.email, result: result})
    }
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
                        <img src={twitterIcon} alt=""/>
                        <img src={facebookIcon} alt=""/>
                        <img src={instagramIcon} alt=""/>
                    </Col>
                    <Col className={styles.subscribe}>
                        <p className={styles.strong}>Subscribe</p>
                        <input className={styles.email} placeholder="Your email address" type="text" onKeyUp={handleChange}/>
                    </Col>
                </Row>
            </Container>
            <Toast delay={3000} autohide show={state.result} onClose={() => setState({ email: state.email, result: null })} className={styles.toast}>
                <Toast.Header className={styles.toastHeader}>
                    <strong className="mr-auto">Data Product Design</strong>
                </Toast.Header>
                <Toast.Body>
                    { state.result ? <div dangerouslySetInnerHTML={{ __html: state.result.msg }} /> : '' }
                </Toast.Body>
            </Toast>
        </footer>
    )
}

export default Footer