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
        <section className={'d-flex border-bottom pb-4'}>
            <Container>
                <Row>
                    <Col className="text-center">
                        {/* <Badge pill bg="" className="badge-soft-info px-2 py-1">
                            stats
                        </Badge> */}
                        <h1 className="display-5 pt-8 fw-medium">Towards Achieving Sustainable Development Goals</h1>
                        <p className="mt-2 mb-0 fw-semibold">
                            Our initiatives directly contribute to the United Nations Sustainable Development Goals,
                            focusing on quality education and promoting good health and well-being for all.
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
                                    src={
                                        'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758194547403_3.webp'
                                    }
                                    alt="Girl Reading Book"
                                    className="img-fluid d-block mx-auto mt-4 mt-lg-0"
                                />

                                <div className="flex-grow-1 p-3">
                                    <div>
                                        <p className="text-muted mt-1 mb-4">
                                            Promoting mental health awareness, supporting teacher well-being, and
                                            creating healthy learning environments through our educational initiatives.
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
                                    src={
                                        'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758194547404_4.webp'
                                    }
                                    alt="Girl Reading Book"
                                    className="img-fluid d-block mx-auto mt-4 mt-lg-0"
                                />

                                <div className="flex-grow-1 p-3">
                                    <div>
                                        <p className="text-muted mt-1 mb-4">
                                            Ensuring inclusive and equitable quality education for all through digital
                                            learning, teacher training, and innovative educational solutions.
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
                                    src={
                                        'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758194547406_10.webp'
                                    }
                                    alt="Girl Reading Book"
                                    className="img-fluid d-block mx-auto mt-4 "
                                />

                                <div className="flex-grow-1 p-3">
                                    <div>
                                        <p className="text-muted mt-1 mb-4">
                                            Breaking geographical and socio-economic barriers to quality education by
                                            providing digital learning resources, ensuring access for remote and
                                            underserved communities across Maharashtra
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
                                    src={
                                        'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758194547408_17.webp'
                                    }
                                    alt="Girl Reading Book"
                                    className="img-fluid d-block mx-auto mt-4"
                                />

                                <div className="flex-grow-1 p-3">
                                    <div>
                                        <p className="text-muted mt-1 mb-4">
                                            Building strategic partnerships with government bodies, educational
                                            institutions, technology partners, and community organizations to scale our
                                            impact and achieve sustainable educational transformation.
                                        </p>
                                    </div>{' '}
                                </div>
                            </div>{' '}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default TwoCause;
