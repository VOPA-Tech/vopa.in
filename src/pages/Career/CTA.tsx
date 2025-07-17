import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className="section py-6 position-relative">
            <Container>
                <Row>
                    {/* <Col lg={6}>
                        <Card className="shadow-none border mb-lg-0 rounded-sm">
                            <Card.Body>
                                <h3 className="mt-0 fw-semibold">Get in touch</h3>
                                <p>
                                    Don't find suitable opening? We'd still love to learn more about you. Contact us and
                                    we'll reach out to have interesting conversation!
                                </p>
                                <Link to="/contact" className="btn btn-outline-primary mt-4">
                                    Contact Us
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col> */}
                    {/* <Col lg={6}> */}

                    <Card className="shadow-none border mb-0 rounded-sm">
                        <Card.Body>
                            <h3 className="mt-0 fw-semibold">
                                Come and be a part of the exciting journey of social change!
                            </h3>

                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLScM6CEiwnfAutSDHOwR1B2ra1DPsrpyj6KYR3MfyZnfIg8iyw/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline-success mt-4">
                                Apply by filling up this form!
                            </a>

                            <div className="mt-4">
                                <img
                                    src="/images/career/googleFormQR.png"
                                    alt="QR Code to Application Form"
                                    width={200}
                                    height={200}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                    {/* </Col> */}
                </Row>
            </Container>
        </section>
    );
};

export default CTA;
