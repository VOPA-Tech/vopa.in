// components
import { Navbar3 } from 'components/navbars';

import BackToTop from 'components/BackToTop';

import ClientsReview from './ClientsReview';
import Features from './Features';
import KeyFeatures from './KeyFeatures';
import Pricing from './Pricing';
import Footer from './Footer';

import Hero4 from './Hero4';
import YoutubeVid from './YoutubeVid';

import Testimonials from './Testimonials';
import CTA from './CTA';
import Yt3Videos from './Yt3Videos';
import CelebrityYT from './CelebrityYT';
import MapImage from './MapImage';

import { Footer1 } from 'components/footer';
import OurImpact from './OurImpact';

import VideosAndPointers from './VideosAndPointers';
import VSchoolSuperAppNew from './VSchoolSuperAppNew';
import SEO from 'components/SEO';
import { baseUrl } from 'data/seo/baseUrl';

const Startup = () => {
    return (
        <>
            {' '}
            <SEO
                title="Vowels of People Association | Vopa
                                "
                description={`We're shaping a world where every child has the tools to learn, the strength to grow, and the freedom to flourish.
                                `}
                keywords={
                    'Education, Mental Health, Child Development, Community Support, Non-Profit Organization, Empowerment, Learning Resources, Health and Wellness, Social Impact, Advocacy'
                }
                link={`${baseUrl}/projects/vschool`}
            />
            <div className="bg-paper-texture">
                <Navbar3 isSticky navClass="navbar-light" fixedWidth buttonClass="btn-secondary btn-sm" />
                <Hero4 />
            </div>
            {/* clients - reviews  */}
            {/* <ClientsReview /> */}
            {/* <ProjectCardsSlider /> */}
            {/* features */}
            <Features />
            <OurImpact />
            <Yt3Videos />
            {/* integration */}
            <KeyFeatures />
            {/* pricing */}
            {/* <Pricing planFeatures={planFeatures} /> */}
            <YoutubeVid />
            <VideosAndPointers />
            {/* <Testimonials /> */ <VSchoolSuperAppNew />}
            <MapImage />
            <CelebrityYT />
            {/* CTA - footer */}
            <CTA />
            <Footer1 />
            <BackToTop variant="success" />
        </>
    );
};

export default Startup;
