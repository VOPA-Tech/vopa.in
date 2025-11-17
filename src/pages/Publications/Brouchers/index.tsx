import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import { Navbar3 } from 'components/navbars';
import { Footer1 } from 'components/footer';
import BackToTop from 'components/BackToTop';
import BlogPost3 from './BlogPost3';

import { fetchBrouchers } from 'reduxFolder/brouchersSlice';

const Brouchers = () => {
    const dispatch = useDispatch<any>();
    const { brouchers, loading, error } = useSelector((state: any) => state.brouchersState);

    useEffect(() => {
        dispatch(fetchBrouchers());
    }, [dispatch]);

    return (
        <>
            <div className="">
                <div className="overlay"></div>
                <Navbar3
                    navClass="navbar-light zindex-10"
                    buttonClass="btn-outline-secondary btn-sm"
                    fixedWidth
                    isSticky
                />
            </div>

            <section className="pt-6 pb-4 position-relative bg-paper-texture-dark">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={12}>
                            <h1 className="hero-title text-white mt-0">Brochures</h1>
                        </Col>
                    </Row>

                    {loading && <p>Loading brouchers...</p>}
                    {error && <p className="text-danger">{error}</p>}

                    <Row className="justify-content-center">
                        {brouchers.map((post: any, index: number) => (
                            <BlogPost3 key={post._id || index} post={post} />
                        ))}
                    </Row>
                </Container>
            </section>

            <Footer1 />
            <BackToTop variant="success" />
        </>
    );
};

export default Brouchers;
