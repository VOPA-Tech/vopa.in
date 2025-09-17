import { Badge, Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

type HeroProps = {
    pressRelease: any;
};

const PressReleaseHero: React.FC<HeroProps> = ({ pressRelease }) => {
    if (!pressRelease) return null; // prevent rendering if press release is not available

    return (
        <section className="hero-4 pb-5 pt-8 pt-lg-6 pb-sm-4">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={12}>
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/impact/news-and-media/press-releases">
                                Press Releases
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>{pressRelease?.slug || 'Press Release'}</Breadcrumb.Item>
                        </Breadcrumb>

                        {pressRelease?.tag && (
                            <div className="mt-4">
                                <Badge bg="" className="badge-soft-info mb-1">
                                    {pressRelease.tag}
                                </Badge>
                            </div>
                        )}

                        <h1 className="hero-title mt-0">{pressRelease?.title || 'Untitled Press Release'}</h1>
                    </Col>
                </Row>

                <Row className="mt-4 align-items-center">
                    <Col xs="auto">
                        <div className="d-flex align-items-center">
                            {/* Optional organizer/author image */}
                            {/* <img
                                className="me-2 avatar avatar-sm rounded-circle avatar-border"
                                src="/images/aboutUs/vopaStaff/nobg/prafullaShashikant.png"
                                alt="Author"
                            /> */}
                            <div>
                                <h5 className="m-0">
                                    <Link to="#">{pressRelease?.author || 'Unknown Author'}</Link>
                                </h5>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default PressReleaseHero;
