import { Row, Col, Container, Badge, Button } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// components

// dummy data
import { slides } from 'components/sliders/data';
import { projects } from './data';
import SwiperSlider2 from './SwiperSlider2';
import SwiperSliderProjectCards from './SwiperSliderProjectCards';

const ProjectCardsSlider = () => {
    return (
        <section className="pt-8 pb-6  position-relative bg-paper-texture">
            <Container>
                <Row className="justify-content-center">
                    <Col className="text-start">
                        <h2 className="display-5 fw-medium">
                            We're shaping a world where every child has the tools to learn, the strength to grow, and
                            the freedom to flourish.
                        </h2>
                        <p className="mb-0">
                            <span className=" p-1 align-middle">Projects We Have Done</span>
                        </p>
                    </Col>
                </Row>

                <Row className="testimonials-2" data-aos="fade-up" data-aos-duration="200">
                    <Col>
                        <div className="slider">
                            <SwiperSliderProjectCards slides={projects} />
                        </div>
                    </Col>
                </Row>
                {/* <Row className="">
                    {' '}
                    <Col xs="auto" className="text-sm-right pt-2 pt-sm-0">
                        <div className="navigations">
                            <Button variant="link" className="text-normal icon-md p-0 swiper-custom-prev">
                                <FeatherIcon icon="arrow-left" className="icon-dual" />
                            </Button>
                            <Button variant="link" className="text-normal icon-md p-0 swiper-custom-next">
                                <FeatherIcon icon="arrow-right" className="icon-dual" />
                            </Button>
                        </div>
                    </Col>
                </Row> */}
            </Container>
        </section>
    );
};

export default ProjectCardsSlider;
