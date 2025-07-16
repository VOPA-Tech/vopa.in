import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Navbar3 } from 'components/navbars';
import { Footer1 } from 'components/footer';
import BackToTop from 'components/BackToTop';

import Hero from './Hero';
import PostContent from './PostContent';

import { loadBlogs } from 'reduxFolder/appSlice';

const BlogPost = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const blogs = useSelector((state) => state.appState.blogs);
    const isBlogsLoading = useSelector((state) => state.appState.isBlogsLoading);
    const [blog, setBlog] = useState(null); // ✅ fixed incorrect generic syntax

    useEffect(() => {
        if (!blogs.length) {
            dispatch(loadBlogs());
        }
    }, [dispatch, blogs.length]);

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
