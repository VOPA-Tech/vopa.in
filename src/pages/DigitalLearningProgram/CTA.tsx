import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className="section py-6 position-relative">
            <Container>
                <Row>
                    <Col lg={3}>
                        <Card className="shadow-none border mb-lg-0 rounded-sm">
                            <Card.Body>
                                <h3 className="mt-0 fw-semibold"> Donate Now</h3>
                                <p>
                                    Your one-time donation has the power to create lasting change in someone's life
                                    today.
                                </p>
                                <Link to="/pages/contact" className="btn btn-outline-primary mt-4">
                                    Donate Now
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3}>
                        <Card className="shadow-none border mb-0 rounded-sm">
                            <Card.Body>
                                <h3 className="mt-0 fw-semibold">Volunteer the Cause</h3>
                                <p>
                                    Share your time and skills to directly support people and causes that need you most.
                                </p>
                                <Link to="/pages/contact" className="btn btn-outline-primary mt-4">
                                    Join as a Volunteer Today
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={3}>
                        <Card className="shadow-none border mb-lg-0 rounded-sm">
                            <Card.Body>
                                <h3 className="mt-0 fw-semibold">Download Our Application</h3>
                                <p>
                                    Get connected with real-time updates, volunteer tasks, donation status, and stories
                                    through our mobile app.
                                </p>
                                <Link to="/pages/contact" className="btn btn-outline-primary mt-4">
                                    Download the App Now
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3}>
                        <Card className="shadow-none border mb-0 rounded-sm">
                            <Card.Body>
                                <h3 className="mt-0 fw-semibold">Sign Up for Newsletter</h3>
                                <p>
                                    Receive inspiring stories, progress updates, and exclusive insights directly in your
                                    inbox every week.
                                </p>
                                <Link to="/pages/contact" className="btn btn-outline-primary mt-4">
                                    Subscribe to the Newsletter
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CTA;
