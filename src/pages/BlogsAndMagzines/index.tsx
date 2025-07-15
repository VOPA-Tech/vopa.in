import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// components
import { Navbar3 } from 'components/navbars';
import { Footer1 } from 'components/footer';
import BackToTop from 'components/BackToTop';
import Hero from './Hero';
import BlogPost3 from './BlogPost3';
import BlogPost1 from './BlogPost1';
import VSchoolAnalytics from './VSchoolAnalytics';

// dummy data
import { post3 } from './data';

// context
import { useAppContext } from 'context/AppContext';

const Blog = () => {
    const { blogs, isBlogsLoading } = useAppContext();

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
                    {Array.isArray(blogs) && blogs.length > 0 && (
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
