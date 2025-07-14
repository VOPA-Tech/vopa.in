// components
import { Navbar3 } from 'components/navbars';
import BackToTop from 'components/BackToTop';
import Features from './Features';
import Hero4 from './Hero';
import Testimonials from './Testimonials';
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
