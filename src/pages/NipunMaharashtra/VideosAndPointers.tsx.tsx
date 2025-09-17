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
                'Replicable model': 'Model replicable at state & national level',
                'Scalable model': 'Platform-agnostic and readily adaptable',
                'Customizable Assessment Levels': 'Agency with Educational bodies(SCERT)',
                'Ground-Up Ownership': 'Government ecosystem led project',
                'Long-Term Vision': 'Ensuring sustained improvements for future generations',
                'State Adoption': 'SCERT to host data and technology infrastructure',
                'Technology Readiness': 'Successful pilot with 100% adoption',
            },
        },
        {
            title: 'Features of Nipun Maharashtra',
            link: 'https://www.youtube.com/embed/BeKsdfHT20Y',
            pointer: {
                Scale: 'Ability to work at scale for 70,000 schools, replicable tech stack',
                Ecosystem: 'All stakeholders on one platform: Parents, Teachers, HeadMasters, Education Officers',
                ' Evidence': 'AI based classroom assessments for reading, numeracy (FLN)',

                'Transparency & accountability': 'Parents and admin officers linkage into model',

                'Governance Transformation': 'Realtime dashboards, Nested supervision',

                Engagement: 'Multimedia notifications, Reminders, Chatbots',

                'Teacher capacity building': 'Data driven, need based courses and material',
            },
        },
    ];

    return (
        <section className="pt-6  pb-6 position-relative overflow-hidden">
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
                                                    <FeatherIcon
                                                        icon="check"
                                                        className="icon-md text-success align-middle me-2"
                                                    />
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
