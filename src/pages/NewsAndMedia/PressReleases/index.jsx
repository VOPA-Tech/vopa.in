import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import { Navbar3 } from 'components/navbars';
import { Footer1 } from 'components/footer';
import BackToTop from 'components/BackToTop';

import PressReleaseCard from './PressReleaseCard'; // similar to BlogPost1

import { fetchPressReleases } from 'reduxFolder/pressReleaseSlice'; // new slice

const PressReleases = () => {
    const dispatch = useDispatch();

    // Redux state for press releases
    const pressReleases = useSelector((state) => state.pressReleaseState.pressReleases);
    const isLoading = useSelector((state) => state.pressReleaseState.loading);

    useEffect(() => {
        if (!pressReleases.length) {
            dispatch(fetchPressReleases());
        }
    }, [dispatch, pressReleases.length]);

    return (
        <>
            <div className="bg-paper-texture">
                <Navbar3
                    navClass="navbar-light zindex-10"
                    buttonClass="btn-outline-secondary btn-sm"
                    fixedWidth
                    isSticky
                />
                <section className="pt-6 pb-4 position-relative bg-paper-texture">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={12}>
                                <h1 className="hero-title mt-0">Press Releases</h1>
                            </Col>
                        </Row>

                        {isLoading ? (
                            <p style={{ padding: '2rem', textAlign: 'center' }}>Loading...</p>
                        ) : pressReleases.length ? (
                            <Row className="" data-aos="fade-up">
                                {pressReleases.map((pressRelease, index) => (
                                    <Col lg={12} key={index}>
                                        <PressReleaseCard post={pressRelease} />
                                    </Col>
                                ))}
                            </Row>
                        ) : (
                            <p style={{ padding: '2rem', textAlign: 'center' }}>No press releases found.</p>
                        )}
                    </Container>
                </section>
            </div>

            <Footer1 />
            <BackToTop variant="success" />
        </>
    );
};

export default PressReleases;
