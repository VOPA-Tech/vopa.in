import React, { useContext } from 'react';
import { Row, Col, Container, Accordion, Badge, useAccordionButton, AccordionContext } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';

const CustomToggle = ({ children, eventKey, linkClass, callback }) => {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey));

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <Link
            to="#"
            className={classNames(linkClass, {
                collapsed: !isCurrentEventKey,
            })}
            onClick={decoratedOnClick}>
            {children}
        </Link>
    );
};

const ProductCards = () => {
    return (
        <section className="d-flex border-bottom pt-5 pb-4  gradient-belt text-white">
            {/* local styles for the flashy gradient belt */}
            <style>{`
    .gradient-belt {
      position: relative;
      /* gentle, optimistic palette */
      background-image:
        radial-gradient(at 25% 20%, rgba(255,255,255,0.10) 0, rgba(255,255,255,0) 45%),
        linear-gradient(120deg, #0ea5e9 0%, #22c55e 52%, #84cc16 100%);
      color: #fff;
      background-size: 140% 140%;
      animation: beltShift 18s ease-in-out infinite;
      filter: saturate(0.9); /* softer than neon */
    }
    @keyframes beltShift {
      0%   { background-position: 0% 50%; }
      50%  { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    /* soft translucent chip for icons */
            .icon-chip {
  width: 200px;
  height: 264px;
  position: absolute;
  top: -220px;
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

/* ✅ Tablet (iPad Air and similar) */



@media (max-width: 1024px) {
  .icon-chip {
    width: 170px;
    top: -200px;
    left: 70%;
  }
}

/* ✅ Small tablets and large phones */
@media (max-width: 820px) {
  .icon-chip {
    width: 150px;
    top: -190px;
    left: 70%;
  }
}

/* ✅ Mobile */
@media (max-width: 576px) {
  .icon-chip {
    width: 80px;
    top: -140px;
    left: 80%;
  }
}

    /* tone down even more on small screens */
    @media (max-width: 992px) {
      .gradient-belt { filter: saturate(0.85) brightness(0.98); }
    }
  `}</style>

            <Container>
                <Row className=" features-3">
                    <Col lg={{ span: 6 }} md={6}>
                        <div id="features-list" data-aos="fade-up" data-aos-duration="300">
                            <div className="d-flex">
                                <span className="me-3 icon-chip">
                                    <img
                                        src="https://uploads.justech-ai.in/vopa-website/websiteHomepage/1762409536861_2-removebg-preview.png"
                                        alt=""
                                        className="img-fluid "
                                        data-bs-aos="zoom-in-up"
                                    />
                                </span>
                                <div className="flex-grow-1 d-flex flex-column justify-content-end">
                                    <h3 className="mb-1 fw-semibold text-white">Education</h3>
                                    <p className="mt-1 mb-4 text-white-75">
                                        VOPA makes quality learning accessible to every child, anywhere.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={{ span: 6 }} md={6}>
                        <div id="features-list" data-aos="fade-up" data-aos-duration="300">
                            <div className="d-flex">
                                <span className="me-3 icon-chip">
                                    <img
                                        src="https://uploads.justech-ai.in/vopa-website/websiteHomepage/1762420106500_chatgpt_image_nov_6__2025__02_36_59_pm-removebg-preview.png"
                                        alt=""
                                        className="img-fluid "
                                        data-bs-aos="zoom-in-up"
                                    />
                                </span>
                                <div className="flex-grow-1 d-flex flex-column justify-content-end">
                                    <h3 className="mb-1 fw-semibold text-white">Mental Health</h3>
                                    <p className="mt-1 mb-4 text-white-75">
                                        VOPA empowers minds with tools for emotional well-being and resilience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ProductCards;
