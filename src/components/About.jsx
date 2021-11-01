import React from 'react'
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap'

export default function About() {
    return (
        <Container className="pt-5">
            <Row>
                <Col className="mb-5">
                    <img src="../assets/images/mohammadamin-sajedian.jpg" alt="mohammadamin-sajedian" width="500" height="500" />
                </Col>
                <Col className="mb-5">
                    <div className="fs-1 fw-bold">About me</div>
                    <hr />
                    <p>I am an Electrical Engineer and MERN Full Stack Developer.</p>
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
