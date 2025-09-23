import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

// images
import img1 from 'assets/images/photos/12.jpg';
import img2 from 'assets/images/photos/14.jpg';
import img3 from 'assets/images/photos/15.jpg';

const Hero = () => {
    return (
        <section className="hero-4 pb-5 pt-7 py-sm-7">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} md={6}>
                        <h1 className="hero-title mt-0">
                            We’re more than just a Team
                            <span className="highlight highlight-success d-inline-block"></span>
                        </h1>
                        <p className="fs-16 text-muted pt-3 w-75">
                            Mission-driven force committed to transforming lives through Mental Health and Education
                            initiatives. Our projects are rooted in compassion, innovation, and measurable impact.
                        </p>
                        <div className="pt-4 pb-md-5 mb-md-4">
                            <Link to="/contact" className="btn btn-success mb-2" data-toggle="smooth-scroll">
                                Contact Us
                            </Link>
                        </div>
                    </Col>
                    <Col lg={6} md={6}>
                        <div className="img-container text-end ps-lg-5" data-aos="zoom-in">
                            <Row className="align-items-center mt-md-0 mt-4">
                                <Col xs={6}>
                                    <Card className="shadow-lg">
                                        <Card.Body className="p-1">
                                            <img
                                                src={
                                                    'https://uploads.justech-ai.in/vopa-website/websiteAboutSection/1758255642077_office1.webp'
                                                }
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={6}>
                                    <Row>
                                        <Col>
                                            <Card className="shadow-lg">
                                                <Card.Body className="p-1">
                                                    <img
                                                        src={
                                                            'https://uploads.justech-ai.in/vopa-website/websiteAboutSection/1758255642378_office2.webp'
                                                        }
                                                        className="img-fluid"
                                                        alt=""
                                                    />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Card className="shadow-lg">
                                                <Card.Body className="p-1 mb-0">
                                                    <img
                                                        src={
                                                            'https://uploads.justech-ai.in/vopa-website/websiteAboutSection/1758255642381_office3.webp'
                                                        }
                                                        className="img-fluid"
                                                        alt=""
                                                    />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
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

export default Hero;
