// components
import { Navbar3 } from 'components/navbars';

import BackToTop from 'components/BackToTop';

import Features from './Features';

// data

import Hero4 from './Hero4';

import OurVision from './OurVision';
import Testimonials from './Testimonials';
import CTA from './CTA';

import HowWeArwDoing from './HowWeAreDoing';
import VideosAndPointers from './VideosAndPointers.tsx';
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
            <OurVision />
            {/* integration */}
            <HowWeArwDoing />
            <VideosAndPointers />
            <Testimonials />
            {/* <Integrations integrations={integrations} /> */}

            {/* pricing */}
            {/* <Pricing planFeatures={planFeatures} /> */}
            {/* <YoutubeVid /> */}

            {/* CTA - footer */}
            <CTA />
            <Footer1 />

            <BackToTop variant="success" />
        </>
    );
};

export default Startup;
