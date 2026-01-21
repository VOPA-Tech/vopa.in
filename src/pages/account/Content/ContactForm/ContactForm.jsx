import { useEffect, useState } from 'react';
import { Button, Modal, Table, Badge, Form } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, updateContact } from 'reduxFolder/contactFormSlice';
import { useLogin } from 'hooks/auth';

const ContactFormCMS = () => {
    const dispatch = useDispatch();
    const [user] = useLogin();

    const { contacts, loading } = useSelector((state) => state.contactFormState || { contacts: [], loading: false });

    const [showViewModal, setShowViewModal] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);

    const [responderNote, setResponderNote] = useState('');

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const handleView = (contact) => {
        setSelectedContact(contact);

        // Correct key from schema:
        setResponderNote(contact.respondersData?.responderNote || '');

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
            },
        };

        dispatch(updateContact({ id: selectedContact._id, data: payload }));
        setShowViewModal(false);
        dispatch(fetchContacts());
    };

    return (
        <div>
            <h4>Contact Form Submissions</h4>

            <Table bordered responsive hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th style={{ minWidth: '300px' }}>Message</th>
                        <th>Status</th>
                        <th>Responder</th>
                        <th>Timestamp</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {contacts.length > 0 ? (
                        contacts.map((c) => (
                            <tr key={c._id}>
                                <td>{`${c.firstName} ${c.lastName}`}</td>
                                <td>{c.email}</td>
                                <td>{c.message?.slice(0, 50)}...</td>

                                <td>
                                    {c.isResponded ? (
                                        <Badge bg="success">Responded</Badge>
                                    ) : (
                                        <Badge bg="danger">Not Responded</Badge>
                                    )}
                                </td>

                                {/* ✔ SHOW responderEmail */}
                                <td>{c.respondersData?.responderEmail || '—'}</td>

                                <td>{new Date(c.createdAt).toLocaleString()}</td>

                                <td>
                                    <Button
                                        size="sm"
                                        variant="light"
                                        className="border"
                                        title="View"
                                        onClick={() => handleView(c)}>
                                        <FeatherIcon icon="eye" size={16} className="text-info" />
                                    </Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="text-center py-3">
                                {loading ? 'Loading...' : 'No contact submissions found.'}
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>

            {/* Modal */}
            <Modal show={showViewModal} onHide={() => setShowViewModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Message Details</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {selectedContact && (
                        <>
                            <p>
                                <strong>Name:</strong> {selectedContact.firstName} {selectedContact.lastName}
                            </p>
                            <p>
                                <strong>Email:</strong> {selectedContact.email}
                            </p>
                            <p>
                                <strong>Message:</strong> {selectedContact.message}
                            </p>

                            <p>
                                <strong>Status:</strong>{' '}
                                {selectedContact.isResponded ? (
                                    <Badge bg="success">Responded</Badge>
                                ) : (
                                    <Badge bg="danger">Not Responded</Badge>
                                )}
                            </p>

                            <p>
                                <strong>Timestamp:</strong> {new Date(selectedContact.createdAt).toLocaleString()}
                            </p>

                            {/* ✔ If not responded */}
                            {!selectedContact.isResponded && (
                                <>
                                    <hr />
                                    <h5>Responder Action</h5>

                                    <p>
                                        <strong>Responder Email:</strong> {user?.email}
                                    </p>

                                    <Form.Group>
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

                            {/* ✔ If responded */}
                            {selectedContact.isResponded && selectedContact.respondersData && (
                                <>
                                    <hr />
                                    <h5>Response Details</h5>

                                    <p>
                                        <strong>Responder Email:</strong>{' '}
                                        {selectedContact.respondersData.responderEmail}
                                    </p>

                                    <p>
                                        <strong>Note:</strong> {selectedContact.respondersData.responderNote}
                                    </p>

                                    <p>
                                        <strong>Responded At:</strong>{' '}
                                        {new Date(selectedContact.respondersData.respondedAt).toLocaleString()}
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

export default ContactFormCMS;
