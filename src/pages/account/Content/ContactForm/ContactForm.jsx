import { useEffect, useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from 'reduxFolder/contactFormSlice'; // you'll add these later

const ContactFormCMS = () => {
    const dispatch = useDispatch();
    const { contacts, loading } = useSelector((state) => state.contactFormState || { contacts: [], loading: false });

    const [showViewModal, setShowViewModal] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const handleView = (contact) => {
        setSelectedContact(contact);
        setShowViewModal(true);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this message?')) {
            dispatch(deleteContact(id));
        }
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
                        <th>Timestamp</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.length > 0 ? (
                        contacts.map((c) => (
                            <tr key={c._id}>
                                <td>{`${c.firstName || ''} ${c.lastName || ''}`.trim()}</td>
                                <td>{c.email}</td>
                                <td>{c.message?.slice(0, 50)}...</td>
                                <td>{new Date(c.createdAt).toLocaleString()}</td>
                                <td>
                                    <div className="d-flex gap-2">
                                        <Button
                                            size="sm"
                                            variant="light"
                                            className="border"
                                            title="View"
                                            onClick={() => handleView(c)}>
                                            <FeatherIcon icon="eye" size={16} className="text-info" />
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="light"
                                            className="border"
                                            title="Delete"
                                            onClick={() => handleDelete(c._id)}>
                                            <FeatherIcon icon="trash-2" size={16} className="text-danger" />
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center text-muted py-3">
                                {loading ? 'Loading...' : 'No contact submissions found.'}
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>

            {/* View Modal */}
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
                                <strong>Timestamp:</strong> {new Date(selectedContact.createdAt).toLocaleString()}
                            </p>
                        </>
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ContactFormCMS;
