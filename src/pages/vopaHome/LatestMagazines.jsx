import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { fetchMagazines } from 'reduxFolder/magazinesSlice';

const LatestMagazines = () => {
    const dispatch = useDispatch();
    const { magazines, loading, error } = useSelector((state) => state.magazinesState);

    useEffect(() => {
        dispatch(fetchMagazines());
    }, [dispatch]);

    const items = useMemo(() => {
        if (!Array.isArray(magazines)) return [];
        return magazines.slice(0, 3).filter(Boolean);
    }, [magazines]);

    return (
        <>
            <Container
                className="rounded-lg position-relative px-2 px-md-4 text-center"
                style={{ overflow: 'visible' }}>
                <Row className="text-center mb-2">
                    <Col>
                        <h2 className="fw-bold text-success mb-1">Latest Magazines</h2>
                        <p className="text-white mb-2">
                            Discover our most recent publications, insights, and impact stories.
                        </p>
                    </Col>
                </Row>

                {loading && (
                    <div className="py-4 text-center text-muted">
                        <FeatherIcon icon="loader" className="icon-spin" />
                        <div className="mt-2 small">Loading magazines...</div>
                    </div>
                )}

                {error && (
                    <div className="py-4 text-center text-danger">
                        <FeatherIcon icon="alert-circle" />
                        <div className="mt-2 small">Failed to load magazines.</div>
                    </div>
                )}

                {!loading && !error && items.length === 0 && (
                    <div className="py-4 text-center text-muted">
                        <FeatherIcon icon="book-open" />
                        <div className="mt-2 small">No magazines uploaded yet.</div>
                    </div>
                )}

                {!loading && !error && items.length > 0 && (
                    <div className="magazine-fan d-flex justify-content-center align-items-center">
                        {items.map((mag, index) => {
                            const cover =
                                mag?.coverUrl ||
                                mag?.photoLink ||
                                mag?.photoUrl ||
                                'https://via.placeholder.com/400x400?text=Magazine';
                            const pdfUrl = mag?.docUrl || mag?.link || '#';

                            return (
                                <div
                                    key={mag?._id || index}
                                    className="magazine-card-wrapper"
                                    style={{
                                        transform: `translateY(${index * 4}px) rotate(${
                                            index === 0 ? '-2deg' : index === 1 ? '-4deg' : '-6deg'
                                        })`,
                                        zIndex: 30 - index * 5,
                                    }}>
                                    <Link to={pdfUrl} target="_blank" rel="noopener noreferrer">
                                        <Card className="magazine-card border-0">
                                            <img
                                                src={cover}
                                                alt="Magazine"
                                                className="w-100"
                                                style={{
                                                    aspectRatio: '1 / 1',
                                                    objectFit: 'cover',
                                                }}
                                            />
                                        </Card>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                )}
            </Container>

            <style>{`
                .magazine-fan {
                    position: relative;
                    overflow: visible;
                    margin-top: 4px;
                }

                .magazine-card {
                    width: 240px;
                    border-radius: 10px;
                    box-shadow: 0 6px 18px rgba(0,0,0,0.25);
                    background: #fff;
                }

                .magazine-card-wrapper {
                    position: relative;
                    transform-origin: center center;
                    transition: transform 0.4s ease, z-index 0.3s ease;
                }

                .magazine-card-wrapper:not(:first-child) {
                    margin-left: -150px;
                }

                .magazine-card-wrapper:hover {
                    transform: translateY(-10px) rotate(0deg) scale(1.05) !important;
                    z-index: 50 !important;
                }

                @media (max-width: 768px) {
                    .magazine-card {
                        width: 260px;
                    }
                    .magazine-card-wrapper:not(:first-child) {
                        margin-left: -110px;
                    }
                }

                @media (max-width: 480px) {
                    .magazine-card {
                        width: 320px;
                    }
                    .magazine-card-wrapper:not(:first-child) {
                        margin-left: -80px;
                    }
                }

                @media (max-width: 420px) {
                    .magazine-fan {
                        flex-direction: column;
                        gap: 6px;
                        margin-top: 2px;
                    }
                    .magazine-card-wrapper {
                        margin-left: 0 !important;
                        transform: none !important;
                    }
                }

                .icon-spin {
                    animation: spin 1.2s linear infinite;
                }

                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </>
    );
};

export default LatestMagazines;
