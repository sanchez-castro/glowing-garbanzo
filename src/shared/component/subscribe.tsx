import React, { useState } from 'react'
import { Container, Row, Col, Toast } from 'react-bootstrap'
import styles from './subscribe.module.scss'
import arrowIcon from '../../assets/icon/right-arrow.svg'
import addToMailchimp from 'gatsby-plugin-mailchimp'

interface SubscribeState {
    email: string;
    result: any;
}

const Subscribe = () => {
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
                        <input placeholder="Your email address" className={styles.email} type="text" onKeyUp={handleChange}/>
                        <img className={styles.inputIcon} src={arrowIcon} alt=""/>
                    </div>
                </Col>
                <Toast delay={3000} autohide show={state.result} onClose={() => setState({ email: state.email, result: null })} className={styles.toast}>
                    <Toast.Header className={styles.toastHeader}>
                        <strong className="mr-auto">Data Product Design</strong>
                    </Toast.Header>
                    <Toast.Body>
                        { state.result ? <div dangerouslySetInnerHTML={{ __html: state.result.msg }} /> : '' }
                    </Toast.Body>
                </Toast>
            </Row>
        </Container>
    )
}

export default Subscribe