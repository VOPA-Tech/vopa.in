import { Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BlogPost1 = ({ post }: any) => {
    return (
        <Card className="h-80 w-100">
            <Card.Body className="d-flex flex-column">
                <img
                    src={post.thumbnailUrl}
                    alt={post.title}
                    className="rounded-sm"
                    style={{
                        width: '100%',
                        height: '180px',
                        objectFit: 'cover',
                    }}
                />

                <h3 className="mt-2 fw-semibold blog-title">
                    <Link to={`/blog/post/${post.slug}`} className="text-decoration-none text-dark">
                        {post.title}
                    </Link>
                </h3>

                <p className="text-muted mt-1">
                    <Link to={`/blog/post/${post.slug}`} className="text-secondary text-decoration-none">
                        Read more
                    </Link>
                </p>

                <div className="mt-auto">
                    <h6 className="m-0 fs-13">{post.author}</h6>
                </div>
            </Card.Body>
        </Card>
    );
};

export default BlogPost1;
