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
        <section className="pt-lg-6 pt-4 pb-lg-6 pb-5 position-relative overflow-hidden bg-paper-texture">
            <Container>
                <Row className="mt-5 text-center">
                    {ChalOppUrg.map((ele) => (
                        <Col xs={6} md={4} className="mb-4 mb-sm-0">
                            <div className="display-4 mb-3 fw-normal">{ele.title}</div>
                            {ele.pointers.map((feature, index) => {
                                return (
                                    <li
                                        className="py-3 border shadow-lg rounded m-2 bg-white d-flex align-items-center justify-content-center"
                                        key={index.toString()}>
                                        {feature && <>{feature}</>}
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
