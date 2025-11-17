import { Card, Col } from 'react-bootstrap';
import { useState } from 'react';

const BlogPost3 = ({ post }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Prevent rendering issues
    if (!post || typeof post !== 'object') return null;

    const { photoLink, title, docUrl } = post;

    return (
        <Col xs={6} sm={4} md={4} lg={3} className="d-flex justify-content-center mb-4">
            <a
                href={docUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    textDecoration: 'none',
                    width: '100%',
                    display: 'block',
                }}>
                <Card
                    className="card-listing-item"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{
                        // minHeight: 350,
                        transition: 'all 0.25s ease-in-out',
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                        boxShadow: isHovered ? '0 12px 25px rgba(0, 0, 0, 0.25)' : '0 2px 10px rgba(0, 0, 0, 0.1)',
                        borderRadius: 10,
                        overflow: 'hidden',
                        cursor: 'pointer',
                    }}>
                    {photoLink ? (
                        <img
                            src={photoLink}
                            alt={title || 'Post Image'}
                            style={{
                                width: '100%',
                                // height: 340,
                                objectFit: 'cover',
                                display: 'block',
                                transition: 'transform 0.5s ease',
                                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                            }}
                        />
                    ) : (
                        <div
                            style={{
                                width: '100%',
                                // height: 220,
                                background: '#e9ecef',
                            }}
                        />
                    )}

                    {title && (
                        <div
                            style={{
                                background: 'rgba(0, 0, 0, 0.75)',
                                padding: '10px',
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                            }}>
                            <h6 className="text-white m-0">{title}</h6>
                        </div>
                    )}
                </Card>
            </a>
        </Col>
    );
};

export default BlogPost3;
