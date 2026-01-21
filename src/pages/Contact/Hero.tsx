import { Col, Container, Row } from 'react-bootstrap';

const Hero = () => {
    return (
        <section className="hero-4 pt-lg-6 pb-sm-9 pb-6 pt-9 bg-paper-texture position-relative overflow-hidden">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={7} className="text-center">
                        <h1 className="hero-title mb-0">Contact Us</h1>
                        <p className="mb-4 fs-17 text-muted">
                            Please fill out the following form and we will get back to you shortly
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
