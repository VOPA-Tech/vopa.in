import { Card } from 'react-bootstrap';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// dummy data
import { Slide } from './types';

type SwiperSliderProps = {
    slides: Slide[];
    hasLogo?: boolean;
};

const SwiperSlider2 = ({ slides, hasLogo }: SwiperSliderProps) => {
    const swiperConfig = {
        loop: true,
        spaceBetween: 24,
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 2,
            },
        },
        roundLengths: true,
        slidesPerView: 1,
        navigation: { nextEl: '.swiper-custom-next', prevEl: '.swiper-custom-prev' },
    };

    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Autoplay]}
            {...swiperConfig}>
            {(slides || []).map((slide, index) => {
                return (
                    <SwiperSlide key={index.toString()}>
                        <Card className="mb-0 border rounded">
                            <Card.Body className="testimonial-body shadow">
                                <p className="quotation-mark text-muted mb-0">“</p>
                                <h4 className="fw-normal mb-3 mt-0">{slide.statement}</h4>
                                <h4 className="fw-normal mb-3 mt-0">{slide.summary}</h4>
                                <hr />
                                <div className="d-flex pt-2 align-items-center">
                                    {true && <img src={slide.logo} alt="logo" height="38" />}
                                </div>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default SwiperSlider2;
