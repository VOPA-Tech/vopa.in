import { useEffect } from 'react';
import { Card, Col, ProgressBar, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeedbacks } from 'reduxFolder/websiteFeedbackSlice';

const WebsiteRating = () => {
    const dispatch = useDispatch();
    const { feedbacks, loading } = useSelector((state) => state.websiteFeedbackState);

    const feedbackFields = ['Content Quality', 'Overall Satisfaction'];

    useEffect(() => {
        dispatch(fetchFeedbacks());
    }, [dispatch]);

    // Calculate average for each field
    const averageRatings = {};
    if (feedbacks.length > 0) {
        feedbackFields.forEach((field) => {
            const total = feedbacks.reduce((sum, f) => sum + (f.ratings[field] || 0), 0);
            averageRatings[field] = (total / feedbacks.length).toFixed(1);
        });
    } else {
        feedbackFields.forEach((field) => {
            averageRatings[field] = 0;
        });
    }

    return (
        <Col lg={5}>
            <Card>
                <Card.Body>
                    <h4 className="mb-3 fs-16">Website Ratings</h4>
                    {feedbackFields.map((field) => (
                        <Row key={field} className="align-items-center mb-2">
                            <Col md={12}>
                                <p className="float-end mb-0">{averageRatings[field]}</p>
                                <h6 className="fw-medium my-0">{field}</h6>
                                <ProgressBar
                                    now={(averageRatings[field] / 5) * 100}
                                    variant="orange"
                                    className="mt-2"
                                    style={{ height: '6px' }}
                                />
                            </Col>
                        </Row>
                    ))}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default WebsiteRating;
