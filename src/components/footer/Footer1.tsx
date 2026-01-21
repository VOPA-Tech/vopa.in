import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

const Footer1 = () => {
    // Success green color
    const successGreen = '#28c76f';

    // Hover handlers
    const hoverStyle = (e: any) => (e.currentTarget.style.color = successGreen);
    const unhoverStyle = (e: any) => (e.currentTarget.style.color = 'inherit');

    return (
        <section className="pt-9 pb-4 bg-gradient3 position-relative">
            <Container>
                <Row>
                    <Col xl={3}>
                        <Link
                            className="navbar-brand me-lg-4 mb-4 me-auto d-flex align-items-center pt-0"
                            to="#"
                            style={{ color: 'inherit' }}
                            onMouseOver={hoverStyle}
                            onMouseOut={unhoverStyle}>
                            <img src="/logo.webp" height="40" width={130} alt="logo" />
                        </Link>
                        <p className="fw-bold w-75">Vowels of the People Association (VOPA)</p>
                        <p className="text-muted w-75">Commerce Avenue, Paud Road, Kothrud, Pune.</p>
                        <p className="text-muted w-75">+91 9158799972</p>
                        <p className="text-muted w-75">(HR Department) hr.vopa@vopa.in</p>

                        <p className="text-muted w-75">CIN – U85300PN2018NPL178277</p>
                    </Col>

                    <Col xl="auto" lg={3} xs={6}>
                        <div className="ps-xl-5">
                            <h6 className="mb-3 mt-3 mt-sm-2 fs-14 fw-semibold text-uppercase">Projects</h6>
                            <ul className="list-unstyled">
                                <li className="my-3">
                                    <Link
                                        to="/projects/vschool"
                                        className="text-muted"
                                        style={{ color: 'inherit' }}
                                        onMouseOver={hoverStyle}
                                        onMouseOut={unhoverStyle}>
                                        V-School
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link
                                        to="/projects/nipun-maharashtra"
                                        className="text-muted"
                                        style={{ color: 'inherit' }}
                                        onMouseOver={hoverStyle}
                                        onMouseOut={unhoverStyle}>
                                        Nipun Maharashtra
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link
                                        to="/projects/digital-learning-project"
                                        className="text-muted"
                                        style={{ color: 'inherit' }}
                                        onMouseOver={hoverStyle}
                                        onMouseOut={unhoverStyle}>
                                        Digital Learning Project
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link
                                        to="/projects/myca"
                                        className="text-muted"
                                        style={{ color: 'inherit' }}
                                        onMouseOver={hoverStyle}
                                        onMouseOut={unhoverStyle}>
                                        MYCA
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xl="auto" sm={4} xs={6}>
                        <div className="ps-xl-5">
                            <h6 className="mb-3 mt-3 mt-sm-2 fs-14 fw-semibold text-uppercase"> User Agreements</h6>
                            <ul className="list-unstyled">
                                <li className="my-3">
                                    <Link to="/terms-and-policies/nipun-maharashtra" className="text-muted">
                                        Privacy Policy Nipun Maharashtra.
                                    </Link>
                                </li>
                            </ul>
                            <ul className="list-unstyled">
                                <li className="my-3">
                                    <Link to="/terms-and-policies/nipun-maharashtra-terms" className="text-muted">
                                        Terms of Use Nipun Maharashtra.
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xl="auto" sm={4} xs={6}>
                        <div className="ps-xl-5">
                            <h6 className="mb-3 mt-3 mt-sm-2 fs-14 fw-semibold text-uppercase">Impact</h6>
                            <ul className="list-unstyled">
                                <li className="my-3">
                                    <Link to="/impact/work-reports" className="text-muted">
                                        Work Reports
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="/impact/feedback-and-testimonials" className="text-muted">
                                        Feedback & Testimonials
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="/impact/news-and-media/media-mentions" className="text-muted">
                                        Media Mentions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3} sm={4} xs={6}>
                        <img
                            src="https://uploads.justech-ai.in/vopa-website/careerPage/1768910406969_vowels_of_the_people_association_in_english_2026_certification_badge-removebg-pr.png"
                            alt="QR Code to Application Form"
                            width={100}
                            height={'100%'}
                        />
                    </Col>
                </Row>
                <hr />
                <Row className="text-md-start text-center">
                    <Col md={8}>
                        <Link to="/auth/login">
                            <p className="pb-0 mb-0 text-muted">
                                {new Date().getFullYear()} © VOPA. All rights reserved.
                            </p>
                        </Link>
                    </Col>
                    <Col md={4} className="text-md-end">
                        <div className="align-items-end mt-md-0 mt-4">
                            <ul className="list-unstyled mb-0">
                                {[
                                    {
                                        href: 'https://www.facebook.com/contact.vopa',
                                        icon: 'facebook',
                                    },
                                    {
                                        href: 'https://www.youtube.com/channel/UCjLnfmyuCWK5CXD1n1XD6ig',
                                        icon: 'youtube',
                                    },
                                    {
                                        href: 'https://in.linkedin.com/company/vowels-of-the-people',
                                        icon: 'linkedin',
                                    },
                                    {
                                        href: 'https://www.instagram.com/accounts/login/?next=%2Fvopa.vschool%2F&source=omni_redirect',
                                        icon: 'instagram',
                                    },
                                ].map((item, index) => (
                                    <li className="d-inline-block me-4" key={index}>
                                        <a
                                            href={item.href}
                                            rel="noreferrer"
                                            target="_blank"
                                            style={{ color: 'inherit' }}
                                            onMouseOver={hoverStyle}
                                            onMouseOut={unhoverStyle}>
                                            <FeatherIcon icon={item.icon} className="icon icon-xs" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Footer1;
