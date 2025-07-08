import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import classNames from 'classnames';

import { Post } from './types';

type BlogPostProps = {
    post: Post;
};

const cannotPreviewDomains = [
    'esakal.com',
    'bhaskar.com',
    'thecsruniverse.com',
    'readersdigest.in',
    'indianexpress.com',
    'newsclick.in',
    'divyamarathi.bhaskar.com',
];

const BlogPost3 = ({ post }: BlogPostProps) => {
    const url = new URL(post.link);
    const domain = url.hostname.replace('www.', '');
    const canPreview = !cannotPreviewDomains.includes(domain);

    return (
        <Card className="card-listing-item">
            <div className="card-img-top-overlay">
                <div className={classNames(post.overlay ? 'overlay-' + post.overlay : 'overlay')}></div>
                <span className={classNames('card-badge', 'top-right', 'bg-' + post.tag.variant, 'text-white')}>
                    {post.tag.value}
                </span>

                {canPreview ? (
                    <iframe
                        src={post.link}
                        width="100%"
                        height="300"
                        style={{ border: 'none', display: 'block', margin: '0 auto' }}
                        allow="autoplay"
                        title={post.title}
                    />
                ) : (
                    <div
                        style={{
                            width: '100%',
                            height: '200px',
                            backgroundColor: '#f5f5f5',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            padding: '20px',
                        }}>
                        <p style={{ color: '#666' }}>
                            Preview not available.
                            <br />
                        </p>
                    </div>
                )}

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
