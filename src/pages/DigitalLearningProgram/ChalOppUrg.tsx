import { Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

const ChalOppUrg = () => {
    const ChalOppUrg = [
        {
            title: 'The Challenge',
            pointers: [
                'Limited access to digital tools and infrastructure',
                'Insufficient support for teachers in integrating technology into lesson planning and classroom processes',
                'Direct impact on the quality of education and overall student engagement',
                'Issues such as irregular student attendance further affecting learning outcomes',
            ],
        },
        {
            title: 'The Opportunity',
            pointers: [
                'Strengthen foundational learning for approximately 3,660 students',
                'Provide free, high-quality education supported by close monitoring at every level',
                'Create engaging, learner-centred classroom environments',
                'Support teachers in effectively integrating technology into everyday teaching practices',
                'Improve foundational literacy and numeracy through a balanced hybrid approach using both digital tools and paper-based methods',
            ],
        },
        {
            title: 'The Urgency',
            pointers: [
                'Schools require a flexible teaching approach that blends classroom practices with simple, effective digital tools.',
                'Strong administrative support is essential so teachers can devote their time and attention fully to students.',
                'Early and timely intervention is crucial for building strong foundational skills in young learners.',
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
