import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// slider
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// images
import coworking1 from 'assets/images/hero/allTab.webp';
import coworking2 from 'assets/images/hero/shala.png';
import coworking3 from 'assets/images/hero/allTab.webp';
// import TabsExample from 'pages/docs/Bootstrap/Tabs';

const SwiperSlider = () => {
    const swiperConfig = {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        roundLengths: true,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.swiper-custom-next',
            prevEl: '.swiper-custom-prev',
        },
    };

    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Autoplay]}
            {...swiperConfig}
            data-aos="fade-up">
            {[coworking1, coworking2, coworking3].map((image, index) => {
                return (
                    <SwiperSlide key={index.toString()}>
                        <div className="slider-item" style={{ backgroundImage: `url(${image})` }}></div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

const Hero2 = () => {
    return (
        <section className="hero-2">
            <Container className="py-3 py-sm-6">
                <Row className="align-items-center">
                    <Col lg={7}>
                        <h1 className="hero-title mt-0">
                            Vowels of the <span className="highlight highlight-warning d-inline-block">People</span>{' '}
                            Association
                        </h1>
                        <p className="fs-17 ps-0 ps-sm-4">
                            <em>for justice, equity and prosperity</em>
                        </p>
                    </Col>
                    <Col lg={5}>
                        <p className="fs-17 ps-0 ps-sm-4">
                            We build tech enabled and scalable solutions in education and mental health domain to
                            nurture responsible and empowered citizens for future.
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className="slider pt-3 pt-sm-5 mt-5">
                            <div className="form-container">
                                <Row className="row align-items-top px-3 px-sm-5">
                                    <Col lg={12}>
                                        <Card className="mb-2">
                                            <Card.Body>
                                                <Row className="row align-items-center">
                                                    <Col>
                                                        <Row className="g-2 align-items-center">
                                                            <Col sm="auto">
                                                                <h4 className="mt-0 fw-medium my-1 my-sm-0 pe-3">
                                                                    Help us build brighter futures. Donate today.
                                                                </h4>
                                                            </Col>
                                                            {/* <Col sm="auto">
                                                                <label className="visually-hidden" htmlFor="location">
                                                                    location
                                                                </label>
                                                                <div className="form-control-with-hint me-sm-2">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        id="location"
                                                                        placeholder="Enter location"
                                                                    />
                                                                    <span className="form-control-feedback uil uil-location-pin-alt fs-18"></span>
                                                                </div>
                                                            </Col> */}
                                                            <Col sm="auto">
                                                                <button
                                                                    type="submit"
                                                                    className="btn btn-orange my-1 my-sm-0">
                                                                    Donate Now
                                                                </button>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col sm="auto" className="text-sm-end pt-2 pt-sm-0">
                                                        <div className="navigations">
                                                            <Button variant="info" className="swiper-custom-prev me-1">
                                                                <FeatherIcon icon="arrow-left" className="icon-dual" />
                                                            </Button>
                                                            <Button variant="info" className="swiper-custom-next">
                                                                <FeatherIcon icon="arrow-right" className="icon-dual" />
                                                            </Button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>

                            <SwiperSlider />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero2;
