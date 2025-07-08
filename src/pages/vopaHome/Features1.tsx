import { Col, Container, Row, Badge } from 'react-bootstrap';
import classNames from 'classnames';
import FeatherIcon from 'feather-icons-react';

// types
import { Feature } from './types';

// images
import app1 from 'assets/images/features/app2.png';
import TabsExample from './Tabs';

type FeaturesProps = {
    features: Feature[];
};

const Features1 = ({ features }: FeaturesProps) => {
    return (
        <section className="position-relative bg-light overflow-hidden features-1 py-5 py-md-7">
            <Container>
                <Row>
                    <Col className="text-center">
                        {/* <Badge pill bg="" className="badge-soft-secondary px-2 py-1">
                            What We Do
                        </Badge> */}
                        <h1 className="display-5 fw-semibold">VOWELS OF PEOPLE ASSOCIATIONS</h1>
                        <p className="text-muted mx-auto">
                            We are tech-driven non-profit founded in 2018, working to improve{' '}
                            <span className="text-secondary fw-bold">Education</span> and{' '}
                            <span className="text-secondary fw-bold">Mental health</span> in Maharashtra. Through its
                            digital learning platform VSchool, VOPA has positively impacted over 3 million users. Your
                            support can help us reach even more lives — make a difference today.
                        </p>
                    </Col>
                </Row>
                <Row className="align-items-center mt-0 mt-sm-5">
                    <TabsExample />
                </Row>
            </Container>
        </section>
    );
};

export default Features1;
