import { Badge, Carousel } from 'react-bootstrap';
import FirstSlide from '../../assets/images/photos/1.jpg';
import SecondSlide from '../../assets/images/photos/2.jpg';
import ThirdSlide from '../../assets/images/photos/3.jpg';

const CaptionCarousel = () => {
    const slides = [
        {
            title1: 'The Problem',
            title2: 'Bringing quality education to millions in rural India.',
            description: 'What if every child could learn through a smartphone.',
            image: '/images/homePage/C1.webp',
        },
        {
            title1: 'The Possibility',
            title2: "Education in every child's mother tongue.",
            description: 'What if learning had no language barriers?',
            image: '/images/homePage/C2.webp',
        },
        {
            title1: 'The Solution',
            title2: 'Effective teaching and personalized learning despite classroom challenges.',

            description: 'What if teachers had the right tools to succeed?',
            image: '/images/homePage/C3.webp',
        },
        {
            title1: 'The Vision',
            title2: 'What if education ran on real-time data?',

            description: 'Timely insights for effective administrative decisions.',
            image: '/images/homePage/C4.webp',
        },
        {
            title1: 'The Vision',
            title2: 'Regular updates in their own language to bridge home and school.',

            description: "What if every parent was truly connected to their child's learning?",
            image: '/images/homePage/C5.webp',
        },
        {
            title1: 'The Vision',
            title2: 'Real-time learning and assistance on one platform.',

            description: 'What if frontline workers had AI mental health support?',
            image: '/images/homePage/C6.webp',
        },
        {
            title1: 'The Vision',
            title2: 'Daily self-help and professional care in local languages, all free.',

            description: 'What if mental health support was proactive and accessible?',
            image: '/images/homePage/C7.webp',
        },
    ];
    return (
        <Carousel controls indicators>
            {slides.map((slide, index) => (
                <Carousel.Item key={index} style={{ position: 'relative', height: '100vh' }}>
                    {/* Background Image */}
                    <img
                        src={slide.image}
                        alt={`Slide ${index + 1}`}
                        className="d-block w-100"
                        style={{ height: '100vh', objectFit: 'cover' }}
                    />

                    {/* Overlay */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            zIndex: 1,
                        }}></div>

                    {/* Caption */}
                    <Carousel.Caption
                        className="text-start"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '5%',
                            transform: 'translateY(-50%)',
                            zIndex: 2,
                        }}>
                        {/* <p className="highlight highlight-primary" mb-3>
                            {slide.title1}
                        </p> */}
                        <h1 className="display-2 text-white">{slide.title2}</h1>
                        <p className="display-4 text-light">{slide.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default CaptionCarousel;
