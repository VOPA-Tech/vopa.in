import { Card, Col, Row } from 'react-bootstrap';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type SwiperSliderProps = {
    slides: any[];
};

const SwiperSliderProjectCards = ({ slides }: SwiperSliderProps) => {
    const swiperConfig = {
        loop: true,
        spaceBetween: 24,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        roundLengths: true,
        navigation: {
            nextEl: '.swiper-custom-next',
            prevEl: '.swiper-custom-prev',
        },
        pagination: {
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    };

    return (
        <>
            <style>
                {`
          .swiper-pagination {
            margin-top: 16px;
          }
          .swiper-pagination-bullet {
            background: #ccc;
            opacity: 1;
          }
          .swiper-pagination-bullet-active {
            background: #28c76f;
          }

          .equal-card {
            display: flex;
            flex-direction: column;
            height: 100%;
          }

          .equal-card-body {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .swiper-slide {
            height: auto !important;
          }
        `}
            </style>

            <Swiper modules={[Navigation, Autoplay, Pagination]} {...swiperConfig} style={{ paddingBottom: '40px' }}>
                {(slides || []).map((project, index) => (
                    <SwiperSlide className="pt-4" key={index.toString()}>
                        <Card
                            className="shadow-lg rounded-lg equal-card"
                            style={{
                                border: '4px solid #28c76f',
                                borderRadius: '1rem',
                                minHeight: '100%', // force equal height
                            }}
                            data-aos="fade-up"
                            data-aos-duration="500">
                            <div className="card-img-top-overlay rounded-lg">
                                <div className="overlay rounded-lg"></div>
                                <span className="card-badge top-right bg-success text-white">{project.field}</span>
                                <div className="position-relative">
                                    <img
                                        width={400}
                                        height={250}
                                        src={project.image}
                                        alt="project"
                                        className="card-img-top rounded-lg"
                                    />
                                </div>
                            </div>

                            <Card.Body className="equal-card-body">
                                <div>
                                    <Row className="align-items-center mt-2">
                                        <Col xs="auto">
                                            <p className="mb-0"></p>
                                        </Col>
                                    </Row>

                                    <h4 className="mt-2">
                                        <Link
                                            to={project.link}
                                            style={{ color: 'inherit' }}
                                            onMouseOver={(e) => (e.currentTarget.style.color = '#28c76f')}
                                            onMouseOut={(e) => (e.currentTarget.style.color = 'inherit')}
                                            className="card-title-link">
                                            {project.title}
                                        </Link>
                                    </h4>

                                    <p className="text-muted mb-1">
                                        {project.description.slice(0, 200)}...
                                        <Link
                                            style={{ color: 'inherit' }}
                                            onMouseOver={(e) => (e.currentTarget.style.color = '#28c76f')}
                                            onMouseOut={(e) => (e.currentTarget.style.color = 'inherit')}
                                            to={project.link}>
                                            Read More
                                        </Link>
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default SwiperSliderProjectCards;
