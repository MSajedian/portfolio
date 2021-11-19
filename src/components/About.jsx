import React from 'react'
import { Container, Row, Col, Nav, Tab, Button, Table, Image } from 'react-bootstrap'

export default function About() {
    return (
        <Container className="pt-4">
            <Row>
                <Col lg={6} md={6} className="mb-5">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="fs-1 fw-bold">About me</div>
                        <Button href="https://drive.google.com/file/d/1d8cW4WhXov6nmRKyd4XkFyOAlaT59r4z/view" variant="outline-dark" className="shadow" target="_blank">Download CV</Button>
                    </div>
                    <hr />
                    <p className="about-par-1">My name is <b>Mohammadamin Sajedian</b> and I'm a <b>MERN Full Stack Web Developer</b>. I'm originally from Shiraz, Iran and currently living in London.
                        I have a master's degree in eletrical engineering (Electronics) and was working as an eletrical engineer.
                        I have always been interested in coding so from March 2021, I took part in full stack web developer course to pursue my dreams of becoming a full stack web developer.
                    </p>
                    <div className="text-center mt-4"><Image roundedCircle src="../assets/images/mohammadamin-sajedian.jpg" alt="mohammadamin-sajedian" width="500" height="500" className="img-fluid shadow-lg" /></div>

                </Col>
                <Col lg={6} md={6} className="mb-5 mt-2">
                    <Tab.Container id="tabs" defaultActiveKey="skills" className="">
                        <Row>
                            <Col>
                                <Nav className="flex-row">
                                    <Nav.Item>
                                        <Nav.Link eventKey="skills" className="customNavLink">
                                            Skills
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="experience" className="customNavLink">
                                            Experience
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="education" className="customNavLink">
                                            Education
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Tab.Content className="mt-4">
                                    <Tab.Pane eventKey="skills">
                                        <Container
                                            // className="border pt-4 border-success rounded shadow"
                                            className="border pt-4 rounded shadow"
                                        >
                                            <Row>
                                                <Col className="d-flex flex-column flex-nowrap align-items-center mb-1">
                                                    <div class="c100 p92">
                                                        <span className="mt-1"><img style={{ width: "60%" }} src="../assets/images/html.png" alt="HTML" /></span>
                                                        <div class="slice">
                                                            <div class="bar" style={{ borderColor: "darkgreen" }}></div>
                                                            <div class="fill" style={{ borderColor: "darkgreen" }}></div>
                                                        </div>
                                                    </div>
                                                    <h6 class="open-sans-font ">HTML</h6>
                                                </Col>
                                                <Col className="d-flex flex-column flex-nowrap align-items-center mb-1">
                                                    <div class="c100 p80" >
                                                        <span className="mt-1"><img style={{ width: "60%" }} src="../assets/images/css.png" alt="CSS" /></span>
                                                        <div class="slice">
                                                            <div class="bar" style={{ borderColor: "darkgreen" }}></div>
                                                            <div class="fill" style={{ borderColor: "darkgreen" }}></div>
                                                        </div>
                                                    </div>
                                                    <h6 class="open-sans-font text-center">CSS</h6>
                                                </Col>
                                                <Col className="d-flex flex-column flex-nowrap align-items-center mb-1">
                                                    <div class="c100 p75" >
                                                        <span><img style={{ width: "50%" }} src="../assets/images/javascript.png" alt="JavaScript" /></span>
                                                        <div class="slice">
                                                            <div class="bar" style={{ borderColor: "darkgreen" }}></div>
                                                            <div class="fill" style={{ borderColor: "darkgreen" }}></div>
                                                        </div>
                                                    </div>
                                                    <h6 class="open-sans-font text-center">JavaScript</h6>
                                                </Col>
                                                <Col className="d-flex flex-column flex-nowrap align-items-center mb-1">
                                                    <div class="c100 p70" >
                                                        <span><img style={{ width: "100%" }} src="../assets/images/react.png" alt="React" /></span>
                                                        <div class="slice">
                                                            <div class="bar" style={{ borderColor: "darkgreen" }}></div>
                                                            <div class="fill" style={{ borderColor: "darkgreen" }}></div>
                                                        </div>
                                                    </div>
                                                    <h6 class="open-sans-font text-center">React</h6>
                                                </Col>
                                                <Col className="d-flex flex-column flex-nowrap align-items-center mb-1">
                                                    <div class="c100 p55" >
                                                        <span><img style={{ width: "80%" }} src="../assets/images/nodejs.png" alt="NodeJS" /></span>
                                                        <div class="slice">
                                                            <div class="bar" style={{ borderColor: "darkgreen" }}></div>
                                                            <div class="fill" style={{ borderColor: "darkgreen" }}></div>
                                                        </div>
                                                    </div>
                                                    <h6 class="open-sans-font text-center">NodeJS</h6>
                                                </Col>
                                                <Col className="d-flex flex-column flex-nowrap align-items-center mb-1">
                                                    <div class="c100 p50" >
                                                        <span><img style={{ width: "70%" }} src="../assets/images/expressjs.png" alt="ExpressJS" /></span>
                                                        <div class="slice">
                                                            <div class="bar" style={{ borderColor: "darkgreen" }}></div>
                                                            <div class="fill" style={{ borderColor: "darkgreen" }}></div>
                                                        </div>
                                                    </div>
                                                    <h6 class="open-sans-font text-center">ExpressJS</h6>
                                                </Col>
                                                <Col className="d-flex flex-column flex-nowrap align-items-center mb-1">
                                                    <div class="c100 p45" >
                                                        <span><img style={{ width: "70%" }} src="../assets/images/mongodb.png" alt="MongoDB" /></span>
                                                        <div class="slice">
                                                            <div class="bar" style={{ borderColor: "darkgreen" }}></div>
                                                            <div class="fill" style={{ borderColor: "darkgreen" }}></div>
                                                        </div>
                                                    </div>
                                                    <h6 class="open-sans-font text-center">MongoDB</h6>
                                                </Col>
                                                <Col className="d-flex flex-column flex-nowrap align-items-center mb-1">
                                                    <div class="c100 p45" >
                                                        <span><img style={{ width: "75%" }} src="../assets/images/mongoosejs.png" alt="MongooseJS" /></span>
                                                        <div class="slice">
                                                            <div class="bar" style={{ borderColor: "darkgreen" }}></div>
                                                            <div class="fill" style={{ borderColor: "darkgreen" }}></div>
                                                        </div>
                                                    </div>
                                                    <h6 class="open-sans-font text-center">MongooseJS</h6>
                                                </Col>
                                                <Col className="d-flex flex-column flex-nowrap align-items-center mb-1">
                                                    <div class="c100 p80" >
                                                        <span><img style={{ width: "75%" }} src="../assets/images/react-bootstrap.png" alt="React Bootstrap" /></span>
                                                        <div class="slice">
                                                            <div class="bar" style={{ borderColor: "darkgreen" }}></div>
                                                            <div class="fill" style={{ borderColor: "darkgreen" }}></div>
                                                        </div>
                                                    </div>
                                                    <h6 class="open-sans-font text-center">React Bootstrap</h6>
                                                </Col>
                                                <Col className="d-flex flex-column flex-nowrap align-items-center mb-1">
                                                    <div class="c100 p40" >
                                                        <span><img style={{ width: "75%" }} src="../assets/images/postgresql.png" alt="PostgreSQL" /></span>
                                                        <div class="slice">
                                                            <div class="bar" style={{ borderColor: "darkgreen" }}></div>
                                                            <div class="fill" style={{ borderColor: "darkgreen" }}></div>
                                                        </div>
                                                    </div>
                                                    <h6 class="open-sans-font text-center">PostgreSQL</h6>
                                                </Col>
                                                <Col className="d-flex flex-column flex-nowrap align-items-center mb-1">
                                                    <div class="c100 p35" >
                                                        <span><img style={{ width: "55%" }} src="../assets/images/typescript.png" alt="TypeScript" /></span>
                                                        <div class="slice">
                                                            <div class="bar" style={{ borderColor: "darkgreen" }}></div>
                                                            <div class="fill" style={{ borderColor: "darkgreen" }}></div>
                                                        </div>
                                                    </div>
                                                    <h6 class="open-sans-font text-center">TypeScript</h6>
                                                </Col>
                                                <Col className="d-flex flex-column flex-nowrap align-items-center mb-1">
                                                    <div class="c100 p45" >
                                                        <span><img style={{ width: "55%" }} src="../assets/images/redux.png" alt="Redux" /></span>
                                                        <div class="slice">
                                                            <div class="bar" style={{ borderColor: "darkgreen" }}></div>
                                                            <div class="fill" style={{ borderColor: "darkgreen" }}></div>
                                                        </div>
                                                    </div>
                                                    <h6 class="open-sans-font text-center">Redux</h6>
                                                </Col>
                                                <Col className="d-flex flex-column flex-nowrap align-items-center mb-1">
                                                    <div class="c100 p70" >
                                                        <span><img style={{ width: "75%" }} src="../assets/images/bootstrap.png" alt="Bootstrap" /></span>
                                                        <div class="slice">
                                                            <div class="bar" style={{ borderColor: "darkgreen" }}></div>
                                                            <div class="fill" style={{ borderColor: "darkgreen" }}></div>
                                                        </div>
                                                    </div>
                                                    <h6 class="open-sans-font text-center">Bootstrap</h6>
                                                </Col>
                                                <Col className="d-flex flex-column flex-nowrap align-items-center mb-1">
                                                    <div class="c100 p65" >
                                                        <span><img style={{ width: "70%" }} src="../assets/images/git.png" alt="Git" /></span>
                                                        <div class="slice">
                                                            <div class="bar" style={{ borderColor: "darkgreen" }}></div>
                                                            <div class="fill" style={{ borderColor: "darkgreen" }}></div>
                                                        </div>
                                                    </div>
                                                    <h6 class="open-sans-font text-center">Git</h6>
                                                </Col>
                                                <Col className="d-flex flex-column flex-nowrap align-items-center mb-1">
                                                    <div class="c100 p45" >
                                                        <span><img style={{ width: "70%" }} src="../assets/images/restapi.png" alt="REST API" /></span>
                                                        <div class="slice">
                                                            <div class="bar" style={{ borderColor: "darkgreen" }}></div>
                                                            <div class="fill" style={{ borderColor: "darkgreen" }}></div>
                                                        </div>
                                                    </div>
                                                    <h6 class="open-sans-font text-center">REST API</h6>
                                                </Col>
                                                <Col className="d-flex flex-column flex-nowrap align-items-center mb-1">
                                                    <div class="c100 p35" >
                                                        <span><img style={{ width: "55%" }} src="../assets/images/jest.png" alt="Jest" /></span>
                                                        <div class="slice">
                                                            <div class="bar" style={{ borderColor: "darkgreen" }}></div>
                                                            <div class="fill" style={{ borderColor: "darkgreen" }}></div>
                                                        </div>
                                                    </div>
                                                    <h6 class="open-sans-font text-center">Jest</h6>
                                                </Col>
                                                <Col className="d-flex flex-column flex-nowrap align-items-center mb-1">
                                                    <div class="c100 p20" >
                                                        <span><img style={{ width: "55%" }} src="../assets/images/ci-cd.png" alt="CI-CD" /></span>
                                                        <div class="slice">
                                                            <div class="bar" style={{ borderColor: "darkgreen" }}></div>
                                                            <div class="fill" style={{ borderColor: "darkgreen" }}></div>
                                                        </div>
                                                    </div>
                                                    <h6 class="open-sans-font text-center">CI-CD</h6>
                                                </Col>
                                                <Col className="d-flex flex-column flex-nowrap align-items-center mb-1">
                                                    <div class="c100 p30" >
                                                        <span><img style={{ width: "60%" }} src="../assets/images/data-structure.png" alt="Data Structure" /></span>
                                                        <div class="slice">
                                                            <div class="bar" style={{ borderColor: "darkgreen" }}></div>
                                                            <div class="fill" style={{ borderColor: "darkgreen" }}></div>
                                                        </div>
                                                    </div>
                                                    <h6 class="open-sans-font text-center">Data Structure</h6>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="experience">
                                        <Table striped bordered className="shadow text-center" >
                                            <thead>
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
                                                    <td>Pizza Rush, London, United Kingdom</td>
                                                </tr>
                                                <tr>
                                                    <td>Nov 2018</td>
                                                    <td>Dec 2019</td>
                                                    <td>Electrical Installation Supervisor</td>
                                                    <td>HASEB FARS Company, Shiraz, Iran</td>
                                                </tr>
                                                <tr>
                                                    <td>Dec 2014</td>
                                                    <td>Nov 2018</td>
                                                    <td>Electrical Installation Supervisor</td>
                                                    <td>TADBIR & TOWSE Company, Shiraz, Iran</td>
                                                </tr>
                                                <tr>
                                                    <td>Jan 2012</td>
                                                    <td>Dec 2014</td>
                                                    <td>Office Manager</td>
                                                    <td>TADBIR & TOWSE Company, Shiraz, Iran</td>
                                                </tr>
                                                <tr>
                                                    <td>Feb 2009</td>
                                                    <td>Jan 2012</td>
                                                    <td>Layout Designer</td>
                                                    <td>Literature Journal of Islamic Azad University, Fasa, Iran</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="education">
                                        <Table striped bordered className="shadow text-center">
                                            <thead>
                                                <tr>
                                                    <th>Title</th>
                                                    <th>Start Date</th>
                                                    <th>End Date</th>
                                                    <th>Institution</th>
                                                    <th>Modules included</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>MERN Full Stack Developer</td>
                                                    <td>Mar 2021</td>
                                                    <td>Oct 2021</td>
                                                    <td>Strive School</td>
                                                    <td>HTML, CSS, JavaScript, Git, GitHub, VSCode, UX, UI, Bootstrap, ES6, Promises, AJAX, npm, REST, ReactJS, NodeJS, ExpressJS, TypeScript, Hooks, Redux, Thunk, Middlewares, SQL, Postgres, Sequelize, NoSQL, Mongo, Mongoose ...</td>
                                                </tr>
                                                <tr>
                                                    <td>Master's degree in Electrical Engineering</td>
                                                    <td>2013</td>
                                                    <td>2016</td>
                                                    <td>Islamic Azad University, Fasa Branch in Iran</td>
                                                    <td>Linear Integrated Circuits Design, Semiconductor Devices, Theory & Fabrication Technology of Semiconductor Devices, Quantum Electronics, ...</td>
                                                </tr>
                                                <tr>
                                                    <td>Bachelor's degree in Electrical Engineering</td>
                                                    <td>2007</td>
                                                    <td>2012</td>
                                                    <td>Islamic Azad University, Fasa Branch in Iran</td>
                                                    <td>Electric Circuits, Industrial Electronics, Technical Drawing, Logic Circuits, Microprocessors, Computer Architecture, Computer Programming, Industrial Controllers, Linear Control Systems, ...</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
    )
}
