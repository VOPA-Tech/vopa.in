import { Link } from 'react-router-dom';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

const VideosAndPointers = () => {
    const features = [
        'Based on NEP-guided pedagogy: Vahi, Pen, Pustak, Parisar, Shikshak',
        'Available offline and ad-free',
        'Supports low-literacy households',
    ];

    const featuresThatMatter = [
        {
            title: 'Education Assessment at Scale',
            link: 'https://www.youtube.com/embed/xg6YjLbqzeY',
            pointer: {
                'Replicable model': 'Designed for seamless replication at both state and national levels.',
                'Scalable model': 'Platform-agnostic architecture ensures easy expansion and adaptability.',
                'Customizable Assessment Levels':
                    ' Full flexibility for educational bodies (SCERT) to define and modify assessment levels.',
                'Ground-Up Ownership': 'A government-led initiative built with strong ecosystem ownership.',
                'Long-Term Vision': 'Focused on sustaining improvements for future generations.',
                'State Adoption': 'SCERT will host and manage the data and technology infrastructure.',
                'Technology Readiness':
                    'Successfully piloted with 100% adoption, demonstrating strong operational feasibility.',
            },
        },
        {
            title: 'Features of Nipun Maharashtra',
            link: 'https://www.youtube.com/embed/BeKsdfHT20Y',
            pointer: {
                Scale: 'Capable of operating across 70,000+ schools with a fully replicable technology stack.',
                Ecosystem:
                    ': Brings all stakeholders—parents, teachers, headmasters, and education officers—onto a single integrated platform.',
                Evidence: 'Utilizes AI-based classroom assessments for reading and numeracy (FLN).',

                'Transparency & accountability':
                    'Ensures linkage of parents and administrative officers for greater visibility and responsibility.',

                'Governance Transformation':
                    'Offers real-time dashboards and a nested supervision framework for effective monitoring.',

                Engagement:
                    'Provides multimedia notifications, reminders, and chatbot support for continuous communication.',

                'Teacher capacity building': 'Delivers data-driven, need-based courses and learning materials.',
            },
        },
    ];

    return (
        <section className="pt-6 bg-paper-texture pb-6 position-relative overflow-hidden">
            <Container>
                {featuresThatMatter.map((ele) => (
                    <Row className="align-items-center">
                        <Col lg={4}>
                            <div className="video-container card rounded">
                                <iframe
                                    width="100%"
                                    height="300"
                                    src={ele.link}
                                    title="YouTube video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </Col>
                        <Col lg={{ span: 7, offset: 1 }}>
                            <div className=" mt-lg-0">
                                <h2 className="display-4 text-success fw-medium mb-3">{ele.title}</h2>

                                <ul className="list-unstyled    text-start">
                                    {Object.entries(ele.pointer).map(([key, value]) => {
                                        return (
                                            <li className=" d-flex align-items-center" key={key}>
                                                <>
                                                    {/* <FeatherIcon
                                                        icon="check-circle"
                                                        className="icon-XS text-success align-middle me-2"
                                                    /> */}
                                                    <p>
                                                        <strong>{key}</strong>: {value}
                                                    </p>
                                                </>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                ))}
            </Container>
        </section>
    );
};

export default VideosAndPointers;
