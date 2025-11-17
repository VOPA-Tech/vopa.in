import { Link } from 'react-router-dom';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

const Features = () => {
    const features = ['Guided lesson preparation and planning', 'Centralized monitoring of teaching preparation'];

    return (
        <section className="pt-lg-6 pt-4 pb-lg-6 pb-5 position-relative overflow-hidden">
            <Container>
                <Row className="align-items-center mb-6 pb-lg-5">
                    <Col lg={6}>
                        <div
                            className="bg-white rounded border shadow mb-lg-0 mb-3 overflow-hidden"
                            data-aos="fade-right"
                            data-aos-duration="1500"
                            style={{ padding: 0 }}>
                            <img
                                src="https://uploads.justech-ai.in/vopa-website/Project Overview Page/1762767224872_nipun2.gif"
                                alt="desktop"
                                className="img-fluid w-100 h-100"
                                style={{ objectFit: 'cover', display: 'block' }}
                            />
                        </div>
                    </Col>

                    <Col lg={{ span: 5, offset: 1 }}>
                        <div className="mt-4 mt-lg-0">
                            <Badge pill bg="" className="badge-soft-success px-2 py-1">
                                NIPUN Maharashtra
                            </Badge>
                            <h1 className="display-4 text-success fw-medium mb-3"> NIPUN Maharashtra</h1>

                            <p className="text-muted mx-auto mb-4 pb-3">
                                To improve students’ Foundational Literacy and Numeracy (FLN) at scale, VOPA has built
                                out the NIPUN Maharashtra app for SCERT Maharashtra, the apex educational body of the
                                state.
                            </p>
                            <p className="text-muted mx-auto mb-4 pb-3">
                                It is set to scale our pilots from 350,000 students to 3,800,000 students; 20,000
                                teachers to 200,000 teachers; 1000 Education Supervisors to 10,000 Education
                                Supervisors; from 5 districts to all 36 districts of the state of Maharashtra-and for
                                the first time, bringing access to real time reports of students and remedial tools to
                                3M+ parents.
                            </p>

                            <ul className="list-unstyled border-top py-4 mt-4 text-start"></ul>
                            {/* <Link to="#">
                                Learn more
                                <FeatherIcon icon="arrow-right" className="ms-1 icon-xxs" />
                            </Link> */}
                        </div>
                    </Col>
                </Row>
                <Row className="align-items-center mb-6 pb-lg-5">
                    <Col lg={5}>
                        <div className="mb-4 mb-lg-0">
                            {/* <Badge pill bg="" className="badge-soft-info px-2 py-1">
                                Empower your school
                            </Badge> */}
                            <h1 className="display-4 fw-medium mb-3">School Transformation</h1>
                            <p className="text-muted mx-auto mb-4 pb-3">
                                We work with individual schools to transform the educational experience of the
                                schoolchildren by developing teacher capacities and setting sustainable systems and
                                culture.{' '}
                            </p>
                            <p className="text-muted mx-auto mb-4 pb-3">
                                If you are a headmaster, board member or a director of a school, give us a call. To know
                                the details of the in-depth work we do at schools, visit the project page.
                            </p>
                            <Link
                                style={{ color: 'inherit' }}
                                onMouseOver={(e) => (e.currentTarget.style.color = '#28c76f')}
                                onMouseOut={(e) => (e.currentTarget.style.color = 'inherit')}
                                to="/projects/vschool">
                                Learn more
                                <FeatherIcon icon="arrow-right" className="ms-1 icon-xxs" />
                            </Link>
                        </div>
                    </Col>
                    <Col lg={{ span: 6, offset: 1 }}>
                        <img
                            src="https://uploads.justech-ai.in/vopa-website/Project Overview Page/1758274809481_racialgap.webp"
                            alt="racial gap image"
                            className="img-fluid"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        />
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div
                            className="bg-white p-2 rounded border shadow mb-lg-0 mb-3"
                            data-aos="fade-right"
                            data-aos-duration="1500">
                            <img
                                src="https://uploads.justech-ai.in/vopa-website/Project Overview Page/1758274809478_oursolution.webp"
                                alt="desktop"
                                className="img-fluid"
                            />
                        </div>
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }}>
                        <div className="mt-4 mt-lg-0">
                            <Badge pill bg="" className="badge-soft-success px-2 py-1">
                                Empowering Teachers
                            </Badge>
                            <h1 className="display-4 text-success fw-medium mb-3">Tech for Teachers</h1>

                            <p className="text-muted mx-auto mb-4 pb-3">
                                We have developed a unique lesson preparation module that addresses the teacher
                                capacity-building challenges. This technology enables the teachers to increase their
                                subject knowledge and teaching skills
                            </p>
                            <p className="text-muted mx-auto mb-4 pb-3">
                                Guided lesson preparation and planning Centralized monitoring of teaching preperation.
                            </p>
                            <p className="text-muted mx-auto mb-4 pb-3">
                                Among school-related factors, teachers play the most critical role in student
                                achievement.Economist Eric Hanushek finds that a child taught by a good teacher gains
                                1.5 grade-level equivalents, while a child taught by a bad teacher only gets half an
                                academic year’s worth. Improving teacher capacity is the most critical part for
                                improving learning experience of the students. Contact us to know how technology can be
                                a tool for that.
                            </p>
                            <ul className="list-unstyled border-top py-4 mt-4 text-start">
                                {features.map((feature, index) => {
                                    return (
                                        <li className="py-2 d-flex align-items-center" key={index.toString()}>
                                            {feature && (
                                                <>
                                                    <FeatherIcon
                                                        icon="check"
                                                        className="icon-xs text-success align-middle me-2"
                                                    />
                                                    {feature}
                                                </>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                            {/* <Link to="#">
                                Learn more
                                <FeatherIcon icon="arrow-right" className="ms-1 icon-xxs" />
                            </Link> */}
                        </div>
                    </Col>
                </Row>
                <Row className="align-items-center mb-6 pb-lg-5">
                    <Col lg={5}>
                        <div className="mb-4 mb-lg-0">
                            <Badge pill bg="" className="badge-soft-success px-2 py-1">
                                Empower your school
                            </Badge>
                            <h1 className="display-4 fw-medium mb-3">V-School for Students</h1>
                            <p className="text-muted mx-auto mb-4 pb-3">
                                During Covid-19 and lockdown situation, the schools were closed. Education shifted to
                                online classes and e-learning. There were millions of children who did not have the
                                access to such education. VOPA introduced V-School to help such needy children.
                            </p>

                            <Link
                                style={{ color: 'inherit' }}
                                onMouseOver={(e) => (e.currentTarget.style.color = '#28c76f')}
                                onMouseOut={(e) => (e.currentTarget.style.color = 'inherit')}
                                to="/projects/vschool">
                                Learn more
                                <FeatherIcon icon="arrow-right" className="ms-1 icon-xxs" />
                            </Link>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div
                            className="bg-white rounded border shadow mb-lg-0 mb-3 overflow-hidden"
                            data-aos="fade-right"
                            data-aos-duration="1500"
                            style={{ padding: 0 }}>
                            <img
                                src="https://uploads.justech-ai.in/vopa-website/Project Overview Page/1762767224872_nipun2.gif"
                                alt="desktop"
                                className="img-fluid w-100 h-100"
                                style={{ objectFit: 'cover', display: 'block' }}
                            />
                        </div>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col lg={5}>
                        <div
                            className="bg-white p-2 rounded border align-items-center shadow mb-lg-0 mb-3"
                            data-aos="fade-right"
                            data-aos-duration="1500">
                            <img
                                src="https://uploads.justech-ai.in/vopa-website/Project Overview Page/1758274809154_mycalogo.png"
                                alt="desktop"
                                className="img-fluid"
                            />
                        </div>
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }}>
                        <div className="mt-4 mt-lg-0">
                            <Badge pill bg="" className="badge-soft-success px-2 py-1">
                                MYCA
                            </Badge>
                            <h1 className="display-4 text-success fw-medium mb-3">My Mental Health Companion</h1>

                            <p className="text-muted mx-auto mb-4 pb-3">
                                A Digital Ecosystem for Mental Health’ is an ecosystem app, which is one and the only of
                                its kind. It is designed to serve different stakeholders: Explorers, Patients,
                                CareGivers, Health Workers. It is designed to address the critical mental health
                                challenges faced by underserved communities, particularly in Maharashtra, through the
                                integration of technology-driven solutions.
                            </p>

                            {/* <Link to="#">
                                Learn more
                                <FeatherIcon icon="arrow-right" className="ms-1 icon-xxs" />
                            </Link> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Features;
