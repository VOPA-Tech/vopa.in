import { Card, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';

const steps = [
    {
        title: 'Assignment',
        description: 'A brief, real-world task to understand your approach—we keep it respectful of your time.',
        icon: 'file-text',
        step: 'orange',
    },
    {
        title: 'Technical Round',
        description: 'A practical conversation about problem-solving, past work, and how you build and collaborate.',
        icon: 'code',
        step: 'info',
    },
    {
        title: 'HR Round',
        description: 'A warm chat about values, team fit, and next steps, plus any logistics you’d like to discuss.',
        icon: 'user-check',
        step: 'success',
    },
];

const InterviewSteps = () => {
    return (
        <section className="position-relative py-6">
            <Container>
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <h1 className="display-5 fw-semibold">Our Recruitment Process</h1>
                        <p className="text-muted mx-auto">Simple steps. Warm conversations. Shared purpose.</p>
                    </Col>
                </Row>
                <Row className="pt-5 features-5">
                    {steps.map((step, index) => (
                        <Col md={4} key={index}>
                            <Card
                                className="border-0 shadow-none feature-item"
                                data-aos="fade-up"
                                data-aos-duration="500">
                                <Card.Body>
                                    <span
                                        className={classNames(
                                            `bg-soft-${step.step}`,
                                            `text-${step.step}`,
                                            'avatar',
                                            'avatar-sm',
                                            'rounded-circle',
                                            'd-inline-flex',
                                            'align-items-center',
                                            'justify-content-center',
                                            'fw-semibold',
                                            'me-3'
                                        )}
                                        style={{ width: 36, height: 36, fontSize: 14 }}>
                                        {index + 1}
                                    </span>

                                    <h4 className="mt-3 mb-2 fw-semibold">{step.title}</h4>
                                    <p className="text-muted mb-0">{step.description}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default InterviewSteps;
