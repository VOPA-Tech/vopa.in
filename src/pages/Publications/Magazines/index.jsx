import { useEffect } from 'react';
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

    console.log('Magazines:', magazines);
    useEffect(() => {
        if (!magazines.length) {
            dispatch(fetchMagazines());
        }
    }, [dispatch, magazines.length]);

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
                            <h1 className="hero-title mt-0">Magazines</h1>
                        </Col>
                    </Row>
                    <Row className="justify-content-lg-center">
                        {!isMagzinesLoading && magazines.map((post, index) => <BlogPost3 post={post} />)}
                    </Row>
                </Container>
            </section>

            <Footer1 />
            <BackToTop variant="success" />
        </>
    );
};

export default Blog;
