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
                    <h1 className="hero-title">Let's work together. Join VOPA!</h1>
                    <p className="mt-4 fs-17">
                        We're always open for new creative, analytical and technical minds to join our team. Search for
                        the suitable job.
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
