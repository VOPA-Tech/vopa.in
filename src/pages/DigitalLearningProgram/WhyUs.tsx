import React, { useContext } from 'react';
import { Row, Col, Container, Accordion, Badge, useAccordionButton, AccordionContext } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';

const features: any[] = [
    {
        avatar: 'users',
        title: 'We scale quickly',
        description: 'Impacting 3,200+ students across 21 schools in Pune through training of teachers.',
        pointers: [
            'Our Digital Learning Project enables schools to adopt simple, effective digital practices without adding additional workload for teachers.',
            'The model is easy to implement and can be adapted quickly by any school, thanks to its structured and consistent support system.',
            'Through focused teacher training and regular classroom assistance, we are enhancing learning outcomes for more than 3,660 students across 20 schools in Pune.',
        ],
        variant: 'success',
        containerClass: 'd-flex border-bottom pb-4',
    },
    {
        avatar: 'user-plus',
        title: 'We instill inclusive & efficient pedagogies',
        description: 'Training 150+ teachers in innovative digital pedagogy.',
        pointers: [
            'Over 150 teachers receive hands-on guidance and continuous support to use digital tools confidently in their daily teaching.',
            'We partner with schools to strengthen simple, inclusive, and practical digital teaching practices that help every child learn better.',
            'The project, in its current design, addresses multiple academic needs together—foundational learning, scholarship exam preparation, learning outcomes, and alignment with textbooks and curriculum.',
        ],
        variant: 'success',
        containerClass: 'd-flex border-bottom py-4',
    },
    {
        avatar: 'pen-tool',
        title: 'We create future ready learning environments',
        description: 'Installing SMART TVs and high-speed internet in 100+ classrooms.',
        pointers: [
            'We help schools build classrooms that are equipped for modern learning and future academic needs.',
            'SMART TVs and high-speed internet have been installed across 20 schools, enabling fully functional digital classrooms for everyday teaching and learning.',
        ],
        variant: 'success',
        containerClass: 'd-flex pt-4',
    },
    {
        avatar: 'bar-chart',
        title: 'We empower all stakeholders.',
        description:
            'We are the proud makers of ‘V-School’ learning App that serves lakhs of students & thousands of teachers, head masters & administrative staff at no additional cost.',
        pointers: [
            'Along with supporting teachers, the project also strengthens digital literacy among students and parents through initiatives such as DIGI FRIEND and dedicated workshops for parent representatives.',
        ],
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

const FeaturesList = ({ item, index }: { item: any; index: number }) => {
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
                        <ul className="list-unstyled mb-2">
                            {(item.pointers || []).map((point: string, idx: number) => (
                                <li key={idx.toString()} className="text-muted mb-2">
                                    <FeatherIcon className="ms-1 icon-xxs" icon="check-circle" /> {point}
                                </li>
                            ))}
                        </ul>
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
        <section className='"position-relative bg-paper-texture overflow-hidden pt-lg-6 py-4 pb-lg-7'>
            <Container>
                <Row className="justify-content-center">
                    <Col className="text-center">
                        {/* <Badge pill bg="" className="badge-soft-success px-2 py-1">
                            Features
                        </Badge> */}
                        <h1 className="display-5 fw-medium">Why Us</h1>
                        <p className="text-muted mx-auto">
                            few of the <span className="text-success fw-bold">Features</span> of us.
                        </p>
                    </Col>
                </Row>

                <Row className="pt-5 align-items-center features-3">
                    <Col lg={5}>
                        <div
                            className="bg-white rounded-3 border shadow mb-lg-0 mb-3 overflow-hidden"
                            data-aos="fade-right"
                            data-aos-duration="1500"
                            style={{ padding: 0 }}>
                            <video
                                src="https://uploads.justech-ai.in/vopa-website/Project Overview Page/1764226525442_vertical-dlp-light.mp4"
                                autoPlay
                                loop
                                muted
                                className="w-100 h-100"
                                style={{ objectFit: 'cover', display: 'block' }}
                            />
                        </div>
                    </Col>
                    <Col lg={{ offset: 1, span: 6 }}>
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
