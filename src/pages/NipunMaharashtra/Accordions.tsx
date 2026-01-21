import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContext, Card, Container, useAccordionButton } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';

type ContentType = {
    id: number;
    title: string;
    text: string;
};

type CustomToggleProps = {
    children: React.ReactNode;
    eventKey: string;
    containerClass: string;
    linkClass: string;
    callback?: (eventKey: string) => void;
};

const CustomToggle = ({ children, eventKey, containerClass, linkClass, callback }: CustomToggleProps) => {
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
            <Card.Header>
                <h5 className={containerClass}>
                    {children} <FeatherIcon icon="chevron-down" className="icon-xs accordion-arrow" />
                </h5>
            </Card.Header>
        </Link>
    );
};

const CustomAccordion = ({ item, index, length }: { item: ContentType; index: number; length: number }) => {
    return (
        <Card className={classNames('shadow-none', 'border', index + 1 === length ? 'mb-0' : 'mb-1')}>
            <CustomToggle eventKey={String(index)} containerClass="my-1 fs-16" linkClass="text-dark">
                {item.title}
            </CustomToggle>
            <Accordion.Collapse eventKey={String(index)}>
                <Card.Body className="text-muted pt-1">{item.text}</Card.Body>
            </Accordion.Collapse>
        </Card>
    );
};

const AccordionExample = () => {
    const accordianContent: ContentType[] = [
        {
            id: 1,
            title: 'Effective Training:',
            text: `Over 5,500 supervisors are being trained and onboarded, enabling swift adoption and effective implementation of the project.`,
        },
        {
            id: 2,
            title: 'Enabling Centralization',
            text: `Through NIPUN Maharashtra, SCERT Maharashtra is strengthening state education by implementing AI-driven, data-backed strategies and effective teacher support, while also contributing its expertise and best practices to the national NIPUN Bharat initiative.`,
        },
        {
            id: 3,
            title: 'Comprehensive Assessments',
            text: `Conducting monthly evaluations of over 3.8 million students, with data visually presented through dedicated dashboards for parents, teachers, headmasters, and district and state authorities—enabling targeted improvements and informed decision-making.`,
        },
        {
            id: 4,
            title: 'Data Empowerment',
            text: `School leaders are empowered with advanced data analysis and monitoring tools to make informed decisions. Recognition: Wardha Zilla Parishad received the prestigious Skoch Award in 2023 for this project, under the leadership of Mr. Rohan Ghuge (IAS).`,
        },
        {
            id: 5,
            title: 'Recognition',
            text: `The District CEO Mr. Rohan Ghuge (IAS) from Thane, received the prestigious Skoch Awards for this project in 2023 while he was in Wardha`,
        },
    ];

    return (
        <Card id="accordions">
            <Card.Body>
                <Card.Title as="h5" className="mb-0">
                    How we are doing it
                </Card.Title>
                <p className="sub-header">To improve students’ Foundational Literacy and Numeracy (FLN) at scale</p>
                <Accordion defaultActiveKey="0" id="accordion" className="custom-accordionwitharrow">
                    {(accordianContent || []).map((item, index) => {
                        return (
                            <CustomAccordion
                                key={index.toString()}
                                item={item}
                                index={index}
                                length={accordianContent.length}
                            />
                        );
                    })}
                </Accordion>
            </Card.Body>
        </Card>
    );
};

export default AccordionExample;
