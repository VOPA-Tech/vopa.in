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
        label: 'Addiction and Us',
        subtext: 'Growing daily',
        icon: 'https://uploads.justech-ai.in/vopa-website/Saiyam Page/1762158560561_1-addiction-and-us.png', // ✅ Approval/download feel
    },
    {
        start: 40,
        end: 50,
        suffix: 'K',
        label: ' Harmful Effects of Tobacco',
        subtext: 'Highly engaged',
        icon: 'https://uploads.justech-ai.in/vopa-website/Saiyam Page/1762158560558_2-harmful-effects-of-tobacco.png', // ✅ Reading implies engagement
    },
    {
        start: 1,
        end: 4.5,
        suffix: 'L',
        label: 'Harmful Effects of Alcohol',
        subtext: 'For FLN assessments',
        icon: 'https://uploads.justech-ai.in/vopa-website/Saiyam Page/1762158560555_3-harmful-effects-of-alcohol.png', // ✅ Library = students & learning
    },
    {
        start: 10,
        end: 13,
        suffix: 'K',
        label: 'Harmful Effects of Drugs',
        subtext: 'High quality',
        icon: 'https://uploads.justech-ai.in/vopa-website/Saiyam Page/1762158560548_4-harmful-effects-of-drugs.png', // ✅ Video content
    },
    {
        start: 21710,
        end: 21715,
        suffix: '',
        label: 'Mobile and Gaming Issues',
        subtext: '100% using monthly',
        icon: 'https://uploads.justech-ai.in/vopa-website/Saiyam Page/1762158560551_5-mobile-and-gaming-issues.png', // ✅ Teacher representation
    },
    {
        start: 7240,
        end: 7247,
        suffix: '',
        label: 'Saying No to Addiction',
        subtext: 'Active users',
        icon: 'https://uploads.justech-ai.in/vopa-website/Saiyam Page/1762158560552_6-saying-no-to-addiction.png',
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
                        <h1 className="display-5 fw-medium">Saiyam Course Modules</h1>
                        <p className="mt-2 mb-0 fw-semibold">
                            The modules are available on the Saiyam Digital Platform.Registered students can log in to
                            complete the course and participate in Olympiad activities.
                        </p>
                    </Col>
                </Row>

                <Row className="mt-5 text-center justify-content-center">
                    {stats.map((stat, idx) => (
                        <Col key={idx} lg={4} className="mt-4 m-2 mb-sm-0  border bg-soft-success rounded-3  shadow-lg">
                            {/* <div className="m-2">{stat.icon}</div> */}
                            <img
                                style={{ height: '100px' }}
                                src={stat.icon}
                                alt="avatar"
                                className="img-fluid mt-2  rounded-circle avatar-border"
                            />

                            {/* <div className="display-4fw-normal">
                                <CountUp
                                    duration={5}
                                    start={stat.start}
                                    end={stat.end}
                                    suffix={stat.suffix}
                                    prefix={stat.prefix || ''}
                                />
                            </div> */}
                            <h3 className="mt-2  mb-0 ">{stat.label}</h3>
                            {/* <p className="m-2   ">{stat.subtext}</p> */}
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default OurImpact;
