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
                            <div><b><BsInfoCircle className="mb-1"/> About:</b>{' '}
                                <a href="https://www.youtube.com/watch?v=i4ehaW-nXZI&list=PLIz8i-HCdhvkycvUn6IYZnCMiM1C3wMPS&index=18" target="_blank" rel="noreferrer">Video</a>
                            </div>
                            <div><b><HiOutlineExternalLink className="mb-1" /> Demo:</b>{' '}
                                <a href="https://topedu.vercel.app/" target="_blank" rel="noreferrer">TopEdu</a>
                            </div>
                            <div><b><HiCode className="mb-1"/> Codes:</b>{' '}
                                <a href="https://github.com/MSajedian/Topedu-Reactjs" target="_blank" rel="noreferrer">Topedu-Reactjs</a> / <a href="https://github.com/MSajedian/Topedu-Expressjs" target="_blank" rel="noreferrer">Topedu-Expressjs</a>
                            </div>
                            <div><b><IoIosApps className="mb-1"/> Tech:</b> ReactJS, Redux, CSS, ExpressJS, NodeJS, MongoDB</div>
                        <hr />
                        <div className="description-par-1">TopEdu is a learning management system. In this web app, teachers can create their courses and students can use these courses also there is a code playground available to all users so they can execute their HTML, CSS and JavaScript codes in the app.</div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
