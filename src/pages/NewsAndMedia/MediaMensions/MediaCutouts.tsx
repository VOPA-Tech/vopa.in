import { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// types
type CultureProps = {
    mediaCutouts: any[];
};

const MediaCutouts = ({ mediaCutouts }: CultureProps) => {
    return (
        <section className="p-lg-7 position-relative bg-soft">
            <Container
                style={{
                    backgroundImage: `linear-gradient(rgba(49, 63, 49, 0.3), rgba(22, 23, 21, 0.9)), 
                        url('https://uploads.justech-ai.in/vopa-website/NewsAndMediaPage/1758273220833_woodtable.webp')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
                className="rounded-lg position-relative shadow-lg">
                <Row>
                    <Col className="text-center">
                        <img
                            style={{ maxWidth: '150px' }}
                            src="https://uploads.justech-ai.in/vopa-website/NewsAndMediaPage/1758273220529_tajakhabar.png"
                            alt="Logo"
                            className="rounded-sm m-2"
                        />
                    </Col>
                </Row>

                <div className="mt-5">
                    <Row data-aos="fade-up" className="g-1 g-sm-3">
                        {(mediaCutouts || []).map((cutout, index) => (
                            <Col md={4} lg={4} sm={6} xs={6} key={index.toString()}>
                                <Link
                                    to="#"
                                    onClick={() => window.open(cutout.photoUrl, '_blank')} // Open in a new window/tab
                                    className="image-popup"
                                    title={cutout.title}>
                                    <Card
                                        key={index}
                                        className="rounded-sm media-card"
                                        style={{
                                            maxHeight: '100px',
                                            overflow: 'hidden',
                                            marginTop: '-40px',
                                            boxShadow: '0 -4px 6px -2px rgba(19, 19, 19, 1)',
                                            transform:
                                                window.innerWidth >= 768
                                                    ? index % 2 === 0
                                                        ? 'rotate(-1deg) translateX(-4px)'
                                                        : 'rotate(1deg) translateX(4px)'
                                                    : 'none',
                                            backgroundImage: `repeating-linear-gradient(
                                                to bottom,
                                                #333 0px,
                                                #333 2px,
                                                transparent 2px,
                                                transparent 5px
                                            )`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: '100% 10px',
                                            // backgroundPosition: 'top',
                                        }}>
                                        <Card.Body className="p-1">
                                            <img
                                                src={cutout.photoUrl || 'https://via.placeholder.com/40'}
                                                alt={cutout.title}
                                                className="img-fluid rounded-sm"
                                            />
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default MediaCutouts;
