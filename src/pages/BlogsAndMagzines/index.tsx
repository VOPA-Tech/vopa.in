import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

// components
import { Navbar1, Navbar3 } from "components/navbars";

import { Footer1, Footer2 } from "components/footer";
import BackToTop from "components/BackToTop";

import Hero from "./Hero";

import BlogPost3 from "./BlogPost3";
import SubscriptionForm from "./SubscriptionForm";

// dummy data
import { post1, post3 } from "./data";

// images
import hero from "assets/images/blog/hero.jpg";
import { useEffect, useState } from "react";
import VSchoolAnalytics from "./VSchoolAnalytics";
import BlogPost1 from "./BlogPost1";
import { fetchBlogs } from "api/fetchBlogs";
import { useAppContext } from "context/AppContext";

const Blog = () => {
  const { blogs, isBlogsLoading } = useAppContext();
  return (
    <>
      <div
        className="header-7"
        style={{ background: `url(${hero}) no-repeat` }}
      >
        <div className="overlay"></div>

        <Navbar3
          navClass="navbar-dark text-white"
          fixedWidth
          buttonClass="btn-secondary btn-sm"
        />

        <Hero />
      </div>

      <section className="pt-6 pb-4 position-relative">
        <Container>
          <Row className="justify-content-lg-between">
            <Col lg={12}>
              <Row className="mt-6" data-aos="fade-up">
                {post3.map((post) => (
                  <Col lg={4}>
                    <BlogPost3 post={post} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
          <Row className="mt-6" data-aos="fade-up">
            {blogs.map((blog) => (
              <Col lg={6}>
                <BlogPost1 post={blog} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <VSchoolAnalytics />
      {/* footer */}
      <Footer1 />

      <BackToTop variant="success" />
    </>
  );
};

export default Blog;
