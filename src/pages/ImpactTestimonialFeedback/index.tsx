import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// components
import { Navbar1, Navbar3 } from 'components/navbars';

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
import VSchoolAnalytics from './VSchoolAnalytics';

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
            <div className="header-7" style={{ background: 'url(/images/woodPanelHero.jpg' }}>
                <div className="overlay"></div>
                <Navbar3 navClass="navbar-dark text-white" fixedWidth buttonClass="btn-secondary btn-sm" />

                <Hero />
            </div>

            <section className="pt-6 pb-4 position-relative">
                <Container>
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
                            <Row className="mt-6" data-aos="fade-up">
                                {filteredPost3.map((ele) => (
                                    <Col xs={12} md={6} lg={4} className="text-center zindex-1">
                                        <Card className="rounded-lg shadow" data-aos="fade-up" data-aos-duration="2000">
                                            <Card.Body className="slider-container-body">
                                                <div className="video-container">
                                                    <iframe
                                                        width="100%"
                                                        height="315"
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
                                        </Card>
                                    </Col>
                                ))}
                            </Row>

                            {/* <Row className="mt-6" data-aos="fade-up">
                                <Col lg={8} className="h-100">
                                    <BlogPost1 post={post1[1]} />
                                </Col>

                                <Col lg={4}>
                                    <BlogPost3 post={post3[0]} />
                                </Col>
                            </Row> */}

                            {/* <Row className="mt-5">
                                <Col lg={12}>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <Link className="btn btn-sm btn-white" to="#">
                                            <i className="icon icon-xxs icon-left-arrow me-2"></i>
                                            Previous
                                        </Link>
                                        <Link className="btn btn-sm btn-white ms-2" to="#">
                                            Next<i className="icon-xxs icon-right-arrow ms-2"></i>
                                        </Link>
                                    </div>
                                </Col>
                            </Row> */}
                        </Col>
                    </Row>
                </Container>
            </section>
            <Testimonials />
            <VSchoolAnalytics />
            {/* footer */}
            <Footer1 />

            <BackToTop variant="success" />
        </>
    );
};

export default Blog;
