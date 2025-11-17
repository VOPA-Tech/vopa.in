import { useState, useEffect } from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setIsFeedbackModalOpen, setFeedbackSubmitted, submitFeedbackAsync } from 'reduxFolder/websiteFeedbackSlice';
import { FaStar } from 'react-icons/fa';
import ReCAPTCHA from 'react-google-recaptcha';

const feedbackParameters = ['Content Quality', 'Overall Satisfaction'];

function FeedbackModal() {
    const dispatch = useDispatch();
    const { isFeedbackModalOpen, feedbackSubmitted } = useSelector((state) => state.websiteFeedbackState);

    const toggleFeedbackModal = (open) => dispatch(setIsFeedbackModalOpen(open));

    const [email, setEmail] = useState('');
    const [ratings, setRatings] = useState(Array(feedbackParameters.length).fill(0));
    const [hoverRatings, setHoverRatings] = useState(Array(feedbackParameters.length).fill(0));
    const [comments, setComments] = useState('');
    const [captchaToken, setCaptchaToken] = useState('');
    const [showCaptcha, setShowCaptcha] = useState(false); // 👈 delayed rendering fix

    const handleRating = (index, value) => {
        const updated = [...ratings];
        updated[index] = value;
        setRatings(updated);
    };

    const handleHover = (index, value) => {
        const updated = [...hoverRatings];
        updated[index] = value;
        setHoverRatings(updated);
    };

    const handleCaptchaChange = (token) => {
        setCaptchaToken(token);
    };

    const handleSubmit = () => {
        const allRated = ratings.every((r) => r > 0);
        if (!allRated) {
            alert('Please rate all fields before submitting!');
            return;
        }

        if (!captchaToken) {
            alert('Please verify the captcha before submitting.');
            return;
        }

        const feedbackData = {
            email,
            ratings: feedbackParameters.reduce((acc, param, idx) => {
                acc[param] = ratings[idx];
                return acc;
            }, {}),
            comments,
            captchaToken,
            timestamp: new Date().toISOString(),
        };

        dispatch(submitFeedbackAsync(feedbackData));
        dispatch(setFeedbackSubmitted(true));
        toggleFeedbackModal(false);

        alert('Thank you! Your feedback has been submitted.');

        setEmail('');
        setRatings(Array(feedbackParameters.length).fill(0));
        setHoverRatings(Array(feedbackParameters.length).fill(0));
        setComments('');
        setCaptchaToken('');
        setShowCaptcha(false);
    };

    const handleAskLater = () => {
        toggleFeedbackModal(false);
    };

    const handleNeverShowAgain = () => {
        dispatch(setFeedbackSubmitted(true)); // 👈 mark as submitted
        toggleFeedbackModal(false);
        localStorage.setItem('feedbackSubmitted', 'true'); // ensure persistence
    };

    // Auto show after 2 minutes if not submitted
    useEffect(() => {
        if (!feedbackSubmitted) {
            const timer = setTimeout(() => toggleFeedbackModal(true), 5 * 60 * 1000);
            return () => clearTimeout(timer);
        }
    }, [feedbackSubmitted]);

    // 👇 Delay showing reCAPTCHA after modal open (avoids missing key)
    useEffect(() => {
        if (isFeedbackModalOpen) {
            const timer = setTimeout(() => setShowCaptcha(true), 400);
            return () => clearTimeout(timer);
        } else {
            setShowCaptcha(false);
        }
    }, [isFeedbackModalOpen]);

    const mid = Math.ceil(feedbackParameters.length / 2);
    const firstColumn = feedbackParameters.slice(0, mid);
    const secondColumn = feedbackParameters.slice(mid);

    return (
        <Modal show={isFeedbackModalOpen} onHide={() => toggleFeedbackModal(false)} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>We’d love to hear your feedback on our website!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Your ratings help us improve speed, content, trust, and overall user experience.</p>

                <Form.Group className="my-3">
                    <Form.Label>Email (optional)</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Row>
                    <Col>
                        {firstColumn.map((param, idx) => (
                            <div key={idx} className="mb-3">
                                <strong>{param}</strong>
                                <div>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <FaStar
                                            key={star}
                                            size={24}
                                            style={{ cursor: 'pointer', marginRight: 6 }}
                                            color={(hoverRatings[idx] || ratings[idx]) >= star ? '#ffc107' : '#e4e5e9'}
                                            onClick={() => handleRating(idx, star)}
                                            onMouseEnter={() => handleHover(idx, star)}
                                            onMouseLeave={() => handleHover(idx, 0)}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </Col>
                    <Col>
                        {secondColumn.map((param, idx) => {
                            const index = idx + mid;
                            return (
                                <div key={index} className="mb-3">
                                    <strong>{param}</strong>
                                    <div>
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <FaStar
                                                key={star}
                                                size={24}
                                                style={{ cursor: 'pointer', marginRight: 6 }}
                                                color={
                                                    (hoverRatings[index] || ratings[index]) >= star
                                                        ? '#ffc107'
                                                        : '#e4e5e9'
                                                }
                                                onClick={() => handleRating(index, star)}
                                                onMouseEnter={() => handleHover(index, star)}
                                                onMouseLeave={() => handleHover(index, 0)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </Col>
                </Row>

                <Form.Group className="mt-3">
                    <Form.Label>Additional Comments (optional)</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Share your thoughts..."
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                    />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer className="flex-column">
                {showCaptcha &&
                    (process.env.REACT_APP_RECAPTCHA_SITE_KEY ? (
                        <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} onChange={handleCaptchaChange} />
                    ) : (
                        <p className="text-danger fw-semibold">
                            ⚠️ reCAPTCHA site key not found. Please check your .env setup.
                        </p>
                    ))}

                <div className="d-flex justify-content-end w-100 mt-3">
                    <Button variant="outline-danger" onClick={handleNeverShowAgain}>
                        Don’t Show Again
                    </Button>

                    <Button variant="secondary" onClick={handleAskLater} className="ms-2">
                        Ask Me Later
                    </Button>

                    <Button
                        variant="success"
                        onClick={handleSubmit}
                        disabled={!ratings.every((r) => r > 0) || !captchaToken}
                        className="ms-2">
                        Submit Feedback
                    </Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
}

export default FeedbackModal;
