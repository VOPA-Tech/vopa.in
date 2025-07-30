import { Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BlogPost1 = ({ post }: any) => {
    return (
        <Card className="shadow-none">
            <Row>
                <Card.Body className="d-flex flex-column h-100 p-0 px-2">
                    {/* <Link to="#">
                        <Badge bg="" className={classNames('badge-soft-' + 'orange', 'mb-1')}>
                            {'post.tag.value'}
                        </Badge>
                    </Link> */}

                    <h3 className="mt-1 fw-semibold">
                        <Link
                            style={{ color: 'inherit' }}
                            onMouseOver={(e) => (e.currentTarget.style.color = '#28c76f')}
                            onMouseOut={(e) => (e.currentTarget.style.color = 'inherit')}
                            to={`/blog/post/${post.slug}`}>
                            {post.title}
                        </Link>
                    </h3>

                    <p className="text-muted">
                        {/* {post.name.substring(0, 350)}{' '} */}
                        <Link
                            style={{ color: 'inherit' }}
                            onMouseOver={(e) => (e.currentTarget.style.color = '#28c76f')}
                            onMouseOut={(e) => (e.currentTarget.style.color = 'inherit')}
                            to={`/blog/post/${post.slug}`}
                            className="text-secondary">
                            read more
                        </Link>
                    </p>

                    <div className="mt-auto">
                        <div className="d-flex">
                            {/* <img
                                className="me-2 rounded-sm"
                                src="/images/aboutUs/vopaStaff/prafullaShashikant.jpg"
                                alt=""
                                height="36"
                            /> */}
                            <div className="flex-grow-1">
                                <h6 className="m-0 fs-13">
                                    <Link to="#">{post.author}</Link>
                                </h6>
                                {/* <p className="text-muted mb-0 fs-13"> {'post.postedOn!.time'}</p> */}
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Row>
        </Card>
    );
};

export default BlogPost1;
