import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Navbar3 } from 'components/navbars';
import { Footer1 } from 'components/footer';
import BackToTop from 'components/BackToTop';

import Hero from './Hero';
import PostContent from './PostContent';

import { oldPost } from 'pages/BlogsAndMagzines/types';
import { useAppContext } from 'context/AppContext';

const BlogPost = () => {
    const { id } = useParams();
    const { blogs = [], isBlogsLoading } = useAppContext(); // default to [] to avoid crash
    const [blog, setBlog] = useState<oldPost | null>(null);

    useEffect(() => {
        if (!isBlogsLoading && blogs.length) {
            const found = blogs.find((b) => b.slug === id);
            setBlog(found || null);
        }
    }, [id, blogs, isBlogsLoading]);

    return (
        <>
            <Navbar3
                isSticky
                fixedWidth
                navClass="navbar-light zindex-10 shadow"
                buttonClass="btn-outline-secondary btn-sm"
            />

            {isBlogsLoading ? (
                <p style={{ padding: '2rem', textAlign: 'center' }}>Loading...</p>
            ) : blog ? (
                <>
                    <Hero blog={blog} />
                    <PostContent blog={blog} />
                </>
            ) : (
                <p style={{ padding: '2rem', textAlign: 'center' }}>Blog not found.</p>
            )}

            <Footer1 />
            <BackToTop />
        </>
    );
};

export default BlogPost;
