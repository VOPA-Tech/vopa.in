// components
import { Navbar3 } from 'components/navbars';

import BackToTop from 'components/BackToTop';

import ClientsReview from './ClientsReview';
import Features from './Features';
import Integrations from './Integration';
import Pricing from './Pricing';
import Footer from './Footer';

// data
import { integrations, planFeatures, projects } from './data';
import Hero4 from './Hero';
import YoutubeVid from './YoutubeVid';
import Counter from './Counter';
import Testimonials from './Testimonials';
import CTA from './CTA';
import Projects from './Projects';
import { Footer1 } from 'components/footer';

const Startup = () => {
    return (
        <>
            <div className="header-7">
                <Navbar3 isSticky navClass="navbar-light" fixedWidth buttonClass="btn-secondary btn-sm" />
                <Hero4 />
            </div>
            {/* clients - reviews  */}
            {/* <ClientsReview /> */}
            {/* features */}
            <Features />

            {/* integration */}
            {/* <Integrations integrations={integrations} /> */}
            {/* pricing */}
            {/* <Pricing planFeatures={planFeatures} /> */}
            {/* <YoutubeVid />
            <Counter /> */}
            <Testimonials />
            {/* CTA - footer */}
            {/* <CTA /> */}
            <Footer1 />
            <BackToTop variant="success" />
        </>
    );
};

export default Startup;
