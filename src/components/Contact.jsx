import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { FiMail } from 'react-icons/fi';
import { GrLinkedin } from 'react-icons/gr';
import { MdLocationPin } from 'react-icons/md';

const BackendURL = process.env.REACT_APP_BACKEND_REMOTE_URL || process.env.REACT_APP_BACKEND_LOCAL_URL

export default function Contact() {
    const [name, setName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [message, setMessage] = useState("");
    const [sendEmailText, setSendEmailText] = useState("Send Email");
    const [sendEmailStyle, setSendEmailStyle] = useState("dark");
    const [disableButton, setDisableButton] = useState(false);
    const [spinnerForButton, setSpinnerForButton] = useState(false);

    const handleSendEmail = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDisableButton(true)
        setSpinnerForButton(true)
        setSendEmailText("Sending...")
        setSendEmailStyle("primary")
        try {
            fetch(`${BackendURL}/users/sendemailforpersonalpage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, emailAddress, message }) // body data type must match "Content-Type" header
            })
                .then(res => {
                    if (res.ok) {
                        setSpinnerForButton(false)
                        setSendEmailText("Email Sent")
                        setSendEmailStyle("success")
                        setTimeout(function () {
                            setDisableButton(false)
                            setSendEmailText("Send Email")
                            setSendEmailStyle("dark")
                        }, 3000)
                    } else {
                        setSendEmailText("Please try again later")
                        setSendEmailStyle("warning")
                        setTimeout(function () {
                            setSendEmailText("Send Email")
                            setSendEmailStyle("dark")
                        }, 3000)
                    }
                })
        } catch (error) {
            console.log('error:', error)
        }
    };

    // ******** Check Connection between Frontend and Backend ************
    function checkConnection() {
        try {
            fetch(BackendURL + "/users/checkconnection", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            })
                .then(res => { if (res.status !== 200) { console.log('error connection to the backend') } })
        } catch (error) { console.log('error:', error) }
    }

    useEffect(() => {
        checkConnection();
        // eslint-disable-next-line
    }, [])

    return (
        <Container className="pt-3">
            <div className="fs-1 fw-bold">Contact me</div>
            <Row className="mt-5 text-center">
                <Col>
                    <div className="customColors-1 contact-card rounded-circle d-inline-flex flex-column flex-nowrap align-items-center pt-4 border border-3 border-success" >
                        <div className="fs-1"><FiMail /></div>
                        <div className="fs-1">Gmail</div>
                        <div className="text-center"><a className="fs-5" href="mailto:mohammadsajedian@gmail.com" target="_blank" rel="noreferrer">mohammadsajedian</a></div>
                    </div>
                </Col>
                <Col>
                    <div className="customColors-1 contact-card rounded-circle d-inline-flex flex-column flex-nowrap align-items-center pt-3 border border-3 border-success" >
                        <div className="fs-1"><GrLinkedin /></div>
                        <div className="fs-1">Linkedin</div>
                        <div className="text-center"><a className="fs-4" href="https://www.linkedin.com/in/mohammadamin-sajedian" target="_blank" rel="noreferrer">Mohammadamin Sajedian</a></div>
                    </div>
                    {/* <div>Linkedin: <a href="https://www.linkedin.com/in/mohammadamin-sajedian" target="_blank" rel="noreferrer">Mohammadamin Sajedian</a></div> */}
                </Col>
                <Col>
                    <div className="customColors-1 contact-card rounded-circle d-inline-flex flex-column flex-nowrap align-items-center pt-3 border border-3 border-success" >
                        <div className="fs-1"><MdLocationPin /></div>
                        <div className="fs-1">Location</div>
                        <div className="text-center"><a className="fs-5" href="https://www.google.co.uk/maps/place/London/@51.528308,-0.3817765,10z/data=!3m1!4b1!4m5!3m4!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5072178!4d-0.1275862" target="_blank" rel="noreferrer">London,<br /> United Kingdom</a></div>
                    </div>
                    {/* <div>Location: London, United Kingdom </div> */}
                </Col>
            </Row>
            <Row className="my-5">
                <div className="fs-1">Send me an email</div>
                <Form onSubmit={handleSendEmail}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" onChange={(e) => (setName(e.target.value))} required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={(e) => (setEmailAddress(e.target.value))} required />
                                {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text> */}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formTextarea">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={5} onChange={(e) => (setMessage(e.target.value))} required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-end">
                        <Button variant={sendEmailStyle} type="submit" disabled={disableButton}>{spinnerForButton ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : <></>} {sendEmailText}</Button>
                    </div>
                </Form>
            </Row >
        </Container >
    )
}
