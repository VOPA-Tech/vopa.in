import { useEffect, useState } from 'react';
import { Button, Form, Modal, Table } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMagazines, addMagazine, updateMagazine, deleteMagazine } from 'reduxFolder/magazinesSlice';
import ImagePickerModal from '../ImagePickerModal';

export type Magazine = {
    _id?: string;
    photoLink: string;
    docUrl: string;
    tag: string;
    title: string;
};

const Magazines = () => {
    const dispatch: any = useDispatch();
    const { magazines } = useSelector((state: any) => state.magazinesState);
    console.log('Magazines:', magazines);
    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingMagazine, setEditingMagazine] = useState<Magazine | null>(null);
    const [showImagePicker, setShowImagePicker] = useState(false);

    const [form, setForm] = useState<Omit<Magazine, '_id'>>({
        photoLink: '',
        docUrl: '',
        tag: 'V-School Magazines',
        title: '',
    });

    useEffect(() => {
        dispatch(fetchMagazines());
    }, [dispatch]);

    const handleAdd = () => {
        setIsEditing(false);
        setForm({
            photoLink: '',
            docUrl: '',
            tag: 'V-School Magazines',
            title: '',
        });
        setShowModal(true);
    };

    const handleEdit = (mag: Magazine) => {
        setIsEditing(true);
        setEditingMagazine(mag);
        setForm({
            photoLink: mag.photoLink,
            docUrl: mag.docUrl,
            tag: mag.tag,
            title: mag.title,
        });
        setShowModal(true);
    };

    const handleDelete = (id?: string) => {
        if (!id) return;
        if (window.confirm('Are you sure to delete this magazine?')) {
            dispatch(deleteMagazine(id));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditing && editingMagazine?._id) {
            dispatch(updateMagazine({ id: editingMagazine._id, data: form }));
        } else {
            dispatch(addMagazine(form));
        }
        setShowModal(false);
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>Magazines</h4>
                <Button onClick={handleAdd}>Add Magazine</Button>
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
                    {magazines.map((mag: Magazine) => (
                        <tr key={mag._id}>
                            <td>
                                <img
                                    src={mag.photoLink || 'https://via.placeholder.com/40'}
                                    alt="thumbnail"
                                    style={{ width: 40, height: 40, objectFit: 'cover' }}
                                />
                            </td>
                            <td>{mag.title}</td>
                            <td>{mag.tag}</td>
                            <td>
                                <div className="d-flex justify-content-center gap-2">
                                    <Button
                                        size="sm"
                                        variant="light"
                                        className="border"
                                        onClick={() => window.open(mag.docUrl, '_blank')}>
                                        <FeatherIcon icon="eye" size={16} />
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="light"
                                        className="border"
                                        onClick={() => handleEdit(mag)}>
                                        <FeatherIcon icon="edit" size={16} />
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="light"
                                        className="border"
                                        onClick={() => handleDelete(mag._id)}>
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
                    <Modal.Title>{isEditing ? 'Edit Magazine' : 'Add Magazine'}</Modal.Title>
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
                                <option>V-School Magazines</option>
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
                folder="magazines"
                onClose={() => setShowImagePicker(false)}
                onSelect={(url) => {
                    setForm((prev) => ({ ...prev, photoLink: url }));
                    setShowImagePicker(false);
                }}
            />
        </div>
    );
};

export default Magazines;
