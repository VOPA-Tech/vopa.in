import { Button, Col, Container, Row } from 'react-bootstrap';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

// images
import coworking from 'assets/images/hero/shala.png';

const Hero9 = () => {
    return (
        <section className="position-relative hero-9">
            <div className="hero-top bg-soft-warning">
                <Container>
                    <Row className="py-7">
                        <Col>
                            <h1 className="hero-title fw-bold">
                                Vowels of the <span className="highlight highlight-warning d-inline-block">People</span>{' '}
                                Association
                            </h1>
                            <p className="mt-3 fs-17">
                                <em>For Justice, eqity and prosperty</em>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="position-relative">
                <div className="hero-cta">
                    <Button variant="warning" className="btn-cta">
                        Donate Now
                    </Button>
                </div>
            </div>
            <div className="hero-bottom">
                <ParallaxProvider>
                    <ParallaxBanner
                        layers={[{ image: coworking, speed: -55, style: { backgroundSize: 'contain' } }]}
                        className="hero-image"></ParallaxBanner>
                </ParallaxProvider>
            </div>
        </section>
    );
};

export default Hero9;
