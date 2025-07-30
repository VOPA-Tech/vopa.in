import { useEffect, useState } from 'react';
import { Button, Form, Modal, Table } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWorkReports, addWorkReport, updateWorkReport, deleteWorkReport } from 'reduxFolder/workReportsSlice';
import ImagePickerModal from '../ImagePickerModal';

export type WorkReport = {
    _id?: string;
    photoLink: string;
    docUrl: string;
    tag: string;
    title: string;
};

const WorkReports = () => {
    const dispatch: any = useDispatch();
    const { reports } = useSelector((state: any) => state.workReportsState);

    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingReport, setEditingReport] = useState<WorkReport | null>(null);
    const [showImagePicker, setShowImagePicker] = useState(false);

    const [form, setForm] = useState<Omit<WorkReport, '_id'>>({
        photoLink: '',
        docUrl: '',
        tag: 'Student Impact Stories',
        title: '',
    });

    useEffect(() => {
        dispatch(fetchWorkReports());
    }, [dispatch]);

    const handleAdd = () => {
        setIsEditing(false);
        setForm({
            photoLink: '',
            docUrl: '',
            tag: 'Student Impact Stories',
            title: '',
        });
        setShowModal(true);
    };

    const handleEdit = (report: WorkReport) => {
        setIsEditing(true);
        setEditingReport(report);
        setForm({
            photoLink: report.photoLink,
            docUrl: report.docUrl,
            tag: report.tag,
            title: report.title,
        });
        setShowModal(true);
    };

    const handleDelete = (id?: string) => {
        if (!id) return;
        if (window.confirm('Are you sure to delete this report?')) {
            dispatch(deleteWorkReport(id));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditing && editingReport?._id) {
            dispatch(updateWorkReport({ id: editingReport._id, data: form }));
        } else {
            dispatch(addWorkReport(form));
        }
        setShowModal(false);
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>Work Reports</h4>
                <Button onClick={handleAdd}>Add Report</Button>
            </div>

            <Table responsive bordered hover>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Title</th>
                        <th>Tag</th>

                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map((report: WorkReport) => (
                        <tr key={report._id}>
                            <td>
                                <img
                                    src={report.photoLink || 'https://via.placeholder.com/40'}
                                    alt="thumbnail"
                                    style={{ width: 80, height: 100, objectFit: 'cover' }}
                                />
                            </td>
                            <td>{report.title}</td>
                            <td>{report.tag}</td>
                            <td>
                                <div className="d-flex justify-content-center gap-2">
                                    <Button
                                        size="sm"
                                        variant="light"
                                        className="border"
                                        onClick={() => window.open(report.docUrl, '_blank')}>
                                        <FeatherIcon icon="eye" size={16} />
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="light"
                                        className="border"
                                        onClick={() => handleEdit(report)}>
                                        <FeatherIcon icon="edit" size={16} />
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="light"
                                        className="border"
                                        onClick={() => handleDelete(report._id)}>
                                        <FeatherIcon icon="trash" size={16} className="text-danger" />
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{isEditing ? 'Edit Report' : 'Add Report'}</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Photo</Form.Label>
                            <div className="d-flex align-items-center gap-2">
                                <img
                                    src={form.photoLink || 'https://via.placeholder.com/60'}
                                    alt="avatar"
                                    style={{ width: 60, height: 60, objectFit: 'cover' }}
                                />
                                <Button size="sm" onClick={() => setShowImagePicker(true)}>
                                    Choose from Bucket
                                </Button>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Document URL</Form.Label>
                            <Form.Control
                                required
                                type="url"
                                value={form.docUrl}
                                onChange={(e) => setForm({ ...form, docUrl: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Tag</Form.Label>
                            <Form.Select value={form.tag} onChange={(e) => setForm({ ...form, tag: e.target.value })}>
                                <option>Student Impact Stories</option>
                                <option>Teacher Impact Stories</option>
                                <option>Annual Reports</option>
                                <option>Quarterly Reports</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                required
                                value={form.title}
                                onChange={(e) => setForm({ ...form, title: e.target.value })}
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
            </Modal>

            {/* Image Picker */}
            <ImagePickerModal
                show={showImagePicker}
                folder="work reports"
                onClose={() => setShowImagePicker(false)}
                onSelect={(url) => {
                    setForm((prev) => ({ ...prev, photoLink: url }));
                    setShowImagePicker(false);
                }}
            />
        </div>
    );
};

export default WorkReports;
