import { Badge, Carousel } from 'react-bootstrap';
import FirstSlide from '../../assets/images/photos/1.jpg';
import SecondSlide from '../../assets/images/photos/2.jpg';
import ThirdSlide from '../../assets/images/photos/3.jpg';

const CaptionCarousel = () => {
    const slides = [
        {
            title1: 'The Problem',
            description: 'Bringing quality education to millions in rural India.',
            title2: 'What if every child could learn through a smartphone ?',
            image: 'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758193702000_c5.webp',
        },
        {
            title1: 'The Possibility',
            description: "Education in every child's mother tongue.",
            title2: 'What if learning had no language barriers?',
            image: 'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758193702012_c2.webp',
        },
        {
            title1: 'The Solution',
            description: 'Effective teaching and personalized learning despite classroom challenges.',

            title2: 'What if teachers had the right tools to succeed?',
            image: 'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758193702015_c3.webp',
        },
        {
            title1: 'The Vision',
            title2: 'What if education ran on real-time data?',

            description: 'Timely insights for effective administrative decisions.',
            image: 'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758193702009_c4.webp',
        },
        {
            title1: 'The Vision',
            description: 'Regular updates in their own language to bridge home and school.',

            title2: "What if every parent was truly connected to their child's learning?",
            image: 'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758193702000_c5.webp',
        },
        {
            title1: 'The Vision',
            title2: 'Real-time learning and assistance on one platform.',

            description: 'What if frontline workers had AI mental health support?',
            image: 'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758193702003_c7.webp',
        },
        {
            title1: 'The Vision',
            description: 'Daily self-help and professional care in local languages, all free.',

            title2: 'What if mental health support was proactive and accessible?',
            image: 'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758193702003_c7.webp',
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
