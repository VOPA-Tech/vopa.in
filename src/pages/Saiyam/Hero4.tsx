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
                    <h1 className="hero-title">Saiyam Olympiad</h1>
                    <p className="mt-4 fs-17">
                        Raising awareness about addiction prevention and promoting life skills.
                    </p>{' '}
                    <p className="mt-0 fs-17">
                        Vowels of the People Association (VOPA) | Tarachand Ramnath Seva Trust | Parivartan Trust
                    </p>
                    <Row className="testimonials-2" data-aos="fade-up" data-aos-duration="200">
                        <Col>
                            <div className="slider">
                                <MovingImageTrain
                                    images={[
                                        'https://uploads.justech-ai.in/vopa-website/Saiyam Page/1762146592935_gemini_generated_image_o2mv1yo2mv1yo2mv.webp',
                                        'https://uploads.justech-ai.in/vopa-website/Saiyam Page/1762167270089_4cc5066c-1e5d-4792-8b03-9896c3dee344.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/Saiyam Page/1762167270093_img_2169.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/Saiyam Page/1762167270740_img_20250404_075433.webp',
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
