// components
import { Navbar3 } from 'components/navbars';

import BackToTop from 'components/BackToTop';

import Features from './Features';
import Features2 from './Features2';
import Integrations from './Integration';
import Pricing from './Pricing';
import Footer from './Footer';

import Hero4 from './Hero4';

import Testimonials from './Testimonials';
import CTA from './CTA';

import { Footer1 } from 'components/footer';
import OurImpact from './OurImpact';
import OurReachImpact from './OurReachImpact';
import Highlights from './Highlights';
import SEO from 'components/SEO';
import { baseUrl } from 'data/seo/baseUrl';

const Startup = () => {
    return (
        <>
            <SEO
                title="Vowels of People Association | Vopa
                        "
                description={`We're shaping a world where every child has the tools to learn, the strength to grow, and the freedom to flourish.
                        `}
                keywords={
                    'Education, Mental Health, Child Development, Community Support, Non-Profit Organization, Empowerment, Learning Resources, Health and Wellness, Social Impact, Advocacy'
                }
                link={`${baseUrl}/projects/saiyam`}
            />
            <div className="bg-paper-texture">
                <Navbar3 isSticky navClass="navbar-light" fixedWidth buttonClass="btn-secondary btn-sm" />
                <Hero4 />
            </div>

            {/* features */}
            <Features />
            <OurImpact />

            {/* integration */}
            <Integrations />
            <Features2 />

            <OurReachImpact />
            <Highlights />
            <Testimonials />

            {/* CTA - footer */}
            <CTA />
            <Footer1 />

            <BackToTop variant="success" />
        </>
    );
};

export default Startup;
