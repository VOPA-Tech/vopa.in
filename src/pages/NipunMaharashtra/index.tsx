// components
import { Navbar3 } from 'components/navbars';

import BackToTop from 'components/BackToTop';

import Features from './Features';

// data

import Hero4 from './Hero4';

import OurImpact from './OurImpact';
import Testimonials from './Testimonials';
import CTA from './CTA';

import HowWeArwDoing from './HowWeAreDoing';
import VideosAndPointers from './VideosAndPointers.tsx';
import { Footer1 } from 'components/footer';
import SEO from 'components/SEO';
import { baseUrl } from 'data/seo/baseUrl';

const NipunMaharashtra = () => {
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
                link={`${baseUrl}/projects/nipun-maharashtra`}
            />
            <div className="bg-paper-texture">
                <Navbar3 isSticky navClass="navbar-light" fixedWidth buttonClass="btn-secondary btn-sm" />
                <Hero4 />
            </div>
            {/* clients - reviews  */}
            {/* <ClientsReview /> */}
            {/* features */}
            <Features />
            <OurImpact />
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

export default NipunMaharashtra;
