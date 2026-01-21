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
        label: 'Pilot Impact',
        subtext: '(Oct 2024 - May 2025)',
        icon: 'https://uploads.justech-ai.in/vopa-website/Saiyam Page/1762166555171_saiyam-olympiad-2025-700-students-enrolled-till-september-2025.png', // ✅ Approval/download feel
    },
    {
        start: 40,
        end: 50,
        suffix: 'K',
        label: 'Saiyam Olympiad 2025',
        subtext: '700 + students enrolled till September 2025',
        icon: 'https://uploads.justech-ai.in/vopa-website/Saiyam Page/1762166555177_pilot-impact-oct-2024-may-2025-1825-students-reached.png', // ✅ Reading implies engagement
    },
];

const OurReachImpact = () => {
    return (
        <section className="pt-8 pb-6 bg-paper-texture position-relative">
            <Container data-aos="fade-up">
                <Row>
                    <Col className="text-center">
                        {/* <Badge pill bg="" className="badge-soft-info px-2 py-1">
                            stats
                        </Badge> */}
                        <h1 className="display-5 fw-medium">Our Reach and Impact</h1>
                    </Col>
                </Row>

                <Row className="mt-5 text-center justify-content-center">
                    {stats.map((stat, idx) => (
                        <Col key={idx} lg={5} className="mt-4 m-2 mb-sm-0  ">
                            {/* <div className="m-2">{stat.icon}</div> */}
                            <img
                                style={{ height: '200px' }}
                                src={stat.icon}
                                alt="avatar"
                                className="img-fluid mt-2  "
                            />

                            <h3 className="mt-2  mb-0 ">{stat.label}</h3>
                            <p className="m-2   ">{stat.subtext}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default OurReachImpact;
