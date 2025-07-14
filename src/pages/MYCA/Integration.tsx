import { Badge, Card, Col, Container, Row } from 'react-bootstrap';
// images

import FeatherIcon from 'feather-icons-react';
// types
import { Integration } from './types';

const Integrations = () => {
    const mycaFeatures: Integration[] = [
        {
            appLogo: 'book',
            app: 'Education',
        },
        {
            appLogo: 'pie-chart',
            app: 'Stories and Puzzles',
        },
        {
            appLogo: 'clock',
            app: 'Gamification',
        },
        {
            appLogo: 'sliders',
            app: 'Self Assessment',
        },
        {
            appLogo: 'shield-off',
            app: 'Secure Journaling',
        },
        {
            appLogo: 'check-square',
            app: 'Guided Exercise',
        },
        {
            appLogo: 'users',
            app: 'Guided Mediation',
        },
        {
            appLogo: 'volume-2',
            app: 'Loud Reading',
        },
        {
            appLogo: 'message-circle',
            app: 'AI Chatbot',
        },
        {
            appLogo: 'calendar',
            app: 'Mood Calender',
        },
        {
            appLogo: 'bell',
            app: 'Custom Notifications',
        },
        {
            appLogo: 'phone-call',
            app: 'Helpline',
        },
    ];

    return (
        <section className="my-5 py-6 bg-gradient2 position-relative">
            <Container data-aos="fade-up" data-aos-duration="1500">
                <Row>
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-success px-2 py-1">
                            What’s Inside MYCA?
                        </Badge>
                        <h1 className="display-5 fw-medium"> What’s Inside MYCA?</h1>
                        {/* <p className="text-muted mx-auto">
                            Learning Content Includes <span className="text-success fw-bold">anywhere</span>.
                        </p> */}
                    </Col>
                </Row>
                <Row className="mt-5">
                    {(mycaFeatures || []).map((integration, index) => {
                        return (
                            <Col lg={3} key={index.toString()}>
                                <Card>
                                    <Card.Body>
                                        <div className="d-flex rounded text-align-start">
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
                                            <div className="flex-grow-1 align-items-center ">
                                                <h5 className="">{integration.app}</h5>
                                                {/* <p className="mb-0">{integration.description}</p> */}
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
