import { Col, Container, Row } from 'react-bootstrap';

type PostContentProps = {
    pressRelease: any;
};

const PressReleaseContent = ({ pressRelease }: PostContentProps) => {
    return (
        <section className="position-relative pb-5">
            <Container>
                <Row>
                    <Col lg={12}>
                        {/* Hero Image */}
                        {pressRelease.coverUrl && (
                            <figure className="figure">
                                <img
                                    src={pressRelease.coverUrl}
                                    alt="Press Release Cover"
                                    className="figure-img img-fluid rounded"
                                />
                            </figure>
                        )}

                        {/* Render Press Release Content */}
                        {pressRelease.content ? (
                            <div
                                style={{
                                    color: '#212529',
                                    fontSize: '1rem',
                                    lineHeight: '1.7',
                                }}
                                dangerouslySetInnerHTML={{
                                    __html: pressRelease.content,
                                }}
                            />
                        ) : (
                            <p className="text-muted">No content available for this press release.</p>
                        )}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default PressReleaseContent;
