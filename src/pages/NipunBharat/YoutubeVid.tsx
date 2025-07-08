import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { FormInput } from 'components/form';
import { SwiperSlider3 } from 'components/sliders';

// components
// import { FormInput } from '../form';
// import SwiperSlider3 from '../sliders/SwiperSlider3';

const YoutubeVid = () => {
    return (
        <section className="position-relative hero-11 py-1 pt-7 pb-sm-6">
            <Container className="hero-content">
                <Row className="align-items-center">
                    <Col xs={12} className="text-center">
                        {/* <h1 className="hero-title">
                            The best way to <span className="highlight highlight-success d-inline-block">showcase</span>{' '}
                            your saas
                        </h1> */}

                        {/* <p className="fs-17 text-muted pt-0">
                            Make your saas application stand out with high-quality landing page designed and developed
                            by professional
                        </p> */}

                        {/* <div className="d-flex mt-2 justify-content-center">
                            <div className="me-4">
                                <FeatherIcon icon="check-circle" className="icon icon-dual-success icon-xs me-1" />
                                Free 14-day Demo
                            </div>
                            <div className="me-4">
                                <FeatherIcon icon="check-circle" className="icon icon-dual-success icon-xs me-1" />
                                No credit card needed
                            </div>
                            <div>
                                <FeatherIcon icon="check-circle" className="icon icon-dual-success icon-xs me-1" />
                                No Setup
                            </div>
                        </div> */}
                    </Col>
                </Row>
            </Container>

            <div className="feature-container position-relative overflow-hidden mt-5 mb-4">
                <Container>
                    <Row className="align-items-center justify-content-center zindex-1 slider-container">
                        <Col xs={10} className="text-center zindex-1">
                            <Card className="rounded-lg shadow" data-aos="fade-up" data-aos-duration="2000">
                                <Card.Body className="slider-container-body">
                                    <div className="video-container">
                                        <iframe
                                            width="100%"
                                            height="315"
                                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                            title="YouTube video"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                    {/* <div className="slider">
                                        <SwiperSlider3 />
                                    </div> */}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default YoutubeVid;
