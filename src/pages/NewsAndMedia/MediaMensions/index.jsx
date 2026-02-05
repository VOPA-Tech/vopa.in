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
import SEO from 'components/SEO';
import { baseUrl } from 'data/seo/baseUrl';

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
            {' '}
            <SEO
                title="Vowels of People Association | Vopa
                                                                "
                description={`We're shaping a world where every child has the tools to learn, the strength to grow, and the freedom to flourish.
                                                                `}
                keywords={
                    'Education, Mental Health, Child Development, Community Support, Non-Profit Organization, Empowerment, Learning Resources, Health and Wellness, Social Impact, Advocacy'
                }
                link={`${baseUrl}/impact/news-and-media/media-mentions`}
            />
            <div className="bg-paper-texture">
                <Navbar3 navClass="navbar-light " buttonClass="btn-outline-secondary btn-sm" fixedWidth isSticky />
                <section className=" pt-4 pb-5">
                    {' '}
                    <Container className="pt-4 pb-5">
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
                </section>
                <section className="bg-paper-texture pt-4 pb-5">
                    {' '}
                    <Container fluid className="bg-paper-texture pt-4 pb-5">
                        <MediaCutouts mediaCutouts={mediaCutouts} />
                    </Container>
                </section>
            </div>
            <Footer1 />
            <BackToTop variant="success" />
        </>
    );
};

export default MediaMentions;
