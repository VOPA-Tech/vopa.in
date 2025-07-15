// component
import { Navbar1, Navbar3 } from '../../components/navbars';
// import { Hero2, Hero9 } from '../../components/heros';
import BackToTop from '../../components/BackToTop';
import { Footer1 } from '../../components/footer';

import About from './About';
import Features1 from './Features1';

import Team from './Team';
import Partners from './Partners';

// dummy data
import { features } from './data';

import Testimonials from './Testimonials';
import Projects from './Projects';
import Hero9 from './Hero9';
import HeroCara from './HeroCara';
import KnowAboutUs from './KnowAboutUs';
import ProductCards from './ProductCards';

import TwoCause from './TwoCause';
import OurImpact from './OurImpact';
import ProjectCardsSlider from './ProjectCardsSlider';

const Company = () => {
    return (
        <>
            {/* header and hero */}
            <div className="">
                <Navbar3
                    navClass="navbar-light zindex-10"
                    buttonClass="btn-outline-secondary btn-sm"
                    // hideSearch
                    fixedWidth
                    isSticky
                />
                <HeroCara />
            </div>

            {/* about */}
            {/* <About /> */}

            {/* feature */}
            <KnowAboutUs features={features} />
            <ProductCards />
            {/* projects */}
            {/* <Projects projects={projects} /> */}
            <ProjectCardsSlider />

            {/* counter */}
            <OurImpact />
            <TwoCause />
            {/* <AchivementStrip /> */}
            <Testimonials />

            {/* Team */}
            {/* <Team teamMembers={teamMembers} /> */}

            {/* Partners */}
            <Partners />

            {/* footer */}
            <Footer1 />

            <BackToTop variant="success" />
        </>
    );
};

export default Company;
