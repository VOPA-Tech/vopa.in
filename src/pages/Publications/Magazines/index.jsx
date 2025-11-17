import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import { Navbar3 } from 'components/navbars';
import { Footer1 } from 'components/footer';
import BackToTop from 'components/BackToTop';

import BlogPost3 from './BlogPost3';

import { fetchMagazines } from 'reduxFolder/magazinesSlice';

const Blog = () => {
    const dispatch = useDispatch();

    const magazines = useSelector((state) => state.magazinesState.magazines);
    const isMagzinesLoading = useSelector((state) => state.magazinesState.loading);

    useEffect(() => {
        if (!magazines.length) {
            dispatch(fetchMagazines());
        }
    }, [dispatch, magazines.length]);

    // ✅ Sort magazines by createdAt descending (newest first)
    const sortedMagazines = useMemo(() => {
        return [...magazines].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }, [magazines]);

    return (
        <>
            <div className="">
                {/* <Navbar3 navClass="navbar-dark text-white" fixedWidth buttonClass="btn-secondary btn-sm" /> */}
                <Navbar3
                    navClass="navbar-light zindex-10"
                    buttonClass="btn-outline-secondary btn-sm"
                    fixedWidth
                    isSticky
                />
                {/* <Hero style={{ background: 'url(/images/woodPanelHero.jpg' }} /> */}
            </div>

            <section className="pt-6 pb-4 position-relative bg-paper-texture-dark">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={12}>
                            <h1 className="hero-title text-white mt-0">Magazines</h1>
                        </Col>
                    </Row>
                    <Row className="justify-content-lg-center">
                        {!isMagzinesLoading && sortedMagazines.map((post, index) => <BlogPost3 post={post} />)}
                    </Row>
                </Container>
            </section>

            <Footer1 />
            <BackToTop variant="success" />
        </>
    );
};

export default Blog;
