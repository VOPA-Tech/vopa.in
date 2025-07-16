import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import { Navbar3 } from 'components/navbars';
import { Footer1 } from 'components/footer';
import BackToTop from 'components/BackToTop';
import Hero from './Hero';
import BlogPost3 from './BlogPost3';
import BlogPost1 from './BlogPost1';
import VSchoolAnalytics from './VSchoolAnalytics';
import { post3 } from './data';
import { loadBlogs } from 'reduxFolder/appSlice';

const Blog = () => {
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.appState.blogs);
    const isBlogsLoading = useSelector((state) => state.appState.isBlogsLoading);

    useEffect(() => {
        if (!blogs.length) {
            dispatch(loadBlogs());
        }
    }, [dispatch, blogs.length]);

    return (
        <>
            <div className="header-7" style={{ background: 'url(/images/woodPanelHero.jpg)' }}>
                <div className="overlay"></div>
                <Navbar3 navClass="navbar-dark text-white" fixedWidth buttonClass="btn-secondary btn-sm" />
                <Hero />
            </div>

            <section className="pt-6 pb-4 position-relative">
                <Container>
                    <Row className="justify-content-lg-between">
                        <Col lg={12}>
                            <Row className="mt-6" data-aos="fade-up">
                                {post3.map((post, index) => (
                                    <Col lg={4} key={index}>
                                        <BlogPost3 post={post} />
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>

                    {/* Only show blogs if they exist */}
                    {!isBlogsLoading && Array.isArray(blogs) && blogs.length > 0 && (
                        <Row className="mt-6" data-aos="fade-up">
                            {blogs.map((blog, index) => (
                                <Col lg={6} key={index}>
                                    <BlogPost1 post={blog} />
                                </Col>
                            ))}
                        </Row>
                    )}
                </Container>
            </section>

            <VSchoolAnalytics />
            <Footer1 />
            <BackToTop variant="success" />
        </>
    );
};

export default Blog;
