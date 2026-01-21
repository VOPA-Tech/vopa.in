import { Link } from 'react-router-dom';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

const Features = () => {
    const features = ['Guided lesson preparation and planning', 'Centralized monitoring of teaching preparation'];

    return (
        <section className="pt-lg-6 pt-4 pb-lg-6 pb-5 position-relative bg-paper-texture overflow-hidden newspaper-text">
            <Container>
                <Row className="align-items-center mb-6 pb-lg-5">
                    <Col lg={6}>
                        <div
                            className="bg-white rounded-3 border shadow mb-lg-0 mb-3 overflow-hidden"
                            data-aos="fade-right"
                            data-aos-duration="1500"
                            style={{ padding: 0 }}>
                            <video
                                src="https://uploads.justech-ai.in/vopa-website/Project Overview Page/1764227070245_nipun-video.mp4"
                                autoPlay
                                loop
                                muted
                                className="w-100 h-100"
                                style={{ objectFit: 'cover', display: 'block' }}
                            />
                        </div>
                    </Col>

                    <Col lg={{ span: 5, offset: 1 }}>
                        <div className="mt-4 mt-lg-0 newspaper-text">
                            <Badge pill bg="" className="badge-soft-success px-2 py-1">
                                NIPUN Maharashtra
                            </Badge>
                            <h1 className="display-4 text-success fw-medium mb-3"> NIPUN Maharashtra</h1>

                            <p className="text-muted mx-auto mb-1 pb-3">
                                To improve students’ Foundational Literacy and Numeracy (FLN) at scale, VOPA has built
                                out the NIPUN Maharashtra app for SCERT Maharashtra, the apex educational body of the
                                state.
                            </p>
                            <p className="text-muted mx-auto mb-1 pb-3">
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
                    <Col lg={{ span: 5 }}>
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
                    <Col lg={{ span: 6, offset: 1 }}>
                        <div
                            className="   mb-lg-0 mb-3 overflow-hidden"
                            data-aos="fade-right"
                            data-aos-duration="1500"
                            style={{ padding: 0 }}>
                            <img
                                src="https://uploads.justech-ai.in/vopa-website/vschoolPage/1758275207638_vschoolguy.png"
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
                            className="  align-items-center d-flex justify-content-center mb-lg-0 mb-3"
                            data-aos="fade-right"
                            data-aos-duration="1500">
                            <img
                                src="https://uploads.justech-ai.in/vopa-website/myca/1763720618669_1758272746925_nobgmycalogo.png"
                                alt="https://uploads.justech-ai.in/vopa-website/myca/1763720618669_1758272746925_nobgmycalogo.png"
                                className="img-fluid"
                            />
                        </div>
                    </Col>
                    <Col lg={{ span: 6, offset: 1 }}>
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
                <Row className="align-items-center mt-7 mb-6 pb-lg-5">
                    <Col lg={6}>
                        <div className="mb-4 mb-lg-0">
                            {/* <Badge pill bg="" className="badge-soft-info px-2 py-1">
                                Empower your school
                            </Badge> */}
                            <h1 className="display-4 fw-medium mb-3">Digital Learning Project</h1>
                            <p className="text-muted mx-auto mb-1 pb-3 newspaper-text">
                                In August 2023, Bajaj FinServ and VOPA launched the Digital Learning Project under a
                                Memorandum of Understanding valid through 2026. The initiative is designed to elevate
                                classroom teaching and strengthen student learning through a thoughtfully crafted blend
                                of online and offline tools. By providing high-quality digital content at no additional
                                cost, the project reduces the financial burden on schools and parents while ensuring
                                access to meaningful learning resources.
                            </p>
                            <p className="text-muted mx-auto mb-1 pb-3 newspaper-text">
                                The project tracks a single student cohort over three academic years (2023–24 to
                                2025–26). Of the 20 schools that joined initially, four offered only primary grades.
                                Students from these schools—who began in Grade 3—will move into secondary schools
                                already included among the remaining 16 institutions, resulting in 16 active project
                                schools. The hybrid learning model is built on four core components:
                            </p>
                            <ul>
                                {[
                                    {
                                        title: 'Digital learning support through the V-School',
                                        description:
                                            'Liberating Education app, available for both home and classroom use.',
                                    },
                                    {
                                        title: 'Dedicated on-ground mentoring',
                                        description: 'to assist teachers and students throughout the year.',
                                    },
                                    {
                                        title: 'Teacher capacity building',
                                        description:
                                            'through regular training sessions and curated educational resources.',
                                    },
                                    {
                                        title: 'Continuous monitoring and impact evaluation',
                                        description: 'to guide progress and ensure meaningful outcomes.',
                                    },
                                ].map((ele) => (
                                    <li className="newspaper-text" key={ele.title}>
                                        <strong> {ele.title}</strong> : {ele.description}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                style={{ color: 'inherit' }}
                                onMouseOver={(e) => (e.currentTarget.style.color = '#28c76f')}
                                onMouseOut={(e) => (e.currentTarget.style.color = 'inherit')}
                                to="/projects/dlp">
                                Learn more
                                <FeatherIcon icon="arrow-right" className="ms-1 icon-xxs" />
                            </Link>
                        </div>
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }}>
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
                </Row>
                {/* <Row className="align-items-center">
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
                            <Link to="#">
                                Learn more
                                <FeatherIcon icon="arrow-right" className="ms-1 icon-xxs" />
                            </Link>
                        </div>
                    </Col>
                </Row> */}
            </Container>
        </section>
    );
};

export default Features;
