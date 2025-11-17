import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Row, Col, Container, Card } from 'react-bootstrap';
import { submitContactAsync } from 'reduxFolder/contactFormSlice';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha'; // ✅ added

function ContactUs() {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.contactFormState || {});

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [captchaValue, setCaptchaValue] = useState(null); // ✅ added

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !message) {
            alert('Please fill out all required fields.');
            return;
        }

        if (!captchaValue) {
            alert('Please verify that you are not a robot.');
            return;
        }

        const contactData = {
            firstName,
            lastName,
            email,
            message,
            captchaToken: captchaValue, // ✅ send to backend for verification
            timestamp: new Date().toISOString(),
        };

        dispatch(submitContactAsync(contactData))
            .unwrap()
            .then(() => {
                alert('Thank you! Your message has been submitted.');
                setFirstName('');
                setLastName('');
                setEmail('');
                setMessage('');
                setCaptchaValue(null);
            })
            .catch(() => {
                alert('Failed to send message. Please try again later.');
            });
    };

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
    };

    return (
        <section className="section pb-lg-7 py-4 position-relative">
            <Container>
                <Row className="align-items-center justify-content-center mb-5">
                    <Col lg={6}>
                        <Card className="shadow-none">
                            <Card.Body className="p-xl-5 p-0">
                                <h2 className="mb-2 mt-0 fw-medium">Let's Talk Further</h2>
                                <p className="mb-5">
                                    Please fill out the following form and we will get back to you shortly
                                </p>

                                <form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter first name"
                                                    value={firstName}
                                                    onChange={(e) => setFirstName(e.target.value)}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter last name"
                                                    value={lastName}
                                                    onChange={(e) => setLastName(e.target.value)}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={12}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Enter your email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={12}>
                                            <Form.Group className="mb-4">
                                                <Form.Label>Message</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={5}
                                                    placeholder="Write your message here..."
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>

                                        {/* ✅ Added reCAPTCHA here */}
                                        <Col lg={12} className="mb-4 text-center">
                                            <ReCAPTCHA
                                                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                                                onChange={handleCaptchaChange}
                                            />
                                        </Col>

                                        <Col lg="auto" className="mb-0">
                                            <Button variant="success" type="submit" disabled={loading}>
                                                {loading ? 'Sending...' : 'Send Message'}
                                                <span className="icon icon-xs text-white ms-1">
                                                    <FeatherIcon icon="send" />
                                                </span>
                                            </Button>
                                        </Col>
                                    </Row>
                                </form>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Map Section */}
                    <Col lg={{ offset: 1, span: 5 }}>
                        <a
                            href="https://maps.app.goo.gl/nTmMtLmTxA5ddaeU9"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}>
                            <div
                                className="map-container"
                                style={{
                                    height: '520px',
                                    cursor: 'pointer',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                }}>
                                <img
                                    src="https://uploads.justech-ai.in/vopa-website/Contact Us Page/1761899772625_screenshot-2025-10-31-140325.png"
                                    alt="Map"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.3s ease',
                                    }}
                                    className="map-image"
                                />
                            </div>
                        </a>
                    </Col>
                </Row>

                {/* Contact Info Section */}
                <Row className="mt-5 align-items-center">
                    <Col md={4}>
                        <div className="d-flex px-md-1 px-lg-5 mb-md-0 mb-3">
                            <span className="bg-soft-success avatar avatar-sm rounded icon icon-with-bg icon-xs text-success me-3 flex-shrink-0">
                                <FeatherIcon icon="mail" className="icon-dual-success" />
                            </span>
                            <div className="flex-grow-1">
                                <h5 className="m-0 fw-medium">Email</h5>
                                <Link to="#" className="text-muted fw-normal h5 my-1">
                                    hr.vopa@vopa.in
                                </Link>
                            </div>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className="d-flex px-md-1 px-lg-5 mb-md-0 mb-3">
                            <span className="bg-soft-success avatar avatar-sm rounded icon icon-with-bg icon-xs text-success me-3 flex-shrink-0">
                                <FeatherIcon icon="phone-call" className="icon-dual-success" />
                            </span>
                            <div className="flex-grow-1">
                                <h5 className="m-0 fw-medium">Phone</h5>
                                <Link to="#" className="text-muted fw-normal h5 my-1">
                                    9158799972
                                </Link>
                            </div>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className="d-flex px-md-1 px-lg-5 mb-md-0 mb-3">
                            <span className="bg-soft-success avatar avatar-sm rounded icon icon-with-bg icon-xs text-success me-3 flex-shrink-0">
                                <FeatherIcon icon="map-pin" className="icon-dual-success" />
                            </span>
                            <div className="flex-grow-1">
                                <h5 className="m-0 fw-medium">Address</h5>
                                <Link to="#" className="text-muted fw-normal h5 my-1">
                                    Paud Road, Kothrud
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* ✅ Inline hover effect for map */}
            <style>
                {`
                    .map-container:hover {
                        transform: translateY(-6px);
                        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
                    }

                    .map-container:hover .map-image {
                        transform: scale(1.5);
                    }
                `}
            </style>
        </section>
    );
}

export default ContactUs;
