import { Card, Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// component
import Navbar4 from '../../../components/navbars/Navbar4';
import Footer3 from '../../../components/footer/Footer3';

import Vacancies from './Vacancies';

import Blogs from './Blogs';
import Employees from './Employees';

const Content = () => {
    return (
        <>
            {/* header */}
            <Navbar4 fixedWidth />

            <section className="position-relative p-3 bg-gradient2">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="page-title">
                                <h3 className="my-0">Content</h3>
                                <p className="mt-1 fw-medium">Manage your content</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-2">
                        <Col lg={12}>
                            <Card>
                                <Card.Body>
                                    <Tab.Container defaultActiveKey="account">
                                        <Row>
                                            <Col lg={3}>
                                                <Nav as="ul" variant="pills" className="navtab-bg flex-column">
                                                    <Nav.Item as="li">
                                                        <Nav.Link as={Link} to="#" eventKey="account">
                                                            <span>Vacancies</span>
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item as="li" className="my-2">
                                                        <Nav.Link as={Link} to="#" eventKey="password">
                                                            <span>Employees</span>
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item as="li">
                                                        <Nav.Link as={Link} to="#" eventKey="notifications-form">
                                                            <span>Blogs</span>
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </Col>
                                            <Col lg={9}>
                                                <Tab.Content className="p-0">
                                                    <Tab.Pane eventKey="account" transition className="px-3">
                                                        <Vacancies />
                                                    </Tab.Pane>
                                                    <Tab.Pane
                                                        eventKey="password"
                                                        transition
                                                        className="px-3"
                                                        style={{ minHeight: '600px' }}>
                                                        <Employees />
                                                    </Tab.Pane>
                                                    <Tab.Pane
                                                        eventKey="notifications-form"
                                                        transition
                                                        className="px-3"
                                                        style={{ minHeight: '600px' }}>
                                                        <Blogs />
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </Col>
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
