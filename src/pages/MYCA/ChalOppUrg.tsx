import { Link } from 'react-router-dom';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// images
import desktop1 from 'assets/images/features/desktop1.gif';
import desktop from 'assets/images/hero/desktop.jpg';

const ChalOppUrg = () => {
    const ChalOppUrg = [
        {
            title: 'The Challenge',
            pointers: [
                'Growing mental health problems',
                'Affecting everyone',
                'Limited understanding of mental health',
                'Lack of authentic information in regional languages',
                'Dearth of free and authentic platform',
                'Need of training platform for health workers',
            ],
        },
        {
            title: 'The Opportunity',
            pointers: [
                'Enhance mental health literacy - gamified frameworks & exercises',
                'Promote informed decision-making',
                'Empower grassroot networks for long-term engagement & digital educational tools',
            ],
        },
        {
            title: 'The Urgency',
            pointers: [
                'India has one of the highest suicide rates, particularly in rural areas',
                'Need for accurate, accessible information in local languages',
                'Importance of addressing mental health in marginalized communities',
            ],
        },
    ];

    return (
        <section className="pt-lg-6 pt-4 pb-lg-6 pb-5 position-relative overflow-hidden">
            <Container>
                {/* <Row>
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-info px-2 py-1">
                            stats
                        </Badge>
                        <h1 className="display-5 fw-medium">Our Impact</h1>
                    </Col>
                </Row> */}
                <Row className="mt-5 text-center">
                    {ChalOppUrg.map((ele) => (
                        <Col xs={6} md={4} className="mb-4 mb-sm-0">
                            <div className="display-4 fw-normal">{ele.title}</div>
                            {ele.pointers.map((feature, index) => {
                                return (
                                    <li className="py-2 d-flex align-items-center" key={index.toString()}>
                                        {feature && (
                                            <>
                                                <FeatherIcon
                                                    icon="check"
                                                    className="icon-sm text-success align-middle me-2"
                                                />
                                                {feature}
                                            </>
                                        )}
                                    </li>
                                );
                            })}
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default ChalOppUrg;
