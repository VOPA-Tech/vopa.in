import { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import axios from 'axios';
import { Footer3 } from 'components/footer';
import { Navbar4 } from 'components/navbars';

const API_BASE = process.env.REACT_APP_API_BASE_URL as string;

const Gallery = () => {
    const [folders, setFolders] = useState<string[]>([]);
    const [selectedFolder, setSelectedFolder] = useState('');
    const [images, setImages] = useState<{ filename: string; url: string }[]>([]);
    const [uploading, setUploading] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
    const [newFolder, setNewFolder] = useState('');
    const [creating, setCreating] = useState(false);

    // Fetch all object keys and extract folder names
    const fetchFolders = async () => {
        try {
            const res = await axios.get(`${API_BASE}/upload/list`);

            const folderList: string[] = res.data;
            setFolders(folderList);

            if (!selectedFolder && folderList.includes('employees')) {
                setSelectedFolder('employees');
            }
        } catch (err) {
            console.error('Error fetching folders:', err);
        }
    };

    const fetchImages = async (folderName: string) => {
        try {
            const res = await axios.get(`${API_BASE}/upload/list/${folderName}`);
            setImages(res.data);
        } catch (err) {
            setImages([]);
            console.error('Failed to fetch images:', err);
        }
    };

    useEffect(() => {
        fetchFolders();
    }, []);

    useEffect(() => {
        if (selectedFolder) {
            fetchImages(selectedFolder);
        }
    }, [selectedFolder]);

    const handleUpload = async () => {
        if (!selectedFiles || !selectedFolder.trim()) return;

        setUploading(true);
        try {
            const uploadPromises = Array.from(selectedFiles).map((file) => {
                const formData = new FormData();
                formData.append('type', selectedFolder.trim());
                formData.append('images', file); // ✅ corrected field name
                return axios.post(`${API_BASE}/upload`, formData);
            });

            await Promise.all(uploadPromises);

            setSelectedFiles(null);
            fetchImages(selectedFolder);
            fetchFolders();
        } catch (err) {
            console.error('Upload failed:', err);
            alert('Upload failed');
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (filename: string) => {
        if (!selectedFolder) return;

        const confirm = window.confirm(`Delete image: ${filename}?`);
        if (!confirm) return;

        try {
            await axios.delete(`${API_BASE}/upload/${selectedFolder}/${filename}`);
            fetchImages(selectedFolder);
        } catch (err) {
            alert('Failed to delete image');
        }
    };

    const handleCreateFolder = async () => {
        if (!newFolder.trim()) return;

        setCreating(true);
        try {
            await axios.post(`${API_BASE}/upload/folder`, { name: newFolder.trim() });
            setNewFolder('');
            setSelectedFolder(newFolder.trim());
            fetchFolders();
        } catch (err: any) {
            console.error(err);
            alert(err.response?.data?.message || 'Failed to create folder');
        } finally {
            setCreating(false);
        }
    };

    const handleDeleteFolder = async () => {
        if (!selectedFolder) return;

        const confirm = window.confirm(`Delete folder "${selectedFolder}" and all its images?`);
        if (!confirm) return;

        try {
            await axios.delete(`${API_BASE}/upload/folder/${selectedFolder}`);
            setSelectedFolder('');
            setImages([]);
            fetchFolders();
        } catch (err: any) {
            console.error(err);
            alert(err.response?.data?.message || 'Failed to delete folder');
        }
    };

    return (
        <>
            <Navbar4 fixedWidth />

            <section className="position-relative overflow-hidden bg-gradient2 py-3 px-3">
                <Container>
                    <Container className="py-4">
                        <h4 className="mb-4">Gallery Manager</h4>

                        <Row className="align-items-end mb-4">
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>Select Folder</Form.Label>
                                    <Form.Select
                                        value={selectedFolder}
                                        onChange={(e) => setSelectedFolder(e.target.value)}>
                                        <option value="" disabled>
                                            -- Choose folder --
                                        </option>
                                        {folders.map((folder) => (
                                            <option key={folder} value={folder}>
                                                {folder}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>Create New Folder</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter new folder name"
                                        value={newFolder}
                                        onChange={(e) => setNewFolder(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>

                            <Col md="auto" className="d-flex flex-column gap-2 mt-4">
                                <Button
                                    variant="primary"
                                    size="sm"
                                    onClick={handleCreateFolder}
                                    disabled={creating || !newFolder.trim()}>
                                    {creating ? 'Creating...' : 'Create Folder'}
                                </Button>
                                <Button
                                    variant="outline-danger"
                                    size="sm"
                                    disabled={!selectedFolder}
                                    onClick={handleDeleteFolder}>
                                    Delete Selected Folder
                                </Button>
                            </Col>
                        </Row>

                        <div className="mb-2 text-muted small">
                            <div>
                                ⚠️ Image size should not be greater than <strong>1MB</strong>.
                            </div>
                            {selectedFolder === 'employees' && (
                                <div>
                                    📐 Recommended aspect ratio: <strong>5:4</strong> (passport size photo)
                                </div>
                            )}
                        </div>

                        <Form.Group className="mb-3">
                            <Form.Control
                                type="file"
                                multiple
                                onChange={(e) => setSelectedFiles((e.target as HTMLInputElement).files)}
                            />
                        </Form.Group>

                        <Button disabled={uploading || !selectedFiles} onClick={handleUpload}>
                            {uploading ? (
                                <>
                                    <Spinner animation="border" size="sm" className="me-2" />
                                    Uploading...
                                </>
                            ) : (
                                'Upload Selected Images'
                            )}
                        </Button>

                        <Row className="mt-4">
                            {images.map((img, index) => (
                                <Col xs={6} md={4} lg={3} key={index} className="mb-4">
                                    <div className="position-relative border rounded overflow-hidden">
                                        <Button
                                            size="sm"
                                            variant="danger"
                                            className="position-absolute top-0 end-0 m-1 p-1 rounded-circle"
                                            style={{ zIndex: 1 }}
                                            onClick={() => handleDelete(img.filename)}>
                                            <FeatherIcon icon="x" size={14} />
                                        </Button>

                                        <img
                                            src={img.url}
                                            alt={img.filename}
                                            className="w-100"
                                            style={{
                                                objectFit: 'contain',
                                                height: selectedFolder === 'employees' ? '250px' : '200px',
                                                aspectRatio: selectedFolder === 'employees' ? '5 / 4' : undefined,
                                            }}
                                        />

                                        <div className="p-2 text-truncate text-center small">{img.filename}</div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Container>
            </section>

            <Footer3 />
        </>
    );
};

export default Gallery;
