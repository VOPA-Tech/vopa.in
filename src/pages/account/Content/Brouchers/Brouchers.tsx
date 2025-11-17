import { useEffect, useState } from 'react';
import { Button, Form, Modal, Table } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBrouchers, addBroucher, updateBroucher, deleteBroucher } from 'reduxFolder/brouchersSlice';
import ImagePickerModal from '../ImagePickerModal';

export type Broucher = {
    _id?: string;
    photoLink: string;
    docUrl: string;
    title: string;
};

const Brouchers = () => {
    const dispatch: any = useDispatch();
    const { brouchers } = useSelector((state: any) => state.brouchersState);

    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingBroucher, setEditingBroucher] = useState<Broucher | null>(null);
    const [showImagePicker, setShowImagePicker] = useState(false);

    const [form, setForm] = useState<Omit<Broucher, '_id'>>({
        photoLink: '',
        docUrl: '',
        title: '',
    });

    useEffect(() => {
        dispatch(fetchBrouchers());
    }, [dispatch]);

    const handleAdd = () => {
        setIsEditing(false);
        setForm({
            photoLink: '',
            docUrl: '',
            title: '',
        });
        setShowModal(true);
    };

    const handleEdit = (broucher: Broucher) => {
        setIsEditing(true);
        setEditingBroucher(broucher);
        setForm({
            photoLink: broucher.photoLink,
            docUrl: broucher.docUrl,
            title: broucher.title,
        });
        setShowModal(true);
    };

    const handleDelete = (id?: string) => {
        if (!id) return;
        if (window.confirm('Are you sure to delete this broucher?')) {
            dispatch(deleteBroucher(id));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditing && editingBroucher?._id) {
            dispatch(updateBroucher({ id: editingBroucher._id, data: form }));
        } else {
            dispatch(addBroucher(form));
        }
        setShowModal(false);
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>Brochures</h4>
                <Button onClick={handleAdd}>Add Brochure</Button>
            </div>

            <Table responsive bordered hover>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Title</th>

                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {brouchers.map((broucher: Broucher) => (
                        <tr key={broucher._id}>
                            <td>
                                <img
                                    src={broucher.photoLink || 'https://via.placeholder.com/40'}
                                    alt="thumbnail"
                                    style={{ width: 100, height: 100, objectFit: 'cover' }}
                                />
                            </td>
                            <td>{broucher.title}</td>
                            <td>
                                <div className="d-flex justify-content-center gap-2">
                                    <Button
                                        size="sm"
                                        variant="light"
                                        className="border"
                                        onClick={() => window.open(broucher.docUrl, '_blank')}>
                                        <FeatherIcon icon="eye" size={16} />
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="light"
                                        className="border"
                                        onClick={() => handleEdit(broucher)}>
                                        <FeatherIcon icon="edit" size={16} />
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="light"
                                        className="border"
                                        onClick={() => handleDelete(broucher._id)}>
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
                    <Modal.Title>{isEditing ? 'Edit Broucher' : 'Add Broucher'}</Modal.Title>
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
                folder="brouchers"
                onClose={() => setShowImagePicker(false)}
                onSelect={(url) => {
                    setForm((prev) => ({ ...prev, photoLink: url }));
                    setShowImagePicker(false);
                }}
            />
        </div>
    );
};

export default Brouchers;
