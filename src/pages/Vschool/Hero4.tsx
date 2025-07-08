import { Button, Col, Container, Row } from 'react-bootstrap';

// images
import vschool from 'assets/images/hero/allTab.png';
import { Link } from 'react-router-dom';
import { useAppContext } from 'context/AppContext';

const Hero4 = () => {
    const { setIsDonationModalOpen } = useAppContext();
    return (
        <section className="hero-4 bg-soft-warning pt-7 pb-3 py-sm-7 overflow-hidden">
            <Container>
                <Row className="align-items-center">
                    <Col lg={5} md={6}>
                        <h1 className="hero-title">Bridging Learning Gaps with Scalable, Free EdTech</h1>
                        <p className="mt-4 fs-17">
                            Millions of children in India drop out or fall behind due to poor foundational learning,
                            unaffordable tuitions, and limited access to quality free EdTech. V-School bridges this gap
                            by offering a free, multilingual digital ecosystem aligned with public education. It
                            empowers students, teachers, and governments to improve learning outcomes—at scale and with
                            equity.
                        </p>
                        <div className="pt-3 pt-sm-5">
                            <Button className="mb-2" variant="success" onClick={() => setIsDonationModalOpen(true)}>
                                Support a Child’s Education
                            </Button>
                            <Link className="mt-sm-2" to="/contact">
                                <Button variant="outline-success" className="me-2 mb-2 ms-2">
                                    Join as a Volunteer
                                </Button>
                            </Link>
                        </div>
                    </Col>
                    <Col lg={7} md={6}>
                        <div className="img-container text-end pt-5 pt-sm-0">
                            <img
                                src={'/images/vschool/heroImage.png'}
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
