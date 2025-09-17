import { Badge, Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

type HeroProps = {
    event: any;
};

const EventHero: React.FC<HeroProps> = ({ event }) => {
    if (!event) return null; // prevent rendering if event is not available

    return (
        <section className="hero-4 pb-5 pt-8 pt-lg-6 pb-sm-4">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={12}>
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/impact/news-and-media/events">Events</Breadcrumb.Item>
                            <Breadcrumb.Item active>{event?.slug || 'Event'}</Breadcrumb.Item>
                        </Breadcrumb>

                        {event?.tag && (
                            <div className="mt-4">
                                <Badge bg="" className="badge-soft-info mb-1">
                                    {event.tag}
                                </Badge>
                            </div>
                        )}

                        <h1 className="hero-title mt-0">{event?.title || 'Untitled Event'}</h1>
                    </Col>
                </Row>

                <Row className="mt-4 align-items-center">
                    <Col xs="auto">
                        <div className="d-flex align-items-center">
                            {/* <img
                                className="me-2 avatar avatar-sm rounded-circle avatar-border"
                                src="/images/aboutUs/vopaStaff/nobg/prafullaShashikant.png"
                                alt="Organizer"
                            /> */}
                            <div>
                                <h5 className="m-0">
                                    <Link to="#">{event?.organizer || 'Unknown Organizer'}</Link>
                                </h5>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default EventHero;
