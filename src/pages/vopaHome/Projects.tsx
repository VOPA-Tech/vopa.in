import { Link } from 'react-router-dom';
import { Card, Col, Container, Nav, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { useState } from 'react';
import { ReactComponent as Bottom } from 'assets/images/shapes/bottom.svg';
// types
import { Project } from './types';

type ProjectsProps = {
    projects: Project[];
};

const Projects = ({ projects }: ProjectsProps) => {
    const [activeCategory, setActiveCategory] = useState<'Health' | 'Education'>('Health');

    // const filteredProjects = projects.filter((project) => project.field === activeCategory);

    return (
        <section className="py-lg-5 pb-5 pt-2 position-relative bg-light">
            <Container>
                <Row className="justify-content-center">
                    <Col className="text-start">
                        <h1 className="display-5 fw-medium">
                            We're shaping a world where every child has the tools to learn, the strength to grow, and
                            the freedom to flourish.
                        </h1>
                        <p className="mb-0">
                            <span className=" p-1 align-middle">Projects We Have Done</span>
                        </p>
                    </Col>
                    {/* <Col xs="auto">
                        <Nav
                            as="ul"
                            variant="pills"
                            className="pe-0 me-0 align-items-center"
                            id="pills-tab"
                            role="tablist">
                            <Nav.Item as="li" role="presentation">
                                <Nav.Link
                                    className={`cursor-pointer ${activeCategory === 'Health' ? 'active' : ''}`}
                                    onClick={() => setActiveCategory('Health')}>
                                    Health
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" role="presentation">
                                <Nav.Link
                                    className={`cursor-pointer ${activeCategory === 'Education' ? 'active' : ''}`}
                                    onClick={() => setActiveCategory('Education')}>
                                    Education
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col> */}
                </Row>

                <Row className="mt-3">
                    <Row className="mt-5 justify-content-center">
                        {(projects || []).map((project, index) => {
                            return (
                                <Col md={4} key={index.toString()}>
                                    <Card
                                        style={{
                                            border: '4px solid #28c76f', // Bootstrap green
                                            borderRadius: '1rem', // Optional: more rounded

                                            overflow: 'hidden', // Optional: hide overflow
                                        }}
                                        className="shadow-lg  rounded-lg "
                                        data-aos="fade-up"
                                        data-aos-duration="500">
                                        <div className="card-img-top-overlay rounded-lg ">
                                            <div className="overlay rounded-lg"></div>
                                            <span className="card-badge top-right bg-success text-white">
                                                {' '}
                                                {project.field}
                                            </span>

                                            <div className="position-relative">
                                                <img
                                                    src={project.image}
                                                    alt="project"
                                                    className="card-img-top rounded-lg"
                                                />

                                                <div className="shape text-white bottom ">{/* <Bottom /> */}</div>
                                            </div>
                                        </div>
                                        <Card.Body>
                                            <div className="mt-2">
                                                <Row className="align-items-center">
                                                    <Col xs="auto">
                                                        <p className="mb-0">
                                                            {/* <span className="fs-13  p-1 align-middle">VOPA</span> */}
                                                        </p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="mt-2">
                                                <h4>
                                                    <Link
                                                        to={project.link}
                                                        style={{ color: 'inherit' }}
                                                        onMouseOver={(e) => (e.currentTarget.style.color = '#28c76f')}
                                                        onMouseOut={(e) => (e.currentTarget.style.color = 'inherit')}
                                                        className="card-title-link">
                                                        {project.title}
                                                    </Link>
                                                </h4>
                                                <p className="text-muted mb-2">
                                                    {project.description.slice(0, 200)}...
                                                    <Link
                                                        style={{ color: 'inherit' }}
                                                        onMouseOver={(e) => (e.currentTarget.style.color = '#28c76f')}
                                                        onMouseOut={(e) => (e.currentTarget.style.color = 'inherit')}
                                                        to={project.link}>
                                                        Read More
                                                    </Link>
                                                </p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
                </Row>
            </Container>
        </section>
    );
};

export default Projects;
