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
            <Container className="rounded-lg position-relative px-4 text-center" style={{ overflow: 'visible' }}>
                <Row className="mb-4 text-center">
                    <Col>
                        <h2 className="fw-bold text-success mb-2">Latest Magazines</h2>
                        <p className="text-black">
                            Discover our most recent publications, insights, and impact stories.
                        </p>
                    </Col>
                </Row>

                {/* --- State handlers --- */}
                {loading && (
                    <div className="py-5 text-center text-muted">
                        <FeatherIcon icon="loader" className="icon-spin" />
                        <div className="mt-2 small">Loading magazines...</div>
                    </div>
                )}

                {error && (
                    <div className="py-5 text-center text-danger">
                        <FeatherIcon icon="alert-circle" />
                        <div className="mt-2 small">Failed to load magazines. Please try again later.</div>
                    </div>
                )}

                {!loading && !error && items.length === 0 && (
                    <div className="py-5 text-center text-muted">
                        <FeatherIcon icon="book-open" />
                        <div className="mt-2 small">No magazines uploaded yet.</div>
                    </div>
                )}

                {!loading && !error && items.length > 0 && (
                    <div className="magazine-fan d-flex justify-content-center align-items-center py-4 position-relative">
                        {items.map((mag, index) => {
                            const cover =
                                mag?.coverUrl ||
                                mag?.photoLink ||
                                mag?.photoUrl ||
                                'https://via.placeholder.com/400x600?text=Magazine';
                            const title = mag?.title || 'Magazine';
                            const pdfUrl = mag?.docUrl || mag?.link || '#';

                            // Fan angles + offsets
                            const rotation = index === 0 ? '-10deg' : index === 1 ? '0deg' : '10deg';
                            const zIndex = 10 - Math.abs(index - 1);
                            const offsetX = index === 0 ? '-40px' : index === 2 ? '40px' : '0px';

                            return (
                                <div
                                    key={mag?._id || index}
                                    className="magazine-card-wrapper"
                                    style={{
                                        transform: `rotate(${rotation}) translateX(${offsetX})`,
                                        zIndex,
                                        marginLeft: index !== 0 ? '-90px' : '0',
                                    }}>
                                    <Link
                                        to={pdfUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none' }}>
                                        <Card className="magazine-card border-0 position-relative">
                                            <div className="overflow-hidden">
                                                <img
                                                    src={cover}
                                                    alt={title}
                                                    className="w-100"
                                                    style={{
                                                        height: '360px',
                                                        objectFit: 'cover',
                                                    }}
                                                />
                                            </div>
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
                    height: 460px;
                    gap: 0;
                }

                .magazine-card {
                    width: 260px;
                    border-radius: 10px;
                    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
                    background-color: #fff;
                    transition: transform 0.4s ease, box-shadow 0.4s ease;
                }

                .magazine-card-wrapper {
                    position: relative;
                    transition: transform 0.4s ease, z-index 0.3s ease;
                }

                .magazine-card-wrapper:hover {
                    transform: scale(1.07) rotate(0deg) translateY(-10px);
                    z-index: 20 !important;
                }

                .magazine-card:hover img {
                    transform: scale(1.1);
                    transition: transform 0.4s ease;
                }

                .icon-spin {
                    animation: spin 1.2s linear infinite;
                }

                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                /* ✅ Keep overlapping on small screens too */
                @media (max-width: 768px) {
                    .magazine-fan {
                        flex-wrap: nowrap;
                        justify-content: center;
                        transform: scale(0.85);
                    }
                    .magazine-card {
                        width: 220px;
                        height: auto;
                    }
                    .magazine-card-wrapper {
                        margin-left: -70px !important;
                    }
                }

                @media (max-width: 480px) {
                    .magazine-fan {
                        transform: scale(0.75);
                    }
                    .magazine-card {
                        width: 200px;
                    }
                    .magazine-card-wrapper {
                        margin-left: -60px !important;
                    }
                }
            `}</style>
        </>
    );
};

export default LatestMagazines;
