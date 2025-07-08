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
        <section className="position-relative bg-light overflow-hidden features-1 py-5 py-md-7">
            <Container>
                <Row>
                    <Col lg={6}>
                        <h1 className="display-4 fw-semibold mb-4">{'Vowels of People Association'}</h1>
                        <p className="mb-5">
                            Vowels of the People Association (VOPA) is a tech-driven non-profit founded in 2018, working
                            to improve education and mental health in Maharashtra. Through its digital learning platform
                            VSchool, VOPA has positively impacted over 3 million users.
                        </p>
                        <Link to="/projects/overview" className="btn btn-success">
                            Learn More
                            <FeatherIcon icon="arrow-right" className="ms-2 icon-xs" />
                        </Link>
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }}>
                        <img
                            // src={'/images/homePage/rmbg.png'}
                            src={'/images/homePage/BG.png'}
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
