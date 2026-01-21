// components
import { Navbar3 } from 'components/navbars';

import BackToTop from 'components/BackToTop';
import Hero4 from './Hero4';
import ChalOppUrg from './ChalOppUrg';
import WhyUs from './WhyUs';
import OurImpact from './OurImpact';
import { Footer1 } from 'components/footer';

const Startup = () => {
    return (
        <>
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
