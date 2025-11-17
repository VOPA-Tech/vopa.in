import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

const Highlights = () => {
    return (
        <section className="hero-4 pb-5 pt-7 py-sm-7">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} md={6}>
                        <h1 className="hero-title mt-0">Pilot Phase Highlights</h1>
                        <p className="fs-16 text-muted pt-3 w-75">
                            Successful completion of Saiyam Pilot Phase (Oct 2024 - May 2025) with 1825+ students from
                            40+ schools across Pune actively engaged in learning through the Saiyam platform.
                        </p>
                    </Col>
                    <Col lg={6} md={6}>
                        <div className="img-container text-end ps-lg-5" data-aos="zoom-in">
                            <Row className="align-items-center mt-md-0 mt-4">
                                <Col xs={6}>
                                    <Card className="shadow-lg">
                                        <Card.Body className="p-1">
                                            <img
                                                src={
                                                    'https://uploads.justech-ai.in/vopa-website/Saiyam Page/1762167270089_4cc5066c-1e5d-4792-8b03-9896c3dee344.jpg'
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
                                                            'https://uploads.justech-ai.in/vopa-website/Saiyam Page/1762167270093_img_2169.jpg'
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
                                                            'https://uploads.justech-ai.in/vopa-website/Saiyam Page/1762167270093_img_2169.jpg'
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

export default Highlights;
