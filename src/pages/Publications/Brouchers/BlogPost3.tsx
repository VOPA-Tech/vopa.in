import { Card, Col } from 'react-bootstrap';
import classNames from 'classnames';
import { Post } from './types';

type BlogPostProps = {
    post: any;
};

const BlogPost3 = ({ post }: BlogPostProps) => {
    if (!post) return null;
    console.log(post, 'Post Post');
    const tagVariant = 'info';
    const tagValue = post?.tag || '';

    return (
        <Col xs={12} sm={12} md={6} lg={6} className="d-flex justify-content-center mb-4">
            <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', width: '100%' }}>
                <Card className="card-listing-item ">
                    <div className="position-relative" style={{ overflow: 'hidden' }}>
                        {
                            <img
                                src={post.photoLink}
                                alt={post.title}
                                style={{
                                    width: '100%',
                                    height: '550px', // uniform height
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
                        }

                        {/* {tagValue && (
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
                        )} */}

                        {post.title && (
                            <div
                                className="position-absolute bottom-0 start-0 w-100"
                                style={{
                                    background: 'rgba(0,0,0,0.8)',
                                    padding: '10px',
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
