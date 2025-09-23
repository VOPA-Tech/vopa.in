// JobDetails.tsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Navbar3 } from 'components/navbars';
import { Footer1 } from 'components/footer';
import BackToTop from 'components/BackToTop';

import JobHero from './JobHero';
import JobContent from './JobContent';

import { fetchJobs } from 'reduxFolder/jobsSlice';

const JobDetails = () => {
    const { id } = useParams();
    const dispatch: any = useDispatch();

    // ✅ Read from jobsState
    const jobs = useSelector((state: any) => state.jobsState.jobs);
    const isJobsLoading = useSelector((state: any) => state.jobsState.loading);

    const [job, setJob] = useState<any>(null);

    useEffect(() => {
        if (!jobs?.length) {
            dispatch(fetchJobs());
        }
    }, [dispatch, jobs?.length]);

    useEffect(() => {
        if (!isJobsLoading && jobs?.length) {
            // ✅ Support both /careers/:slug and /careers/:id
            const found = jobs.find((j: any) => j.slug === id || j._id === id);
            setJob(found || null);
        }
    }, [id, jobs, isJobsLoading]);

    return (
        <>
            <Navbar3
                isSticky
                fixedWidth
                navClass="navbar-light zindex-10 shadow"
                buttonClass="btn-outline-secondary btn-sm"
            />

            {isJobsLoading ? (
                <p style={{ padding: '2rem', textAlign: 'center' }}>Loading...</p>
            ) : job ? (
                <>
                    <JobHero job={job} />
                    <JobContent job={job} />
                </>
            ) : (
                <p style={{ padding: '2rem', textAlign: 'center' }}>Job not found.</p>
            )}

            <Footer1 />
            <BackToTop />
        </>
    );
};

export default JobDetails;
