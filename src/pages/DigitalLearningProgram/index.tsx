// components
import { Navbar3 } from 'components/navbars';

import BackToTop from 'components/BackToTop';
import Hero4 from './Hero4';
import ChalOppUrg from './ChalOppUrg';
import WhyUs from './WhyUs';
import OurImpact from './OurImpact';
import { Footer1 } from 'components/footer';
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
                link={`${baseUrl}/projects/digital-learning-program`}
            />
            <div className="bg-paper-texture">
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
