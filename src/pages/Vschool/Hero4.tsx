import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsDonationModalOpen } from 'reduxFolder/appSlice';
import MovingImageTrain from './MovingImageTrain';

const Hero4 = () => {
    const dispatch = useDispatch();

    return (
        <section className="hero-4 bg-paper-texture pt-7 pb-3 py-sm-7 overflow-hidden ">
            <Container>
                <Row className="align-items-center">
                    {' '}
                    <h1 className="hero-title">Bridging Learning Gaps with Scalable, Free EdTech</h1>
                    <p className="mt-4 fs-17 newspaper-text">
                        Millions of children in India drop out or fall behind due to poor foundational learning,
                        migration, unaffordable tuitions, lack of systemic support and limited access to quality free
                        EdTech. V-School bridges this gap by offering a free, multilingual digital ecosystem aligned
                        with public education. It empowers students, teachers, and governments to improve learning
                        outcomes-at scale and with equity.
                    </p>
                    <Row className="testimonials-2" data-aos="fade-up" data-aos-duration="200">
                        <Col>
                            <div className="slider">
                                <MovingImageTrain
                                    images={[
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845015_picture5.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845018_media-30.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845042_picture7.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845230_media-20.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845232_picture3-2.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845268_picture8.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845297_picture4.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845322_whatsapp-image-2025-04-10-at-165356_3e36c173.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845340_picture6.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845352_picture1-2.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845406_media-28.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845407_media-29.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845427_media-26.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845432_media-24.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845439_media-21.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845458_media-22.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845536_picture2-3.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845538_picture10-1.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845552_d2-1.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845629_picture9.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845664_media-17.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845669_media-27.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845718_media-23.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845745_media-18.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845752_media-19.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845760_media-25.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845778_media-16.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845889_selected-photo-1.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845892_shared-image-6.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845960_d4-1.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845962_d6-1.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845965_d1-1.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845967_d3-1.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845968_d5-1.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491845987_media-31.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/vschoolPage/1762491846020_screenshot-2024-04-19-165622.png',
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
            {/* <div className="shape bottom">
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
            </div> */}
        </section>
    );
};

export default Hero4;
