import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Home() {
    return (
        <Container>
            <h2>Home</h2>
            <Row>
                <Col>
                    <p>contact icons in Each page</p>

                    <p>Images:</p>
                    <p>Digital images and 0 1</p>
                    <p>Movable image</p>

                    <p>Hi,</p>
                    <p>I am Mohammadamin Sajedian</p>
                    <p>FullStack Web Developer</p>

                    <p>“DO WHAT YOU LOVE LOVE WHAT YOU DO” / “EVER POSITIVE NEVER NEGATIVE”</p>
                </Col>
                <Col>
                    <div className="text-center">
                        <img src="../assets/images/hi.png" alt="hi" className="home-image-1" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
