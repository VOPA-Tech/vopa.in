import { Badge, Card, Col, Container, Row } from 'react-bootstrap';
// images

import FeatherIcon from 'feather-icons-react';
// types
import { Integration, VschoolFeatures } from './types';

const Integrations = () => {
    const vschoolFeatures: VschoolFeatures[] = [
        {
            icon: 'https://uploads.justech-ai.in/vopa-website/Saiyam Page/1762162267297_icon_1-removebg-preview.png', // Represents learning content
            title: 'Recognition & Rewards',
            summary:
                'Schools receive Saiyam Trophy & gifts - Students with top marks → Saiyam Champions. - Teachers receive certificates & gifts.',
        },
        {
            icon: 'https://uploads.justech-ai.in/vopa-website/Saiyam Page/1762162267293_icon_2-removebg-preview.png', // Represents assessments or exams
            title: 'NEP 2020 Alignment',
            summary: 'Supports value-based and life-skill learning.',
        },
        {
            icon: 'https://uploads.justech-ai.in/vopa-website/Saiyam Page/1762162267290_icon_3-removebg-preview.png', // Represents dashboards and data
            title: 'Builds 21st-Century Skills',
            summary: 'Decision-making, communication, resilience.',
        },
        {
            icon: 'https://uploads.justech-ai.in/vopa-website/Saiyam Page/1762162267286_icon_4-removebg-preview.png', // Represents enablement or tools for teachers
            title: 'Experiential Learning',
            summary: 'Activity-based, hands-on engagement.',
        },
        {
            icon: 'https://uploads.justech-ai.in/vopa-website/Saiyam Page/1762162267281_icon_5-removebg-preview.png', // Represents offline functionality
            title: 'Free Resources',
            summary: 'Olympiad guidebook + free Saiyam web platform.',
        },
    ];
    return (
        <section className=" py-6 bg-paper-texture position-relative">
            <Container data-aos="fade-up" data-aos-duration="1500">
                <Row>
                    <Col className="text-center">
                        <h1 className="display-5 fw-medium"> Benefits and Features for Schools</h1>
                        <p className="text-muted mx-auto">Benefits and Features for Schools</p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    {(vschoolFeatures || []).map((integration, index) => {
                        return (
                            <Col lg={6} key={index.toString()}>
                                <Card>
                                    <Card.Body>
                                        <div className="d-flex text-align-start">
                                            {/* <FeatherIcon
                                                xl
                                                icon={integration.icon}
                                                // className={classNames('icon-dual-' + 'success')}
                                                className="me-4 align-self-center flex-shrink-0 icon-dual-success"
                                            /> */}
                                            <img
                                                src={integration.icon}
                                                alt="app"
                                                height="60"
                                                className="me-4 align-self-center flex-shrink-0"
                                            />
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
