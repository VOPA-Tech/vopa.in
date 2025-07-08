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
            app: 'Digital Learning Program',
            description:
                ' Digital Learning Program Digital Learning Program Digital Learning Program Digital Learning Program',
        },
        {
            appLogo: 'bar-chart',
            app: 'Digital Learning Program',
            description:
                ' Digital Learning Program Digital Learning Program Digital Learning Program Digital Learning Program',
        },
        {
            appLogo: 'clock',
            app: 'Digital Learning Program',
            description:
                ' Digital Learning Program Digital Learning Program Digital Learning Program Digital Learning Program',
        },
        {
            appLogo: 'settings',
            app: 'Digital Learning Program',
            description:
                ' Digital Learning Program Digital Learning Program Digital Learning Program Digital Learning Program',
        },
        {
            appLogo: 'cloud-off',
            app: 'Digital Learning Program',
            description:
                ' Digital Learning Program Digital Learning Program Digital Learning Program Digital Learning Program',
        },
        {
            appLogo: 'check-square',
            app: 'Digital Learning Program',
            description:
                ' Digital Learning Program Digital Learning Program Digital Learning Program Digital Learning Program',
        },
        {
            appLogo: 'users',
            app: 'Digital Learning Program',
            description:
                ' Digital Learning Program Digital Learning Program Digital Learning Program Digital Learning Program',
        },
        {
            appLogo: 'globe',
            app: 'Digital Learning Program',
            description:
                ' Digital Learning Program Digital Learning Program Digital Learning Program Digital Learning Program',
        },
    ];

    return (
        <section className="my-5 py-6 bg-gradient2 position-relative">
            <Container data-aos="fade-up" data-aos-duration="1500">
                <Row>
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-success px-2 py-1">
                            What’s Inside Digital Learning Program?
                        </Badge>
                        <h1 className="display-5 fw-medium"> What’s Inside Digital Learning Program</h1>
                        <p className="text-muted mx-auto">
                            Digital Learning Program<span className="text-success fw-bold">anywhere</span>.
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
