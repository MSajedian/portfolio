import React, { useEffect } from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const BackendURL = process.env.REACT_APP_BACKEND_REMOTE_URL || process.env.REACT_APP_BACKEND_LOCAL_URL

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

    function sendEmail() {
        try {
            fetch(`${BackendURL}/users/sendemailforpersonalpage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name:"someone", emailAddress:"...", message:"visited the home page of portfolio" }) // body data type must match "Content-Type" header
            })
                .then(res => { if (res.ok) { console.log('error connection to the backend') } })
        } catch (error) { console.log('error:', error) }
    }

    useEffect(() => {
        sendEmail();
        // eslint-disable-next-line
    }, [])

    return (
        <Container className="home-container pt-4"
        // onMouseMove={(event) => handleMouseMove(event)}
        >
            {/* <Row>
                <Col className="text-center">
                    <span className="quote1"><q>Seek knowledge from the Cradle to the Grave</q> - Prophet Muhammad</span>
                </Col>
            </Row> */}
            <Row >
                <Col className="text-center" >
                    <Carousel 
                    className="gradient-border"
                    // variant="dark" 
                    // wrap={false} 
                    controls={false} 
                    indicators={false}
                    >
                        <Carousel.Item interval={3000}>
                            <br />
                            <h4 className="m-1"><q>DO WHAT YOU <span className="text-danger">LOVE</span> - <span className="text-danger">LOVE</span> WHAT YOU DO</q></h4>
                            <br />
                        </Carousel.Item>
                        <Carousel.Item interval={4000}>
                            <br />
                            <h4 className="m-1"><q>SEEK <span className="text-primary">KNOWLEDGE</span> FROM THE CRADLE TO THE GRAVE</q></h4>
                            <br />
                            {/* <p>Prophet Muhammad</p> */}
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <br />
                            <h4 className="m-1"><q>EVER <span className="text-success">POSITIVE</span> - NEVER <span className="text-danger">NEGATIVE</span></q></h4>
                            <br />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <br />
                            <h4 className="m-1"><q>YOUR <span className="text-primary">ATTITUDE</span> DETERMINES YOUR <span className="text-primary">ALTITUDE</span></q></h4>
                            <br />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col lg={6} className="align-self-center fs-2 mt-lg-2" >
                    <div className="text-center justify-content-center align-items-center ">
                        <p>Hi, I am</p>
                        <p className="fw-bold">Mohammadamin Sajedian</p>
                        <p>Full-Stack Web Developer</p>
                        <Link to="/about" className="m-4 fs-5 btn btn-success shadow btn-grad">More About Me</Link>
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
