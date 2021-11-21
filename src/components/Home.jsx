import { Container, Row, Col, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Home() {
    // const [pupilTop, setPupilTop] = useState("50%");
    // const [pupilLeft, setPupilLeft] = useState("50%");
    // const [pupilTransform, setPupilTransform] = useState("translate(-50%, -50%)");

    // function handleMouseMove(event) {
    //     let x = (event.clientX * 100) / window.innerWidth + "%";
    //     let y = (event.clientY * 100) / window.innerHeight + "%";
    //     setPupilLeft(x);
    //     setPupilTop(y);
    //     setPupilTransform(`translate(-${x},-${y})`);
    // }

    return (
        <Container className="home-container pt-4"
        // onMouseMove={(event) => handleMouseMove(event)}
        >
            {/* <Row>
                <Col className="text-center">
                    <span className="quote1"><q>Seek knowledge from the Cradle to the Grave</q> - Prophet Muhammad</span>
                </Col>
            </Row> */}
            <Row>
                <Col className="text-center">
                    <Carousel 
                    className="bg-dark text-white"
                    variant="dark" 
                    // wrap={false} 
                    controls={false} 
                    indicators={false}
                    >
                        <Carousel.Item interval={3000}>
                            <br />
                            <h4><q>DO WHAT YOU LOVE - LOVE WHAT YOU DO</q></h4>
                            <br />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <br />
                            <h4><q>SEEK KNOWLEDGE FROM THE CRADLE TO THE GRAVE</q></h4>
                            <br />
                            {/* <p>Prophet Muhammad</p> */}
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <br />
                            <h4><q>EVER POSITIVE - NEVER NEGATIVE</q></h4>
                            <br />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <br />
                            <h4><q>YOUR ATTITUDE DETERMINES YOUR ALTITUDE</q></h4>
                            <br />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>

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
                        {/* <div className="eyes">
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
                        </div> */}
                    </div>
                </Col>
            </Row>

        </Container>
    )
}
