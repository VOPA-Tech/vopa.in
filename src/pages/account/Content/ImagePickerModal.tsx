import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

interface ImagePickerModalProps {
    show: boolean;
    folder: string;
    onClose: () => void;
    onSelect: (url: string) => void;
}

interface ImageFile {
    filename: string;
    url: string;
}

const ImagePickerModal: React.FC<ImagePickerModalProps> = ({ show, folder, onClose, onSelect }) => {
    const [images, setImages] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!show || !folder) return;

        const fetchImages = async () => {
            setLoading(true);
            console.log(`🔍 Fetching images for folder: ${folder}`);

            try {
                const response = await axios.get(`/upload/list/${folder}`);
                console.log('✅ Response from server:', response.data);

                // If response is directly an array
                let files: ImageFile[] = [];

                if (Array.isArray(response.data)) {
                    files = response.data;
                } else if (Array.isArray(response.data.files)) {
                    files = response.data.files;
                } else {
                    throw new Error('Unexpected response structure');
                }

                const urls = files.map((file) => file.url);
                setImages(urls);
            } catch (error: any) {
                console.error('❌ Error loading images:', error?.response?.data || error.message);
                alert('Failed to load images');
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, [show, folder]);

    const handleSelect = (url: string) => {
        console.log(`🖼️ Image selected: ${url}`);
        onSelect(url);
        onClose();
    };

    return (
        <Modal show={show} onHide={onClose} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Select Image</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {loading ? (
                    <p>Loading images...</p>
                ) : images.length === 0 ? (
                    <p>No images found in "{folder}"</p>
                ) : (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {images.map((url, idx) => (
                            <img
                                key={idx}
                                src={url}
                                alt={`preview-${idx}`}
                                onClick={() => handleSelect(url)}
                                style={{
                                    width: 100,
                                    height: 100,
                                    objectFit: 'cover',
                                    borderRadius: 8,
                                    cursor: 'pointer',
                                    border: '2px solid transparent',
                                }}
                            />
                        ))}
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ImagePickerModal;
