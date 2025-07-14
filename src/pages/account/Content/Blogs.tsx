import { useState } from 'react';
import { Badge, Button, Col, Form, Modal, Row, Table } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import EditorWithMediaLibrary from './EditorWithMediaLibrary';
import 'react-quill/dist/quill.snow.css';

export type Blog = {
    id: number;
    title: string;
    author: string;
    category: string;
    thumbnail: string;
    coverPhoto: string;
    content: string;
    status: 'Published' | 'Draft';
    featured: boolean;
};

const Blogs = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
    const [viewingBlog, setViewingBlog] = useState<Blog | null>(null);

    const [form, setForm] = useState<Blog>({
        id: 0,
        title: '',
        author: '',
        category: '',
        thumbnail: '',
        coverPhoto: '',
        content: '',
        status: 'Draft',
        featured: false,
    });

    const handleAdd = () => {
        setIsEditing(false);
        setForm({
            id: 0,
            title: '',
            author: '',
            category: '',
            thumbnail: '',
            coverPhoto: '',
            content: '',
            status: 'Draft',
            featured: false,
        });
        setShowModal(true);
    };

    const handleEdit = (blog: Blog) => {
        setIsEditing(true);
        setEditingBlog(blog);
        setForm({ ...blog });
        setShowModal(true);
    };

    const handleDelete = (id: number) => {
        if (window.confirm('Are you sure to delete this blog?')) {
            setBlogs((prev) => prev.filter((b) => b.id !== id));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newBlog: Blog = {
            ...form,
            id: isEditing && editingBlog ? editingBlog.id : Date.now(),
        };

        setBlogs((prev) => {
            if (isEditing && editingBlog) {
                return prev.map((b) => (b.id === editingBlog.id ? newBlog : b));
            }
            return [...prev, newBlog];
        });

        setShowModal(false);
    };

    const handleMediaSelect = (type: 'thumbnail' | 'coverPhoto') => {
        const url = prompt(`Paste the ${type} URL:`);
        if (url) {
            setForm((prev) => ({ ...prev, [type]: url }));
        }
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>Blogs</h4>
                <Button onClick={handleAdd}>Add Blog</Button>
            </div>

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
                    {blogs
                        .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
                        .map((blog) => (
                            <tr key={blog.id}>
                                <td>
                                    <img
                                        src={blog.thumbnail || 'https://via.placeholder.com/40'}
                                        alt="thumbnail"
                                        style={{ width: 40, height: 40, borderRadius: '4px', objectFit: 'cover' }}
                                    />
                                    {blog.featured && (
                                        <Badge bg="info" className="ms-2">
                                            Featured
                                        </Badge>
                                    )}
                                </td>
                                <td>{blog.title}</td>
                                <td>{blog.author}</td>
                                <td>{blog.category}</td>
                                <td>{blog.status}</td>
                                <td>
                                    <div className="d-flex gap-2">
                                        <Button
                                            size="sm"
                                            variant="light"
                                            className="border"
                                            onClick={() => handleEdit(blog)}>
                                            <FeatherIcon icon="edit" size={16} />
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="light"
                                            className="border"
                                            onClick={() => handleDelete(blog.id)}>
                                            <FeatherIcon icon="trash" size={16} className="text-danger" />
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="light"
                                            className="border"
                                            onClick={() => setViewingBlog(blog)}>
                                            <FeatherIcon icon="eye" size={16} className="text-primary" />
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>

            {/* Add / Edit Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)} fullscreen>
                <Modal.Header closeButton>
                    <Modal.Title>{isEditing ? 'Edit Blog' : 'Add Blog'}</Modal.Title>
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
                            <Col md={6}>
                                <Form.Group className="mb-2">
                                    <Form.Label>Thumbnail URL</Form.Label>
                                    <div className="d-flex gap-2">
                                        <Form.Control
                                            value={form.thumbnail}
                                            onChange={(e) => setForm({ ...form, thumbnail: e.target.value })}
                                        />
                                        <Button size="sm" onClick={() => handleMediaSelect('thumbnail')}>
                                            Choose
                                        </Button>
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-2">
                                    <Form.Label>Cover Photo URL</Form.Label>
                                    <div className="d-flex gap-2">
                                        <Form.Control
                                            value={form.coverPhoto}
                                            onChange={(e) => setForm({ ...form, coverPhoto: e.target.value })}
                                        />
                                        <Button size="sm" onClick={() => handleMediaSelect('coverPhoto')}>
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
                                        checked={form.status === 'Published'}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                status: e.target.checked ? 'Published' : 'Draft',
                                            })
                                        }
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
            </Modal>

            {/* View Modal */}
            <Modal show={!!viewingBlog} onHide={() => setViewingBlog(null)} centered fullscreen>
                <Modal.Header closeButton>
                    <Modal.Title>{viewingBlog?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ maxHeight: '75vh', overflowY: 'auto' }}>
                    {viewingBlog && (
                        <>
                            <img src={viewingBlog.coverPhoto} alt="Cover" className="img-fluid mb-3" />
                            <div dangerouslySetInnerHTML={{ __html: viewingBlog.content }} />
                        </>
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Blogs;
