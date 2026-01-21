import { Link } from 'react-router-dom';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// images
import desktop1 from 'assets/images/features/desktop1.gif';
import desktop from 'assets/images/hero/desktop.jpg';

const Features = () => {
    const features = [
        'Based on NEP-guided pedagogy: Vahi, Pen, Pustak, Parisar, Shikshak',
        'Available offline and ad-free',
        'Supports low-literacy households',
    ];

    return (
        <section className="pt-lg-6 bg-paper-texture pt-4 pb-lg-6 pb-5 position-relative overflow-hidden">
            <Container>
                <Row className="align-items-center ">
                    <Col lg={5}>
                        <div className="mb-4 mb-lg-0">
                            <Badge pill bg="" className="badge-soft-success px-2 py-1">
                                Saiyam Digital Platform
                            </Badge>
                            <h1 className="display-4 fw-medium mb-3">
                                Web-based portal connecting schools, teachers and students.
                            </h1>
                            <p className="text-muted mx-auto ">
                                {' '}
                                <FeatherIcon icon="thumbs-up" className="icon icon-xs m-2" />
                                Upload and share school activities.
                            </p>{' '}
                            <p className="text-muted mx-auto ">
                                {' '}
                                <FeatherIcon icon="thumbs-up" className="icon icon-xs m-2" />
                                Track credits and progress on dashboards.
                            </p>
                            <p className="text-muted mx-auto ">
                                {' '}
                                <FeatherIcon icon="thumbs-up" className="icon icon-xs m-2" />
                                Earn credits for creativity and quality.
                            </p>
                            <p className="text-muted mx-auto ">
                                {' '}
                                <FeatherIcon icon="thumbs-up" className="icon icon-xs m-2" />
                                Display school credits on leaderboard.
                            </p>
                            <p className="text-muted mx-auto ">
                                {' '}
                                <FeatherIcon icon="thumbs-up" className="icon icon-xs m-2" />
                                Like/Comment on other schools’ posts.
                            </p>
                            <p className="text-muted mx-auto ">
                                {' '}
                                <FeatherIcon icon="thumbs-up" className="icon icon-xs m-2" />
                                Map view of schools’ activities in Pune.
                            </p>
                            <p className="text-muted mx-auto">
                                {' '}
                                <FeatherIcon icon="thumbs-up" className="icon icon-xs m-2" />
                                Encourage collaboration and idea exchange.
                            </p>
                        </div>
                    </Col>
                    <Col lg={{ span: 6, offset: 1 }}>
                        <img
                            src="https://uploads.justech-ai.in/vopa-website/Saiyam Page/1763723728620_1762165165556_saiyam_digital_platform-.png"
                            alt="desktop1"
                            className="img-fluid"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        />
                    </Col>
                </Row>
                {/* <Row className="align-items-center">
                    <Col lg={6}>
                        <div
                            className="bg-white p-2 rounded border shadow mb-lg-0 mb-3"
                            data-aos="fade-right"
                            data-aos-duration="1500">
                            <img src="/images/vschool/ourSolution.jpg" alt="desktop" className="img-fluid" />
                        </div>
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }}>
                        <div className="mt-4 mt-lg-0">
                            <Badge pill bg="" className="badge-soft-success px-2 py-1">
                                Our Solution
                            </Badge>
                            <h1 className="display-4 text-success fw-medium mb-3">Our Solution</h1>
                            <p className="text-muted mx-auto mb-4 pb-3">
                                VOPA’s V-School platform offers free digital education for students from Grade 1 to 10
                                in Marathi, Urdu, and Semi-English.
                            </p>
                            <ul className="list-unstyled border-top py-4 mt-4 text-start">
                                {features.map((feature, index) => {
                                    return (
                                        <li className="py-2 d-flex align-items-center" key={index.toString()}>
                                            {feature && (
                                                <>
                                                    <FeatherIcon
                                                        icon="check"
                                                        className="icon-xs text-success align-middle me-2"
                                                    />
                                                    {feature}
                                                </>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                            <Link to="#">
                                Learn more
                                <FeatherIcon icon="arrow-right" className="ms-1 icon-xxs" />
                            </Link>
                        </div>
                    </Col>
                </Row> */}
            </Container>
        </section>
    );
};

export default Features;
