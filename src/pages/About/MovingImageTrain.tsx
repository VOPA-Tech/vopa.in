import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

const MovingImageTrain = ({ images }) => {
    const swiperConfig = {
        loop: true,
        slidesPerView: 'auto' as const,
        spaceBetween: 30,
        speed: 8000 / 3,
        freeMode: {
            enabled: true,
            momentum: false,
        },
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: false,
        },
        allowTouchMove: false,
        grabCursor: false,
        modules: [Autoplay],
    };

    return (
        <div className="image-train-container">
            <style>
                {`
          .image-train-container {
            overflow: hidden;
            width: 100%;
            background: transparent;
            padding: 20px 0;
          }

          /* 🛡 Scoped styles (won't affect other components) */
          .image-train-container .swiper {
            width: 100%;
          }

          .image-train-container .swiper-slide {
            width: auto !important;
          }

          .image-train-container .passport-img {
            width: 400px;
            height: 320px;
            object-fit: cover;
            border-radius: 16px;
            box-shadow: 0 8px 16px rgba(0,0,0,0.25);
            transition: transform 0.4s ease;
          }

          .image-train-container .passport-img:hover {
            transform: scale(1.08);
          }

          @media (max-width: 768px) {
            .image-train-container .passport-img {
              width: 130px;
              height: 100px;
            }
          }
        `}
            </style>

            <Swiper {...swiperConfig}>
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img src={src} alt={`passport-${index}`} className="passport-img" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MovingImageTrain;
