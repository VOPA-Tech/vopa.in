import React, { useContext } from 'react';
import { Row, Col, Container, Accordion, Badge, useAccordionButton, AccordionContext } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';

// types
import { Feature } from './types';

const features: Feature[] = [
    {
        avatar: 'users',
        title: 'We scale quickly',
        description: 'Impacting 3,200+ students across 21 schools in Pune through training of teachers.',
        variant: 'success',
        containerClass: 'd-flex border-bottom pb-4',
    },
    {
        avatar: 'user-plus',
        title: 'We instill inclusive & efficient pedagogies',
        description: 'Training 150+ teachers in innovative digital pedagogy.',
        variant: 'success',
        containerClass: 'd-flex border-bottom py-4',
    },
    {
        avatar: 'pen-tool',
        title: 'We create future ready learning environments',
        description: 'Installing SMART TVs and high-speed internet in 100+ classrooms.',
        variant: 'success',
        containerClass: 'd-flex pt-4',
    },
    {
        avatar: 'bar-chart',
        title: 'We empower all stakeholders.',
        description:
            'We are the proud makers of ‘V-School’ learning App that serves lakhs of students & thousands of teachers, head masters & administrative staff at no additional cost.',
        variant: 'success',
        containerClass: 'd-flex pt-4',
    },
];

type CustomToggleProps = {
    children: React.ReactNode;
    eventKey: string;
    containerClass: string;
    linkClass: string;
    callback?: (eventKey: string) => void;
};

const CustomToggle = ({ children, eventKey, linkClass, callback }: CustomToggleProps) => {
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

const FeaturesList = ({ item, index }: { item: Feature; index: number }) => {
    return (
        <div className={item.containerClass}>
            <span
                className={classNames(
                    'bg-soft-' + item.variant,
                    'avatar',
                    'avatar-sm',
                    'rounded-lg',
                    'icon',
                    'icon-with-bg',
                    'icon-xs',
                    'text-' + item.variant,
                    'me-3',
                    'flex-shrink-0'
                )}>
                <FeatherIcon icon={item.avatar} className={classNames('icon-dual-' + item.variant)} />
            </span>
            <div className="flex-grow-1">
                <CustomToggle eventKey={String(index)} containerClass="m-0" linkClass="text-dark h4">
                    {item.title}
                </CustomToggle>
                <Accordion.Collapse eventKey={String(index)}>
                    <div>
                        <p className="text-muted mt-1 mb-4">{item.description}</p>
                        {/* <Link to="#" className="h6 text-primary">
                            Learn more
                            <FeatherIcon className="ms-1 icon-xxs" icon="arrow-right" />
                        </Link> */}
                    </div>
                </Accordion.Collapse>
            </div>
        </div>
    );
};

const WhyUs = () => {
    return (
        <section className='"position-relative overflow-hidden pt-lg-6 py-4 pb-lg-7'>
            <Container>
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-success px-2 py-1">
                            Features
                        </Badge>
                        <h1 className="display-5 fw-medium">Why Us</h1>
                        <p className="text-muted mx-auto">
                            few of the <span className="text-success fw-bold">Features</span> of us.
                        </p>
                    </Col>
                </Row>

                <Row className="pt-5 align-items-center features-3">
                    <Col lg={4}>
                        <div className="img-content position-relative">
                            <div className="img-up mb-lg-0 mb-6">
                                <img
                                    src={'https://uploads.justech-ai.in/vopa-website/DLPPage/1758256222670_dlp.png'}
                                    alt="Digital Learning Program"
                                    className="img-fluid d-block rounded"
                                    data-aos="fade-right"
                                    data-aos-duration="200"
                                />
                            </div>
                        </div>
                    </Col>
                    <Col lg={{ offset: 1, span: 5 }}>
                        <div id="features-list" data-aos="fade-up" data-aos-duration="300">
                            <Accordion defaultActiveKey="0">
                                {(features || []).map((item, index) => {
                                    return <FeaturesList key={index.toString()} item={item} index={index} />;
                                })}
                            </Accordion>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default WhyUs;
