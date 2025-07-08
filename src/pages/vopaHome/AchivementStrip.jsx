import React, { useContext } from 'react';
import { Row, Col, Container, Accordion, Badge, useAccordionButton, AccordionContext } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';

// types
import { Feature } from './types';

// images
import saas1 from 'assets/images/hero/saas1.jpg';

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

const AchivementStrip = () => {
    return (
        <section className={'d-flex border-bottom pb-4'}>
            <Container>
                <Row className="pt-5 align-items-center features-3">
                    <Col lg={{ span: 6 }}>
                        <div id="features-list" data-aos="fade-up" data-aos-duration="300">
                            <div className="d-flex ">
                                <div className="flex-grow-1">
                                    <div className="display-4">
                                        Towards Achieving Sustainable Development Goals
                                        {/* <p className="text-muted mt-1 mb-4">
                                            VOPA makes quality learning accessible to every child, anywhere.
                                        </p> */}
                                        {/* <Link to="#" className="h6 text-primary">
                                            Learn more
                                            <FeatherIcon className="ms-1 icon-xxs" icon="arrow-right" />
                                        </Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={{ span: 6 }}>
                        <div id="features-list" data-aos="fade-up" data-aos-duration="300">
                            <div className="d-flex">
                                <img
                                    style={{
                                        width: '200px',
                                    }}
                                    src={'/images/homePage/SDG3.png'}
                                    alt="Girl Reading Book"
                                    className="img-fluid d-block mx-auto mt-4 mt-lg-0"
                                />
                                <img
                                    style={{
                                        width: '200px',
                                    }}
                                    src={'/images/homePage/SDG4.png'}
                                    alt="Girl Reading Book"
                                    className="img-fluid d-block mx-auto mt-4 mt-lg-0"
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AchivementStrip;
