import { Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EventPost = ({ post }: any) => {
    return (
        <Card className="">
            <Row>
                <Card.Body className="d-flex flex-column rounded">
                    <h3 className="mt-1 fw-semibold">
                        <Link
                            style={{ color: 'inherit' }}
                            onMouseOver={(e) => (e.currentTarget.style.color = '#28c76f')}
                            onMouseOut={(e) => (e.currentTarget.style.color = 'inherit')}
                            to={`post/${post.slug}`} // ⬅️ updated route
                        >
                            {post.title}
                        </Link>
                    </h3>

                    <p className="text-muted">
                        <Link
                            style={{ color: 'inherit' }}
                            onMouseOver={(e) => (e.currentTarget.style.color = '#28c76f')}
                            onMouseOut={(e) => (e.currentTarget.style.color = 'inherit')}
                            to={`post/${post.slug}`} // ⬅️ updated route
                            className="text-secondary">
                            read more
                        </Link>
                    </p>

                    <div className="mt-auto">
                        <div className="d-flex">
                            <div className="flex-grow-1">
                                <h6 className="m-0 fs-13">{/* <Link to="#">{post.author}</Link> */}</h6>
                                {/* <p className="text-muted mb-0 fs-13"> {'post.postedOn!.time'}</p> */}
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Row>
        </Card>
    );
};

export default EventPost;
