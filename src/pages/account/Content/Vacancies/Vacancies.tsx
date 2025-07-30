import { useEffect, useState } from 'react';
import { Button, Col, Modal, Row, Table, Form, Badge } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchVacancies, addVacancy, updateVacancy, deleteVacancy } from 'reduxFolder/vacancySlice';

const Vacancies = () => {
    const dispatch: any = useDispatch();
    const { vacancies, loading } = useSelector((state: any) => state.vacancyState);

    const [showFormModal, setShowFormModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingVacancy, setEditingVacancy] = useState(null);
    const [showViewModal, setShowViewModal] = useState(false);
    const [viewVacancy, setViewVacancy] = useState(null);

    const [form, setForm] = useState({
        title: '',
        description: '',
        skills: '',
        jdLink: '',
        applyLink: '',
        vacancyCount: 1,
        isActive: true,
        location: '',
        type: 'Full-time',
    });

    useEffect(() => {
        dispatch(fetchVacancies());
    }, [dispatch]);

    const handleAddClick = () => {
        setIsEditing(false);
        setForm({
            title: '',
            description: '',
            skills: '',
            jdLink: '',
            applyLink: '',
            vacancyCount: 1,
            isActive: true,
            location: '',
            type: 'Full-time',
        });
        setShowFormModal(true);
    };

    const handleEditClick = (vacancy) => {
        setIsEditing(true);
        setEditingVacancy(vacancy);
        setForm({
            title: vacancy.title,
            description: vacancy.description,
            skills: vacancy.skills.join(', '),
            jdLink: vacancy.jdLink,
            applyLink: vacancy.applyLink,
            vacancyCount: vacancy.vacancyCount,
            isActive: vacancy.isActive,
            location: vacancy.location,
            type: vacancy.type,
        });
        setShowFormModal(true);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this vacancy?')) {
            dispatch(deleteVacancy(id));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            ...form,
            skills: form.skills.split(',').map((s) => s.trim()),
        };

        if (isEditing && editingVacancy) {
            dispatch(updateVacancy({ id: editingVacancy._id, data: payload }));
        } else {
            dispatch(addVacancy(payload));
        }

        setShowFormModal(false);
    };

    const handleView = (vacancy) => {
        setViewVacancy(vacancy);
        setShowViewModal(true);
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>Vacancies</h4>
                <Button onClick={handleAddClick}>Add Job</Button>
            </div>

            <Table bordered responsive hover>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Skills</th>
                        <th>Type</th>
                        <th>Location</th>
                        <th>Status</th>
                        <th>Vacancies</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {vacancies.map((vacancy) => (
                        <tr key={vacancy._id}>
                            <td className="fixed-height-cell">{vacancy.title}</td>
                            <td className="fixed-height-cell">{vacancy.description}</td>
                            <td className="fixed-height-cell">
                                {vacancy.skills.map((skill, i) => (
                                    <Badge key={i} bg="secondary" className="me-1">
                                        {skill}
                                    </Badge>
                                ))}
                            </td>
                            <td className="fixed-height-cell">{vacancy.type}</td>
                            <td className="fixed-height-cell">{vacancy.location}</td>
                            <td className="fixed-height-cell">
                                <Badge bg={vacancy.isActive ? 'success' : 'danger'}>
                                    {vacancy.isActive ? 'Active' : 'Inactive'}
                                </Badge>
                            </td>
                            <td className="fixed-height-cell">{vacancy.vacancyCount}</td>
                            <td className="fixed-height-cell">
                                <div className="d-flex gap-2">
                                    <Button
                                        size="sm"
                                        variant="light"
                                        className="border"
                                        title="View"
                                        onClick={() => handleView(vacancy)}>
                                        <FeatherIcon icon="eye" size={16} className="text-info" />
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="light"
                                        className="border"
                                        title="Edit"
                                        onClick={() => handleEditClick(vacancy)}>
                                        <FeatherIcon icon="edit" size={16} className="text-warning" />
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="light"
                                        className="border"
                                        title="Delete"
                                        onClick={() => handleDelete(vacancy._id)}>
                                        <FeatherIcon icon="trash-2" size={16} className="text-danger" />
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Form Modal */}
            <Modal show={showFormModal} onHide={() => setShowFormModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{isEditing ? 'Edit Vacancy' : 'Add Vacancy'}</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group className="mb-2">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                required
                                value={form.title}
                                onChange={(e) => setForm({ ...form, title: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                required
                                as="textarea"
                                rows={2}
                                value={form.description}
                                onChange={(e) => setForm({ ...form, description: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Skills (comma separated)</Form.Label>
                            <Form.Control
                                value={form.skills}
                                onChange={(e) => setForm({ ...form, skills: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>JD Link</Form.Label>
                            <Form.Control
                                value={form.jdLink}
                                onChange={(e) => setForm({ ...form, jdLink: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Apply Link</Form.Label>
                            <Form.Control
                                value={form.applyLink}
                                onChange={(e) => setForm({ ...form, applyLink: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                value={form.location}
                                onChange={(e) => setForm({ ...form, location: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Type</Form.Label>
                            <Form.Select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Internship">Internship</option>
                                <option value="Contract">Contract</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Check
                                type="checkbox"
                                label="Active"
                                checked={form.isActive}
                                onChange={(e) => setForm({ ...form, isActive: e.target.checked })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Number of Vacancies</Form.Label>
                            <Form.Control
                                type="number"
                                value={form.vacancyCount}
                                onChange={(e) => setForm({ ...form, vacancyCount: +e.target.value })}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowFormModal(false)}>
                            Cancel
                        </Button>
                        <Button type="submit">{isEditing ? 'Update' : 'Add'}</Button>
                    </Modal.Footer>
                </Form>
            </Modal>

            {/* View Modal */}
            <Modal show={showViewModal} onHide={() => setShowViewModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Vacancy Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {viewVacancy && (
                        <>
                            <p>
                                <strong>Title:</strong> {viewVacancy.title}
                            </p>
                            <p>
                                <strong>Description:</strong> {viewVacancy.description}
                            </p>
                            <p>
                                <strong>Skills:</strong> {viewVacancy.skills.join(', ')}
                            </p>
                            <p>
                                <strong>Location:</strong> {viewVacancy.location}
                            </p>
                            <p>
                                <strong>Type:</strong> {viewVacancy.type}
                            </p>
                            <p>
                                <strong>Status:</strong> {viewVacancy.isActive ? 'Active' : 'Inactive'}
                            </p>
                            <p>
                                <strong>JD Link:</strong>{' '}
                                <a href={viewVacancy.jdLink} target="_blank" rel="noreferrer">
                                    {viewVacancy.jdLink}
                                </a>
                            </p>
                            <p>
                                <strong>Apply Link:</strong>{' '}
                                <a href={viewVacancy.applyLink} target="_blank" rel="noreferrer">
                                    {viewVacancy.applyLink}
                                </a>
                            </p>
                            <p>
                                <strong>Vacancies:</strong> {viewVacancy.vacancyCount}
                            </p>
                        </>
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Vacancies;
