// component
import { Navbar3 } from '../../components/navbars';
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
import Latest from './Latest';
import SEO from 'components/SEO';
import { baseUrl } from 'data/seo/baseUrl';
import VolunteerForm from 'components/forms/VolenteerForm';
import BarImageAchivements from './BarImageAchivements';

const Company = () => {
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
                link={`${baseUrl}`}
            />
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
            <Latest />

            {/* feature */}
            <KnowAboutUs features={features} />
            {/* <BarImageAchivements /> */}
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
            <VolunteerForm />
            {/* footer */}
            <Footer1 />

            <BackToTop variant="success" />
        </>
    );
};

export default Company;
