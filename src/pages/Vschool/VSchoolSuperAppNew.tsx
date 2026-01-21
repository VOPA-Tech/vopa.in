import { Badge, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

const VSchoolSuperAppNew = () => {
    const VSchoolSuperAppNew = [
        {
            title: 'TEACHERS',
            pointers: ['Teaching', 'Training', 'TLMs'],
        },
        {
            title: 'GOVERNMENT',
            pointers: ['Analytics', 'Assessments', 'Implementation'],
        },
        {
            title: 'PARENTS',
            pointers: ['Monitoring', 'Access', 'Engagement'],
        },
        {
            title: 'STUDENTS',
            pointers: ['Self-learning', 'Assessments', 'Home Learning'],
        },
    ];

    return (
        <section className="pt-lg-6 pt-4 pb-lg-6 pb-5 bg-paper-texture position-relative overflow-hidden">
            <Container>
                <Row>
                    <Col className="text-center">
                        {/* <Badge pill bg="" className="badge-soft-success px-2 py-1">
                            V-School
                        </Badge> */}
                        <h1 className="display-5 text-success fw-medium">
                            <strong>V-School as a Super App</strong>
                        </h1>
                    </Col>
                </Row>
                <Row className="mt-5 text-center">
                    {VSchoolSuperAppNew.map((ele) => (
                        <Col xs={6} md={3} className="mb-4 mb-sm-0">
                            <div className="display-4 mb-3 fw-normal">{ele.title}</div>
                            {ele.pointers.map((feature, index) => {
                                return (
                                    <li
                                        className="py-3 border shadow-lg rounded m-2 bg-white d-flex align-items-center justify-content-center"
                                        key={index.toString()}>
                                        {feature && <>{feature}</>}{' '}
                                        {/* <Badge pill bg="" className="badge-soft-success px-2 py-1">
                            V-School
                        </Badge> */}
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

export default VSchoolSuperAppNew;
