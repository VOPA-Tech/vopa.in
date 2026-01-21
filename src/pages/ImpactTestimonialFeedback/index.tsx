import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// components
import { Navbar3 } from 'components/navbars';

import { Footer1, Footer2 } from 'components/footer';
import BackToTop from 'components/BackToTop';

import Hero from './Hero';

import SubscriptionForm from './SubscriptionForm';
import Testimonials from './Testimonials';
// dummy data

// images
import hero from 'assets/images/blog/hero.jpg';
import TabsExample from './Tabs';
import { useState } from 'react';
import { post3 } from './data';

const ytLinks = [
    'https://www.youtube.com/embed/z1tAHi1OJMs',
    'https://www.youtube.com/embed/csdHvllnV20',
    'https://www.youtube.com/embed/RU521uaqZA0',
    'https://www.youtube.com/embed/yi5vg94xsn0',
    'https://www.youtube.com/embed/FTZ2rDTrHtg',
];

const Blog = () => {
    const [activeTag, setActiveTag] = useState('All');
    const tags = ['All', 'Impact Stories', 'School Admin Says', 'Govt Officials', 'Celebrity Support'];

    const filteredPost3 = activeTag === 'All' ? post3 : post3.filter((p) => p.tag.value === activeTag);
    return (
        <>
            <div className="bg-paper-texture">
                <Navbar3 navClass="navbar-light " fixedWidth buttonClass="btn-secondary btn-sm" />

                <section className="pt-6 pb-4 position-relative ">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={12}>
                                <h1 className="hero-title mt-0">Feedback & Testimonials</h1>
                            </Col>
                        </Row>
                        <Row className="justify-content-lg-between">
                            <Col lg={12}>
                                <div className="d-flex align-items-center mb-5">
                                    <h5 className="me-2 fw-medium">Tags:</h5>
                                    <div>
                                        {tags.map((tag) => (
                                            <button
                                                key={tag}
                                                onClick={() => setActiveTag(tag)}
                                                className={`btn btn-sm mb-1 me-2 ${
                                                    activeTag === tag ? 'btn-success' : 'btn-white'
                                                }`}>
                                                {tag}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </Col>

                            <Col lg={12}>
                                <Row className="" data-aos="fade-up">
                                    {filteredPost3.map((ele) => (
                                        <Col
                                            xs={6}
                                            md={6}
                                            lg={4}
                                            className="text-center zindex-1"
                                            data-aos="fade-up"
                                            data-aos-duration="2000">
                                            <Card.Body className="slider-container-body">
                                                <div className="video-container">
                                                    <iframe
                                                        width="100%"
                                                        // height="315"
                                                        src={ele.link}
                                                        title="YouTube video"
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                    />
                                                </div>
                                                {/* <div className="slider">
                                        <SwiperSlider3 />
                                    </div> */}
                                            </Card.Body>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    <Testimonials />
                </section>
            </div>

            {/* footer */}
            <Footer1 />

            <BackToTop variant="success" />
        </>
    );
};

export default Blog;
