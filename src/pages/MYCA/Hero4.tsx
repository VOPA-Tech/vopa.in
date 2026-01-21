import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsDonationModalOpen } from 'reduxFolder/appSlice';
import MovingImageTrain from './MovingImageTrain';

const Hero4 = () => {
    const dispatch = useDispatch();

    return (
        <section className="hero-4 bg-paper-texture pt-7 pb-3 py-sm-7 overflow-hidden">
            <Container>
                <Row className="align-items-center">
                    <h1 className="hero-title">MYCA</h1>
                    <p className="mt-4 fs-17">My Mental Health Companion Launched By DCM Mr. Eknath Shinde</p>
                    <Row className="testimonials-2" data-aos="fade-up" data-aos-duration="200">
                        <Col>
                            <div className="slider">
                                <MovingImageTrain
                                    images={[
                                        'https://uploads.justech-ai.in/vopa-website/myca/1762508595719_shared-image-14.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/myca/1762508596111_shared-image-8.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/myca/1762508596788_shared-image-9.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/myca/1758272746622_mycahero.png',
                                    ]}
                                />
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
