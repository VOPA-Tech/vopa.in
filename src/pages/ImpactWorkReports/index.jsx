import { Col, Container, Row } from 'react-bootstrap';

// components
import { Navbar3 } from 'components/navbars';

import { Footer1 } from 'components/footer';
import BackToTop from 'components/BackToTop';

import Hero from './Hero';

import BlogPost3 from './BlogPost3';

import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchWorkReports } from 'reduxFolder/workReportsSlice';

const Blog = () => {
    const dispatch = useDispatch();
    const workReports = useSelector((state) => state.workReportsState.reports);
    const isWorkReportsLoading = useSelector((state) => state.workReportsState.loading);
    const [activeTag, setActiveTag] = useState('All');
    const tags = ['All', 'Student Impact Stories', 'Teacher Impact Stories', 'Annual Reports'];

    const filteredPost3 = activeTag === 'All' ? workReports : workReports.filter((p) => p.tag === activeTag);

    useEffect(() => {
        if (!workReports.length) {
            dispatch(fetchWorkReports());
        }
    }, [dispatch, workReports.length]);
    return (
        <>
            <div className="header-7">
                <Navbar3 navClass="navbar-light " fixedWidth buttonClass="btn-secondary btn-sm" />
            </div>

            <section className="pt-6 pb-4 position-relative bg-paper-texture">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={12}>
                            <h1 className="hero-title mt-0">Work Reports</h1>
                        </Col>
                    </Row>
                    <Row className="justify-content-lg-between">
                        <Col lg={12}>
                            <div className="d-flex align-items-center mb-5">
                                <h5 className="me-2 fw-medium">Tags:</h5>
                                <div>
                                    {!isWorkReportsLoading &&
                                        tags.map((tag) => (
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
                    </Row>
                    <Row className="mt-3 d-flex justify-content-start" data-aos="fade-up">
                        {filteredPost3.map((post) => (
                            <BlogPost3 post={post} />
                        ))}
                    </Row>
                </Container>
            </section>

            {/* footer */}
            <Footer1 />

            <BackToTop variant="success" />
        </>
    );
};

export default Blog;
