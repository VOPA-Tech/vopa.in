import { Row, Col, Container, Badge, Button } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// components

import { Slide } from './types';
import SwiperSlider2 from './SwiperSlider2';

// dummy data

const slides: Slide[] = [
    {
        statement:
            'I used to struggle with English and math, but the V-School app made it easier. Now, I’m excited to learn every day, and I even topped my class.',
        summary:
            'Center for Effective Governance of Indian States (CEGIS) is collaborating with VOPA to provide evidence-based insights and solutions. Their support strengthens VOPA’s programs, ensuring best practices are applied, and advocating for policy changes.',
        logo: 'https://uploads.justech-ai.in/vopa-website/Nipun Page Website/1758273494345_cegis.png',
    },
    {
        statement:
            'The V-School app has everything in Marathi, which helps our students understand better. It’s made learning fun and accessible, even for kids who don’t have much support at home.',
        summary:
            'Room to Read India collaborates with VOPA to provide curated multilingual literacy content from their Literacy Cloud platform, enriching VOPA’s V-School and NIPUN Maharashtra apps with quality educational resources for early-grade students. This partnership fosters literacy development in English, Marathi, Urdu,  and Hindi, ensuring culturally relevant and accessible learning materials. Together, we aim to enhance student engagement and support state education standards through continuous content updates and seamless integration, empowering children across Maharashtra with improved reading opportunities.',
        logo: 'https://uploads.justech-ai.in/vopa-website/Nipun Page Website/1758273494658_roomtoread.png',
    },
];
const Testimonials = () => {
    return (
        <section className="section pt-5 pb-7 py-sm-9 position-relative features-4">
            <Container>
                <Row>
                    {' '}
                    <h1 className="display-5 fw-medium d-flex mb-5 justify-content-center">Partnerships</h1>
                </Row>

                <Row className="testimonials-2" data-aos="fade-up" data-aos-duration="200">
                    <div className="slider">
                        <SwiperSlider2 slides={slides} />
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default Testimonials;
