import { useState, useEffect } from 'react';
import { Card, Col, Container, Row, Button, Dropdown, ButtonGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

// components
import { LightBox } from 'components/LightBox';
import { fetchMediaKitItems } from 'reduxFolder/mediaKitSlice';

const Culture = () => {
    const dispatch: any = useDispatch();
    const { mediaKitItems, loading } = useSelector((state: any) => state.mediaKitState);

    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    useEffect(() => {
        dispatch(fetchMediaKitItems());
    }, [dispatch]);

    const openLightbox = (index: number) => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    const closeLightbox = () => setIsOpen(false);
    const moveNext = () => setPhotoIndex((prev) => (prev + 1) % (mediaKitItems?.length || 1));
    const movePrev = () =>
        setPhotoIndex((prev) => (prev + (mediaKitItems?.length || 1) - 1) % (mediaKitItems?.length || 1));

    const handleDownload = (url: string) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = url.split('/').pop() || 'image';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleCopyLink = (url: string) => {
        navigator.clipboard.writeText(url);
        alert('Image link copied to clipboard!');
    };

    if (loading) return <p>Loading Media Kit...</p>;

    return (
        <section className="py-6 position-relative">
            <Container>
                <Row>
                    <Col className="text-start">
                        <h1 className="display-4 fw-semibold">Media Kit</h1>
                        <h2 className="display-5 text-muted mx-auto">
                            Explore our latest events, press images, and media assets.
                        </h2>
                    </Col>
                </Row>

                <div className="mt-4">
                    <Row data-aos="fade-up">
                        {mediaKitItems?.map((item: any, idx: number) => (
                            <Col key={item._id} className="mb-4 position-relative">
                                <p className="">{item.title}</p>
                                <img
                                    src={item.photoUrl}
                                    alt={item.caption || item.title || ''}
                                    className="img-fluid rounded-sm"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => openLightbox(idx)}
                                />

                                {/* Action Buttons */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '50px',
                                        right: '25px',
                                        zIndex: 5,
                                    }}>
                                    <Dropdown as={ButtonGroup}>
                                        <Dropdown.Toggle variant="success" id="dropdown-split-basic" size="sm">
                                            ⋮
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleDownload(item.photoUrl)}>
                                                Download
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleCopyLink(item.photoUrl)}>
                                                Copy Link
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>

                {/* Lightbox */}
                {isOpen && (
                    <LightBox
                        images={mediaKitItems.map((i: any) => ({
                            src: i.photoUrl,
                            caption: i.caption || i.title || '',
                        }))}
                        photoIndex={photoIndex}
                        closeLightbox={closeLightbox}
                        moveNext={moveNext}
                        movePrev={movePrev}
                    />
                )}
            </Container>
        </section>
    );
};

export default Culture;
