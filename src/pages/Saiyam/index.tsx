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

const Startup = () => {
    return (
        <>
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
