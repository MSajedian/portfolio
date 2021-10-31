import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

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
            <Row>
                <Col lg={6} className="align-self-center">
                    <div className="text-center justify-content-center align-items-center ">
                        <p>Hi,</p>
                        <p>I am Mohammadamin Sajedian</p>
                        <p>FullStack Web Developer</p>
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
