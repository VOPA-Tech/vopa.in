import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import classNames from 'classnames';

import { Post } from './types';

type BlogPostProps = {
    post: any;
};

const BlogPost3 = ({ post }: BlogPostProps) => {
    if (!post) return null;

    const tagVariant = 'info'; // static since we no longer get variant from backend
    const tagValue = post?.tag || '';
    return (
        <a href={post.docUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Card className="card-listing-item h-100">
                <div className="card-img-top-overlay position-relative">
                    {post.photoLink && (
                        <img
                            src={post.photoLink}
                            alt={post.title}
                            style={{
                                width: '100%',

                                objectFit: 'cover',
                                display: 'block',
                            }}
                        />
                    )}

                    {tagValue && (
                        <span className={classNames('card-badge', 'top-right', 'bg-' + tagVariant, 'text-white')}>
                            {tagValue}
                        </span>
                    )}

                    {post.title && (
                        <div className="card-overlay-bottom bg-grey">
                            <h2 className="text-white">{post.title}</h2>
                        </div>
                    )}
                </div>
            </Card>
        </a>
    );
};

export default BlogPost3;
