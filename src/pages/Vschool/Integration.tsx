import { Badge, Card, Col, Container, Row } from 'react-bootstrap';
// images

import FeatherIcon from 'feather-icons-react';
// types
import { Integration, VschoolFeatures } from './types';

const Integrations = () => {
    const vschoolFeatures: VschoolFeatures[] = [
        {
            icon: 'book-open', // Represents learning content
            title: 'Multilingual, Curriculum-Aligned Content',
            summary:
                'Free digital learning resources available in multiple languages, aligned with state and national curricula.',
        },
        {
            icon: 'edit-3', // Represents assessments or exams
            title: 'FLN & LO-Based Assessments',
            summary:
                'Tools for large-scale assessments mapped to Foundational Literacy & Numeracy and NCERT Learning Outcomes.',
        },
        {
            icon: 'bar-chart-2', // Represents dashboards and data
            title: 'Real-Time Data Dashboards',
            summary:
                'Actionable insights for government officers and administrators to inform decisions and interventions.',
        },
        {
            icon: 'tool', // Represents enablement or tools for teachers
            title: 'Teacher Enablement Tools',
            summary: 'Access to digital TLMs, training resources, and multilingual content libraries.',
        },
        {
            icon: 'wifi-off', // Represents offline functionality
            title: 'Offline Functionality',
            summary: 'Designed for low-resource settings with offline access and lightweight architecture.',
        },
        {
            icon: 'layers', // Represents modular or scalable systems
            title: 'Scalable & Replicable Design',
            summary: 'Modular system that can be quickly adapted for any district, state, or syllabus.',
        },
    ];
    return (
        <section className="my-5 py-6 bg-gradient2 position-relative">
            <Container data-aos="fade-up" data-aos-duration="1500">
                <Row>
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-success px-2 py-1">
                            Powerful Features
                        </Badge>
                        <h1 className="display-5 fw-medium"> Key Features of V-School</h1>
                        <p className="text-muted mx-auto">
                            Discover the comprehensive suite of tools and features that make V-School a game-changer in
                            educational technology
                        </p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    {(vschoolFeatures || []).map((integration, index) => {
                        return (
                            <Col lg={6} key={index.toString()}>
                                <Card>
                                    <Card.Body>
                                        <div className="d-flex text-align-start">
                                            <FeatherIcon
                                                xl
                                                icon={integration.icon}
                                                // className={classNames('icon-dual-' + 'success')}
                                                className="me-4 align-self-center flex-shrink-0 icon-dual-success"
                                            />
                                            {/* <img
                                                src={integration.appLogo}
                                                alt="app"
                                                height="60"
                                                className="me-4 align-self-center flex-shrink-0"
                                            /> */}
                                            <div className="flex-grow-1">
                                                <h5 className="mt-0">{integration.title}</h5>
                                                <p className="mb-0">{integration.summary}</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
};

export default Integrations;
