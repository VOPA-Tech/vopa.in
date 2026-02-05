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
                link={`${baseUrl}/projects/myca`}
            />
            <div className="bg-paper-texture">
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
