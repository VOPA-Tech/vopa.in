import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Navbar1, Navbar3 } from 'components/navbars';
import { Footer1, Footer2 } from 'components/footer';
import BackToTop from 'components/BackToTop';

import Hero from './Hero';
import PostContent from './PostContent';
import PostNavigation from './PostNavigation';
import Comments from './Comments';

import { gallery } from '../Career/data';
import { post1 } from 'pages/BlogsAndMagzines/data';
import { oldPost } from 'pages/BlogsAndMagzines/types';
import { useAppContext } from 'context/AppContext';

const BlogPost = () => {
    const { id } = useParams();
    const { blogs, isBlogsLoading } = useAppContext();
    const [blog, setBlog] = useState<oldPost | null>(null);

    useEffect(() => {
        const found = blogs.find((blog) => blog.slug === id);
        setBlog(found || null);
    }, [id, blogs]);

    return (
        <>
            <Navbar3
                // hideSearch
                isSticky
                fixedWidth
                navClass="navbar-light zindex-10 shadow"
                buttonClass="btn-outline-secondary btn-sm"
            />

            {/* Render only if blog exists */}
            {blog ? (
                <>
                    <Hero blog={blog} />
                    <PostContent blog={blog} />
                    {/* <PostNavigation /> */}
                    {/* <Comments /> */}
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
