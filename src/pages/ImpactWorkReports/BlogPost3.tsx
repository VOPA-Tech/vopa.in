import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import classNames from 'classnames';

import { Post } from './types';

type BlogPostProps = {
    post: Post;
};

const BlogPost3 = ({ post }: BlogPostProps) => {
    return (
        <Card className="card-listing-item">
            <div className="card-img-top-overlay">
                <div className={classNames(post.overlay ? 'overlay-' + post.overlay : 'overlay')}></div>
                <span className={classNames('card-badge', 'top-right', 'bg-' + post.tag.variant, 'text-white')}>
                    {post.tag.value}
                </span>

                <iframe
                    src={post.link}
                    width="100%"
                    height="500"
                    style={{ border: 'none', display: 'block', margin: '0 auto' }}
                    allow="autoplay"
                    title="PDF Preview"
                />

                <div className="card-overlay-bottom bg-grey">
                    <h2>
                        <a href={post.docUrl} target="_blank" rel="noopener noreferrer" className="text-white">
                            {post.title}
                        </a>
                    </h2>
                </div>
            </div>
        </Card>
    );
};

export default BlogPost3;
