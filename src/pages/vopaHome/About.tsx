import { Badge, Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';

const About = () => {
    return (
        <section className="py-lg-6  py-4 bg-paper-texture mt-0 coworking-1 ">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <div className="text-center">
                            <h3 className="display-5 fw-medium">Visitors</h3>

                            <Row className="mt-5 text-center" data-aos="fade-up">
                                <Col xs={6} md={3} className="mb-5 mb-sm-0">
                                    <div className="display-3 fw-bold">
                                        <CountUp duration={2} end={21} />
                                    </div>
                                    <p className="mt-1 mb-0">Total Visitors</p>
                                </Col>

                                <Col xs={6} md={3} className="mb-5 mb-sm-0">
                                    <div className="display-3 fw-bold">
                                        <CountUp duration={2} start={5} end={51} />
                                    </div>
                                    <p className="mt-1 mb-0">Today's Visitors</p>
                                </Col>

                                <Col xs={6} md={3} className="mb-5 mb-sm-0">
                                    <div className="display-3 fw-bold">
                                        <CountUp duration={2} start={1} end={11} />
                                    </div>
                                    <p className="mt-1 mb-0">This Week</p>
                                </Col>

                                <Col xs={6} md={3} className="mb-5 mb-sm-0">
                                    <div className="display-3 fw-bold">
                                        <CountUp duration={2} start={100} end={500} suffix="+" />
                                    </div>
                                    <p className="mt-1 mb-0">This Month</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
