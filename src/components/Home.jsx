import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Home() {
    const [pupilTop, setPupilTop] = useState("50%");
    const [pupilLeft, setPupilLeft] = useState("50%");
    const [pupilTransform, setPupilTransform] = useState("translate(-50%, -50%)");

    function handleMouseMove(event) {
        let x = (event.clientX * 100) / window.innerWidth + "%";
        let y = (event.clientY * 100) / window.innerHeight + "%";
        setPupilLeft(x);
        setPupilTop(y);
        setPupilTransform(`translate(-${x},-${y})`);
    }

    return (
        <Container className="home-container pt-5" onMouseMove={(event) => handleMouseMove(event)}>
            <Row className="mt-5">
                <Col lg={6} className="align-self-center fs-2" >
                    <div className="text-center justify-content-center align-items-center ">
                        <p>Hi, I am</p>
                        <p className="fw-bold">Mohammadamin Sajedian</p>
                        <p>Full Stack Web Developer</p>
                        <Link to="/about" className="mt-4 fs-5 btn btn-outline-dark shadow">More About Me</Link>
                    </div>
                </Col>
                <Col lg={6} className="align-self-center">
                    <div className="text-center image-container justify-content-center align-items-center">
                        <img src="../assets/images/hi.png" alt="hi" className="home-image-1" />
                        <div className="eyes">
                            <div className="eye">
                                <div
                                    className="pupil"
                                    style={{
                                        top: pupilTop,
                                        left: pupilLeft,
                                        transform: pupilTransform
                                    }}
                                ></div>
                            </div>

                            <div className="eye">
                                <div
                                    className="pupil"
                                    style={{
                                        top: pupilTop,
                                        left: pupilLeft,
                                        transform: pupilTransform
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
