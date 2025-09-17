import { Card, Col, Container, Row, Tab } from 'react-bootstrap';

// component
import Navbar4 from '../../../../components/navbars/Navbar4';
import Footer3 from '../../../../components/footer/Footer3';
import MediaCutouts from './MediaCutouts';

const Content = () => {
    return (
        <>
            {/* header */}
            <Navbar4 fixedWidth />

            <section className="position-relative p-3 bg-gradient2">
                <Container>
                    <Row className="mt-2">
                        <Col lg={12}>
                            <Card>
                                <Card.Body>
                                    <Tab.Container defaultActiveKey="account">
                                        <Row>
                                            <MediaCutouts />
                                        </Row>
                                    </Tab.Container>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* footer */}
            <Footer3 />
        </>
    );
};

export default Content;
