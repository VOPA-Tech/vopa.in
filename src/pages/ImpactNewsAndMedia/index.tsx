import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

// components
import { Navbar1, Navbar3 } from "components/navbars";

import { Footer1, Footer2 } from "components/footer";
import BackToTop from "components/BackToTop";

import Hero from "./Hero";

import BlogPost3 from "./BlogPost3";

// dummy data
import { post3 } from "./data";

import { useState } from "react";
import VSchoolAnalytics from "./VSchoolAnalytics";
import { Hero4 } from "components/heros";

const Blog = () => {
  const [activeTag, setActiveTag] = useState("All");
  const tags = ["All", "News", "Media"];


  const filteredPost3 =
    activeTag === "All"
      ? post3
      : post3.filter((p) => p.tag.value === activeTag);

  return (
    <>
      <div
        className="header-7"
        style={{
          background: `url('/images/woodPanelHero.jpg') no-repeat`,
          backgroundSize: "cover", // optional
          backgroundPosition: "center", // optional
        }}
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
                {filteredPost3.map((post) => (
                  <Col lg={4}>
                    <BlogPost3 post={post} />
                  </Col>
                ))}
              </Row>
            </Col>
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
