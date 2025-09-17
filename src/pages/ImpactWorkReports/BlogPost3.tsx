import { Card, Col } from 'react-bootstrap';
import classNames from 'classnames';

type BlogPostProps = {
    post: any;
};

const BlogPost3 = ({ post }: BlogPostProps) => {
    if (!post) return null;

    const tagVariant = 'success';
    const tagValue = post?.tag || '';

    return (
        <Col xs={6} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
            {/* 👆 12/4 = 3 = 4 cards per row on large screens */}

            <a
                href={post.docUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', width: '100%' }}>
                <Card className="card-listing-item" style={{ maxWidth: '280px' }}>
                    <div className="position-relative" style={{ overflow: 'hidden' }}>
                        {post.photoLink && (
                            <img
                                src={post.photoLink}
                                alt={post.title}
                                style={{
                                    width: '100%',
                                    height: '300px',
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
                        )}

                        {tagValue && (
                            <span
                                className={classNames(
                                    'card-badge',
                                    'position-absolute',
                                    'top-0',
                                    'end-0',
                                    'bg-' + tagVariant,
                                    'text-white',
                                    'm-2',
                                    'px-2',
                                    'py-1',
                                    'rounded'
                                )}>
                                {tagValue}
                            </span>
                        )}

                        {post.title && (
                            <div
                                className="position-absolute bottom-0 start-0 w-100"
                                style={{
                                    background: 'rgba(0,0,0,0.9)',
                                    padding: '20px',
                                }}>
                                <h6 className="text-white m-0">{post.title}</h6>
                            </div>
                        )}
                    </div>
                </Card>
            </a>
        </Col>
    );
};

export default BlogPost3;
