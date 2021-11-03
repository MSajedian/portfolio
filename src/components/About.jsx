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
                    <p className="about-par-1">My name is <b>Mohammadamin Sajedian</b> and I'm a <b>MERN Full Stack Web Developer</b>. I'm originally from Shiraz, Iran, living in London.
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
                                <thead className="text-center">
                                    <tr>
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                        <th>Title</th>
                                        <th>Company name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>July 2020</td>
                                        <td>Feb 2021</td>
                                        <td>Pizza Maker Volunteer</td>
                                        <td>Pizza Rush</td>
                                    </tr>
                                    <tr>
                                        <td>Nov 2018</td>
                                        <td>Dec 2019</td>
                                        <td>Electrical Installation Supervisor</td>
                                        <td>HASEB FARS Company in Iran</td>
                                    </tr>
                                    <tr>
                                        <td>Dec 2014</td>
                                        <td>Nov 2018</td>
                                        <td>Electrical Installation Supervisor</td>
                                        <td>TADBIR & TOWSE Company in Iran</td>
                                    </tr>
                                    <tr>
                                        <td>Jan 2012</td>
                                        <td>Dec 2014</td>
                                        <td>Office Manager</td>
                                        <td>TADBIR & TOWSE Company in Iran</td>
                                    </tr>
                                    <tr>
                                        <td>Feb 2009</td>
                                        <td>Jan 2012</td>
                                        <td>Layout Designer</td>
                                        <td>Literature Journal of Islamic Azad University, Fasa Branch in Iran</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="education" title="Education">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Start & End Date</th>
                                        <th>Institution</th>
                                        <th>Modules included</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>MERN Full Stack Developer</td>
                                        <td>Mar 2021 – Oct 2021</td>
                                        <td>Strive School</td>
                                        <td>HTML, CSS, JavaScript, Git, GitHub, VSCode, UX, UI, Bootstrap, ES6, Promises, AJAX, npm, REST, ReactJS, NodeJS, ExpressJS, TypeScript, Hooks, Redux, Thunk, Middlewares, SQL, Postgres, Sequelize, NoSQL, Mongo, Mongoose ...</td>
                                    </tr>
                                    <tr>
                                        <td>Master's degree in Electrical Engineering</td>
                                        <td>2013 – 2016</td>
                                        <td>Islamic Azad University, Fasa Branch in Iran</td>
                                        <td>Linear Integrated Circuits Design, Semiconductor Devices, Theory & Fabrication Technology of Semiconductor Devices, Quantum Electronics, ...</td>
                                    </tr>
                                    <tr>
                                        <td>Bachelor's degree in Electrical Engineering</td>
                                        <td>2007 – 2012</td>
                                        <td>Islamic Azad University, Fasa Branch in Iran</td>
                                        <td>Electric Circuits, Industrial Electronics, Technical Drawing, Logic Circuits, Microprocessors, Computer Architecture, Computer Programming, Industrial Controllers, Linear Control Systems, ...</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    )
}
