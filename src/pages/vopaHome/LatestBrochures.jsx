import { Card, Col, Container, Row } from 'react-bootstrap';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { fetchBrouchers } from 'reduxFolder/brouchersSlice';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const LatestBrochures = () => {
    const dispatch = useDispatch();
    const { brouchers } = useSelector((state) => state.brouchersState || { brouchers: [] });

    useEffect(() => {
        dispatch(fetchBrouchers());
    }, [dispatch]);

    const items = useMemo(() => (Array.isArray(brouchers) ? brouchers.filter(Boolean) : []), [brouchers]);

    const swiperConfig = {
        loop: items.length > 1,
        spaceBetween: 24,
        autoplay: items.length > 1 ? { delay: 5000, disableOnInteraction: false } : false,
        pagination: { clickable: true },
        navigation: items.length > 1,
        centeredSlides: items.length === 1,
        modules: [Navigation, Pagination, Autoplay],
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: Math.min(2, items.length) },
            1024: { slidesPerView: Math.min(3, items.length) },
        },
    };

    return (
        <section>
            <Container
                className="rounded-lg position-relative px-2 px-md-4 text-center"
                style={{ overflow: 'visible' }}>
                {/* 🔹 Title + subtitle (tight spacing like magazines) */}
                <Row className="text-center mb-2">
                    <Col>
                        <h2 className="fw-bold text-success mb-1">Latest Brochures</h2>
                        <p className="text-black mb-2">Explore our most recent updates and publications.</p>
                    </Col>
                </Row>

                {/* 🔹 Swiper */}
                <Swiper {...swiperConfig} className="brochure-swiper">
                    {items.length === 0 ? (
                        <SwiperSlide>
                            <div
                                className="d-flex justify-content-center align-items-center text-muted"
                                style={{ height: 180 }}>
                                No brochures available yet.
                            </div>
                        </SwiperSlide>
                    ) : (
                        items.map((item, index) => {
                            const { photoLink, title, docUrl } = item || {};
                            return (
                                <SwiperSlide key={item?._id || index}>
                                    <Card className="brochure-card mx-auto border-0">
                                        <a
                                            href={docUrl || '#'}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                textDecoration: 'none',
                                                display: 'block',
                                                position: 'relative',
                                            }}>
                                            {photoLink ? (
                                                <img
                                                    src={photoLink}
                                                    alt={title || 'Brochure'}
                                                    className="brochure-img"
                                                />
                                            ) : (
                                                <div className="brochure-placeholder" />
                                            )}

                                            {title && (
                                                <div className="brochure-overlay">
                                                    <h6 className="text-white m-0">{title}</h6>
                                                </div>
                                            )}
                                        </a>
                                    </Card>
                                </SwiperSlide>
                            );
                        })
                    )}
                </Swiper>
            </Container>

            <style>{`
                /* Pagination */
                .swiper-pagination-bullet {
                    background: #ccc;
                    opacity: 1;
                }
                .swiper-pagination-bullet-active {
                    background: #28c76f;
                }

                /* Tight spacing below subtitle */
                .brochure-swiper {
                    margin-top: 4px;
                    padding-bottom: 28px;
                }

                /* Card */
                .brochure-card {
                    border-radius: 10px;
                    overflow: hidden;
                    max-width: 250px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    transition: transform 0.25s ease, box-shadow 0.25s ease;
                }

                .brochure-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 10px 22px rgba(0,0,0,0.22);
                }

                /* Image */
                .brochure-img {
                    width: 100%;
                    aspect-ratio: 1 / 1;
                    object-fit: cover;
                    display: block;
                    transition: transform 0.4s ease;
                }

                .brochure-card:hover .brochure-img {
                    transform: scale(1.06);
                }

                .brochure-placeholder {
                    aspect-ratio: 1 / 1;
                    background: #e9ecef;
                }

                /* Overlay */
                .brochure-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: 10px;
                    background: rgba(0,0,0,0.75);
                }

                /* Mobile spacing fixes */
                @media (max-width: 768px) {
                    .brochure-swiper {
                        margin-top: 2px;
                        padding-bottom: 22px;
                    }
                }

                @media (max-width: 480px) {
                    .brochure-swiper {
                        margin-top: 2px;
                        padding-bottom: 18px;
                    }
                }
            `}</style>
        </section>
    );
};

export default LatestBrochures;
