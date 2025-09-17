import { Badge, Breadcrumb, Col, Container, Row } from 'react-bootstrap';

// components
import { Navbar3 } from 'components/navbars';
import { Footer1 } from 'components/footer';
import BackToTop from 'components/BackToTop';

// static data
import { mediaSpotlight } from './data';
import Hero from './Hero';

import MediaMentionViewer from './MediaMentionViewer';

import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchMediaMentions } from 'reduxFolder/mediaMentionsSlice';
import { fetchMediaCutouts } from 'reduxFolder/mediaCutoutsSlice'; // New import for fetching media cutouts
import MediaCutouts from './MediaCutouts';

const MediaMentions = () => {
    const dispatch = useDispatch();
    const { mentions } = useSelector((state) => state.mediaMentionsState);
    const { mediaCutouts } = useSelector((state) => state.mediaCutoutsState); // New selector for media cutouts

    useEffect(() => {
        dispatch(fetchMediaMentions());
        dispatch(fetchMediaCutouts()); // Fetching media cutouts as well
    }, [dispatch]);

    const latestMedia = mediaSpotlight
        .filter((ele) => ele.date) // keep only those with date
        .sort((a, b) => new Date(b.date) - new Date(a.date)); // latest first

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

            <section className="pt-6 pb-4 position-relative bg-paper-texture">
                <Container className="">
                    <Row className="justify-content-center">
                        <Col lg={12}>
                            <h1 className="hero-title mt-0">Media Mentions & Cutouts</h1>
                        </Col>
                    </Row>

                    <Row className="mt-3 d-flex justify-content-start" data-aos="fade-up">
                        {mentions.map((post) => (
                            <MediaMentionViewer key={post._id} post={post} />
                        ))}
                    </Row>
                </Container>

                {/* MediaCutouts */}
                <MediaCutouts mediaCutouts={mediaCutouts} />
            </section>

            {/* footer */}
            <Footer1 />

            <BackToTop variant="success" />
        </>
    );
};

export default MediaMentions;
