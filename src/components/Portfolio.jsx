import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { IoIosApps } from 'react-icons/io';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { HiCode } from 'react-icons/hi';

export default function Portfolio() {
    return (
        <Container className="pt-3">
            <div className="fs-1 fw-bold">Portfolio</div>
            <Row xs={1} md={2} className="g-4 mt-4">
                <Col>
                    <Card className="text-center mb-4 shadow-lg">
                        <Card.Img variant="top" src="../assets/images/topedu.jpg" />
                        <Card.Body>
                            <Card.Title>TopEdu</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Learning Management System</Card.Subtitle>
                            <div><b><IoIosApps /> Tech:</b> ReactJS, Redux, CSS, ExpressJS, NodeJS, MongoDB</div>
                            <div><b><HiCode /> Codes:</b>{' '}
                                <a href="https://github.com/MSajedian/Topedu-Reactjs" target="_blank" rel="noreferrer">Topedu-Reactjs</a> / <a href="https://github.com/MSajedian/Topedu-Expressjs" target="_blank" rel="noreferrer">Topedu-Expressjs</a>
                            </div>
                            <div><b><HiOutlineExternalLink /> Demo:</b>{' '}
                                <a href="https://topedu.vercel.app/" target="_blank" rel="noreferrer">TopEdu</a>
                            </div>
                            <div><b><HiOutlineExternalLink /> About the TopEdu:</b>{' '}
                                <a href="https://www.youtube.com/watch?v=i4ehaW-nXZI&list=PLIz8i-HCdhvkycvUn6IYZnCMiM1C3wMPS&index=18" target="_blank" rel="noreferrer">Video</a>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
