import { Link } from 'react-router-dom';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// images
import desktop1 from 'assets/images/features/desktop1.gif';
import desktop from 'assets/images/hero/desktop.jpg';

const Features = () => {
    const features = [
        'Aligned with NIPUN Bharat and NEP 2020 learning goals',
        'Reduces over 21 hours/month of teacher workload through automation',
        'Customizable dashboards and tools for district-specific strategies',
    ];

    return (
        <section className="pt-lg-6 pt-4 pb-lg-6 pb-5 position-relative overflow-hidden">
            <Container>
                <Row className="align-items-center">
                    <Col lg={4}>
                        <div
                            className="bg-white p-2 rounded border shadow mb-lg-0 mb-3"
                            data-aos="fade-right"
                            data-aos-duration="1500">
                            <img
                                src="https://uploads.justech-ai.in/vopa-website/myca/1758272746928_mycalogo.png"
                                alt="desktop"
                                className="img-fluid"
                            />
                        </div>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.mycaapp"
                            target="blank"
                            className="btn btn-outline-success mt-4">
                            Download the App
                        </a>{' '}
                    </Col>
                    <Col lg={{ span: 6, offset: 1 }}>
                        <div className="mt-4 mt-lg-0">
                            <h1 className="display-4 text-success fw-medium mb-3">MYCA – A Mental Health Ecosystem</h1>
                            <p className="text-muted mx-auto mb-4 pb-3">
                                Project ‘MYCA’ is a collaboration between VOPA & Parivartan Trust, a leading
                                organization in Mental Health domain serving the underprivileged communities.
                            </p>
                            <p className="text-muted mx-auto mb-4 pb-3">
                                Leveraging the developed technology and prior experience, together we are building an
                                ecosystem ‘MYCA’ that provides authentic information, awareness, sensitization towards
                                various mental health issues in Marathi and Hindi language. This shall benefit the
                                persons with suicide ideations, those who previously attempted suicide, who have been
                                identified and diagnosed with various common mental disorders, their caretakers, Govt
                                bodies, NGOs, and public at large.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Features;
