import React from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import { FiMail } from 'react-icons/fi';
import { GrLinkedin } from 'react-icons/gr';
import { MdLocationPin } from 'react-icons/md';

export default function Contact() {
    return (
        <Container className="pt-3">
            <div className="fs-1 fw-bold">Contact me</div>
            <Row className="mt-5">
                <Col>
                    <div className="contact-card bg-dark text-white rounded-circle d-inline-flex flex-column flex-nowrap align-items-center pt-4 " >
                        <div className="fs-1"><FiMail /></div>
                        <div className="fs-1">Email</div>
                        <div><a href="mailto:mohammadsajedian@gmail.com" target="_blank" rel="noreferrer">mohammadsajedian@gmail.com</a></div>
                    </div>
                    {/* <div><FiMail /> Email: <a href="mailto:mohammadsajedian@gmail.com">mohammadsajedian@gmail.com</a></div> */}
                </Col>
                <Col>
                    <div className="bg-dark text-white contact-card rounded-circle d-inline-flex flex-column flex-nowrap align-items-center pt-4" >
                        <div className="fs-1"><GrLinkedin /></div>
                        <div className="fs-1">Linkedin</div>
                        <div><a href="https://www.linkedin.com/in/mohammadamin-sajedian-6a001471" target="_blank" rel="noreferrer">Mohammadamin Sajedian</a></div>
                    </div>
                    {/* <div>Linkedin: <a href="https://www.linkedin.com/in/mohammadamin-sajedian-6a001471" target="_blank" rel="noreferrer">Mohammadamin Sajedian</a></div> */}
                </Col>
                <Col>
                    <div className="bg-dark text-white contact-card rounded-circle d-inline-flex flex-column flex-nowrap align-items-center pt-4" >
                        <div className="fs-1"><MdLocationPin /></div>
                        <div className="fs-1">Location</div>
                        <div>London,</div>
                        <div>United Kingdom</div>
                    </div>
                    {/* <div>Location: London, United Kingdom </div> */}
                </Col>
            </Row>
            <Row className="mt-5">
                <div className="fs-1">Send me an email</div>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text> */}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formTextarea">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={5} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-end">
                        <Button variant="dark" type="submit"> Send Email </Button>
                    </div>
                </Form>
            </Row >
        </Container >
    )
}
