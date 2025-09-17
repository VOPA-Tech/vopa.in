import { Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

const ChalOppUrg = () => {
    const ChalOppUrg = [
        {
            title: 'The Challenge',
            pointers: [
                'Lack of digital tools & infrastructure',
                'Gap in support for qualitative improvements in semi-urban schools',
                'Impact on quality of education and student engagement',
            ],
        },
        {
            title: 'The Opportunity',
            pointers: [
                'Potential to enhance foundational learning for 3200 students',
                'Improve foundational literacy and numeracy skills',
                'Create engaging and effective learning environments',
            ],
        },
        {
            title: 'The Urgency',
            pointers: [
                'Need for a hybrid teaching model integrating modern digital tools',
                'Need for administrative efficiencies',
                'Importance of timely intervention for foundational skills development',
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
