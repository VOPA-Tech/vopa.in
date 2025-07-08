import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

// images
import feature from 'assets/images/photos/3.jpg';

const Feature = () => {
    return (
        <section className="py-5 mb-xl-5 mb-lg-4 position-relative" data-aos="fade-up">
            <Container>
                <Row className="align-items-center mt-5">
                    <Col lg={5}>
                        <h1 className="display-5 fw-semibold">V-School: Liberating Education</h1>

                        <p className=" my-4">
                            V-School is our{' '}
                            <span className="highlight highlight-warning d-inline-block">'1 Million Club'</span> app
                            thet provides free digital education for 1st to 10th Marathi, urdu and semi English medium
                            students in Maharashtra
                        </p>

                        <Link to="#" className="h6 text-primary">
                            Learn more
                            <FeatherIcon icon="arrow-right" className="ms-2 icon-xxs" />
                        </Link>
                    </Col>
                    <Col lg={{ span: 6, offset: 1 }}>
                        <div className="img-content2 position-relative mt-4 mt-lg-0">
                            <div className="img-up mb-lg-0 mb-6">
                                <img src={feature} alt="feature" className="img-fluid d-block shadow" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Feature;
