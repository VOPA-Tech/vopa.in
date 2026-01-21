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
                    <h1 className="hero-title">Mission NIPUN Maharashtra</h1>
                    <p className="mt-4 fs-17">
                        Leveraging FLN assessments and data-driven decision-making to enhance learning outcomes by
                        transforming the education system from within through AI-driven assessments, aiming to impact 7
                        million students by 2030- Reached 3.8 million students so far.
                    </p>
                    <Row className="testimonials-2" data-aos="fade-up" data-aos-duration="200">
                        <Col>
                            <div className="slider">
                                <MovingImageTrain
                                    images={[
                                        'https://uploads.justech-ai.in/vopa-website/Nipun Page Website/1762495364116_image-1.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/Nipun Page Website/1762495364471_shared-image-10.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/Nipun Page Website/1762495364638_shared-image-8.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/Nipun Page Website/1762495364745_image.png',
                                        'https://uploads.justech-ai.in/vopa-website/Nipun Page Website/1762495365596_whatsapp-image-2025-05-27-at-13407-pm-1-1.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/Nipun Page Website/1762495366829_screenshot-2025-03-20-125526.webp',
                                        'https://uploads.justech-ai.in/vopa-website/Nipun Page Website/1762495367736_20250324_104853.webp',
                                        'https://uploads.justech-ai.in/vopa-website/Nipun Page Website/1762495368310_screenshot-2025-03-29-074222.webp',
                                        'https://uploads.justech-ai.in/vopa-website/Nipun Page Website/1762495367735_20250324_105412.webp',
                                        'https://uploads.justech-ai.in/vopa-website/Nipun Page Website/1762497492267_-1.webp',
                                        'https://uploads.justech-ai.in/vopa-website/Nipun Page Website/1762497491339_media-18.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/Nipun Page Website/1762497491308_media-17.jpg',
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
