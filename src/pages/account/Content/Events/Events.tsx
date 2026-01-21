import { useEffect, useState } from 'react';
import { Badge, Button, Col, Form, Modal, Row, Table, Spinner, Container } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchEvents, addEvent, updateEvent, deleteEvent } from 'reduxFolder/eventSlice';
import EditorWithMediaLibrary from '../EditorWithMediaLibrary';
import ImagePickerModal from '../ImagePickerModal';

import 'react-quill/dist/quill.snow.css';

export type Event = {
    _id?: string;
    title: string;
    author: string;
    category: string;
    thumbnailUrl: string;
    coverUrl: string;
    content: string;
    featured: boolean;
    published: boolean;
};

const Events = () => {
    const dispatch: any = useDispatch();
    const { events, loading } = useSelector((state: any) => state.eventState);

    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingEvent, setEditingEvent] = useState<Event | null>(null);
    const [viewingEvent, setViewingEvent] = useState<Event | null>(null);

    const [form, setForm] = useState<Event>({
        title: '',
        author: '',
        category: '',
        thumbnailUrl: '',
        coverUrl: '',
        content: '',
        published: false,
        featured: false,
    });

    const [showImagePicker, setShowImagePicker] = useState(false);
    const [targetImageField, setTargetImageField] = useState<'thumbnailUrl' | 'coverUrl' | null>(null);

    useEffect(() => {
        dispatch(fetchEvents());
    }, [dispatch]);

    const resetForm = () => {
        setForm({
            title: '',
            author: '',
            category: '',
            thumbnailUrl: '',
            coverUrl: '',
            content: '',
            published: false,
            featured: false,
        });
    };

    const handleAdd = () => {
        setIsEditing(false);
        resetForm();
        setShowModal(true);
    };

    const handleEdit = (event: Event) => {
        setIsEditing(true);
        setEditingEvent(event);
        setForm({ ...event });
        setShowModal(true);
    };

    const handleDelete = (_id?: string) => {
        if (!_id) return;
        if (window.confirm('Are you sure to delete this event?')) {
            dispatch(deleteEvent(_id));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditing && editingEvent?._id) {
            await dispatch(updateEvent({ id: editingEvent._id, data: form }));
        } else {
            await dispatch(addEvent(form));
        }
        setShowModal(false);
        resetForm();
    };

    const handleMediaSelect = (field: 'thumbnailUrl' | 'coverUrl') => {
        setTargetImageField(field);
        setShowImagePicker(true);
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>Events</h4>
                <Button onClick={handleAdd}>Add Event</Button>
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
                            <th>Author</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events
                            .slice()
                            .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
                            .map((event) => (
                                <tr key={event._id}>
                                    <td>
                                        <img
                                            src={event.thumbnailUrl || 'https://via.placeholder.com/40'}
                                            alt="thumbnail"
                                            style={{
                                                width: 40,
                                                height: 40,
                                                borderRadius: '4px',
                                                objectFit: 'cover',
                                            }}
                                        />
                                        {event.featured && (
                                            <Badge bg="info" className="ms-2">
                                                Featured
                                            </Badge>
                                        )}
                                    </td>
                                    <td>{event.title}</td>
                                    <td>{event.author}</td>
                                    <td>{event.category}</td>
                                    <td>
                                        <Badge bg={event.published ? 'success' : 'secondary'}>
                                            {event.published ? 'Published' : 'Draft'}
                                        </Badge>
                                    </td>
                                    <td>
                                        <div className="d-flex gap-2">
                                            <Button
                                                size="sm"
                                                variant="light"
                                                className="border"
                                                onClick={() => handleEdit(event)}>
                                                <FeatherIcon icon="edit" size={16} />
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="light"
                                                className="border"
                                                onClick={() => handleDelete(event._id)}>
                                                <FeatherIcon icon="trash" size={16} className="text-danger" />
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="light"
                                                className="border"
                                                onClick={() => setViewingEvent(event)}>
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
            <Modal show={showModal} onHide={() => setShowModal(false)} fullscreen>
                <Container>
                    <Modal.Header closeButton>
                        <Modal.Title>{isEditing ? 'Edit Event' : 'Add Event'}</Modal.Title>
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
                                        <Form.Label>Author</Form.Label>
                                        <Form.Control
                                            required
                                            value={form.author}
                                            onChange={(e) => setForm({ ...form, author: e.target.value })}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-2">
                                        <Form.Label>Category</Form.Label>
                                        <Form.Control
                                            required
                                            value={form.category}
                                            onChange={(e) => setForm({ ...form, category: e.target.value })}
                                        />
                                    </Form.Group>
                                </Col>

                                {/* Thumbnail Preview */}
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
                                            <Button size="sm" onClick={() => handleMediaSelect('thumbnailUrl')}>
                                                Choose
                                            </Button>
                                        </div>
                                    </Form.Group>
                                </Col>

                                {/* Cover Preview */}
                                <Col md={6}>
                                    <Form.Group className="mb-2">
                                        <Form.Label>Cover Photo</Form.Label>
                                        <div className="d-flex align-items-center gap-3">
                                            {form.coverUrl ? (
                                                <img
                                                    src={form.coverUrl}
                                                    alt="cover"
                                                    style={{
                                                        width: 100,
                                                        height: 60,
                                                        borderRadius: 4,
                                                        objectFit: 'cover',
                                                    }}
                                                />
                                            ) : (
                                                <div
                                                    style={{
                                                        width: 100,
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
                                            <Button size="sm" onClick={() => handleMediaSelect('coverUrl')}>
                                                Choose
                                            </Button>
                                        </div>
                                    </Form.Group>
                                </Col>

                                <Col md={6}>
                                    <Form.Group className="mb-2">
                                        <Form.Check
                                            label="Featured"
                                            checked={form.featured}
                                            onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-2">
                                        <Form.Check
                                            label="Published"
                                            checked={form.published}
                                            onChange={(e) => setForm({ ...form, published: e.target.checked })}
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
            <Modal show={!!viewingEvent} onHide={() => setViewingEvent(null)} centered fullscreen>
                <Container>
                    <Modal.Header closeButton>
                        <Modal.Title>{viewingEvent?.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ maxHeight: '75vh', overflowY: 'auto' }}>
                        {viewingEvent && (
                            <>
                                <img src={viewingEvent.coverUrl} alt="Cover" className="img-fluid mb-3" />
                                <div
                                    className="blog-content"
                                    dangerouslySetInnerHTML={{ __html: viewingEvent.content }}
                                />
                            </>
                        )}
                    </Modal.Body>
                </Container>
            </Modal>

            {/* Image Picker Modal */}
            {showImagePicker && targetImageField && (
                <ImagePickerModal
                    show={showImagePicker}
                    folder="events"
                    onClose={() => setShowImagePicker(false)}
                    onSelect={(url) => {
                        setForm((prev) => ({ ...prev, [targetImageField]: url }));
                        setShowImagePicker(false);
                    }}
                />
            )}
        </div>
    );
};

export default Events;
