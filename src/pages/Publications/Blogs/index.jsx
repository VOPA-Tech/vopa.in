import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import { Navbar3 } from 'components/navbars';
import { Footer1 } from 'components/footer';
import BackToTop from 'components/BackToTop';

import BlogPost1 from './BlogPost1';

import { post3 } from './data';
import { fetchBlogs } from 'reduxFolder/blogSlice';
import { fetchMagazines } from 'reduxFolder/magazinesSlice';

const Blog = () => {
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blogState.blogs);
    const isBlogsLoading = useSelector((state) => state.blogState.loading);

    useEffect(() => {
        if (!blogs.length) {
            dispatch(fetchBlogs());
        }
    }, [dispatch, blogs.length]);

    return (
        <>
            <div className="">
                <div className="overlay"></div>

                {/* <Navbar3 navClass="navbar-dark text-white" fixedWidth buttonClass="btn-secondary btn-sm" /> */}
                <Navbar3
                    navClass="navbar-light zindex-10"
                    buttonClass="btn-outline-secondary btn-sm"
                    fixedWidth
                    isSticky
                />
                {/* <Hero style={{ background: 'url(/images/woodPanelHero.jpg' }} /> */}
            </div>

            <section className="pt-6 pb-4 position-relative bg-paper-texture">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={12}>
                            <h1 className="hero-title mt-0">Blogs</h1>
                        </Col>
                    </Row>

                    {/* Only show blogs if they exist */}
                    {!isBlogsLoading && Array.isArray(blogs) && blogs.length > 0 && (
                        <Row className="" data-aos="fade-up">
                            {blogs.map((blog, index) => (
                                <Col lg={4} key={index}>
                                    <BlogPost1 post={blog} />
                                </Col>
                            ))}
                        </Row>
                    )}
                </Container>
            </section>

            <Footer1 />
            <BackToTop variant="success" />
        </>
    );
};

export default Blog;
