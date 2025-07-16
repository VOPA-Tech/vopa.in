import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import { Navbar3 } from '../../components/navbars';
import BackToTop from '../../components/BackToTop';
import { Footer1 } from '../../components/footer';

import Hero from './Hero';
import Culture from './Culture';
import Vacancies from './Vacancies';
import CTA from './CTA';

// static data
import { gallery } from './data';

// redux
import { loadVacancies } from 'reduxFolder/appSlice';

const Career = () => {
    const dispatch = useDispatch();

    const vacancies = useSelector((state) => state.appState.vacancies);
    const isVacanciesLoading = useSelector((state) => state.appState.isVacanciesLoading);

    useEffect(() => {
        if (!vacancies.length) {
            dispatch(loadVacancies());
        }
    }, [dispatch, vacancies.length]);

    return (
        <>
            <div className="bg-gradient2 position-relative">
                <Navbar3
                    fixedWidth
                    isSticky
                    navClass="navbar-light zindex-10"
                    buttonClass="btn-outline-secondary btn-sm"
                />
                <Hero />
            </div>

            {/* culture */}
            <Culture gallery={gallery} />

            {/* Job Section */}
            {isVacanciesLoading ? (
                <div style={{ textAlign: 'center', padding: '4rem' }}>Loading Vacancies...</div>
            ) : (
                <Vacancies vacancies={vacancies} />
            )}

            {/* CTA and Footer */}
            <CTA />
            <Footer1 />
            <BackToTop variant="success" />
        </>
    );
};

export default Career;
