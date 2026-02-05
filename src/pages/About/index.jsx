import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Navbar3 } from '../../components/navbars';
import BackToTop from '../../components/BackToTop';
import { Footer1 } from '../../components/footer';
import Team from './Team';
import Hero from './Hero';
import Partners from './Partners';
import { loadTeam } from 'reduxFolder/appSlice';
import { fetchEmployees } from 'reduxFolder/employeeSlice';
import SEO from 'components/SEO';
import { baseUrl } from 'data/seo/baseUrl';

const Company = () => {
    const dispatch = useDispatch();
    const teamMembers = useSelector((state) => state.employeeState.employees);
    const isTeamLoading = useSelector((state) => state.employeeState.loading);

    useEffect(() => {
        if (!teamMembers.length) {
            dispatch(fetchEmployees());
        }
    }, [dispatch, teamMembers.length]);

    return (
        <>
            {/* header and hero */}
            <SEO
                title="Vowels of People Association | Vopa
        "
                description={`We're shaping a world where every child has the tools to learn, the strength to grow, and the freedom to flourish.
        `}
                keywords={
                    'Education, Mental Health, Child Development, Community Support, Non-Profit Organization, Empowerment, Learning Resources, Health and Wellness, Social Impact, Advocacy'
                }
                link={`${baseUrl}/about`}
            />
            <div className="bg-paper-texture">
                <Navbar3
                    navClass="navbar-light zindex-10"
                    buttonClass="btn-outline-secondary btn-sm"
                    fixedWidth
                    isSticky
                />
                <Hero />
            </div>

            {isTeamLoading ? (
                <div style={{ textAlign: 'center', padding: '4rem' }}>Loading Team...</div>
            ) : (
                <Team teamMembers={teamMembers} />
            )}

            <Partners />
            <Footer1 />
            <BackToTop variant="success" />
        </>
    );
};

export default Company;
