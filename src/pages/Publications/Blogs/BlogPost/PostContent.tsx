import { Col, Container, Row } from 'react-bootstrap';

type HeroProps = {
    blog: any;
};

const PostContent = ({ blog }: HeroProps) => {
    return (
        <section className="position-relative pb-5 bg-paper-texture">
            <Container>
                <Row>
                    <Col lg={12}>
                        {/* Hero Image */}
                        {blog.coverUrl && (
                            <img
                                style={{
                                    width: '100%',
                                    height: '400px',
                                    objectFit: 'cover',
                                }}
                                src={blog.coverUrl}
                                alt={blog.title}
                                className="blog-cover"
                            />
                        )}

                        {/* Render Blog Content */}
                        {blog.content ? (
                            <div
                                className="blog-content pt-4"
                                style={{
                                    color: '#212529',
                                    fontSize: '1rem',
                                    lineHeight: '1.7',
                                }}
                                dangerouslySetInnerHTML={{
                                    __html: blog.content,
                                }}
                            />
                        ) : (
                            <p className="text-muted">No content available.</p>
                        )}

                        {/* Social Sharing */}
                        {/* <ul className="list-inline mb-0 mt-4">
                            <li className="list-inline-item text-muted align-middle me-2 text-uppercase fs-13 fw-medium">
                                Share:
                            </li>
                            <li className="list-inline-item me-2 align-middle">
                                <Link to="#">
                                    <FeatherIcon className="icon-xs icon-dual-primary" icon="facebook" />
                                </Link>
                            </li>
                            <li className="list-inline-item me-2 align-middle">
                                <Link to="#">
                                    <FeatherIcon className="icon-xs icon-dual-info" icon="twitter" />
                                </Link>
                            </li>
                            <li className="list-inline-item align-middle">
                                <Link to="#">
                                    <FeatherIcon className="icon-xs icon-dual-danger" icon="instagram" />
                                </Link>
                            </li>
                        </ul> */}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default PostContent;
