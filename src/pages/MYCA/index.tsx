// components
import { Navbar3 } from 'components/navbars';
import BackToTop from 'components/BackToTop';
import Features from './Features';

// data
import Hero4 from './Hero4';
import YoutubeVid from './YoutubeVid';
import CTA from './CTA';
import ChalOppUrg from './ChalOppUrg';
import { Footer1 } from 'components/footer';
import Integrations from './Integration';

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
            <Integrations />

            {/* pricing */}
            {/* <Pricing planFeatures={planFeatures} /> */}
            <YoutubeVid />
            <ChalOppUrg />
            {/* <Counter /> */}
            {/* <Testimonials /> */}
            {/* CTA - footer */}
            <CTA />
            <Footer1 />

            <BackToTop variant="success" />
        </>
    );
};

export default Startup;
