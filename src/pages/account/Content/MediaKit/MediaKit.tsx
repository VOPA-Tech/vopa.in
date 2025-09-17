import { useEffect, useState } from 'react';
import { Button, Form, Modal, Table } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMediaKitItems, addMediaKitItem, updateMediaKitItem, deleteMediaKitItem } from 'reduxFolder/mediaKitSlice';
import ImagePickerModal from '../ImagePickerModal';

export type MediaKitItem = {
    _id?: string;
    photoUrl: string;
    title: string;
    date: string; // ISO string
};

const MediaKit = () => {
    const dispatch: any = useDispatch();

    // ✅ Update selector to match slice key
    const { mediaKitItems = [] } = useSelector((state: any) => state.mediaKitState);

    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingItem, setEditingItem] = useState<MediaKitItem | null>(null);
    const [showImagePicker, setShowImagePicker] = useState(false);

    const [form, setForm] = useState<Omit<MediaKitItem, '_id'>>({
        photoUrl: '',
        title: '',
        date: '',
    });

    useEffect(() => {
        dispatch(fetchMediaKitItems());
    }, [dispatch]);

    const handleAdd = () => {
        setIsEditing(false);
        setEditingItem(null);
        setForm({
            photoUrl: '',
            title: '',
            date: '',
        });
        setShowModal(true);
    };

    const handleEdit = (item: MediaKitItem) => {
        setIsEditing(true);
        setEditingItem(item);
        setForm({
            photoUrl: item.photoUrl,
            title: item.title,
            date: item.date,
        });
        setShowModal(true);
    };

    const handleDelete = (id?: string) => {
        if (!id) return;
        if (window.confirm('Are you sure to delete this media kit item?')) {
            dispatch(deleteMediaKitItem(id));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditing && editingItem?._id) {
            dispatch(updateMediaKitItem({ id: editingItem._id, data: form }));
        } else {
            dispatch(addMediaKitItem(form));
        }
        setShowModal(false);
    };

    const handleView = (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>Media Kit</h4>
                <Button onClick={handleAdd}>Add Media Kit Item</Button>
            </div>

            <Table responsive bordered hover>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {(mediaKitItems || []).map((item: MediaKitItem) => (
                        <tr key={item._id}>
                            <td>
                                <img
                                    src={item.photoUrl || 'https://via.placeholder.com/80x100'}
                                    alt="thumbnail"
                                    style={{ width: 80, height: 100, objectFit: 'cover' }}
                                />
                            </td>
                            <td>{item.title}</td>
                            <td>{new Date(item.date).toLocaleDateString()}</td>
                            <td>
                                <div className="d-flex justify-content-center gap-2">
                                    <Button
                                        size="sm"
                                        variant="light"
                                        className="border"
                                        onClick={() => handleView(item.photoUrl)}>
                                        <FeatherIcon icon="eye" size={16} />
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="light"
                                        className="border"
                                        onClick={() => handleEdit(item)}>
                                        <FeatherIcon icon="edit" size={16} />
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="light"
                                        className="border"
                                        onClick={() => handleDelete(item._id)}>
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
                    <Modal.Title>{isEditing ? 'Edit Media Kit Item' : 'Add Media Kit Item'}</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Photo</Form.Label>
                            <div className="d-flex align-items-center gap-2">
                                <img
                                    src={form.photoUrl || 'https://via.placeholder.com/60'}
                                    alt="avatar"
                                    style={{ width: 60, height: 60, objectFit: 'cover' }}
                                />
                                <Button size="sm" onClick={() => setShowImagePicker(true)}>
                                    Choose from Bucket
                                </Button>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                required
                                value={form.title}
                                onChange={(e) => setForm({ ...form, title: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                required
                                type="date"
                                value={form.date}
                                onChange={(e) => setForm({ ...form, date: e.target.value })}
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
                folder="media kit"
                onClose={() => setShowImagePicker(false)}
                onSelect={(url) => {
                    setForm((prev) => ({ ...prev, photoUrl: url }));
                    setShowImagePicker(false);
                }}
            />
        </div>
    );
};

export default MediaKit;
