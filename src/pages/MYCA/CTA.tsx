import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className="section bg-paper-texture py-6 position-relative">
            <Container>
                <Row>
                    <Card className="shadow-none border mb-0 rounded-sm">
                        <Card.Body>
                            <h3 className="mt-0 fw-semibold">Join the Mental Health Movement</h3>
                            <p>
                                Be part of the change! Whether you’re seeking information, support, or ways to help
                                others, MYCA will your trusted companion.
                            </p>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.mycaapp"
                                target="blank"
                                className="btn btn-outline-success mt-4">
                                Download MYCA App
                            </a>
                            <Link to="/contact-us" className="btn btn-outline-success mx-2 mt-4">
                                Support MYCA
                            </Link>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </section>
    );
};

export default CTA;
