import { Card } from 'react-bootstrap';
import classNames from 'classnames';
import { Post } from './types';

type BlogPostProps = {
    post: Post;
};

const BlogPost3 = ({ post }: BlogPostProps) => {
    if (!post) return null;

    const overlayClass = post.overlay ? 'overlay-' + post.overlay : 'overlay';
    const tagVariant = post?.tag?.variant || 'secondary';
    const tagValue = post?.tag?.value || '';

    return (
        <Card className="card-listing-item">
            <div className="card-img-top-overlay">
                <div className={classNames(overlayClass)}></div>

                {tagValue && (
                    <span className={classNames('card-badge', 'top-right', 'bg-' + tagVariant, 'text-white')}>
                        {tagValue}
                    </span>
                )}

                {post.link && (
                    <iframe
                        src={post.link}
                        width="100%"
                        height="500"
                        style={{ border: 'none', display: 'block', margin: '0 auto' }}
                        allow="autoplay"
                        title="PDF Preview"
                    />
                )}

                {post.title && post.docUrl && (
                    <div className="card-overlay-bottom bg-grey">
                        <h2>
                            <a href={post.docUrl} target="_blank" rel="noopener noreferrer" className="text-white">
                                {post.title}
                            </a>
                        </h2>
                    </div>
                )}
            </div>
        </Card>
    );
};

export default BlogPost3;
