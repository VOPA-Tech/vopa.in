import { useEffect, useState } from 'react';
import { Button, Form, Modal, Table } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchMediaMentions,
    addMediaMention,
    updateMediaMention,
    deleteMediaMention,
} from 'reduxFolder/mediaMentionsSlice';
import ImagePickerModal from '../ImagePickerModal';

export type MediaMention = {
    _id?: string;
    title: string;
    photo: string;
    date: string;
    tag: string;
    pinned: boolean;
    link: string;
};

const MediaMentions = () => {
    const dispatch: any = useDispatch();
    const { mentions } = useSelector((state: any) => state.mediaMentionsState);

    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingMention, setEditingMention] = useState<MediaMention | null>(null);
    const [showImagePicker, setShowImagePicker] = useState(false);

    const [form, setForm] = useState<Omit<MediaMention, '_id'>>({
        title: '',
        photo: '',
        date: '',
        tag: '',
        pinned: false,
        link: '',
    });

    useEffect(() => {
        dispatch(fetchMediaMentions());
    }, [dispatch]);

    const handleAdd = () => {
        setIsEditing(false);
        setForm({
            title: '',
            photo: '',
            date: '',
            tag: '',
            pinned: false,
            link: '',
        });
        setShowModal(true);
    };

    const handleEdit = (mention: MediaMention) => {
        setIsEditing(true);
        setEditingMention(mention);
        setForm({
            title: mention.title,
            photo: mention.photo,
            date: mention.date,
            tag: mention.tag,
            pinned: mention.pinned,
            link: mention.link,
        });
        setShowModal(true);
    };

    const handleDelete = (id?: string) => {
        if (!id) return;
        if (window.confirm('Are you sure to delete this media mention?')) {
            dispatch(deleteMediaMention(id));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditing && editingMention?._id) {
            dispatch(updateMediaMention({ id: editingMention._id, data: form }));
        } else {
            dispatch(addMediaMention(form));
        }
        setShowModal(false);
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>Media Mentions</h4>
                <Button onClick={handleAdd}>Add Mention</Button>
            </div>

            <Table responsive bordered hover>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Tag</th>
                        <th>Pinned</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {mentions.map((mention: MediaMention) => (
                        <tr key={mention._id}>
                            <td>
                                <img
                                    src={mention.photo || 'https://via.placeholder.com/40'}
                                    alt="thumbnail"
                                    style={{ width: 80, height: 100, objectFit: 'cover' }}
                                />
                            </td>
                            <td>{mention.title}</td>
                            <td>{new Date(mention.date).toLocaleDateString()}</td>
                            <td>{mention.tag}</td>
                            <td>{mention.pinned ? 'Yes' : 'No'}</td>
                            <td>
                                <div className="d-flex justify-content-center gap-2">
                                    <Button
                                        size="sm"
                                        variant="light"
                                        className="border"
                                        onClick={() => window.open(mention.link, '_blank')}>
                                        <FeatherIcon icon="eye" size={16} />
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="light"
                                        className="border"
                                        onClick={() => handleEdit(mention)}>
                                        <FeatherIcon icon="edit" size={16} />
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="light"
                                        className="border"
                                        onClick={() => handleDelete(mention._id)}>
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
                    <Modal.Title>{isEditing ? 'Edit Mention' : 'Add Mention'}</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                required
                                value={form.title}
                                onChange={(e) => setForm({ ...form, title: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Photo</Form.Label>
                            <div className="d-flex align-items-center gap-2">
                                <img
                                    src={form.photo || 'https://via.placeholder.com/60'}
                                    alt="avatar"
                                    style={{ width: 60, height: 60, objectFit: 'cover' }}
                                />
                                <Button size="sm" onClick={() => setShowImagePicker(true)}>
                                    Choose from Bucket
                                </Button>
                            </div>
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

                        <Form.Group className="mb-3">
                            <Form.Label>Tag</Form.Label>
                            <Form.Control
                                required
                                value={form.tag}
                                onChange={(e) => setForm({ ...form, tag: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Check
                                type="checkbox"
                                label="Pinned"
                                checked={form.pinned}
                                onChange={(e) => setForm({ ...form, pinned: e.target.checked })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Link</Form.Label>
                            <Form.Control
                                required
                                type="url"
                                value={form.link}
                                onChange={(e) => setForm({ ...form, link: e.target.value })}
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
                folder="media mentions"
                onClose={() => setShowImagePicker(false)}
                onSelect={(url) => {
                    setForm((prev) => ({ ...prev, photo: url }));
                    setShowImagePicker(false);
                }}
            />
        </div>
    );
};

export default MediaMentions;
