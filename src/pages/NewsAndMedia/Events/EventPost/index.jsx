import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Navbar3 } from 'components/navbars';
import { Footer1 } from 'components/footer';
import BackToTop from 'components/BackToTop';

import Hero from './Hero';
import PostContent from './PostContent';

import { fetchEvents } from 'reduxFolder/eventSlice'; // ⬅️ updated slice

const EventPost = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const events = useSelector((state) => state.eventState.events);
    const isEventsLoading = useSelector((state) => state.eventState.loading);
    const [event, setEvent] = useState(null);

    useEffect(() => {
        if (!events.length) {
            dispatch(fetchEvents());
        }
    }, [dispatch, events.length]);

    useEffect(() => {
        if (!isEventsLoading && events.length) {
            const found = events.find((e) => e.slug === id);
            console.log('Hii I am Event', found);
            setEvent(found || null);
        }
    }, [id, events, isEventsLoading]);

    return (
        <>
            <Navbar3
                isSticky
                fixedWidth
                navClass="navbar-light zindex-10 shadow"
                buttonClass="btn-outline-secondary btn-sm"
            />

            {isEventsLoading ? (
                <p style={{ padding: '2rem', textAlign: 'center' }}>Loading...</p>
            ) : event ? (
                <>
                    <Hero event={event} />
                    <PostContent event={event} />
                </>
            ) : (
                <p style={{ padding: '2rem', textAlign: 'center' }}>Event not found.</p>
            )}

            <Footer1 />
            <BackToTop />
        </>
    );
};

export default EventPost;
