import { Button, Col, Container, Row } from 'react-bootstrap';

// image
import coworking from 'assets/images/hero/shala.png';

const Hero9 = () => {
    return (
        <section
            className="position-relative hero-9 text-white"
            style={{
                backgroundImage: `url(${'images/homePage/homeHero.jpg'})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
            }}>
            <div className="bg-dark bg-opacity-50 w-100 h-100 position-absolute top-0 start-0 z-0"></div>

            <Container className="position-relative z-1">
                <Row className="py-7">
                    <Col>
                        <h1 className="hero-title text-white fw-bold">
                            Vowels of the <span className="highlight highlight-secondary d-inline-block">People</span>{' '}
                            Association
                        </h1>
                        <p className="mt-3 fs-20">
                            <em>For Justice, equity and prosperity</em>
                        </p>
                        <div className="mt-4">
                            <Button variant="warning" className="btn-cta btn-lg">
                                Donate Now
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero9;
