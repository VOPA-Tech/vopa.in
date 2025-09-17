import { useEffect, useState } from 'react';
import { Button, Form, Modal, Table } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMediaCutouts, addMediaCutout, updateMediaCutout, deleteMediaCutout } from 'reduxFolder/mediaCutoutsSlice';
import ImagePickerModal from '../ImagePickerModal';

export type MediaCutout = {
    _id?: string;
    photoUrl: string;
    title: string;
    date: string; // in ISO format
    pinned?: boolean;
    tag: string;
    mediaChannel: string;
};

const MediaCutouts = () => {
    const dispatch: any = useDispatch();
    const { mediaCutouts } = useSelector((state: any) => state.mediaCutoutsState);

    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingCutout, setEditingCutout] = useState<MediaCutout | null>(null);
    const [showImagePicker, setShowImagePicker] = useState(false);

    const [form, setForm] = useState<Omit<MediaCutout, '_id'>>({
        photoUrl: '',
        title: '',
        date: '',
        pinned: false,
        tag: 'News',
        mediaChannel: '',
    });

    useEffect(() => {
        dispatch(fetchMediaCutouts());
    }, [dispatch]);

    const handleAdd = () => {
        setIsEditing(false);
        setForm({
            photoUrl: '',
            title: '',
            date: '',
            pinned: false,
            tag: 'News',
            mediaChannel: '',
        });
        setShowModal(true);
    };

    const handleEdit = (cutout: MediaCutout) => {
        setIsEditing(true);
        setEditingCutout(cutout);
        setForm({
            photoUrl: cutout.photoUrl,
            title: cutout.title,
            date: cutout.date,
            pinned: cutout.pinned,
            tag: cutout.tag,
            mediaChannel: cutout.mediaChannel,
        });
        setShowModal(true);
    };

    const handleDelete = (id?: string) => {
        if (!id) return;
        if (window.confirm('Are you sure to delete this media cutout?')) {
            dispatch(deleteMediaCutout(id));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditing && editingCutout?._id) {
            dispatch(updateMediaCutout({ id: editingCutout._id, data: form }));
        } else {
            dispatch(addMediaCutout(form));
        }
        setShowModal(false);
    };

    const handleView = (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>Media Cutouts</h4>
                <Button onClick={handleAdd}>Add Media Cutout</Button>
            </div>

            <Table responsive bordered hover>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Title</th>
                        <th>Tag</th>
                        <th>Channel</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {mediaCutouts.map((cutout: MediaCutout) => (
                        <tr key={cutout._id}>
                            <td>
                                <img
                                    src={cutout.photoUrl || 'https://via.placeholder.com/40'}
                                    alt="thumbnail"
                                    style={{ width: 80, height: 100, objectFit: 'cover' }}
                                />
                            </td>
                            <td>{cutout.title}</td>
                            <td>{cutout.tag}</td>
                            <td>{cutout.mediaChannel}</td>
                            <td>
                                <div className="d-flex justify-content-center gap-2">
                                    <Button
                                        size="sm"
                                        variant="light"
                                        className="border"
                                        onClick={() => handleView(cutout.photoUrl)}>
                                        <FeatherIcon icon="eye" size={16} />
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="light"
                                        className="border"
                                        onClick={() => handleEdit(cutout)}>
                                        <FeatherIcon icon="edit" size={16} />
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="light"
                                        className="border"
                                        onClick={() => handleDelete(cutout._id)}>
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
                    <Modal.Title>{isEditing ? 'Edit Media Cutout' : 'Add Media Cutout'}</Modal.Title>
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

                        <Form.Group className="mb-3">
                            <Form.Label>Tag</Form.Label>
                            <Form.Select value={form.tag} onChange={(e) => setForm({ ...form, tag: e.target.value })}>
                                <option>News</option>
                                <option>Event</option>
                                <option>Publication</option>
                                <option>Media Coverage</option>
                                <option>Awards</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Media Channel</Form.Label>
                            <Form.Control
                                required
                                value={form.mediaChannel}
                                onChange={(e) => setForm({ ...form, mediaChannel: e.target.value })}
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
                folder="media cutouts"
                onClose={() => setShowImagePicker(false)}
                onSelect={(url) => {
                    setForm((prev) => ({ ...prev, photoUrl: url }));
                    setShowImagePicker(false);
                }}
            />
        </div>
    );
};

export default MediaCutouts;
