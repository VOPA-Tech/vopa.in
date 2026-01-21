import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

const Highlights = () => {
    return (
        <section className="bg-paper-texture pb-5 pt-7 py-sm-7 newspaper-text">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} md={6}>
                        <h1 className="hero-title mt-0">Pilot Phase Highlights</h1>
                        <p className="fs-16 text-muted pt-3 ">
                            Successful completion of Saiyam Pilot Phase (Oct 2024 - May 2025) with 1825+ students from
                            30+ schools across Pune actively engaged in learning through the Saiyam platform.
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
        </section>
    );
};

export default Highlights;
