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
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

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
            console.error('Upload failed:', err.message);
            alert('Upload failed');
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (filename: string) => {
        if (!selectedFolder) return;

        const confirmDelete = window.confirm(`Delete image: ${filename}?`);
        if (!confirmDelete) return;

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

        const confirmDelete = window.confirm(`Delete folder "${selectedFolder}" and all its images?`);
        if (!confirmDelete) return;

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

    const handleCopyUrl = async (url: string, index: number) => {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(url);
            } else {
                // Fallback for non-HTTPS/older browsers
                const ta = document.createElement('textarea');
                ta.value = url;
                ta.style.position = 'fixed';
                ta.style.top = '-1000px';
                document.body.appendChild(ta);
                ta.select();
                document.execCommand('copy');
                document.body.removeChild(ta);
            }
            setCopiedIndex(index);
            setTimeout(() => setCopiedIndex(null), 1500);
        } catch (e) {
            console.error('Copy failed:', e);
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
                            {images.map((file, index) => {
                                const isVideo = file.filename.match(/\.(mp4|webm|ogg)$/i);

                                return (
                                    <Col xs={6} md={4} lg={3} key={index} className="mb-4">
                                        <div className="position-relative border rounded overflow-hidden">
                                            {/* Delete button */}
                                            <Button
                                                size="sm"
                                                variant="danger"
                                                className="position-absolute top-0 end-0 m-1 p-1 rounded-circle"
                                                style={{ zIndex: 1 }}
                                                onClick={() => handleDelete(file.filename)}
                                                aria-label="Delete file"
                                                title="Delete">
                                                <FeatherIcon icon="x" size={14} />
                                            </Button>

                                            {/* Copy URL button */}
                                            <Button
                                                size="sm"
                                                variant="secondary"
                                                className="position-absolute top-0 start-0 m-1 p-1 rounded-circle"
                                                style={{ zIndex: 1 }}
                                                onClick={() => handleCopyUrl(file.url, index)}
                                                aria-label="Copy file URL"
                                                title="Copy URL">
                                                <FeatherIcon icon="copy" size={14} />
                                            </Button>

                                            {/* File preview */}
                                            {isVideo ? (
                                                <video
                                                    src={file.url}
                                                    className="w-100"
                                                    style={{
                                                        height: selectedFolder === 'employees' ? '250px' : '200px',
                                                        objectFit: 'cover',
                                                        borderRadius: 4,
                                                    }}
                                                    controls
                                                />
                                            ) : (
                                                <img
                                                    src={file.url}
                                                    alt={file.filename}
                                                    className="w-100"
                                                    style={{
                                                        objectFit: 'contain',
                                                        height: selectedFolder === 'employees' ? '250px' : '200px',
                                                        aspectRatio:
                                                            selectedFolder === 'employees' ? '5 / 4' : undefined,
                                                    }}
                                                />
                                            )}

                                            {/* Copied badge */}
                                            {copiedIndex === index && (
                                                <span className="badge bg-success position-absolute bottom-0 start-0 m-2">
                                                    Copied!
                                                </span>
                                            )}

                                            <div className="p-2 text-truncate text-center small">{file.filename}</div>
                                        </div>
                                    </Col>
                                );
                            })}
                        </Row>
                    </Container>
                </Container>
            </section>

            <Footer3 />
        </>
    );
};

export default Gallery;
