import { Col, Container, Row } from 'react-bootstrap';
import { FcReading, FcCalendar, FcLike, FcHome, FcApproval } from 'react-icons/fc';

const benefits = [
    {
        label: 'Learning Circle',
        subtext: 'Weekly peer-learning & knowledge sharing',
        icon: <FcReading size={64} />,
    },
    {
        label: 'Alternate Saturday',
        subtext: 'Every 2nd & 4th Saturday off',
        icon: <FcCalendar size={64} />,
    },
    {
        label: 'Work–Life Balance',
        subtext: 'Flexible hours with clear boundaries',
        icon: <FcLike size={64} />,
    },
    {
        label: 'Hybrid Work',
        subtext: 'Blend of office, field, and WFH',
        icon: <FcHome size={64} />,
    },
    {
        label: 'Certification & Experience Letters',
        subtext: 'Formal recognition for your tenure',
        icon: <FcApproval size={64} />,
    },
];

const OurBenefits = () => {
    return (
        <section className="pt-8 pb-6 bg-paper-texture position-relative">
            <Container data-aos="fade-up">
                <Row>
                    <Col className="text-center">
                        <h1 className="display-5 fw-medium">Our Benefits</h1>
                        <p className="mt-2 mb-0 fw-semibold">
                            Some personal and professional benefits of working at VOPA
                        </p>
                    </Col>
                </Row>

                <Row className="mt-5 text-center justify-content-center">
                    {benefits.map((b, idx) => (
                        <Col key={idx} xs={6} md={2} className="mt-4 mb-sm-0">
                            <div className="mb-3">{b.icon}</div>
                            <h3 className="mt-2 mb-0">{b.label}</h3>
                            <p className="mt-2 mb-0 text-muted">{b.subtext}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default OurBenefits;
