import { Card, Col, Container, Row } from 'react-bootstrap';
import { BsInfoCircle } from 'react-icons/bs';
import { HiCode, HiOutlineExternalLink } from 'react-icons/hi';
import { IoIosApps } from 'react-icons/io';

export default function Projects() {
    return (
        <Container className="pt-3">
            <div className="fs-1 fw-bold">Projects</div>
            <Row xs={1} md={2} className="g-4 mt-4">
                <Col>
                    <Card className="text-center mb-4 shadow-lg">
                        <Card.Img variant="top" src="../assets/images/topedu.jpg" />
                        <Card.Body>
                            <Card.Title>TopEdu</Card.Title>
                            <div><b><BsInfoCircle className="mb-1" /> About:</b>{' '}
                                <a href="https://youtu.be/2FOokgd06iM" target="_blank" rel="noreferrer">Video</a>
                            </div>
                            <div><b><HiOutlineExternalLink className="mb-1" /> Demo:</b>{' '}
                                <a href="https://topedu.vercel.app/" target="_blank" rel="noreferrer">TopEdu</a>
                            </div>
                            <div><b><HiCode className="mb-1" /> Codes:</b>{' '}
                                <a href="https://github.com/MSajedian/Topedu-Reactjs" target="_blank" rel="noreferrer">Topedu-Reactjs</a> / <a href="https://github.com/MSajedian/Topedu-Expressjs" target="_blank" rel="noreferrer">Topedu-Expressjs</a>
                            </div>
                            <div><b><IoIosApps className="mb-1" /> Tech:</b> 
                            <span><img className="icons icons-width" src="../assets/images/react.png" alt="ReactJS" /></span>ReactJS,{" "}
                            <span><img className="icons icons-width" src="../assets/images/nodejs.png" alt="NodeJS" /></span> NodeJS,{" "}
                            <span><img className="icons" src="../assets/images/expressjs.png" alt="ExpressJS" /></span> ExpressJS,{" "}
                            <span><img className="icons" src="../assets/images/mongodb.png" alt="MongoDB" /></span> MongoDB</div>
                            <hr />
                            <div className="description-par-1">TopEdu is a learning management system. In this web application, instructors can create their courses and learners can use these courses. Not only We can store our data as Text or Image in TopEdu but also We can execute our HTML, CSS and JavaScript codes in this web application.</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center mb-4 shadow-lg">
                        <Card.Img variant="top" src="../assets/images/london-dry-cleaning-company.jpg" />
                        <Card.Body>
                            <Card.Title>London Dry Cleaning Company</Card.Title>
                            {/* <div><b><BsInfoCircle className="mb-1"/> About:</b>{' '}
                                <a href="https://www.youtube.com/watch?v=i4ehaW-nXZI&list=PLIz8i-HCdhvkycvUn6IYZnCMiM1C3wMPS&index=18" target="_blank" rel="noreferrer">Video</a>
                            </div> */}
                            <div><b><HiOutlineExternalLink className="mb-1" /> Demo:</b>{' '}
                                <a href="https://londondrycleaningcompany-project.vercel.app/" target="_blank" rel="noreferrer">London Dry Cleaning Company - Clone</a>
                            </div>
                            <div><b><HiCode className="mb-1" /> Codes:</b>{' '}
                                <a href="https://github.com/MSajedian/londondrycleaningcompany-project" target="_blank" rel="noreferrer">London Dry Cleaning Company - Clone</a>
                            </div>
                            <div><b><IoIosApps className="mb-1" /> Tech: </b> 
                            <span><img className="icons" src="../assets/images/next-js.png" alt="next-js" /></span> NextJS, {" "}
                            <span><img className="icons icons-width" src="../assets/images/nodejs.png" alt="NodeJS" /></span> NodeJS,{" "}
                            <span><img className="icons" src="../assets/images/react-bootstrap.png" alt="React-Bootstrap" /></span> React-Bootstrap{" "}
                            </div>
                            {/* <div><b><IoIosApps className="mb-1" /> Tech:</b> ReactJS, NodeJS, Socket.IO, ExpressJS, MongoDB</div> */}
                            <hr />
                            <div className="description-par-1">
                                This is the clone version of londondrycleaningcompany.com with NextJS
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center mb-4 shadow-lg">
                        <Card.Img variant="top" src="../assets/images/whatsapp.jpg" />
                        <Card.Body>
                            <Card.Title>Whatsapp-Clone</Card.Title>
                            {/* <div><b><BsInfoCircle className="mb-1"/> About:</b>{' '}
                                <a href="https://www.youtube.com/watch?v=i4ehaW-nXZI&list=PLIz8i-HCdhvkycvUn6IYZnCMiM1C3wMPS&index=18" target="_blank" rel="noreferrer">Video</a>
                            </div> */}
                            <div><b><HiOutlineExternalLink className="mb-1" /> Demo:</b>{' '}
                                <a href="https://whatsapp-webapp.vercel.app/" target="_blank" rel="noreferrer">Whatsapp-Clone</a>
                            </div>
                            <div><b><HiCode className="mb-1" /> Codes:</b>{' '}
                                <a href="https://github.com/MSajedian/whatsapp-clone-fe" target="_blank" rel="noreferrer">Whatsapp-Clone-FE</a> / <a href="https://github.com/MSajedian/whatsapp-clone-be" target="_blank" rel="noreferrer">Whatsapp-Clone-BE</a>
                            </div>
                            <div><b><IoIosApps className="mb-1" /> Tech:</b> 
                            <span><img className="icons icons-width" src="../assets/images/react.png" alt="ReactJS" /></span>ReactJS,{" "}
                            <span><img className="icons icons-width" src="../assets/images/nodejs.png" alt="NodeJS" /></span> NodeJS,{" "}
                            <span><img className="icons" src="../assets/images/socket_io.png" alt="Socket.IO" /></span> Socket.IO,{" "}
                            <span><img className="icons" src="../assets/images/expressjs.png" alt="ExpressJS" /></span> ExpressJS,{" "}
                            <span><img className="icons" src="../assets/images/mongodb.png" alt="MongoDB" /></span> MongoDB</div>
                            {/* <div><b><IoIosApps className="mb-1" /> Tech:</b> ReactJS, NodeJS, Socket.IO, ExpressJS, MongoDB</div> */}
                            <hr />
                            <div className="description-par-1">
                                WhatsApp Messenger, or simply WhatsApp allows users to send text messages and emojis to each other. Users also able to change their usernames and pictures.
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                
            </Row>
        </Container>
    )
}
