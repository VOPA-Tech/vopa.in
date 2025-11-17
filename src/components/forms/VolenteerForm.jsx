import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Row, Col, Container, Card, Collapse } from 'react-bootstrap';
import { submitVolunteerAsync } from 'reduxFolder/volunteerFormSlice';
import FeatherIcon from 'feather-icons-react';
import ReCAPTCHA from 'react-google-recaptcha';

function VolunteerForm() {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.volunteerFormState || {});

    const [isOpen, setIsOpen] = useState(false);
    const [showCaptcha, setShowCaptcha] = useState(false); // ✅ Delayed render
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [message, setMessage] = useState('');
    const [captchaToken, setCaptchaToken] = useState('');

    const toggleForm = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (isOpen) {
            // Delay to allow reCAPTCHA script to initialize
            const timer = setTimeout(() => setShowCaptcha(true), 400);
            return () => clearTimeout(timer);
        } else {
            setShowCaptcha(false);
        }
    }, [isOpen]);

    const handleCaptchaChange = (token) => {
        setCaptchaToken(token);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !phone || !city || !message) {
            alert('Please fill out all required fields.');
            return;
        }

        if (!captchaToken) {
            alert('Please verify the captcha before submitting.');
            return;
        }

        const volunteerData = {
            firstName,
            lastName,
            email,
            phone,
            city,
            message,
            captchaToken,
            timestamp: new Date().toISOString(),
        };

        dispatch(submitVolunteerAsync(volunteerData))
            .unwrap()
            .then(() => {
                alert('🎉 Thank you for signing up to volunteer! We will contact you soon.');
                setFirstName('');
                setLastName('');
                setEmail('');
                setPhone('');
                setCity('');
                setMessage('');
                setCaptchaToken('');
                setIsOpen(false);
            })
            .catch(() => {
                alert('Failed to submit. Please try again later.');
            });
    };

    return (
        <section className="section pb-lg-7 py-4 position-relative bg-paper-texture">
            <Container className="text-center">
                {/* Toggle Button */}
                <Button
                    variant="success"
                    size="lg"
                    className="fw-bold mb-4 px-5 py-3 rounded-pill volunteer-toggle-btn"
                    onClick={toggleForm}
                    aria-expanded={isOpen}
                    aria-controls="volunteer-form-collapse">
                    {isOpen ? (
                        <>
                            Hide Form <FeatherIcon icon="chevron-up" className="ms-2" />
                        </>
                    ) : (
                        <>
                            Become a Volunteer <FeatherIcon icon="chevron-down" className="ms-2" />
                        </>
                    )}
                </Button>

                {/* Collapsible Form */}
                <Collapse in={isOpen}>
                    <div id="volunteer-form-collapse">
                        <Row className="align-items-center justify-content-center mt-4">
                            <Col lg={10}>
                                <Card className="volunteer-card shadow-lg border-0">
                                    <Card.Body className="p-xl-5 p-4">
                                        <h2 className="mb-2 mt-0 fw-medium">Become a Volunteer</h2>
                                        <p className="mb-5">
                                            Join our mission to make a difference. Please fill in your details and we’ll
                                            reach out to you soon.
                                        </p>

                                        <form onSubmit={handleSubmit}>
                                            <Row>
                                                <Col md={4}>
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
                                                <Col md={4}>
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
                                                <Col lg={4}>
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
                                                <Col lg={4}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Phone Number</Form.Label>
                                                        <Form.Control
                                                            type="tel"
                                                            placeholder="Enter your phone number"
                                                            value={phone}
                                                            onChange={(e) => setPhone(e.target.value)}
                                                            required
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col lg={4}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>City / Location</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter your city"
                                                            value={city}
                                                            onChange={(e) => setCity(e.target.value)}
                                                            required
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col lg={12}>
                                                    <Form.Group className="mb-4">
                                                        <Form.Label>Why do you want to volunteer?</Form.Label>
                                                        <Form.Control
                                                            as="textarea"
                                                            rows={5}
                                                            placeholder="Tell us about your motivation..."
                                                            value={message}
                                                            onChange={(e) => setMessage(e.target.value)}
                                                            required
                                                        />
                                                    </Form.Group>
                                                </Col>

                                                {/* ✅ Delayed Safe reCAPTCHA Render */}
                                                {showCaptcha && (
                                                    <Col lg={12} className="mb-4 text-center">
                                                        {process.env.REACT_APP_RECAPTCHA_SITE_KEY ? (
                                                            <ReCAPTCHA
                                                                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                                                                onChange={handleCaptchaChange}
                                                            />
                                                        ) : (
                                                            <p className="text-danger fw-semibold">
                                                                ⚠️ reCAPTCHA site key not found. Please check your .env
                                                                setup.
                                                            </p>
                                                        )}
                                                    </Col>
                                                )}

                                                <Col lg="auto" className="mb-0">
                                                    <Button variant="success" type="submit" disabled={loading}>
                                                        {loading ? 'Submitting...' : 'Submit'}
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
                        </Row>
                    </div>
                </Collapse>
            </Container>

            {/* Styles */}
            <style>
                {`
                    .volunteer-toggle-btn {
                        background-color: #28c76f !important;
                        color: #fff !important;
                        border: none !important;
                        transition: all 0.3s ease;
                        position: relative;
                        z-index: 10;
                        box-shadow: 0 6px 18px rgba(40, 199, 111, 0.35);
                    }

                    .volunteer-toggle-btn:hover {
                        background-color: #22b866 !important;
                        transform: translateY(-2px);
                        box-shadow: 0 8px 22px rgba(40, 199, 111, 0.45);
                    }

                    .volunteer-card {
                        background: rgba(255, 255, 255, 0.9);
                        backdrop-filter: blur(6px);
                        border-radius: 16px;
                        transition: all 0.3s ease;
                    }

                    .volunteer-card:hover {
                        transform: translateY(-4px);
                        box-shadow: 0 10px 28px rgba(0, 0, 0, 0.15);
                    }
                `}
            </style>
        </section>
    );
}

export default VolunteerForm;
