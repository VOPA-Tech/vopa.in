import { Col, Container, Row } from 'react-bootstrap';

const Hero4 = () => {
    return (
        <section className="hero-4 bg-soft-warning pt-7 pb-3 py-sm-7 overflow-hidden" style={{ position: 'relative' }}>
            {/* Background Layer */}
            <div
                style={{
                    backgroundImage: `url(https://uploads.justech-ai.in/vopa-website/myca/1758272746925_nobgmycalogo.png)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.1, // fade effect
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                }}
            />

            {/* Content Layer */}
            <Container style={{ position: 'relative', zIndex: 1 }}>
                <Row className="align-items-center">
                    <Col lg={5} md={6}>
                        <h1 className="hero-title">
                            <span className="d-inline-block">MYCA</span>
                        </h1>
                        <p className="mt-4 fs-17">My Mental Health Companion Launched By DCM Mr. Eknath Shinde</p>
                    </Col>
                    <Col lg={7} md={6}>
                        <div className="img-container text-end pt-5 pt-sm-0">
                            <img
                                src="https://uploads.justech-ai.in/vopa-website/myca/1758272746622_mycahero.png"
                                alt="startup"
                                className="img-fluid rounded-3 shadow-lg"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Shape */}
            <div className="shape bottom">
                <svg width="1440px" height="40px" viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg">
                    <g fill="#fff">
                        <path d="M0,30.013 C239.659,10.004 479.143,0 718.453,0 C957.763,0 1198.28,10.004 1440,30.013 L1440,40 L0,40 Z"></path>
                    </g>
                </svg>
            </div>
        </section>
    );
};

export default Hero4;
