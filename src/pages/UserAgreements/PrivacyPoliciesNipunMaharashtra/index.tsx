// components
import { Navbar3 } from 'components/navbars';

import BackToTop from 'components/BackToTop';

import { Footer1 } from 'components/footer';
import Culture from './Culture';

const NipunMaharashtra = () => {
    return (
        <>
            <div className="header-7">
                <Navbar3 isSticky navClass="navbar-light" fixedWidth buttonClass="btn-secondary btn-sm" />
            </div>
            <Culture />
            <Footer1 />

            <BackToTop variant="success" />
        </>
    );
};

export default NipunMaharashtra;
