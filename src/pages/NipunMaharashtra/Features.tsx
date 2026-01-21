import { Col, Container, Row } from 'react-bootstrap';

const Features = () => {
    return (
        <section className=" pt-6  pb-6 bg-paper-texture position-relative overflow-hidden">
            <Container>
                <Row className="d-flex align-items-center mb-6 pb-lg-5">
                    <Col lg={5} className="align-items-center ">
                        <p className="text-black mx-auto mb-4 pb-3 newspaper-text">
                            Scaling Foundational Literacy and Numeracy in Partnership with SCERT under NIPUN
                            Maharashtra.
                        </p>
                        <p className="text-muted mx-auto newspaper-text">
                            To improve students’ Foundational Literacy and Numeracy (FLN) at scale, VOPA has developed
                            the<strong> NIPUN Maharashtra (SCERTM) Android Application,</strong> with SCERTM- the apex
                            academic body of the state. The initiative aims to expand our pilots at various district
                            from{' '}
                            <strong>
                                0.35 million to 3.8 million students, 20,000 to 200,000 teachers, and 1,000 to 8,000
                                Education Supervisors, scaling from 6 districts to all 36 districts across Maharashtra.
                            </strong>{' '}
                            For the first time, it also provides <strong>parents</strong> with access to real-time
                            <strong>student reports</strong> and <strong> remedial learning tools.</strong>
                        </p>
                    </Col>
                    <Col lg={{ span: 6, offset: 1 }} className="mt-5 mt-lg-0 justify-content-center d-flex">
                        <img
                            src="https://uploads.justech-ai.in/vopa-website/media kit/1763714576177_gemini_generated_image_okctrvokctrvokct-removebg-preview.png"
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
