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
                <Row className="">
                    <Col lg={8}>
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/join-us">Join Us</Breadcrumb.Item>
                            <Breadcrumb.Item active>{job?.slug || 'Job'}</Breadcrumb.Item>
                        </Breadcrumb>

                        <h1 className="hero-title">{job?.title || 'Untitled'}</h1>
                    </Col>
                    <Col className="justify-content-between" lg={4}>
                        {' '}
                        {job?.thumbnailUrl && (
                            <figure className="figure">
                                <img
                                    src={job.thumbnailUrl}
                                    alt="Job Thumbnail"
                                    className="figure-img img-fluid rounded"
                                    style={{ maxHeight: 320, objectFit: 'cover', width: '100%' }}
                                />
                            </figure>
                        )}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default JobHero;
