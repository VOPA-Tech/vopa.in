import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsDonationModalOpen } from 'reduxFolder/appSlice';
import MovingImageTrain from './MovingImageTrain';

const Hero4 = () => {
    const dispatch = useDispatch();

    return (
        <section className="hero-4 bg-soft-success pt-7 pb-3 py-sm-7 overflow-hidden">
            <Container>
                <Row className="align-items-center">
                    <h1 className="hero-title">Mission NIPUN Maharashtra</h1>
                    <p className="mt-4 fs-17">
                        AI-Driven Assessments-Transforming Education System from within for 38 lakh students
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
            <div className="shape bottom">
                <svg
                    width="1440px"
                    height="40px"
                    viewBox="0 0 1440 40"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    <g id="shape-b" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="curve" fill="#fff">
                            <path
                                d="M0,30.013 C239.659,10.004 479.143,0 718.453,0 C957.763,0 1198.28,10.004 1440,30.013 L1440,40 L0,40 L0,30.013 Z"
                                id="Path"></path>
                        </g>
                    </g>
                </svg>
            </div>
        </section>
    );
};

export default Hero4;
