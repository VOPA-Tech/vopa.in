import { Card, Nav, Tab } from 'react-bootstrap';
import Features4 from './Features4';

type TabContentType = {
    id: number;
    title: string;
    icon?: string;
    text: string;
    text2: string;
};

const tabContents: TabContentType[] = [
    {
        id: 1,
        title: 'Why VOPA',
        icon: '/images/homePage/ourRecognition.jpg',
        text: 'Why Does India Need VOPA?',
        text2: `More than 60% of students in India struggle with basic literacy and numeracy. In rural and low-income areas, this learning gap is even wider. Many students can't read or do simple math, leading to increased dropout rates, poor academic outcomes, and reduced life opportunities.

VOPA was created to close this gap — to ensure that every child, no matter their background, receives a chance to learn, grow, and thrive through innovative, contextual, and accessible education.`,
    },
    {
        id: 2,
        title: 'What We Do',
        icon: '/images/homePage/whatWeDo.jpg',
        text: 'What Is VOPA Doing to Fix It?',
        text2: `VOPA builds a complete learning ecosystem using digital platforms, teacher training, foundational skill assessments, and subject-specific content in local languages. Our programs span across foundational literacy, digital access, mental health awareness, and school transformation.

We partner with schools and governments to bring quality education directly to students and empower communities through data and support.`,
    },
    {
        id: 3,
        title: 'How We Do It',
        icon: '/images/homePage/howWeDoIt.jpg',
        text: 'How Is VOPA Making It Happen?',
        text2: `VOPA combines scalable technology, human-centered pedagogy, and continuous feedback loops. Through our V-School app, custom dashboards, data-driven interventions, and intensive teacher training, we make it possible to support thousands of students with localized, trackable progress.

Our real-time analytics and offline-first tools ensure accessibility even in remote and under-resourced areas.`,
    },
    //     {
    //         id: 4,
    //         title: 'Our Impact',
    //         icon: '/images/homePage/ourImpact.jpg',
    //         text: 'What Impact Has VOPA Made So Far?',
    //         text2: `VOPA has reached over 1 lakh students and partnered with more than 2,200 schools across 36 districts. With over 85 lakh data points analyzed, we've achieved an average 35% improvement in foundational learning and saved 8 lakh+ teaching hours monthly.

    // Our efforts are making measurable change where it matters most — in student outcomes and system-wide efficiency.`,
    //     },
    //     {
    //         id: 5,
    //         title: 'Our Recognition',
    //         icon: '/images/homePage/ourRecognition.jpg',
    //         text: 'Who Has Recognized VOPA’s Work?',
    //         text2: `VOPA's innovations have been recognized by the Skoch Awards and state-level education departments. We've signed MoUs with SCERT, onboarded thousands of teachers and headmasters, and achieved over 1 million downloads for our V-School app.

    // Our work is acknowledged not just for scale, but for sustainability, inclusion, and impact at the grassroots level.`,
    //     },
];

const NavTabs = () => {
    return (
        <Tab.Container defaultActiveKey="Why VOPA">
            <Nav as="ul" variant="tabs">
                {(tabContents || []).map((tab, index) => {
                    return (
                        <Nav.Item as="li" key={index.toString()}>
                            <Nav.Link className="cursor-pointer" eventKey={tab.title}>
                                <span className="d-block d-sm-none">
                                    <i className={tab.icon}></i>
                                </span>
                                <span className="d-none d-sm-block">{tab.title}</span>
                            </Nav.Link>
                        </Nav.Item>
                    );
                })}
            </Nav>
            <Tab.Content className="p-3 text-muted">
                {(tabContents || []).map((tab, index) => {
                    return (
                        <>
                            {' '}
                            <Tab.Pane eventKey={tab.title} id={String(tab.id)} key={index.toString()}>
                                <Features4 tab={tab} />
                            </Tab.Pane>
                        </>
                    );
                })}
            </Tab.Content>
        </Tab.Container>
    );
};

const NavPills = () => {
    return (
        <Tab.Container defaultActiveKey="Why VOPA">
            <Nav as="ul" justify variant="pills" className="p-1 navtab-bg">
                {(tabContents || []).map((tab, index) => {
                    return (
                        <Nav.Item as="li" key={index.toString()}>
                            <Nav.Link className="cursor-pointer" eventKey={tab.title}>
                                <span className="d-block d-sm-none">
                                    <i className={tab.icon}></i>
                                </span>
                                <span className="d-none d-sm-block">{tab.title}</span>
                            </Nav.Link>
                        </Nav.Item>
                    );
                })}
            </Nav>
            <Tab.Content className="text-muted">
                {(tabContents || []).map((tab, index) => {
                    return (
                        <>
                            {' '}
                            <Tab.Pane eventKey={tab.title} id={String(tab.id)} key={index.toString()}>
                                <Features4 tab={tab} />
                            </Tab.Pane>
                        </>
                    );
                })}
            </Tab.Content>
        </Tab.Container>
    );
};

const TabsExample = () => {
    return (
        // <Card id="tabs">
        <Card.Body>
            {/* <Card.Title as="h5" className="mb-0">
                    Tabs
                </Card.Title>
                <p className="sub-header">
                    <code>Tabs</code> is a higher-level component for quickly creating a <code>Nav</code> matched with a
                    set of <code>TabPanes</code>.
                </p> */}

            <NavTabs />
            {/* <NavPills /> */}
        </Card.Body>
        // </Card>
    );
};

export default TabsExample;
