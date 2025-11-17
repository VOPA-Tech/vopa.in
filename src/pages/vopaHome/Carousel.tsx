import { Carousel } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

const CaptionCarousel = () => {
    const successGreen = '#28c76f';

    const hoverStyle = (e) => (e.currentTarget.style.color = successGreen);
    const unhoverStyle = (e) => (e.currentTarget.style.color = 'inherit');

    const slides = [
        {
            title1: 'The Problem',
            description: 'Bringing quality education to millions in rural India.',
            title2: 'What if every child could learn through a smartphone ?',
            image: 'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758194262069_vschool.webp',
        },
        {
            title1: 'The Possibility',
            description: "Education in every child's mother tongue.",
            title2: 'What if learning had no language barriers?',
            image: 'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1762508007361_multi.jpg',
        },
        {
            title1: 'The Solution',
            description: 'Effective teaching and personalized learning despite classroom challenges.',
            title2: 'What if teachers had the right tools to succeed?',
            image: 'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1763009556604_tv.jpg',
        },
        {
            title1: 'The Vision',
            title2: 'What if education ran on real-time data?',
            description: 'Timely insights for effective administrative decisions.',
            image: 'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1762496908621_shared-image-5.jpg',
        },
        {
            title1: 'The Vision',
            description: 'Regular updates in their own language to bridge home and school.',
            title2: "What if every parent was truly connected to their child's learning?",
            image: 'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1762496628695_shared-image-9.jpg',
        },
        {
            title1: 'The Vision',
            title2: 'Real-time learning and assistance on one platform.',
            description: 'What if frontline workers had AI mental health support?',
            image: 'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1762428778049_whatiffrontline.jpg',
        },
        {
            title1: 'The Vision',
            description: 'Daily self-help and professional care in local languages, all free.',
            title2: 'What if mental health support was proactive and accessible?',
            image: 'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1762430022475_img_8447.webp',
        },
    ];

    return (
        <Carousel controls indicators>
            {slides.map((slide, index) => (
                <Carousel.Item key={index} style={{ position: 'relative', height: '100vh' }}>
                    {/* Background Image */}
                    <img
                        src={slide.image}
                        alt={`Slide ${slide.title1}`}
                        width={1920}
                        height={1080}
                        className="d-block w-100"
                        style={{ height: '100vh', objectFit: 'cover' }}
                    />

                    {/* Overlay (non-blocking) */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            zIndex: 0,
                            pointerEvents: 'none', // allows clicking through
                        }}></div>

                    {/* Caption (Left Center) */}
                    <Carousel.Caption
                        className="text-start"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '5%',
                            transform: 'translateY(-50%)',
                            zIndex: 1,
                            pointerEvents: 'auto',
                        }}>
                        <h3 className="display-2 text-white">{slide.title2}</h3>
                        <p className="display-4 text-light">{slide.description}</p>
                    </Carousel.Caption>

                    {/* Social Links (Bottom Center) */}
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '40px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            zIndex: 5,
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '30px',
                        }}>
                        {[
                            { href: 'https://www.facebook.com/contact.vopa', icon: 'facebook' },
                            { href: 'https://www.youtube.com/channel/UCjLnfmyuCWK5CXD1n1XD6ig', icon: 'youtube' },
                            { href: 'https://in.linkedin.com/company/vowels-of-the-people', icon: 'linkedin' },
                            {
                                href: 'https://www.instagram.com/accounts/login/?next=%2Fvopa.vschool%2F&source=omni_redirect',
                                icon: 'instagram',
                            },
                        ].map((item, i) => (
                            <a
                                key={i}
                                href={item.href}
                                rel="noreferrer"
                                target="_blank"
                                style={{
                                    color: 'white',
                                    transition: 'color 0.3s ease, transform 0.3s ease',
                                    fontSize: '28px',
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.color = successGreen;
                                    e.currentTarget.style.transform = 'scale(1.2)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.color = 'white';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}>
                                <FeatherIcon icon={item.icon} size={28} />
                            </a>
                        ))}
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default CaptionCarousel;
