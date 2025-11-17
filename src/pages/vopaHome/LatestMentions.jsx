import { Card, Col, Container, Row } from 'react-bootstrap';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { fetchMediaMentions } from 'reduxFolder/mediaMentionsSlice';

const LatestMentions = () => {
    const dispatch = useDispatch();
    const mentions = useSelector((state) => state.mediaMentionsState?.mentions);

    useEffect(() => {
        dispatch(fetchMediaMentions());
    }, [dispatch]);

    // keep first 4 safe, drop falsy
    const items = useMemo(() => (Array.isArray(mentions) ? mentions.slice(0, 2).filter(Boolean) : []), [mentions]);

    const swiperConfig = {
        loop: true,
        spaceBetween: 24,
        autoplay: { delay: 5000, disableOnInteraction: false },
        roundLengths: true,
        navigation: { nextEl: '.swiper-custom-next', prevEl: '.swiper-custom-prev' },
        pagination: { clickable: true },
        breakpoints: { 0: { slidesPerView: 1 }, 768: { slidesPerView: 1 }, 1024: { slidesPerView: 1 } },
    };

    return (
        <>
            <style>{`
        .swiper-pagination { margin-top: 16px; }
        .swiper-pagination-bullet { background: #ccc; opacity: 1; }
        .swiper-pagination-bullet-active { background: #28c76f; }
        .equal-card { display: flex; flex-direction: column; height: 100%; }
        .equal-card-body { flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between; }
        .swiper-slide { height: auto !important; }
      `}</style>

            <section className="hero-4 pb-5  py-sm-5">
                <Container className="align-items-center ">
                    <Swiper
                        modules={[Navigation, Autoplay, Pagination]}
                        {...swiperConfig}
                        style={{ paddingBottom: '40px' }}>
                        {items.length === 0 ? (
                            // Fallback slide while loading or if empty
                            <SwiperSlide className="pt-4">
                                <Col xs={12} className="d-flex justify-content-center mb-4">
                                    <Card className="w-100">
                                        <div
                                            className="d-flex align-items-center justify-content-center"
                                            style={{ height: 220, background: '#f6f7f9' }}>
                                            <span className="text-muted">No media mentions yet.</span>
                                        </div>
                                    </Card>
                                </Col>
                            </SwiperSlide>
                        ) : (
                            items.map((mention, index) => {
                                const photo = mention?.photo || 'https://via.placeholder.com/300x200';
                                const title = mention?.title || 'Media mention';
                                const dateStr = mention?.date ? new Date(mention.date).toLocaleDateString() : '';
                                const tag = mention?.tag || '';

                                return (
                                    <SwiperSlide className="pt-4 " key={mention?._id || index}>
                                        <Col xs={12} className="d-flex justify-content-center mb-4 ">
                                            <a
                                                href={mention?.link || '/'}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ textDecoration: 'none', width: '100%' }}>
                                                <Card className="card-listing-item shadow-xl">
                                                    <div className="position-relative" style={{ overflow: 'hidden' }}>
                                                        <img
                                                            src={photo}
                                                            alt={title}
                                                            width={600}
                                                            height={400}
                                                            style={{
                                                                objectFit: 'cover',
                                                                display: 'block',
                                                            }}
                                                        />

                                                        {tag && (
                                                            <span
                                                                className={classNames(
                                                                    'card-badge',
                                                                    'position-absolute',
                                                                    'top-0',
                                                                    'end-0',
                                                                    'bg-primary',
                                                                    'text-white',
                                                                    'm-2',
                                                                    'px-2',
                                                                    'py-1',
                                                                    'rounded'
                                                                )}>
                                                                {tag}
                                                            </span>
                                                        )}

                                                        <div
                                                            className="position-absolute bottom-0 start-0 w-100"
                                                            style={{ background: 'rgba(0,0,0,0.9)', padding: '10px' }}>
                                                            <h6 className="text-white m-0">{title}</h6>
                                                            {dateStr && (
                                                                <span className="text-white m-0">{dateStr}</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </Card>
                                            </a>
                                        </Col>
                                    </SwiperSlide>
                                );
                            })
                        )}
                    </Swiper>
                </Container>
            </section>
        </>
    );
};

export default LatestMentions;
