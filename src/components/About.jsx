import React from 'react'
import { Container, Row, Col, Tabs, Tab, Button, Table } from 'react-bootstrap'

export default function About() {
    return (
        <Container className="pt-4">
            <Row>
                <Col lg={6} md={6} className="mb-5">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="fs-1 fw-bold">About me</div>
                        <Button href="../assets/static/mohammadamin_sajedian_cv.docx" variant="outline-dark" className="shadow">Download CV</Button>
                    </div>
                    <hr />
                    <p className="about-par-1">My name is <b>Mohammadamin Sajedian</b> and I'm a <b>MERN Full Stack Web Developer</b>. I'm from Shiraz, Iran, living in London.
                        I have a masters degree in eletrical and electronic engineering and was working as an eletrical engineer.
                        I have always been interested in coding so from March 2021, I took part in full stack web developer course to pursue my dreams of becoming a full stack web developer.
                    </p>
                    <img src="../assets/images/mohammadamin-sajedian.jpg" alt="mohammadamin-sajedian" width="500" height="500" className="img-fluid shadow-lg" />
                </Col>
                <Col lg={6} md={6} className="mb-5 mt-2">
                    <Tabs defaultActiveKey="skills" id="uncontrolled-tab-example" className="mb-4">
                        <Tab eventKey="skills" title="Skills">
                            <Container>
                                <Row>
                                    {/* <div class="col-6 col-md-3 mb-3 mb-sm-5 text-center"></div> */}
                                    <Col className="d-flex flex-column flex-nowrap align-items-center align-self-center mb-4">
                                        <div class="c100 p92" >
                                            <span className="mt-1"><img style={{ width: "60%" }} src="../assets/images/html.png" alt="HTML" /></span>
                                            <div class="slice">
                                                <div class="bar" style={{ borderColor: "darkgreen" }}></div>
                                                <div class="fill" style={{ borderColor: "darkgreen" }}></div>
                                            </div>
                                        </div>
                                        <h6 class="open-sans-font ">HTML</h6>
                                    </Col>
                                    <Col className="d-flex flex-column flex-nowrap align-items-center mb-4">
                                        <div class="c100 p80" >
                                            <span className="mt-1"><img style={{ width: "60%" }} src="../assets/images/css.png" alt="HTML" /></span>
                                            <div class="slice">
                                                <div class="bar" style={{ borderColor: "darkgreen" }}></div>
                                                <div class="fill" style={{ borderColor: "darkgreen" }}></div>
                                            </div>
                                        </div>
                                        <h6 class="open-sans-font text-center">CSS</h6>
                                    </Col>
                                    <Col className="d-flex flex-column flex-nowrap align-items-center mb-4">
                                        <div class="c100 p65" >
                                            <span><img style={{ width: "50%" }} src="../assets/images/javascript.png" alt="HTML" /></span>
                                            <div class="slice">
                                                <div class="bar" style={{ borderColor: "darkgreen" }}></div>
                                                <div class="fill" style={{ borderColor: "darkgreen" }}></div>
                                            </div>
                                        </div>
                                        <h6 class="open-sans-font text-center">JavaScript</h6>
                                    </Col>
                                    <Col className="d-flex flex-column flex-nowrap align-items-center mb-4">
                                        <div class="c100 p60" >
                                            <span><img style={{ width: "100%" }} src="../assets/images/react.png" alt="HTML" /></span>
                                            <div class="slice">
                                                <div class="bar" style={{ borderColor: "darkgreen" }}></div>
                                                <div class="fill" style={{ borderColor: "darkgreen" }}></div>
                                            </div>
                                        </div>
                                        <h6 class="open-sans-font text-center">React</h6>
                                    </Col>
                                    <Col className="d-flex flex-column flex-nowrap align-items-center mb-4">
                                        <div class="c100 p50" >
                                            <span><img style={{ width: "80%" }} src="../assets/images/nodejs.png" alt="HTML" /></span>
                                            <div class="slice">
                                                <div class="bar" style={{ borderColor: "darkgreen" }}></div>
                                                <div class="fill" style={{ borderColor: "darkgreen" }}></div>
                                            </div>
                                        </div>
                                        <h6 class="open-sans-font text-center">NodeJS</h6>
                                    </Col>
                                    <Col className="d-flex flex-column flex-nowrap align-items-center mb-4">
                                        <div class="c100 p50" >
                                            <span><img style={{ width: "70%" }} src="../assets/images/expressjs.png" alt="HTML" /></span>
                                            <div class="slice">
                                                <div class="bar" style={{ borderColor: "darkgreen" }}></div>
                                                <div class="fill" style={{ borderColor: "darkgreen" }}></div>
                                            </div>
                                        </div>
                                        <h6 class="open-sans-font text-center">ExpressJS</h6>
                                    </Col>
                                    <Col className="d-flex flex-column flex-nowrap align-items-center mb-4">
                                        <div class="c100 p45" >
                                            <span><img style={{ width: "70%" }} src="../assets/images/mongodb.png" alt="HTML" /></span>
                                            <div class="slice">
                                                <div class="bar" style={{ borderColor: "darkgreen" }}></div>
                                                <div class="fill" style={{ borderColor: "darkgreen" }}></div>
                                            </div>
                                        </div>
                                        <h6 class="open-sans-font text-center">MongoDB</h6>
                                    </Col>
                                </Row>
                            </Container>

                        </Tab>
                        <Tab eventKey="experience" title="Experience">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td colSpan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </Table>
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
