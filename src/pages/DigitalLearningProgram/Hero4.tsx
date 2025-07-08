import { Button, Col, Container, Row } from 'react-bootstrap';

// images
import vschool from 'assets/images/hero/allTab.png';
import { useNavigate } from 'react-router-dom';

const Hero4 = () => {
    const navigate = useNavigate();
    return (
        <section className="hero-4 bg-soft-warning pt-7 pb-3 py-sm-7 overflow-hidden">
            <Container>
                <Row className="align-items-center">
                    <Col lg={5} md={6}>
                        <h1 className="hero-title">
                            <span className=" d-inline-block">Digital Learning Project</span>{' '}
                        </h1>
                        <p className="mt-4 fs-17">
                            The Digital Learning Project (DLP) is VOPA’s groundbreaking initiative, revolutionizing
                            education in low-resource schools in Pune. We’re creating a new paradigm for learning in 21
                            schools by enhancing teacher methodologies, upgrading infrastructure, implementing regular
                            assessments, and providing supplementary education through our V-School app-all of it
                            together. VOPA’s holistic & focused approach in solving for all stakeholders has shown
                            tremendous success.
                        </p>
                        <div className="pt-3 pt-sm-5">
                            <Button
                                onClick={() => {
                                    navigate('/contact');
                                }}
                                variant="success">
                                Explore Our Tools
                            </Button>
                            <Button
                                onClick={() => {
                                    navigate('/contact');
                                }}
                                variant="outline-success"
                                className="ms-2">
                                Partner With Us
                            </Button>
                        </div>
                    </Col>
                    <Col lg={7} md={6}>
                        <div className="img-container text-end pt-5 pt-sm-0">
                            <img
                                src={vschool}
                                alt="startup"
                                className="img-fluid rounded-3 shadow-lg"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                            />
                        </div>
                    </Col>
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
