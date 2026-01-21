import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className="section bg-paper-texture py-6 position-relative">
            <Container>
                <Row>
                    <Card className="shadow-none border mb-lg-0 rounded-sm">
                        <Card.Body>
                            <h3 className="mt-0 fw-semibold">Join the revolution</h3>
                            <p>
                                Given our successful proof of concept, we invite other Educational Bodies, Schools,
                                NGO’s, Government Bodies who seek to understand how they can use our innovations
                                themselves, do contact us.
                            </p>
                            <Link to="/contact-us" className="btn btn-outline-success mt-4">
                                Partner with us.
                            </Link>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </section>
    );
};

export default CTA;
