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
        loop: items.length > 1, // ✅ only loop when multiple brochures
        spaceBetween: 24,
        autoplay: items.length > 1 ? { delay: 5000, disableOnInteraction: false } : false,
        pagination: { clickable: true },
        navigation: items.length > 1, // hide arrows if only one
        centeredSlides: items.length === 1, // ✅ center single item
        modules: [Navigation, Pagination, Autoplay],
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: Math.min(2, items.length) },
            1024: { slidesPerView: Math.min(3, items.length) },
        },
    };

    return (
        <section className=" position-relative">
            <Container>
                <Row className="mb-6 text-center">
                    <Col>
                        <h2 className="fw-bold text-success mb-2">Latest Brochures</h2>
                        <p className="text-black">Explore our most recent updates and publications.</p>
                    </Col>
                </Row>

                <Swiper {...swiperConfig} style={{ paddingBottom: '40px' }}>
                    {items.length === 0 ? (
                        <SwiperSlide>
                            <div className="d-flex justify-content-center align-items-center" style={{ height: 200 }}>
                                <span className="text-muted">No brochures available yet.</span>
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
                                            style={{ textDecoration: 'none', display: 'block', position: 'relative' }}>
                                            {photoLink ? (
                                                <img
                                                    src={photoLink}
                                                    alt={title || 'Brochure'}
                                                    className="brochure-img"
                                                />
                                            ) : (
                                                <div style={{ height: 300, background: '#e9ecef' }} />
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
                .swiper-pagination-bullet {
                    background: #ccc;
                    opacity: 1;
                }
                .swiper-pagination-bullet-active {
                    background: #28c76f;
                }

                .brochure-card {
                    border-radius: 10px;
                    overflow: hidden;
                    transition: transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    cursor: pointer;
                    max-width: 350px;
                }
                .brochure-card:hover {
                    transform: scale(1.03);
                    box-shadow: 0 12px 25px rgba(0,0,0,0.25);
                }

                .brochure-img {
                    width: 100%;
                    height: 35 0px;
                    object-fit: cover;
                    display: block;
                    transition: transform 0.5s ease;
                }
                .brochure-card:hover .brochure-img {
                    transform: scale(1.1);
                }

                .brochure-overlay {
                    background: rgba(0, 0, 0, 0.75);
                    padding: 10px;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                }
            `}</style>
        </section>
    );
};

export default LatestBrochures;
