import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './subscribe.module.scss'
import arrowIcon from '../../assets/icon/right-arrow.svg'

const Subscribe = () => {
    return(
        <Container fluid className={styles.container}>
            <Row className={styles.row}>
                <Col lg={6}>
                    <p className={styles.title}>
                        Subscribe to our insights
                    </p>
                    <p className={styles.subtitle}>
                        You’ll get the latest and greatest news, articles and posts.
                    </p>
                </Col>
                <Col lg={6}>
                    <div className={styles.inputContainer}>
                        <input placeholder="Your email address" className={styles.email} type="text"/>
                        <img className={styles.inputIcon} src={arrowIcon} alt=""/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Subscribe