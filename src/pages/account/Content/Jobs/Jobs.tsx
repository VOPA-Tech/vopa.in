import { useEffect, useState } from 'react';
import { Badge, Button, Col, Form, Modal, Row, Table, Spinner, Container } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchJobs, addJob, updateJob, deleteJob } from 'reduxFolder/jobsSlice';

import EditorWithMediaLibrary from '../EditorWithMediaLibrary';
import ImagePickerModal from '../ImagePickerModal';

import 'react-quill/dist/quill.snow.css';

export type Job = {
    _id?: string;
    title: string;
    department?: string;
    thumbnailUrl?: string;
    content: string;
    isActive: boolean;
    location?: string;
    employmentType?: 'full-time' | 'part-time' | 'contract' | 'internship' | 'temporary' | 'freelance' | 'volunteer';
    noOfVacancies?: number;
    experience?: number;
    salary?: string;
    applicationDeadline?: string | Date | null;
};

const Jobs = () => {
    const dispatch: any = useDispatch();
    const { jobs, loading } = useSelector((state: any) => state.jobsState);

    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingJob, setEditingJob] = useState<Job | null>(null);
    const [viewingJob, setViewingJob] = useState<Job | null>(null);

    const [form, setForm] = useState<Job>({
        title: '',
        department: '',
        thumbnailUrl: '',
        content: '',
        isActive: true,
        location: '',
        employmentType: 'full-time',
        noOfVacancies: 1,
        experience: 0,
        salary: '',
        applicationDeadline: '',
    });

    const [showImagePicker, setShowImagePicker] = useState(false);

    useEffect(() => {
        dispatch(fetchJobs());
    }, [dispatch]);

    const resetForm = () => {
        setForm({
            title: '',
            department: '',
            thumbnailUrl: '',
            content: '',
            isActive: true,
            location: '',
            employmentType: 'full-time',
            noOfVacancies: 1,
            experience: 0,
            salary: '',
            applicationDeadline: '',
        });
    };

    const handleAdd = () => {
        setIsEditing(false);
        resetForm();
        setShowModal(true);
    };

    const handleEdit = (job: Job) => {
        setIsEditing(true);
        setEditingJob(job);
        setForm({
            ...job,
            applicationDeadline: job.applicationDeadline
                ? new Date(job.applicationDeadline as any).toISOString().slice(0, 10)
                : '',
            employmentType: (job.employmentType as Job['employmentType']) || 'full-time',
            noOfVacancies: job.noOfVacancies ?? 1,
            experience: job.experience ?? 0,
            isActive: !!job.isActive,
        });
        setShowModal(true);
    };

    const handleDelete = (_id?: string) => {
        if (!_id) return;
        if (window.confirm('Are you sure to delete this job?')) {
            dispatch(deleteJob(_id));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const payload = {
            ...form,
            noOfVacancies: Number(form.noOfVacancies) || 0,
            experience: Number(form.experience) || 0,
            applicationDeadline: form.applicationDeadline ? new Date(form.applicationDeadline as string) : null,
        };

        if (isEditing && editingJob?._id) {
            await dispatch(updateJob({ id: editingJob._id, data: payload }));
        } else {
            await dispatch(addJob(payload));
        }
        setShowModal(false);
        resetForm();
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>Jobs</h4>
                <Button onClick={handleAdd}>Add Job</Button>
            </div>

            {loading ? (
                <div className="text-center my-4">
                    <Spinner animation="border" />
                </div>
            ) : (
                <Table responsive bordered hover>
                    <thead>
                        <tr>
                            <th>Thumbnail</th>
                            <th>Title</th>
                            <th>Department</th>
                            <th>Employment</th>
                            <th>Location</th>
                            <th>Status</th>
                            <th>Vacancies</th>
                            <th>Experience</th>
                            <th>Deadline</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.slice().map((job: Job) => (
                            <tr key={job._id}>
                                <td>
                                    <img
                                        src={job.thumbnailUrl || 'https://via.placeholder.com/40'}
                                        alt="thumbnail"
                                        style={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: '4px',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </td>
                                <td>{job.title}</td>
                                <td>{job.department || '-'}</td>
                                <td>{job.employmentType?.replace('-', ' ') || '-'}</td>
                                <td>{job.location || '-'}</td>
                                <td>
                                    <Badge bg={job.isActive ? 'success' : 'secondary'}>
                                        {job.isActive ? 'Active' : 'Inactive'}
                                    </Badge>
                                </td>
                                <td>{job.noOfVacancies ?? '-'}</td>
                                <td>{job.experience != null ? `${job.experience} yrs` : '-'}</td>
                                <td>
                                    {job.applicationDeadline
                                        ? new Date(job.applicationDeadline as any).toLocaleDateString()
                                        : '-'}
                                </td>
                                <td>
                                    <div className="d-flex gap-2">
                                        <Button
                                            size="sm"
                                            variant="light"
                                            className="border"
                                            onClick={() => handleEdit(job)}>
                                            <FeatherIcon icon="edit" size={16} />
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="light"
                                            className="border"
                                            onClick={() => handleDelete(job._id)}>
                                            <FeatherIcon icon="trash" size={16} className="text-danger" />
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="light"
                                            className="border"
                                            onClick={() => setViewingJob(job)}>
                                            <FeatherIcon icon="eye" size={16} className="text-primary" />
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}

            {/* Add / Edit Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Container>
                    <Modal.Header closeButton>
                        <Modal.Title>{isEditing ? 'Edit Job' : 'Add Job'}</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={handleSubmit}>
                        <Modal.Body style={{ maxHeight: '75vh', overflowY: 'auto' }}>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group className="mb-2">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control
                                            required
                                            value={form.title}
                                            onChange={(e) => setForm({ ...form, title: e.target.value })}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-2">
                                        <Form.Label>Department</Form.Label>
                                        <Form.Control
                                            value={form.department}
                                            onChange={(e) => setForm({ ...form, department: e.target.value })}
                                        />
                                    </Form.Group>
                                </Col>

                                {/* Thumbnail */}
                                <Col md={6}>
                                    <Form.Group className="mb-2">
                                        <Form.Label>Thumbnail</Form.Label>
                                        <div className="d-flex align-items-center gap-3">
                                            {form.thumbnailUrl ? (
                                                <img
                                                    src={form.thumbnailUrl}
                                                    alt="thumbnail"
                                                    style={{
                                                        width: 60,
                                                        height: 60,
                                                        borderRadius: 4,
                                                        objectFit: 'cover',
                                                    }}
                                                />
                                            ) : (
                                                <div
                                                    style={{
                                                        width: 60,
                                                        height: 60,
                                                        backgroundColor: '#eee',
                                                        borderRadius: 4,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontSize: 12,
                                                        color: '#999',
                                                    }}>
                                                    No image
                                                </div>
                                            )}
                                            <Button size="sm" onClick={() => setShowImagePicker(true)}>
                                                Choose
                                            </Button>
                                        </div>
                                    </Form.Group>
                                </Col>

                                <Col md={6}>
                                    <Form.Group className="mb-2">
                                        <Form.Check
                                            label="Active"
                                            checked={form.isActive}
                                            onChange={(e) => setForm({ ...form, isActive: e.target.checked })}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group className="mb-2">
                                        <Form.Label>Location</Form.Label>
                                        <Form.Control
                                            value={form.location}
                                            onChange={(e) => setForm({ ...form, location: e.target.value })}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-2">
                                        <Form.Label>Employment Type</Form.Label>
                                        <Form.Select
                                            value={form.employmentType}
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    employmentType: e.target.value as Job['employmentType'],
                                                })
                                            }>
                                            <option value="full-time">Full-time</option>
                                            <option value="part-time">Part-time</option>
                                            <option value="contract">Contract</option>
                                            <option value="internship">Internship</option>
                                            <option value="temporary">Temporary</option>
                                            <option value="freelance">Freelance</option>
                                            <option value="volunteer">Volunteer</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col md={4}>
                                    <Form.Group className="mb-2">
                                        <Form.Label>No. of Vacancies</Form.Label>
                                        <Form.Control
                                            type="number"
                                            min={0}
                                            value={form.noOfVacancies ?? 0}
                                            onChange={(e) =>
                                                setForm({ ...form, noOfVacancies: Number(e.target.value) })
                                            }
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-2">
                                        <Form.Label>Experience (years)</Form.Label>
                                        <Form.Control
                                            type="number"
                                            min={0}
                                            value={form.experience ?? 0}
                                            onChange={(e) => setForm({ ...form, experience: Number(e.target.value) })}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-2">
                                        <Form.Label>Salary</Form.Label>
                                        <Form.Control
                                            placeholder="e.g. 6–10 LPA"
                                            value={form.salary || ''}
                                            onChange={(e) => setForm({ ...form, salary: e.target.value })}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group className="mb-2">
                                        <Form.Label>Application Deadline</Form.Label>
                                        <Form.Control
                                            type="date"
                                            value={(form.applicationDeadline as string) || ''}
                                            onChange={(e) => setForm({ ...form, applicationDeadline: e.target.value })}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mt-4">
                                <Form.Label>Content</Form.Label>
                                <EditorWithMediaLibrary
                                    value={form.content}
                                    onChange={(value) => setForm({ ...form, content: value })}
                                />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowModal(false)}>
                                Cancel
                            </Button>
                            <Button type="submit">{isEditing ? 'Update' : 'Add'}</Button>
                        </Modal.Footer>
                    </Form>
                </Container>
            </Modal>

            {/* View Modal */}
            <Modal show={!!viewingJob} onHide={() => setViewingJob(null)} centered>
                <Container>
                    <Modal.Header closeButton>
                        <Modal.Title>{viewingJob?.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ maxHeight: '75vh', overflowY: 'auto' }}>
                        {viewingJob && (
                            <>
                                {viewingJob.thumbnailUrl && (
                                    <img
                                        src={viewingJob.thumbnailUrl}
                                        alt="Thumbnail"
                                        className="img-fluid mb-3"
                                        style={{ maxWidth: 200, borderRadius: 8 }}
                                    />
                                )}
                                <p>
                                    <strong>Department:</strong> {viewingJob.department || '-'}
                                </p>
                                <p>
                                    <strong>Employment:</strong> {viewingJob.employmentType?.replace('-', ' ') || '-'}
                                </p>
                                <p>
                                    <strong>Location:</strong> {viewingJob.location || '-'}
                                </p>
                                <p>
                                    <strong>Status:</strong> {viewingJob.isActive ? 'Active' : 'Inactive'}
                                </p>
                                <p>
                                    <strong>Vacancies:</strong> {viewingJob.noOfVacancies ?? '-'}
                                </p>
                                <p>
                                    <strong>Experience:</strong>{' '}
                                    {viewingJob.experience != null ? `${viewingJob.experience} yrs` : '-'}
                                </p>
                                <p>
                                    <strong>Salary:</strong> {viewingJob.salary || '-'}
                                </p>
                                <p>
                                    <strong>Deadline:</strong>{' '}
                                    {viewingJob.applicationDeadline
                                        ? new Date(viewingJob.applicationDeadline as any).toLocaleDateString()
                                        : '-'}
                                </p>
                                <div
                                    className="event-content"
                                    dangerouslySetInnerHTML={{ __html: viewingJob.content }}
                                />
                            </>
                        )}
                    </Modal.Body>
                </Container>
            </Modal>

            {/* Image Picker Modal */}
            {showImagePicker && (
                <ImagePickerModal
                    show={showImagePicker}
                    folder="jobs"
                    onClose={() => setShowImagePicker(false)}
                    onSelect={(url) => {
                        setForm((prev) => ({ ...prev, thumbnailUrl: url }));
                        setShowImagePicker(false);
                    }}
                />
            )}
        </div>
    );
};

export default Jobs;
