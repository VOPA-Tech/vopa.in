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
            appLogo: 'video',
            app: 'Video',
            description:
                'Curriculum-aligned video lessons designed to explain core concepts clearly across grades 1 to 10.',
        },
        {
            appLogo: 'headphones',
            app: 'Audio',
            description:
                'Audio-based content to support listening comprehension and reinforce concepts in students’ preferred language.',
        },
        {
            appLogo: 'image',
            app: 'Pictures',
            description:
                'Illustrative visuals and contextual images that aid better understanding, especially for early-grade learners.',
        },
        {
            appLogo: 'sunrise',
            app: 'Animations',
            description:
                'Animated stories and explainer videos that simplify complex topics while keeping learning engaging.',
        },
        {
            appLogo: 'sidebar',
            app: 'Worksheets',
            description:
                'Printable and interactive worksheets that allow students to apply learning and practice independently.',
        },
        {
            appLogo: 'gift',
            app: 'Presentations',
            description:
                'Slide-based resources designed to help teachers deliver structured and effective lessons in classrooms.',
        },
        {
            appLogo: 'clipboard',
            app: 'Assessments',
            description:
                'Interactive quizzes and tests that provide instant feedback and guide teachers on learning progress.',
        },
        {
            appLogo: 'link',
            app: 'Extra Links',
            description:
                'Curated educational resources that extend learning beyond the classroom for curious and self-driven learners.',
        },
    ];

    return (
        <section className="my-5 py-6 bg-gradient2 position-relative">
            <Container data-aos="fade-up" data-aos-duration="1500">
                <Row>
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-success px-2 py-1">
                            What’s Inside V-School?
                        </Badge>
                        <h1 className="display-5 fw-medium"> What’s Inside V-School?</h1>
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
