import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import { Navbar3 } from 'components/navbars';
import { Footer1 } from 'components/footer';
import BackToTop from 'components/BackToTop';

import EventPost from './EventsViewer';

import { post3 } from './data';
import { fetchEvents } from 'reduxFolder/eventSlice';

const Events = () => {
    const dispatch = useDispatch();
    const events = useSelector((state) => state.eventState.events);
    const isEventsLoading = useSelector((state) => state.eventState.loading);

    useEffect(() => {
        if (!events.length) {
            dispatch(fetchEvents());
        }
    }, [dispatch, events.length]);

    return (
        <>
            <div className="bg-paper-texture">
                <div className="overlay"></div>

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
                                <h1 className="hero-title mt-0">Events</h1>
                            </Col>
                        </Row>

                        {!isEventsLoading && Array.isArray(events) && events?.length > 0 && (
                            <Row className="" data-aos="fade-up">
                                {events.map((event, index) => (
                                    <Col lg={4} key={index}>
                                        <EventPost post={event} />
                                    </Col>
                                ))}
                            </Row>
                        )}
                    </Container>
                </section>
            </div>

            <Footer1 />
            <BackToTop variant="success" />
        </>
    );
};

export default Events;
