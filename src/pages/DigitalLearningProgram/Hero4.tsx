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
                    <h1 className="hero-title">Digital Learning Project</h1>
                    <p className="mt-4 fs-17">
                        The Digital Learning Project (DLP) is VOPA’s groundbreaking initiative, revolutionizing
                        education in low-resource schools in Pune. We’re creating a new paradigm for learning in 20
                        schools by enhancing teacher methodologies, upgrading infrastructure, implementing regular
                        assessments, and providing supplementary education through our V-School app-all of it together.
                        VOPA’s holistic & focused approach in solving for all stakeholders has shown tremendous success.
                    </p>
                    <Row className="testimonials-2" data-aos="fade-up" data-aos-duration="200">
                        <Col>
                            <div className="slider">
                                <MovingImageTrain
                                    images={[
                                        'https://uploads.justech-ai.in/vopa-website/DLPPage/1762506874786_shared-image-11.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/DLPPage/1762506877675_media-34.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/DLPPage/1762506878647_media-33.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/DLPPage/1762506880406_media-35.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/DLPPage/1762506880785_shared-image-13.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/DLPPage/1762506881383_img_20250425_144702-1.jpg',
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
