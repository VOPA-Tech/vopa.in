import { Link } from 'react-router-dom';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// images
import desktop1 from 'assets/images/features/desktop1.gif';
import desktop from 'assets/images/hero/desktop.jpg';

const Features = () => {
    const features = [
        'Aligned with NIPUN Bharat and NEP 2020 learning goals',
        'Reduces over 21 hours/month of teacher workload through automation',
        'Customizable dashboards and tools for district-specific strategies',
    ];

    return (
        <section className="pt-lg-6 pt-4 pb-lg-6 pb-5 position-relative overflow-hidden">
            <Container>
                <Row className="align-items-center mb-6 pb-lg-5">
                    <Col lg={5}>
                        <div className="mb-4 mb-lg-0">
                            {/* <Badge pill bg="" className="badge-soft-danger px-2 py-1">
                                Why NIPUN Bharat?
                            </Badge> */}
                            {/* <h1 className="display-4 fw-medium mb-3">
                                Foundational gaps are holding back millions of students from progressing in school.
                            </h1> */}
                            <p className="text-muted mx-auto mb-4 pb-3">
                                To improve students’ Foundational Literacy and Numeracy (FLN) at scale, VOPA has built
                                out the NIPUN Maharashtra app for SCERT Maharashtra, the apex educational body of the
                                state.
                            </p>
                            <p className="text-muted mx-auto mb-4 pb-3">
                                It is set to scale our pilots from 350,000 students to 7,000,000 students; 20,000
                                teachers to 200,000 teachers; 1000 Education Supervisors to 10,000 Education
                                Supervisors; from 5 districts to all 36 districts of the state of Maharashtra-and for
                                the first time, bringing access to real time reports of students and remedial tools to
                                15 million parents.
                            </p>
                            {/* <Link to="#">
                                Learn more
                                <FeatherIcon icon="arrow-right" className="ms-1 icon-xxs" />
                            </Link> */}
                        </div>
                    </Col>
                    <Col lg={{ span: 6, offset: 1 }}>
                        <img
                            src="/images/nipun/nipunLogo.png"
                            alt="desktop1"
                            className="img-fluid"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Features;
