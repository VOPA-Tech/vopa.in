import { Col, Container, Row } from 'react-bootstrap';

const Features = () => {
    return (
        <section className=" pt-6  pb-6 position-relative overflow-hidden">
            <Container>
                <Row className="align-items-center mb-6 pb-lg-5">
                    <Col lg={5}>
                        <div className="">
                            <p className="text-muted mx-auto mb-4 pb-3">
                                To improve students’ Foundational Literacy and Numeracy (FLN) at scale, VOPA has built
                                out the NIPUN Maharashtra app for SCERT Maharashtra, the apex educational body of the
                                state.
                            </p>
                            <p className="text-muted mx-auto mb-4 pb-3">
                                It is set to scale our pilots from 350,000 students to 3,800,000 students; 20,000
                                teachers to 200,000 teachers; 1000 Education Supervisors to 10,000 Education
                                Supervisors; from 5 districts to all 36 districts of the state of Maharashtra-and for
                                the first time, bringing access to real time reports of students and remedial tools to
                                3M+ parents.
                            </p>
                        </div>
                    </Col>
                    <Col lg={{ span: 6, offset: 1 }}>
                        <img
                            src="https://uploads.justech-ai.in/vopa-website/Nipun Page Website/1758273494664_nipunlogo.png"
                            alt="desktop1"
                            className="img-fluid"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Features;
