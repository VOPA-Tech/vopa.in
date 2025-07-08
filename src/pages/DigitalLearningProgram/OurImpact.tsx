import { Link } from 'react-router-dom';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// images
import desktop1 from 'assets/images/features/desktop1.gif';
import desktop from 'assets/images/hero/desktop.jpg';

const OurImpact = () => {
    const features = [
        '~30% improvement in Learning Outcomes & Functional Numeracy & Numeracy.',
        'Tailored Lesson Plans delivered for enhanced teaching.',
        '90% of teachers report increased confidence in using digital tools.',
        '10 hours saved per teacher on assessment during each cycle.',
    ];

    return (
        <section className="pt-lg-6 pt-4 pb-lg-6 pb-5 position-relative overflow-hidden">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className="video-container card rounded">
                            <iframe
                                width="100%"
                                height="300"
                                src="https://www.youtube.com/embed/bbMfGXqnoX0"
                                title="YouTube video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }}>
                        <div className="mt-4 mt-lg-0">
                            {/* <Badge pill bg="" className="badge-soft-success px-2 py-1">
                                Our Solution
                            </Badge> */}
                            <h1 className="display-4 text-success fw-medium mb-3">Our Impact</h1>

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
                            {/* <Link to="#">
                                Learn more
                                <FeatherIcon icon="arrow-right" className="ms-1 icon-xxs" />
                            </Link> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default OurImpact;
