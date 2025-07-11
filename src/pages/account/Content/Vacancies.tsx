import { useState } from 'react';
import { Button, Col, Modal, Row, Table, Form, Badge, CloseButton } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
type Vacancy = {
    id: number;
    title: string;
    description: string;
    skills: string[];
    jdLink: string;
    applyLink: string;
    vacancyCount: number;
    status: 'Active' | 'Inactive';
};

const Vacancies = () => {
    const [vacancies, setVacancies] = useState<Vacancy[]>([
        {
            id: 1,
            title: 'Math Teacher',
            description: 'Looking for an experienced math teacher for grade 6.',
            skills: ['Algebra', 'Geometry', 'Classroom Management'],
            jdLink: 'https://example.com/jd/math-teacher',
            applyLink: 'https://example.com/apply/math-teacher',
            vacancyCount: 2,
            status: 'Active',
        },
        {
            id: 2,
            title: 'Science Coordinator',
            description: 'Lead science initiatives across grades 5–8.',
            skills: ['Science Curriculum', 'Leadership', 'Training'],
            jdLink: 'https://example.com/jd/science-coordinator',
            applyLink: 'https://example.com/apply/science-coordinator',
            vacancyCount: 1,
            status: 'Inactive',
        },
    ]);

    const [showFormModal, setShowFormModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingVacancy, setEditingVacancy] = useState<Vacancy | null>(null);
    const [showViewModal, setShowViewModal] = useState(false);
    const [viewVacancy, setViewVacancy] = useState<Vacancy | null>(null);

    // Form fields
    const [form, setForm] = useState({
        title: '',
        description: '',
        skills: '',
        jdLink: '',
        applyLink: '',
        vacancyCount: 1,
        status: 'Active',
    });

    const handleAddClick = () => {
        setIsEditing(false);
        setForm({
            title: '',
            description: '',
            skills: '',
            jdLink: '',
            applyLink: '',
            vacancyCount: 1,
            status: 'Active',
        });
        setShowFormModal(true);
    };

    const handleEditClick = (vacancy: Vacancy) => {
        setIsEditing(true);
        setEditingVacancy(vacancy);
        setForm({
            title: vacancy.title,
            description: vacancy.description,
            skills: vacancy.skills.join(', '),
            jdLink: vacancy.jdLink,
            applyLink: vacancy.applyLink,
            vacancyCount: vacancy.vacancyCount,
            status: vacancy.status,
        });
        setShowFormModal(true);
    };

    const handleDelete = (id: number) => {
        const confirmed = window.confirm('Are you sure you want to delete this vacancy?');
        if (confirmed) {
            setVacancies((prev) => prev.filter((v) => v.id !== id));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const skillsArray = form.skills.split(',').map((s) => s.trim());

        if (isEditing && editingVacancy) {
            setVacancies((prev) =>
                prev.map((v) =>
                    v.id === editingVacancy.id
                        ? {
                              ...editingVacancy,
                              ...form,
                              skills: skillsArray,
                              status: form.status as 'Active' | 'Inactive',
                          }
                        : v
                )
            );
        } else {
            const newVacancy: Vacancy = {
                id: Date.now(),
                ...form,
                skills: skillsArray,
                status: form.status as 'Active' | 'Inactive',
            };
            setVacancies((prev) => [...prev, newVacancy]);
        }

        setShowFormModal(false);
    };

    const handleView = (vacancy: Vacancy) => {
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
                        <th>Status</th>
                        <th>Vacancies</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {vacancies.map((vacancy) => (
                        <tr key={vacancy.id}>
                            <td>{vacancy.title}</td>
                            <td>{vacancy.description}</td>
                            <td>
                                {vacancy.skills.map((skill, i) => (
                                    <Badge key={i} bg="secondary" className="me-1">
                                        {skill}
                                    </Badge>
                                ))}
                            </td>
                            <td>
                                <Badge bg={vacancy.status === 'Active' ? 'success' : 'danger'}>{vacancy.status}</Badge>
                            </td>
                            <td>{vacancy.vacancyCount}</td>
                            <td>
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
                                        onClick={() => handleDelete(vacancy.id)}>
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
                            <Form.Label>Number of Vacancies</Form.Label>
                            <Form.Control
                                type="number"
                                value={form.vacancyCount}
                                onChange={(e) => setForm({ ...form, vacancyCount: +e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Status</Form.Label>
                            <Form.Select
                                value={form.status}
                                onChange={(e) => setForm({ ...form, status: e.target.value as 'Active' | 'Inactive' })}>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </Form.Select>
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
                            <p>
                                <strong>Status:</strong> {viewVacancy.status}
                            </p>
                        </>
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Vacancies;
