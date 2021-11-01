import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { IoIosApps } from 'react-icons/io';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { HiCode } from 'react-icons/hi';

export default function Projects() {
    return (
        <Container className="pt-5">
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card className="text-center mb-4 shadow-lg">
                        <Card.Img variant="top" src="../assets/images/topedu.jpg" />
                        <Card.Body>
                            <Card.Title>TopEdu</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Learning Management System</Card.Subtitle>
                            <div><b><IoIosApps /> Tech:</b> ReactJS, Redux, CSS, ExpressJS, NodeJS, MongoDB</div>
                            <div><b><HiCode /> Codes:</b>{' '}
                                <a href="https://github.com/MSajedian/Topedu-Reactjs" target="_blank" rel="noreferrer">Topedu-Reactjs</a>{' '}
                                <a href="https://github.com/MSajedian/Topedu-Expressjs" target="_blank" rel="noreferrer">Topedu-Expressjs</a>
                            </div>
                            <div><b><HiOutlineExternalLink /> Demo:</b>{' '}
                                <a href="https://topedu.vercel.app/" target="_blank" rel="noreferrer">TopEdu</a>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
