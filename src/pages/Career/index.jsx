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
import { fetchVacancies } from 'reduxFolder/vacancySlice';
import Jobs from './Jobs';
import { fetchJobs } from 'reduxFolder/jobsSlice';
import InterviewSteps from './InterviewSteps';
import Benefits from './Benefits';
import OurBenefits from './OurBenefits';

const Career = () => {
    const dispatch = useDispatch();

    const { vacancies, loading } = useSelector((state) => state.vacancyState);
    const { jobs } = useSelector((state) => state.jobsState);

    useEffect(() => {
        if (!vacancies.length) {
            dispatch(fetchVacancies());
        }
    }, [dispatch, vacancies.length]);
    useEffect(() => {
        if (!jobs.length) {
            dispatch(fetchJobs());
        }
    }, [dispatch, jobs.length]);
    return (
        <>
            <div className="bg-paper-texture position-relative">
                <Navbar3
                    fixedWidth
                    isSticky
                    navClass="navbar-light zindex-10"
                    buttonClass="btn-outline-secondary btn-sm"
                />
                <Hero />
            </div>
            <OurBenefits />
            {/* culture */}
            {/* <Culture gallery={gallery} /> */}
            <InterviewSteps />
            {/* Job Section */}
            {/* {loading ? (
                <div style={{ textAlign: 'center', padding: '4rem' }}>Loading Vacancies...</div>
            ) : (
                <Vacancies vacancies={vacancies} />
            )} */}
            <Jobs jobs={jobs} />
            {/* CTA and Footer */}
            {/* <CTA /> */}
            <Footer1 />
            <BackToTop variant="success" />
        </>
    );
};

export default Career;
