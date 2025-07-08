import { Button, Card, Col, Container, Row } from 'react-bootstrap';

// components
// import { FormInput } from '../form';
// import SwiperSlider3 from '../sliders/SwiperSlider3';

const CelebrityYT = () => {
    const ytLinks = [
        'https://www.youtube.com/embed/z1tAHi1OJMs',
        'https://www.youtube.com/embed/csdHvllnV20',
        'https://www.youtube.com/embed/RU521uaqZA0',
        'https://www.youtube.com/embed/yi5vg94xsn0',
        'https://www.youtube.com/embed/FTZ2rDTrHtg',
    ];
    return (
        <section className="position-relative py-1 pt-7 pb-sm-6">
            <Container className="hero-content">
                <Row className="align-items-center">
                    <Col xs={12} className="text-center">
                        {/* <h1 className="hero-title">
                            The best way to <span className="highlight highlight-success d-inline-block">showcase</span>{' '}
                            your saas
                        </h1> */}

                        <p className=" display-4 pt-0">Earlier Feedback</p>

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

            <div className="feature-container position-relative overflow-hidden mt-5 ">
                <Container>
                    <Row className="align-items-center justify-content-center zindex-1 slider-container">
                        {ytLinks.map((ele) => (
                            <Col xs={12} md={6} lg={4} className="text-center zindex-1">
                                <Card className="rounded-lg shadow" data-aos="fade-up" data-aos-duration="2000">
                                    <Card.Body className="slider-container-body">
                                        <div className="video-container">
                                            <iframe
                                                width="100%"
                                                height="315"
                                                src={ele}
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
                        ))}
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default CelebrityYT;
