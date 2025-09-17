import { Col, Container, Row } from 'react-bootstrap';

type PostContentProps = {
    event: any;
};

const EventContent = ({ event }: PostContentProps) => {
    return (
        <section className="position-relative pb-5">
            <Container>
                <Row>
                    <Col lg={12}>
                        {/* Hero Image */}
                        {event.coverUrl && (
                            <figure className="figure">
                                <img src={event.coverUrl} alt="Event Cover" className="figure-img img-fluid rounded" />
                            </figure>
                        )}

                        {/* Render Event Content */}
                        {event.content ? (
                            <div
                                style={{
                                    color: '#212529',
                                    fontSize: '1rem',
                                    lineHeight: '1.7',
                                }}
                                dangerouslySetInnerHTML={{
                                    __html: event.content,
                                }}
                            />
                        ) : (
                            <p className="text-muted">No content available for this event.</p>
                        )}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default EventContent;
