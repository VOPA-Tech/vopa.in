import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Navbar3 } from 'components/navbars';
import { Footer1 } from 'components/footer';
import BackToTop from 'components/BackToTop';

import Hero from './Hero';
import PostContent from './PostContent';

import { fetchPressReleases } from 'reduxFolder/pressReleaseSlice'; // ⬅️ new slice

const PressReleasePost = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const pressReleases = useSelector((state) => state.pressReleaseState.pressReleases);
    const isLoading = useSelector((state) => state.pressReleaseState.loading);
    const [pressRelease, setPressRelease] = useState(null);

    useEffect(() => {
        if (!pressReleases.length) {
            dispatch(fetchPressReleases());
        }
    }, [dispatch, pressReleases.length]);

    useEffect(() => {
        if (!isLoading && pressReleases.length) {
            const found = pressReleases.find((pr) => pr.slug === id);

            setPressRelease(found || null);
        }
    }, [id, pressReleases, isLoading]);

    return (
        <>
            <Navbar3
                isSticky
                fixedWidth
                navClass="navbar-light zindex-10 shadow"
                buttonClass="btn-outline-secondary btn-sm"
            />

            {isLoading ? (
                <p style={{ padding: '2rem', textAlign: 'center' }}>Loading...</p>
            ) : pressRelease ? (
                <>
                    <Hero pressRelease={pressRelease} />
                    <PostContent pressRelease={pressRelease} />
                </>
            ) : (
                <p style={{ padding: '2rem', textAlign: 'center' }}>Press release not found.</p>
            )}

            <Footer1 />
            <BackToTop />
        </>
    );
};

export default PressReleasePost;
