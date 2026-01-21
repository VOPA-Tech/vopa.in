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
            title: 'Unique Pedagogy',
            link: 'https://www.youtube.com/embed/nvQ4ZChq27g',
            pointer: {
                'More than Videos': 'Interactive lessons that go beyond traditional video formats.',
                'Aligned Activities': 'Content crafted with NEP 2020 and Bloom’s Taxonomy in mind.',
                'Targeted Learning': 'Focus on mastering one element at a time.',
                'Reward System': 'Earn rewards for completing learning tasks.',
                'AI-Generated MCQs': 'Personalized questions based on individual learning progress.',
            },
        },
        {
            title: 'Learning by Challenges!',
            link: 'https://www.youtube.com/embed/Mz8WJXxXlWM',
            pointer: {
                'Variety of Challenges': 'Diverse challenge types to cater to different learning styles.',
                'Engaging Challenges': 'Daily mini-challenges to keep students motivated.',
                'Progress Nudges': 'Automatic and custom nudges to encourage challenge completion.',
                'WhatsApp Integration': 'Track progress through WhatsApp notifications.',
            },
        },
        {
            title: 'Progress Tracking',
            link: 'https://www.youtube.com/embed/-86DZGr-_XQ',
            pointer: {
                'Comprehensive Tracking': 'Monitor progress for each lesson, subject, and practice test.',
                'Parent Dashboard': 'Easy-to-read dashboard for tracking student progress.',
                'Progress Graphs': 'Interactive graphs for teachers to gauge students’ learning outcomes.',
                'Personalized Dashboards': 'Track progress with customized dashboards for each student.',
                'Continuity Rewards': 'Instant rewards for daily engagement.',
            },
        },
        {
            title: 'Rewards for Continuity',
            link: 'https://www.youtube.com/embed/fh5TFfMMrj4',
            pointer: {
                'Continuity Rewards': 'Instant rewards for daily engagement.',
                'Consistency Tracking': 'Leaderboards for competitive engagement of consistent users.',
                'Challenge Leaderboards': 'Leaderboards for competitive engagement of challenge loving users.',
                'Milestone Rewards': 'Earn digital and physical rewards as you reach learning milestones.',
                'Parental Monitoring': 'Helps parents track and monitor their child’s usage and progress.',
                '30-Day Study Rewards': 'Receive educational rewards for consistent daily study over 30 days.',
            },
        },
        {
            title: 'Notifications 2.0',
            link: 'https://www.youtube.com/embed/v5WuLPR8HlA',
            pointer: {
                'Enhanced Notifications':
                    'Custom notifications by grade and location, supporting images and hyperlinks.',
                'Age-Appropriate Content': 'Updates and images are customized for each age group.',
                'Usage-Based Notifications': 'Receive tailored notifications based on your activity.',
                'Notification Archive': 'Access and review all past notifications and nudges at any time.',
            },
        },
    ];

    return (
        <section className="pt-lg-6 pt-4 pb-lg-6 pb-5 bg-paper-texture position-relative overflow-hidden">
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
                            <div className="mt-4 mt-lg-0">
                                <h2 className="display-4 text-success fw-medium mb-3">{ele.title}</h2>

                                <ul className="list-unstyled border-top py-4 mt-4 text-start">
                                    {Object.entries(ele.pointer).map(([key, value]) => {
                                        return (
                                            <li className="py-2 d-flex align-items-center" key={key}>
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
