import { Badge, Card, Col, Container, Row } from 'react-bootstrap';
// images
import slack from 'assets/images/brands/slack.png';
import fb from 'assets/images/brands/fb.png';
import salesforce from 'assets/images/brands/salesforce.jpg';
import at from 'assets/images/brands/at.png';
import gsheet from 'assets/images/brands/gsheet.png';
import ac from 'assets/images/brands/ac.jpeg';
import FeatherIcon from 'feather-icons-react';
// types
import { Integration } from './types';
import classNames from 'classnames';

type IntegrationsProps = {
    integrations: Integration[];
};

const Integrations = ({ integrations }: IntegrationsProps) => {
    const vschoolFeatures: Integration[] = [
        {
            appLogo: 'clipboard',
            app: 'Digital Assessments',
            description:
                'Structured literacy and numeracy tests designed for scalability across districts, grades, and subjects.',
        },
        {
            appLogo: 'bar-chart',
            app: 'Visual Dashboards',
            description:
                'Easy-to-read dashboards with filters to track learning progress by student, school, or region.',
        },
        {
            appLogo: 'clock',
            app: 'Time Efficiency',
            description: 'Reduces teacher workload by automating assessment analysis, saving over 21 hours per month.',
        },
        {
            appLogo: 'settings',
            app: 'Custom Tools',
            description:
                'Customizable assessment modules tailored to district-level needs and government reporting formats.',
        },
        {
            appLogo: 'cloud-off',
            app: 'Paperless Process',
            description:
                'Replaces traditional pen-and-paper assessments, cutting costs and reducing environmental impact.',
        },
        {
            appLogo: 'check-square',
            app: 'Actionable Insights',
            description:
                'Provides real-time data to enable timely remedial action and improve classroom learning outcomes.',
        },
        {
            appLogo: 'users',
            app: 'Multi-level Access',
            description:
                'Role-based access for teachers, headmasters, and administrators to make decentralized decisions.',
        },
        {
            appLogo: 'globe',
            app: 'NEP Alignment',
            description: 'Fully aligned with NIPUN Bharat mission and NEP 2020 foundational learning goals.',
        },
    ];

    return (
        <section className="my-5 py-6 bg-gradient2 position-relative">
            <Container data-aos="fade-up" data-aos-duration="1500">
                <Row>
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-success px-2 py-1">
                            What’s Inside Nipun Bharat Mission?
                        </Badge>
                        <h1 className="display-5 fw-medium"> What’s Inside Nipun Bharat Mission?</h1>
                        <p className="text-muted mx-auto">
                            Learning Content Includes <span className="text-success fw-bold">anywhere</span>.
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
                                                icon={integration.appLogo}
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
                                                <h5 className="mt-0">{integration.app}</h5>
                                                <p className="mb-0">{integration.description}</p>
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
