import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import CountUp from 'react-countup';

const VSchoolAnalytics = () => {
    const stats = [
        {
            start: 0,
            end: 1.5,
            suffix: ' Lakhs+ Teachers',
            label: 'Teachers',
            subtext: 'subtitle',
        },
        {
            start: 1,
            end: 12,
            suffix: ' Lakhs+ Student used V-School',
            prefix: '',
            label: 'Teachers',
            subtext: 'subtitle',
        },
        {
            start: 50,
            end: 56,
            suffix: ' lakh+ antries in FLN & LO from 1.2 lakhs+ student',
            label: 'Schools',
            subtext: 'subtitle',
        },
        {
            start: 10,
            end: 18,
            suffix: ' lakhs+ Vschool App download',
            label: 'USD raised',
            subtext: 'subtitle',
        },
        {
            start: 0,
            end: 6,
            suffix: ' Cr+ VSchool App page views',
            label: 'Teaching Hours Saved',
            subtext: 'subtitle',
        },
        {
            start: 3995,
            end: 4000,
            suffix: ' + Schools used monitoring system',
            label: 'Teaching Hours Saved',
            subtext: 'subtitle',
        },
        {
            start: 11995,
            end: 12000,
            suffix: ' + Videos',
            label: 'Teaching Hours Saved',
            subtext: 'subtitle',
        },
        {
            start: 25,
            end: 30,
            suffix: ' lakhs+ Users across Maharashtras',
            label: 'Teaching Hours Saved',
            subtext: 'subtitle',
        },
        {
            start: 20,
            end: 25,
            suffix: ' Lakhs+ Youtube views',
            label: 'Teaching Hours Saved',
            subtext: 'subtitle',
        },
        {
            start: 3895,
            end: 3900,
            suffix: ' + chapters published',
            label: 'Teaching Hours Saved',
            subtext: 'subtitle',
        },
    ];
    const vSchoolAnalytics = ['1.5 Lakhs+ '];
    return (
        <section className="position-relative pb-6 pt-lg-6 pt-4 features-3">
            <Container data-aos="fade-up" data-aos-duration="500">
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <h3 className="fw-medium mb-1">V-School Analytics</h3>
                    </Col>
                </Row>

                <Row className="mt-5 align-items-center justify-content-center">
                    {stats.map((stat, idx) => (
                        <Col key={idx} xs={6} md={3} className="mb-4 mb-sm-0 ">
                            <div className="display-5 fw-normal text-center">
                                <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                                <CountUp
                                    duration={5}
                                    start={stat.start}
                                    end={stat.end}
                                    suffix={stat.suffix}
                                    prefix={stat.prefix || ''}
                                />
                            </div>
                            {/* <p className="mt-2 mb-2 fw-semibold text-center">{stat.label}</p> */}
                            {/* <p className="text-center">{stat.subtext}</p> */}
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default VSchoolAnalytics;
