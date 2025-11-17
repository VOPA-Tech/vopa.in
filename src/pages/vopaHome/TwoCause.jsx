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

const TwoCause = () => {
    return (
        <section className="d-flex border-bottom pb-4 gradient-belt text-white">
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
        
         
        
            /* tone down even more on small screens */
            @media (max-width: 992px) {
              .gradient-belt { filter: saturate(0.85) brightness(0.98); }
            }
          `}</style>

            <Container>
                <Row className="pt-5 features-3">
                    <Col lg={{ span: 5 }}>
                        <div id="features-list" data-aos="fade-up" data-aos-duration="300">
                            <div className="d-flex">
                                <div className="flex-grow-1 align-items-center">
                                    <h3 className=" display-4 fw-semibold text-center text-white">
                                        Sustainable Devlopement Goals
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={{ span: 7 }}>
                        <Row className="d-flex" id="features-list" data-aos="fade-up" data-aos-duration="300">
                            <Col lg={{ span: 3 }} md={{ span: 3 }} xs={{ span: 6 }}>
                                <img
                                    height={150}
                                    width={150}
                                    style={{}}
                                    src={
                                        'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758194547403_3.webp'
                                    }
                                    alt="Girl Reading Book"
                                    className="img-fluid d-block mx-auto mt-4 mt-lg-0"
                                />
                            </Col>
                            <Col lg={{ span: 3 }} md={{ span: 3 }} xs={{ span: 6 }}>
                                {' '}
                                <img
                                    height={150}
                                    width={150}
                                    src={
                                        'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758194547404_4.webp'
                                    }
                                    alt="Girl Reading Book"
                                    className="img-fluid d-block mx-auto mt-4 mt-lg-0"
                                />
                            </Col>
                            <Col lg={{ span: 3 }} md={{ span: 3 }} xs={{ span: 6 }}>
                                {' '}
                                <img
                                    height={150}
                                    width={150}
                                    src={
                                        'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758194547406_10.webp'
                                    }
                                    alt="Girl Reading Book"
                                    className="img-fluid d-block mx-auto mt-4  mt-lg-0 "
                                />
                            </Col>
                            <Col lg={{ span: 3 }} md={{ span: 3 }} xs={{ span: 6 }}>
                                <img
                                    height={150}
                                    width={150}
                                    src={
                                        'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758194547408_17.webp'
                                    }
                                    alt="Girl Reading Book"
                                    className="img-fluid d-block mx-auto mt-4  mt-lg-0"
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default TwoCause;

<section className={'d-flex border-bottom pb-4 bg-paper-texture'}>
    <Container>
        <Row>
            <Col className="text-center">
                {/* <Badge pill bg="" className="badge-soft-info px-2 py-1">
                            stats
                        </Badge> */}
                <h1 className="display-5 pt-8 fw-medium">Towards Achieving Sustainable Development Goals</h1>
                <p className="mt-2 mb-0 fw-semibold">
                    Our initiatives directly contribute to the United Nations Sustainable Development Goals, focusing on
                    quality education and promoting good health and well-being for all.
                </p>
            </Col>
        </Row>
        <Row className=" pt-5 align-items-center features-3">
            <Col lg={{ span: 6 }}>
                <div id="features-list" data-aos="fade-up" data-aos-duration="300">
                    <div className="d-flex">
                        <img
                            style={{
                                width: '150px',
                            }}
                            src={'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758194547403_3.webp'}
                            alt="Girl Reading Book"
                            className="img-fluid d-block mx-auto mt-4 mt-lg-0"
                        />

                        <div className="flex-grow-1 p-3">
                            <div>
                                <p className="text-muted mt-1 mb-4">
                                    Promoting mental health awareness, supporting teacher well-being, and creating
                                    healthy learning environments through our educational initiatives.
                                </p>
                            </div>{' '}
                        </div>
                    </div>{' '}
                </div>
            </Col>
            <Col lg={{ span: 6 }}>
                <div id="features-list" data-aos="fade-up" data-aos-duration="300">
                    <div className="d-flex">
                        <img
                            style={{
                                width: '150px',
                            }}
                            src={'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758194547404_4.webp'}
                            alt="Girl Reading Book"
                            className="img-fluid d-block mx-auto mt-4 mt-lg-0"
                        />

                        <div className="flex-grow-1 p-3">
                            <div>
                                <p className="text-muted mt-1 mb-4">
                                    Ensuring inclusive and equitable quality education for all through digital learning,
                                    teacher training, and innovative educational solutions.
                                </p>
                            </div>{' '}
                        </div>
                    </div>{' '}
                </div>
            </Col>
            <Col lg={{ span: 6 }}>
                <div id="features-list" data-aos="fade-up" data-aos-duration="300">
                    <div className="d-flex">
                        <img
                            style={{
                                width: '150px',
                            }}
                            src={'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758194547406_10.webp'}
                            alt="Girl Reading Book"
                            className="img-fluid d-block mx-auto mt-4 "
                        />

                        <div className="flex-grow-1 p-3">
                            <div>
                                <p className="text-muted mt-1 mb-4">
                                    Breaking geographical and socio-economic barriers to quality education by providing
                                    digital learning resources, ensuring access for remote and underserved communities
                                    across Maharashtra
                                </p>
                            </div>{' '}
                        </div>
                    </div>{' '}
                </div>
            </Col>
            <Col lg={{ span: 6 }}>
                <div id="features-list" data-aos="fade-up" data-aos-duration="300">
                    <div className="d-flex">
                        <img
                            style={{
                                width: '150px',
                            }}
                            src={'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758194547408_17.webp'}
                            alt="Girl Reading Book"
                            className="img-fluid d-block mx-auto mt-4"
                        />

                        <div className="flex-grow-1 p-3">
                            <div>
                                <p className="text-muted mt-1 mb-4">
                                    Building strategic partnerships with government bodies, educational institutions,
                                    technology partners, and community organizations to scale our impact and achieve
                                    sustainable educational transformation.
                                </p>
                            </div>{' '}
                        </div>
                    </div>{' '}
                </div>
            </Col>
        </Row>
    </Container>
</section>;
