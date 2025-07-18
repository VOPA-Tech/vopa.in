import { Button, Col, Container, Row } from 'react-bootstrap';

// images
import vschool from 'assets/images/hero/allTab.webp';

const Hero4 = () => {
    return (
        <section className="hero-4 bg-soft-warning pt-7 pb-3 py-sm-7 overflow-hidden">
            <Container>
                <Row className="align-items-center">
                    <Col lg={5} md={6}>
                        <h1 className="hero-title">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <span className="highlight highlight-warning d-inline-block">enean</span>
                        </h1>
                        <p className="mt-4 fs-17">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget maximus augue. Nam
                            gravida nulla non semper placerat. Nunc eu tempus arcu
                        </p>
                        <div className="pt-3 pt-sm-5">
                            <Button variant="warning">Support a Child’s Education</Button>
                            <Button variant="outline-warning" className="ms-2">
                                Join as a Volunteer
                            </Button>
                        </div>
                    </Col>
                    <Col lg={7} md={6}>
                        <div className="img-container text-end pt-5 pt-sm-0">
                            <img
                                src={vschool}
                                alt="startup"
                                className="img-fluid rounded-3 shadow-lg"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="shape bottom">
                <svg
                    width="1440px"
                    height="40px"
                    viewBox="0 0 1440 40"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    <g id="shape-b" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="curve" fill="#fff">
                            <path
                                d="M0,30.013 C239.659,10.004 479.143,0 718.453,0 C957.763,0 1198.28,10.004 1440,30.013 L1440,40 L0,40 L0,30.013 Z"
                                id="Path"></path>
                        </g>
                    </g>
                </svg>
            </div>
        </section>
    );
};

export default Hero4;
