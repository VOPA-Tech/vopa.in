import { Badge, Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';

const impactData = [
    {
        start: 0,
        end: 8,
        suffix: '',
        prefix: '',
        title: 'ZP Partners',
        subtitle:
            'We partner with Zila Parishad education departments, actively working across 8 districts in Maharashtra.',
    },
    {
        start: 500,
        end: 25000,
        suffix: 'M+',
        prefix: '$',
        title: 'ZP Teachers',
        subtitle: 'Over 2,500 ZP teachers have been trained in V-School pedagogy and technical skills.',
    },
    {
        start: 500,
        end: 2500,
        suffix: '+',
        prefix: '',
        title: 'Chapters Created',
        subtitle:
            'Educational content is created and vetted by expert ZP teachers, with over 4,000 chapters developed so far.',
    },
    {
        start: 1,
        end: 118,
        suffix: 'M+',
        prefix: '',
        title: 'Benifited indivisuals',
        subtitle:
            'The V-School website served 12 lakh users last year, and the free Android app is now utilized by 18 lakh students.',
    },
];

const OurVision = () => {
    return (
        <section className="pt-8 pb-6 mb-4 mt-lg-4 bg-light position-relative" data-aos="fade-up">
            <div className="divider top d-none d-sm-block"></div>
            <Container>
                <Row>
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-success px-2 py-1">
                            stats
                        </Badge>
                        <h1 className="display-5 fw-medium">Our Impact</h1>
                    </Col>
                </Row>
                <Row className="mt-5 text-center">
                    {impactData.map((item, index) => (
                        <Col key={index} xs={6} md={3} className="mb-4 mb-sm-0">
                            <div className="display-4 fw-normal">
                                <CountUp
                                    duration={5}
                                    start={item.start}
                                    end={item.end}
                                    suffix={item.suffix}
                                    prefix={item.prefix}
                                />
                            </div>
                            <p className="mt-2 mb-0 fw-semibold">{item.title}</p>
                            <p>{item.subtitle}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default OurVision;
