import { Badge, Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';

const impactData = [
    {
        start: 0,
        end: 6,
        suffix: '',
        prefix: '',
        title: '6 ZP Partners',
        subtitle:
            'We have partnered with 6 Zilla Parishads (ZPs) in Maharashtra to pilot and strengthen district-level education governance systems at scale.',
    },
    {
        start: 195,
        end: 200,
        suffix: 'K+',
        prefix: '',
        title: '200K+ Teachers and headmasters ',
        subtitle:
            'have been provided with logins through API integration with the Shalarath Portal under NIPUN Maharashtra, making the system more effective, inclusive, and future-ready through AI-powered, state-integrated platforms.',
    },
    {
        start: 1,
        end: 5.5,
        suffix: 'Lakh+',
        prefix: '',
        title: '65K+ School Visits',
        subtitle:
            'Supervisors have visited more than 65,000 schools to reassess the foundational literacy and numeracy (FLN) levels of 1.6 million students.',
    },
    {
        start: 1,
        end: 3,
        suffix: 'M+',
        prefix: '',
        title: '7 million+ Assessments',
        subtitle:
            'have been collected and analyzed, saving thousands of government work hours and enabling data-driven decisions for improved learning outcomes across the state.',
    },
];

const OurImpact = () => {
    return (
        <section className=" bg-paper-texture position-relative ">
            <Container data-aos="fade-up" data-aos-duration="1000" className="py-6">
                <Row>
                    <Col className="text-center">
                        {/* <Badge pill bg="" className="badge-soft-success px-2 py-1">
                            stats
                        </Badge> */}
                        <p className="display-3 fw-medium">Our Impact</p>
                    </Col>
                </Row>
                <Row className="mt-5 text-center">
                    {impactData.map((item, index) => (
                        <Col key={index} xs={6} md={3} className="mb-4 mb-sm-0">
                            <p className="mb-4 display-4 mb-0 ">{item.title}</p>
                            <p className="newspaper-text">{item.subtitle}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default OurImpact;
