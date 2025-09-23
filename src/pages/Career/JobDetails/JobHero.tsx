import { Badge, Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

type JobHeroProps = {
    job: any;
};

const JobHero: React.FC<JobHeroProps> = ({ job }) => {
    if (!job) return null; // prevent rendering if job is not available

    return (
        <section className="hero-4 pb-5 pt-8 pt-lg-6 pb-sm-4">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={12}>
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/career">Careers</Breadcrumb.Item>
                            <Breadcrumb.Item active>{job?.slug || 'Job'}</Breadcrumb.Item>
                        </Breadcrumb>

                        {job?.department && (
                            <div className="mt-4">
                                <Badge bg="" className="badge-soft-info mb-1">
                                    {job.department}
                                </Badge>
                            </div>
                        )}

                        <h1 className="hero-title mt-0">{job?.title || 'Untitled'}</h1>
                    </Col>
                </Row>

                <Row className="mt-4 align-items-center">
                    <Col xs="auto">
                        <div className="d-flex align-items-center">
                            <div>
                                <h5 className="m-0">
                                    {/* Using Link only to match original structure; no author field for jobs */}
                                    <Link to="#">{job?.employmentType?.replace('-', ' ') || 'Position'}</Link>
                                </h5>
                                {job?.location && <div className="text-muted small">📍 {job.location}</div>}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default JobHero;
