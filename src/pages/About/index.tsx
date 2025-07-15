// component
import { Navbar3 } from '../../components/navbars';

import BackToTop from '../../components/BackToTop';
import { Footer1 } from '../../components/footer';

import Team from './Team';

import Hero from './Hero';
import Partners from './Partners';
import { useAppContext } from 'context/AppContext';

const Company = () => {
    const { teamMembers, isTeamLoading } = useAppContext();

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
