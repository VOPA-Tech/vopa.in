import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsDonationModalOpen } from 'reduxFolder/appSlice';
import MovingImageTrain from './MovingImageTrain';

const Hero4 = () => {
    const dispatch = useDispatch();

    return (
        <section className=" bg-paper-texture pt-7 pb-3 py-sm-7 overflow-hidden">
            <Container>
                <Row className="align-items-center">
                    <h1 className="hero-title">We’re more than just a Team</h1>
                    <p className="mt-4 fs-17">
                        Mission-driven force committed to transforming lives through Mental Health and Education
                        initiatives. Our projects are rooted in compassion, innovation, and measurable impact.
                    </p>
                    <Row className="testimonials-2" data-aos="fade-up" data-aos-duration="200">
                        <Col>
                            <div className="slider">
                                <MovingImageTrain
                                    images={[
                                        'https://uploads.justech-ai.in/vopa-website/websiteAboutSection/1758255642375_vopateam.webp',
                                        'https://uploads.justech-ai.in/vopa-website/websiteAboutSection/1758255642378_office2.webp',
                                        'https://uploads.justech-ai.in/vopa-website/websiteAboutSection/1758255642381_office3.webp',
                                        'https://uploads.justech-ai.in/vopa-website/websiteAboutSection/1758713972062_1000073126.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/websiteAboutSection/1758800214830_media-14.jpg',
                                    ]}
                                />
                            </div>
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <Link className="mt-sm-2" to="/join-us">
                        <Button variant="success" className="me-2 mb-2 ms-2">
                            Join Us
                        </Button>
                    </Link>
                </Row>
            </Container>
        </section>
    );
};

export default Hero4;
