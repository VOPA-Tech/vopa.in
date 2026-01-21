// components
import { Navbar3 } from 'components/navbars';
import BackToTop from 'components/BackToTop';
import { Footer1, Footer2 } from 'components/footer';

import Hero from './Hero';
import ContactUs from './ContactUs';

const Contact = () => {
    return (
        <>
            <div className="bg-paper-texture">
                <Navbar3
                    navClass="navbar-light zindex-10"
                    buttonClass="btn-outline-secondary btn-sm"
                    // hideSearch
                    fixedWidth
                    isSticky
                />
                <ContactUs />
            </div>

            {/* contact us */}

            {/* footer */}
            <Footer1 />

            <BackToTop variant="success" />
        </>
    );
};

export default Contact;
