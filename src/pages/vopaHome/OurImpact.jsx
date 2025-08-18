import { Badge, Col, Container, Row } from 'react-bootstrap';
import { FcApproval, FcReading, FcLibrary, FcMoneyTransfer, FcAlarmClock } from 'react-icons/fc';
import CountUp from 'react-countup';

const stats = [
    {
        start: 1,
        end: 10,
        suffix: 'M+',
        label: 'Benificiaries',
        subtext: 'Enabling system transformation through technology',
        icon: <FcApproval size={64} />,
    },
    {
        start: 195,
        end: 200,
        suffix: 'K+',

        label: 'Teachers',
        subtext: 'Educators being empowered with new tools',
        icon: <FcReading size={64} />,
    },
    {
        start: 110,
        end: 120,
        suffix: 'K+',
        label: 'Schools',
        subtext: 'Learning being transformed through evidence-based practices',
        icon: <FcLibrary size={64} />,
    },
    {
        start: 0,
        end: 1.6,
        suffix: 'M',
        label: 'USD raised',
        subtext: 'Funding secured for education',
        icon: <FcMoneyTransfer size={64} />,
    },
    {
        start: 0,
        end: 1.7,
        suffix: 'M+',
        label: 'Teaching Hours Saved',
        subtext: 'Time optimized for better learning',
        icon: <FcAlarmClock size={64} />,
    },
];

const OurImpact = () => {
    return (
        <section className="pt-8 pb-6  position-relative" data-aos="fade-up">
            <Container>
                <Row>
                    <Col className="text-center">
                        {/* <Badge pill bg="" className="badge-soft-info px-2 py-1">
                            stats
                        </Badge> */}
                        <h1 className="display-5 fw-medium">Our Impact</h1>
                        <p className="mt-2 mb-0 fw-semibold">
                            Measuring success through meaningful metrics that reflect real change in communities and
                            individual lives across our project implementations.
                        </p>
                    </Col>
                </Row>

                <Row className="mt-5 text-center justify-content-center">
                    {stats.map((stat, idx) => (
                        <Col key={idx} xs={6} md={2} className="mt-4 mb-sm-0">
                            <div className="mb-3">{stat.icon}</div>

                            <div className="display-4 p-4 fw-normal">
                                <CountUp
                                    duration={5}
                                    start={stat.start}
                                    end={stat.end}
                                    suffix={stat.suffix}
                                    prefix={stat.prefix || ''}
                                />
                            </div>
                            <h3 className="mt-2  mb-0 ">{stat.label}</h3>
                            <p className="mt-2  mb-0 ">{stat.subtext}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default OurImpact;
