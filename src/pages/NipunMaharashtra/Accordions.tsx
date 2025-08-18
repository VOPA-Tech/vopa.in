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
            text: `Over 2 lakh  teachers and 1.2 lakh  headmasters are neomg trained and onboarded, facilitating swift project adoption and implementation.`,
        },
        {
            id: 2,
            title: 'Enabling Centralization',
            text: ` SCERT Maharashtra to set the goals, pace, and action plans through a human centric tech-led, customizable approach that meets Maharashtra's needs`,
        },
        {
            id: 3,
            title: 'Comprehensive Assessments',
            text: `Monthly evaluations of over 7 million students, with data visually presented in dashboards for all stakeholders: Parents, Teachers, HM's, System - driving targeted improvements.`,
        },
        {
            id: 4,
            title: 'Data Empowerment',
            text: `School leaders are equipped with data analysis and monitoring tools for informed decision-making
Recognition: The District CEO Mr. Rohan Ghuge (IAS) from Thane, received the prestigious Skoch Awars for this project in 2023 while he was in Wardha`,
        },
        {
            id: 5,
            title: 'Recognition',
            text: `The District CEO Mr. Rohan Ghuge (IAS) from Thane, received the prestigious Skoch Awars for this project in 2023 while he was in Wardha`,
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
