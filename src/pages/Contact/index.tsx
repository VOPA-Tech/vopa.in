// components
import { Navbar1, Navbar3 } from 'components/navbars';
import BackToTop from 'components/BackToTop';
import { Footer1, Footer2 } from 'components/footer';

import Hero from './Hero';
import ContactUs from './ContactUs';

const Contact = () => {
    return (
        <>
            <div className="header-7 bg-gradient2">
                <Navbar3
                    // hideSearch
                    isSticky
                    fixedWidth
                    navClass="navbar-light zindex-10"
                    buttonClass="btn-outline-secondary btn-sm"
                />

                <Hero />
            </div>

            {/* contact us */}
            <ContactUs />

            {/* footer */}
            <Footer1 />

            <BackToTop variant="success" />
        </>
    );
};

export default Contact;
