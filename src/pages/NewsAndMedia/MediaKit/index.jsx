import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import { Navbar3 } from '../../../components/navbars';
import BackToTop from '../../../components/BackToTop';
import { Footer1 } from '../../../components/footer';

import Culture from './Culture';

// redux thunks
import { fetchMediaKitItems } from 'reduxFolder/mediaKitSlice';

const MediaKit = () => {
    const dispatch = useDispatch();

    // select media kit items from Redux store
    const { mediaKitItems, loading, error } = useSelector((state) => state.mediaKitState);

    useEffect(() => {
        dispatch(fetchMediaKitItems());
    }, []);

    if (error) return <p>Error loading media kit: {error}</p>;

    return (
        <>
            <div className="position-relative">
                <Navbar3
                    fixedWidth
                    isSticky
                    navClass="navbar-light zindex-10"
                    buttonClass="btn-outline-secondary btn-sm"
                />
            </div>

            <section className="bg-paper-texture">
                {/* Pass Redux media kit items instead of static gallery */}
                <Culture gallery={mediaKitItems} />
            </section>

            <Footer1 />
            <BackToTop variant="success" />
        </>
    );
};

export default MediaKit;
