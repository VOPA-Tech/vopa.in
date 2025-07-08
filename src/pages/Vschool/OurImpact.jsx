import { Badge, Col, Container, Row } from 'react-bootstrap';

import CountUp from 'react-countup';

import {
    FcApproval,
    FcReading,
    FcLibrary,
    FcVideoCall,
    FcBusinessman,
    FcHome,
    FcRules,
    FcComboChart,
    FcSurvey,
    FcClock,
} from 'react-icons/fc';

const stats = [
    {
        start: 11,
        end: 18,
        suffix: 'L+',
        label: 'Total Downloads',
        subtext: 'Growing daily',
        icon: <FcApproval size={64} />, // ✅ Approval/download feel
    },
    {
        start: 40,
        end: 50,
        suffix: 'K',
        label: 'Monthly Active Users',
        subtext: 'Highly engaged',
        icon: <FcReading size={64} />, // ✅ Reading implies engagement
    },
    {
        start: 4,
        end: 4.4,
        suffix: 'L',
        label: 'Students Onboarded',
        subtext: 'For assessments',
        icon: <FcLibrary size={64} />, // ✅ Library = students & learning
    },
    {
        start: 10,
        end: 13,
        suffix: 'K',
        label: 'Educational Videos',
        subtext: 'High quality',
        icon: <FcVideoCall size={64} />, // ✅ Video content
    },
    {
        start: 21710,
        end: 21715,
        suffix: '',
        label: 'Teachers Onboarded',
        subtext: '100% using monthly',
        icon: <FcBusinessman size={64} />, // ✅ Teacher representation
    },
    {
        start: 7240,
        end: 7247,
        suffix: '',
        label: 'Schools Using AI-FLN',
        subtext: 'Active users',
        icon: <FcHome size={64} />, // ✅ School = home/building icon
    },
    {
        start: 2550,
        end: 2555,
        suffix: '',
        label: 'Schools Using LO Assessment',
        subtext: 'Quality assured',
        icon: <FcRules size={64} />, // ✅ Rules/standards = LO Assessments
    },
    {
        start: 85,
        end: 90,
        suffix: 'K',
        label: 'Students Assessed',
        subtext: 'Learning Outcomes',
        icon: <FcComboChart size={64} />, // ✅ Charts = data & results
    },
    {
        start: 1,
        end: 3.5,
        suffix: 'L',
        label: 'Students Assessed',
        subtext: 'For FLN',
        icon: <FcSurvey size={64} />, // ✅ Survey = assessment
    },
    {
        start: 2,
        end: 8,
        suffix: '',
        label: 'Assessment Hours Saved',
        subtext: 'Efficiency gained',
        icon: <FcClock size={64} />, // ✅ Clock = time saved
    },
];

const OurImpact = () => {
    return (
        <section className="pt-8 pb-6 bg-light position-relative" data-aos="fade-up">
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
                        <Col
                            key={idx}
                            xs={6}
                            md={2}
                            className="mt-4 m-2 mb-sm-0  border bg-soft-success rounded-3  shadow-lg">
                            <div className="m-2">{stat.icon}</div>

                            <div className="display-4fw-normal">
                                <CountUp
                                    duration={5}
                                    start={stat.start}
                                    end={stat.end}
                                    suffix={stat.suffix}
                                    prefix={stat.prefix || ''}
                                />
                            </div>
                            <h3 className="mt-2  mb-0 ">{stat.label}</h3>
                            <p className="m-2   ">{stat.subtext}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default OurImpact;
