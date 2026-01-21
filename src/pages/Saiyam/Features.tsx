import { Badge, Col, Container, Row } from 'react-bootstrap';

const Features = () => {
    const features = [
        'Based on NEP-guided pedagogy: Vahi, Pen, Pustak, Parisar, Shikshak',
        'Available offline and ad-free',
        'Supports low-literacy households',
    ];

    return (
        <section className="pt-lg-6 pt-4 pb-lg-6 pb-5 position-relative overflow-hidden bg-paper-texture newspaper-text">
            <Container>
                <Row className="align-items-center ">
                    <Col lg={5}>
                        <div className="mb-4 mb-lg-0">
                            <Badge pill bg="" className="badge-soft-success px-2 py-1">
                                Project Overview
                            </Badge>
                            <h1 className="display-4 fw-medium mb-3">Project Overview</h1>
                            <p className="text-muted mx-auto mb-4 pb-3">
                                The Saiyam Olympiad encourages schools to conduct engaging and reflective activities and
                                complete the Saiyam course modules.
                            </p>
                            <p className="text-muted mx-auto mb-4 pb-3">
                                It helps students understand the causes and consequences of addiction and develop
                                self-control and responsible decision-making.
                            </p>
                        </div>
                    </Col>
                    <Col lg={{ span: 6, offset: 1 }}>
                        <img
                            src="https://uploads.justech-ai.in/vopa-website/Saiyam Page/1763722765149_gemini_generated_image_cgrkoocgrkoocgrk-removebg-preview.png"
                            alt="desktop1"
                            style={{ backgroundColor: '#E7E7E7' }}
                            className="img-fluid  rounded-5 shadow-lg"
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
