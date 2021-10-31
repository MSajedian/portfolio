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
        <Container className="home-container" onMouseMove={(event) => handleMouseMove(event)}>
            <h2>Home</h2>
            <Row>
                <Col lg={6}>
                    <p>contact icons in Each page</p>

                    <p>Images:</p>
                    <p>Digital images and 0 1</p>
                    <p>Movable image</p>

                    <p>Hi,</p>
                    <p>I am Mohammadamin Sajedian</p>
                    <p>FullStack Web Developer</p>

                    <p>“DO WHAT YOU LOVE LOVE WHAT YOU DO” / </p>
                    <p>“EVER POSITIVE NEVER NEGATIVE”</p>
                    <p>“Learn from BIRTH to DEATH”</p>
                </Col>
                <Col lg={6}>
                    <div className="text-center image-container">
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
