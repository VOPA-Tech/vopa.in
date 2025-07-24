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
            <div>
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
