// component
import { Navbar1, Navbar3 } from '../../components/navbars';
import { Hero9 } from '../../components/heros';
import BackToTop from '../../components/BackToTop';
import { Footer1 } from '../../components/footer';

import About from './About';
import Feature from './Feature';
import Counter from './Counter';
import Team from './Team';
import Client from './Client';

// dummy data
// import { teamMembers } from './data';
import TeamFour from './DoobTeam';
import Hero from './Hero';
import Partners from './Partners';
import { useAppContext } from 'context/AppContext';
import { useEffect } from 'react';

const Company = () => {
    const { teamMembers, isTeamLoading } = useAppContext();

    useEffect(() => {
        console.log('Team members loaded:', teamMembers);
    }, [teamMembers]);
    return (
        <>
            {/* header and hero */}
            <div>
                <Navbar3
                    navClass="navbar-light zindex-10"
                    buttonClass="btn-outline-secondary btn-sm"
                    // hideSearch
                    fixedWidth
                    isSticky
                />
                <Hero />
            </div>

            {/* about */}
            {/* <About /> */}

            {/* feature */}
            {/* <Feature /> */}

            {/* counter */}
            {/* <Counter /> */}
            {/* <TeamFour column="col-lg-6 col-xl-3 col-md-6 col-12 mt--30" teamStyle="team-style-three" /> */}
            {/* Team */}
            <Team teamMembers={teamMembers} />

            {/* client */}
            <Partners />

            {/* footer */}
            <Footer1 />

            <BackToTop variant="success" />
        </>
    );
};

export default Company;
