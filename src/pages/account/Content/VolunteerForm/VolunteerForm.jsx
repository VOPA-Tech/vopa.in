import { useEffect, useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVolunteers, deleteVolunteer } from 'reduxFolder/volunteerFormSlice';

const VolunteerFormCMS = () => {
    const dispatch = useDispatch();
    const { volunteers, loading } = useSelector(
        (state) => state.volunteerFormState || { volunteers: [], loading: false }
    );

    const [showViewModal, setShowViewModal] = useState(false);
    const [selectedVolunteer, setSelectedVolunteer] = useState(null);

    useEffect(() => {
        dispatch(fetchVolunteers());
    }, [dispatch]);

    const handleView = (volunteer) => {
        setSelectedVolunteer(volunteer);
        setShowViewModal(true);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this volunteer entry?')) {
            dispatch(deleteVolunteer(id));
        }
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
                        <th style={{ minWidth: '300px' }}>Message</th>
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
                                <td>{new Date(v.createdAt).toLocaleString()}</td>
                                <td>
                                    <div className="d-flex gap-2">
                                        <Button
                                            size="sm"
                                            variant="light"
                                            className="border"
                                            title="View"
                                            onClick={() => handleView(v)}>
                                            <FeatherIcon icon="eye" size={16} className="text-info" />
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="light"
                                            className="border"
                                            title="Delete"
                                            onClick={() => handleDelete(v._id)}>
                                            <FeatherIcon icon="trash-2" size={16} className="text-danger" />
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="text-center text-muted py-3">
                                {loading ? 'Loading...' : 'No volunteer submissions found.'}
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>

            {/* View Modal */}
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
                                <strong>Timestamp:</strong> {new Date(selectedVolunteer.createdAt).toLocaleString()}
                            </p>
                        </>
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default VolunteerFormCMS;
