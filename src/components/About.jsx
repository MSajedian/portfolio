import React from 'react'
import { Container, Row, Col, Tabs, Tab, Button } from 'react-bootstrap'

export default function About() {
    return (
        <Container className="pt-5">
            <Row>
                <Col lg={6} md={6} className="mb-5">
                    <img src="../assets/images/mohammadamin-sajedian.jpg" alt="mohammadamin-sajedian" width="500" height="500" className="img-fluid shadow-lg" />
                </Col>
                <Col lg={6} md={6} className="mb-5">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="fs-1 fw-bold">About me</div>
                        <Button href="../assets/static/mohammadamin_sajedian_cv.docx" variant="outline-dark" className="shadow">Download CV</Button>
                    </div>
                    <hr />
                    <p className="about-par-1">My name is <b>Mohammadamin Sajedian</b> and I'm a <b>MERN Full Stack Web Developer</b>. I'm from Shiraz, Iran, living in London.
                        I have a masters degree in eletrical and electronic engineering and was working as an eletrical engineer.
                        I have always been interested in coding so from March 2021, I took part in the 6 month full stack web developer course to pursue my dreams of becoming a full stack web developer.
                    </p>
                    <hr />
                    <Tabs defaultActiveKey="skills" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="skills" title="Skills">
                            Skills
                        </Tab>
                        <Tab eventKey="experience" title="Experience">
                            Experience
                        </Tab>
                        <Tab eventKey="education" title="Education">
                            Education
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    )
}
