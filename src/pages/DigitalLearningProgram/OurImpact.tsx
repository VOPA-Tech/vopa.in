import { Link } from 'react-router-dom';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// images
import desktop1 from 'assets/images/features/desktop1.gif';
import desktop from 'assets/images/hero/desktop.jpg';

const OurImpact = () => {
    const features = [
        'Foundational literacy (Marathi) proficiency has increased by approximately 30 percentage points.',
        'Foundational literacy (English) proficiency has increased by approximately 35 percentage points.',
        'Foundational numeracy proficiency has increased by approximately 40 percentage points.',
        'Around 90% of students have had the opportunity to experience digital learning inside their classrooms.',
    ];

    return (
        <section className="pt-lg-6 pt-4 pb-lg-6 pb-5 bg-paper-texture position-relative overflow-hidden">
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
                            <p className="text-muted mb-4">
                                Since the launch of the project, we have seen significant improvements in student
                                learning:
                            </p>
                            <ul className="list-unstyled border-top py-4 mt-4 text-start">
                                {features.map((feature, index) => {
                                    return (
                                        <li className="py-2 d-flex align-items-center" key={index.toString()}>
                                            {feature && (
                                                <>
                                                    <FeatherIcon
                                                        icon="check-circle"
                                                        className="icon-md text-success align-middle me-2"
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
