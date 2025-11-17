import { useEffect, useState } from 'react';
import { Button, Modal, Table, Badge } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchFeedbacks, getFeedbackById, deleteFeedback } from 'reduxFolder/websiteFeedbackSlice';

const WebsiteFeedbackCMS = () => {
    const dispatch = useDispatch();
    const { feedbacks, loading } = useSelector((state) => state.websiteFeedbackState);

    const [showViewModal, setShowViewModal] = useState(false);
    const [viewFeedback, setViewFeedback] = useState(null);

    useEffect(() => {
        dispatch(fetchFeedbacks());
    }, [dispatch]);

    const handleView = (feedback) => {
        setViewFeedback(feedback);
        setShowViewModal(true);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this feedback?')) {
            dispatch(deleteFeedback(id));
        }
    };

    return (
        <div>
            <h4>Website Feedbacks</h4>

            <Table bordered responsive hover>
                <thead>
                    <tr>
                        <th>Name / Email</th>
                        <th style={{ minWidth: '300px' }}>Comments</th>
                        <th>Timestamp</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {feedbacks.map((fb) => (
                        <tr key={fb._id}>
                            <td>{fb.name || fb.email}</td>
                            <td>{fb.comments.slice(0, 50)}...</td>
                            <td>{new Date(fb.updatedAt).toLocaleString()}</td>
                            <td>
                                <div className="d-flex gap-2">
                                    <Button
                                        size="sm"
                                        variant="light"
                                        className="border"
                                        title="View"
                                        onClick={() => handleView(fb)}>
                                        <FeatherIcon icon="eye" size={16} className="text-info" />
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="light"
                                        className="border"
                                        title="Delete"
                                        onClick={() => handleDelete(fb._id)}>
                                        <FeatherIcon icon="trash-2" size={16} className="text-danger" />
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* View Modal */}
            <Modal show={showViewModal} onHide={() => setShowViewModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Feedback Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {viewFeedback && (
                        <>
                            <p>
                                <strong>Name / Email:</strong> {viewFeedback.name || viewFeedback.email}
                            </p>
                            <p>
                                <strong>Comments:</strong> {viewFeedback.comments}
                            </p>
                            <p>
                                <strong>Ratings:</strong>
                            </p>
                            <ul>
                                {Object.entries(viewFeedback.ratings).map(([key, value]) => (
                                    <li key={key}>
                                        {key}: {value} / 5
                                    </li>
                                ))}
                            </ul>
                            <p>
                                <strong>Timestamp:</strong> {new Date(viewFeedback.updatedAt).toLocaleString()}
                            </p>
                        </>
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default WebsiteFeedbackCMS;
