import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsDonationModalOpen } from 'reduxFolder/appSlice';
import { projects } from './data';
import SwiperSliderProjectCards from './SwiperSliderProjectCards';

const Hero4 = () => {
    const dispatch = useDispatch();

    return (
        <section className="hero-4 bg-paper-texture pt-7 pb-3 py-sm-7 overflow-hidden ">
            <Container>
                <Row className="align-items-center">
                    <h1 className="hero-title">Our Projects</h1>
                    <p className="mt-4 fs-17">
                        VOPA works on multiple educational projects. We focus on improving the learning experience of
                        the deprived and needy students.
                    </p>

                    <Row className="testimonials-2" data-aos="fade-up" data-aos-duration="200">
                        <Col>
                            <div className="slider">
                                <SwiperSliderProjectCards slides={projects} />
                            </div>
                        </Col>
                    </Row>
                    <div className="pt-3 pt-sm-5">
                        <Button
                            className="mb-2"
                            variant="success"
                            onClick={() => dispatch(setIsDonationModalOpen(true))}>
                            Support a Child’s Education
                        </Button>
                        <Link className="mt-sm-2" to="/contact-us">
                            <Button variant="outline-success" className="me-2 mb-2 ms-2">
                                Join as a Volunteer
                            </Button>
                        </Link>
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default Hero4;
