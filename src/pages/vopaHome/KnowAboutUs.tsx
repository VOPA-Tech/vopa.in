import { Col, Container, Row, Badge } from 'react-bootstrap';
import classNames from 'classnames';
import FeatherIcon from 'feather-icons-react';

// types
import { Feature } from './types';

// images
import app1 from 'assets/images/features/app2.png';
import TabsExample from './Tabs';
import { Link } from 'react-router-dom';

type FeaturesProps = {
    features: Feature[];
};

const KnowAboutUs = ({ features }: FeaturesProps) => {
    return (
        <section className="position-relative bg-light overflow-hidden features-1 py-5 py-md-7  ">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <h1 className="display-4 fw-semibold mb-4">{'Vowels of People Association'}</h1>
                        <p className="mb-5 ">
                            From 2025-through partnering with Maharashtra State Council of Educational Research and
                            Training (SCERT) for Mission NIPUN Maharashtra- the NIPUN Maharashtra app is revolutionizing
                            how India diagnoses and addresses foundational learning gaps through AI-powered,
                            state-integrated platforms personalizing assessment & remedial tools mapped to each student,
                            involvement of parents & data empowerment of the system
                        </p>
                        <Link to="/projects/overview" className="btn btn-success">
                            Learn More
                            <FeatherIcon icon="arrow-right" className="ms-2 icon-xs" />
                        </Link>
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }}>
                        <img
                            src="https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758194047815_bg.png"
                            alt="Girl Reading Book"
                            className="img-fluid d-block mx-auto mt-4 mt-lg-0"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default KnowAboutUs;
