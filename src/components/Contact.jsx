import React from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'

export default function Contact() {
    return (
        <Container>
            <h2>Contact</h2>
            <p><a href="https://www.linkedin.com/in/mohammadamin-sajedian-6a001471" target="_blank" rel="noreferrer">linkedin</a></p>
            <p>Email: <a href="mailto:mohammadsajedian@gmail.com">mohammadsajedian@gmail.com</a>
            </p>
            <p>Location: United Kingdom, London</p>
            <Form>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="name" />
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

                <div className="d-flex align-items-end">
                    <Button variant="primary" type="submit" > Send Email </Button>
                </div>
            </Form>
        </Container >
    )
}
