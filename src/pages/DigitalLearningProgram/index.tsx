// components
import { Navbar3 } from 'components/navbars';

import BackToTop from 'components/BackToTop';

import ClientsReview from './ClientsReview';
import Features from './OurImpact';
import Integrations from './Integration';
import Pricing from './Pricing';
import Footer from './Footer';

// data
import { integrations, planFeatures } from './data';
import Hero4 from './Hero4';
import YoutubeVid from './YoutubeVid';
import Counter from './Counter';
import Testimonials from './Testimonials';
import CTA from './CTA';
import ChalOppUrg from './ChalOppUrg';
import WhyUs from './WhyUs';
import OurImpact from './OurImpact';
import { Footer1 } from 'components/footer';

const Startup = () => {
    return (
        <>
            <div className="header-7">
                <Navbar3 navClass="navbar-light" fixedWidth isSticky buttonClass="btn-secondary btn-sm" />
                <Hero4 />
            </div>
            <ChalOppUrg />
            {/* clients - reviews  */}
            {/* <ClientsReview /> */}
            <WhyUs />
            {/* features */}
            <OurImpact />

            {/* integration */}

            {/* CTA - footer */}

            <Footer1 />

            <BackToTop variant="success" />
        </>
    );
};

export default Startup;
