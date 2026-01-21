import { useEffect, useState } from 'react';
import { Button, Modal, Table, Badge, Form } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVolunteers, updateVolunteer } from 'reduxFolder/volunteerFormSlice';
import { useLogin } from 'hooks/auth';

const VolunteerFormCMS = () => {
    const dispatch = useDispatch();
    const [user] = useLogin();

    const { volunteers, loading } = useSelector(
        (state) => state.volunteerFormState || { volunteers: [], loading: false }
    );

    const [showViewModal, setShowViewModal] = useState(false);
    const [selectedVolunteer, setSelectedVolunteer] = useState(null);
    const [responderNote, setResponderNote] = useState('');

    useEffect(() => {
        dispatch(fetchVolunteers());
    }, [dispatch]);

    const handleView = (volunteer) => {
        setSelectedVolunteer(volunteer);
        setResponderNote(volunteer.respondersData?.responderNote || '');
        setShowViewModal(true);
    };

    const handleActionSubmit = () => {
        const email = user?.email || '';

        const payload = {
            isResponded: true,
            respondersData: {
                responderName: email,
                responderEmail: email,
                responderNote: responderNote,
                respondedAt: new Date().toISOString(),
            },
        };

        dispatch(updateVolunteer({ id: selectedVolunteer._id, data: payload }));
        setShowViewModal(false);
        dispatch(fetchVolunteers());
    };

    return (
        <div>
            <h4>Volunteer Form Submissions</h4>

            <Table bordered responsive hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>City</th>
                        <th>Message</th>

                        {/* NEW */}
                        <th>Status</th>
                        <th>Responder</th>

                        <th>Timestamp</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {volunteers.length > 0 ? (
                        volunteers.map((v) => (
                            <tr key={v._id}>
                                <td>{`${v.firstName || ''} ${v.lastName || ''}`.trim()}</td>
                                <td>{v.email}</td>
                                <td>{v.phone}</td>
                                <td>{v.city}</td>
                                <td>{v.message?.slice(0, 50)}...</td>

                                {/* STATUS */}
                                <td>
                                    {v.isResponded ? (
                                        <Badge bg="success">Responded</Badge>
                                    ) : (
                                        <Badge bg="danger">Not Responded</Badge>
                                    )}
                                </td>

                                {/* RESPONDER */}
                                <td>{v.isResponded ? v.respondersData?.responderEmail : '—'}</td>

                                <td>{new Date(v.createdAt).toLocaleString()}</td>

                                <td>
                                    <Button
                                        size="sm"
                                        variant="light"
                                        className="border"
                                        title="View"
                                        onClick={() => handleView(v)}>
                                        <FeatherIcon icon="eye" size={16} className="text-info" />
                                    </Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="9" className="text-center text-muted py-3">
                                {loading ? 'Loading...' : 'No volunteer submissions found.'}
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>

            {/* MODAL */}
            <Modal show={showViewModal} onHide={() => setShowViewModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Volunteer Details</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {selectedVolunteer && (
                        <>
                            <p>
                                <strong>Name:</strong> {selectedVolunteer.firstName} {selectedVolunteer.lastName}
                            </p>
                            <p>
                                <strong>Email:</strong> {selectedVolunteer.email}
                            </p>
                            <p>
                                <strong>Phone:</strong> {selectedVolunteer.phone}
                            </p>
                            <p>
                                <strong>City:</strong> {selectedVolunteer.city}
                            </p>
                            <p>
                                <strong>Message:</strong> {selectedVolunteer.message}
                            </p>
                            <p>
                                <strong>Status:</strong>{' '}
                                {selectedVolunteer.isResponded ? (
                                    <Badge bg="success">Responded</Badge>
                                ) : (
                                    <Badge bg="danger">Not Responded</Badge>
                                )}
                            </p>

                            <p>
                                <strong>Timestamp:</strong> {new Date(selectedVolunteer.createdAt).toLocaleString()}
                            </p>

                            {/* NOT RESPONDED */}
                            {!selectedVolunteer.isResponded && (
                                <>
                                    <hr />
                                    <h5>Responder Action</h5>

                                    <p>
                                        <strong>Responder Email:</strong> {user?.email || 'unknown'}
                                    </p>

                                    <Form.Group className="mb-2">
                                        <Form.Label>Response Note</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            value={responderNote}
                                            onChange={(e) => setResponderNote(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Button variant="success" className="mt-3" onClick={handleActionSubmit}>
                                        Mark as Responded
                                    </Button>
                                </>
                            )}

                            {/* ALREADY RESPONDED */}
                            {selectedVolunteer.isResponded && selectedVolunteer.respondersData && (
                                <>
                                    <hr />
                                    <h5>Response Details</h5>
                                    <p>
                                        <strong>Responder Email:</strong>{' '}
                                        {selectedVolunteer.respondersData.responderEmail}
                                    </p>
                                    <p>
                                        <strong>Note:</strong> {selectedVolunteer.respondersData.responderNote}
                                    </p>
                                    <p>
                                        <strong>Responded At:</strong>{' '}
                                        {new Date(selectedVolunteer.respondersData.respondedAt).toLocaleString()}
                                    </p>
                                </>
                            )}
                        </>
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default VolunteerFormCMS;
