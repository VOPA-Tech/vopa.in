import { Link } from 'react-router-dom';
import { Card, Col, Container, Nav, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { useState } from 'react';
import { ReactComponent as Bottom } from 'assets/images/shapes/bottom.svg';
// types
import { Project } from './types';
// import Blog from './Blog';
import { blogPosts } from './data';

type ProjectsProps = {
    projects: Project[];
};

const Projects = ({ projects }: ProjectsProps) => {
    const [activeCategory, setActiveCategory] = useState<'Health' | 'Education'>('Health');

    const filteredProjects = projects.filter((project) => project.field === activeCategory);

    return (
        <section className="py-lg-5 pb-5 pt-2 position-relative bg-soft-warning">
            <Container>
                <Row className="justify-content-center">
                    <Col className="text-start">
                        <h1 className="display-5 fw-medium">Our Projects</h1>
                    </Col>
                    <Col xs="auto">
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
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Row className="mt-5">
                        {(filteredProjects || []).map((blog, index) => {
                            return (
                                <Col md={4} key={index.toString()}>
                                    <Card className="shadow" data-aos="fade-up" data-aos-duration="500">
                                        <div className="card-img-top-overlay">
                                            <div className="overlay"></div>
                                            <span className="card-badge top-right bg-secondary text-white">Design</span>

                                            <div className="position-relative">
                                                <img src={blog.image} alt="blog" className="card-img-top" />

                                                <div className="shape text-white bottom">
                                                    <Bottom />
                                                </div>
                                            </div>
                                        </div>
                                        <Card.Body>
                                            <div className="mt-2">
                                                <Row className="align-items-center">
                                                    <Col xs="auto">
                                                        <p className="mb-0">
                                                            <span className="fs-13 align-middle">{blog.field}</span>
                                                        </p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="mt-2">
                                                <h4>
                                                    <Link to="#" className="card-title-link">
                                                        {blog.title}
                                                    </Link>
                                                </h4>
                                                <p className="text-muted mb-2">
                                                    {blog.description}
                                                    <Link to="#">Read More</Link>
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
