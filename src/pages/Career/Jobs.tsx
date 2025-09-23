import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Badge, Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Link } from 'react-router-dom';

type Job = {
    slug?: string;
    title: string;
    department?: string;
    thumbnailUrl?: string;
    content?: string;
    isActive?: boolean;
    location?: string;
    employmentType?: 'full-time' | 'part-time' | 'contract' | 'internship' | 'temporary' | 'freelance' | 'volunteer';
    noOfVacancies?: number;
    experience?: number;
    salary?: string;
    applicationDeadline?: string | Date | null;
};

type JobsProps = {
    jobs: Job[];
};

const APPLY_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScM6CEiwnfAutSDHOwR1B2ra1DPsrpyj6KYR3MfyZnfIg8iyw/viewform';

const Jobs: React.FC<JobsProps> = ({ jobs = [] }) => {
    // Make sure jsPDF.html can find html2canvas
    useEffect(() => {
        (window as any).html2canvas = html2canvas;
    }, []);

    const rows = useMemo(() => (Array.isArray(jobs) ? jobs : []), [jobs]);
    const [show, setShow] = useState(false);
    const [activeJob, setActiveJob] = useState<Job | null>(null);
    const printRef = useRef<HTMLDivElement>(null);

    if (!rows.length) return null;

    const openModal = (job: Job) => {
        setActiveJob(job);
        setShow(true);
    };
    const closeModal = () => {
        setShow(false);
        setActiveJob(null);
    };

    const fmt = {
        emp: (t?: string) => (t ? t.replace('-', ' ') : '-'),
        date: (d?: string | Date | null) => (d ? new Date(d).toLocaleDateString() : '-'),
    };

    const plainText = (html?: string, max = 180) => {
        const text = (html || '')
            .replace(/<[^>]+>/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
        return text.length > max ? text.slice(0, max - 1) + '…' : text;
    };

    const handleDownloadPdf = async () => {
        if (!printRef.current || !activeJob) return;
        const doc = new jsPDF('p', 'pt', 'a4');
        await doc.html(printRef.current, {
            x: 28,
            y: 28,
            width: 539,
            windowWidth: 900,
            html2canvas: { scale: 2 },
        });
        doc.save(`${activeJob.title}.pdf`);
    };

    const fixedImage =
        rows.find((r) => !!r.thumbnailUrl)?.thumbnailUrl || 'https://via.placeholder.com/240x160?text=Careers';

    return (
        <section className="py-5 mt-2 position-relative" id="job-openings" style={{ overflow: 'hidden' }}>
            <Container>
                <Row>
                    <Col className="text-center">
                        <h1 className="display-5 fw-semibold">Job Openings</h1>
                        <p className="text-muted mx-auto">Interested? Come show us what you're made of!</p>
                    </Col>
                </Row>

                <Row className="mt-4 g-4">
                    {rows.map((job) => (
                        <Col key={job.slug || job.title} xs={12} md={6} lg={4}>
                            <Card className="h-100 shadow-sm border-2 rounded">
                                {job.thumbnailUrl ? (
                                    <Card.Img
                                        variant="top"
                                        src={job.thumbnailUrl}
                                        alt={job.title}
                                        style={{ height: 160, objectFit: 'cover' }}
                                    />
                                ) : null}
                                <Card.Body className="d-flex flex-column">
                                    <div className="d-flex align-items-center gap-2 mb-2">
                                        {job.isActive ? (
                                            <Badge bg="success">Active</Badge>
                                        ) : (
                                            <Badge bg="secondary">Closed</Badge>
                                        )}
                                        {job.department ? (
                                            <Badge bg="info" text="dark">
                                                {job.department}
                                            </Badge>
                                        ) : null}
                                        {job.employmentType ? (
                                            <Badge bg="light" text="dark">
                                                {fmt.emp(job.employmentType)}
                                            </Badge>
                                        ) : null}
                                    </div>

                                    <Card.Title className="mb-1">{job.title}</Card.Title>

                                    <div className="text-muted small mb-2">
                                        {job.location ? <span>📍 {job.location}</span> : null}
                                        {job.applicationDeadline ? (
                                            <span className="ms-2">
                                                ⏳ Apply by {fmt.date(job.applicationDeadline)}
                                            </span>
                                        ) : null}
                                    </div>

                                    <Card.Text className="text-muted mb-3" style={{ minHeight: 60 }}>
                                        {plainText(job.content)}
                                    </Card.Text>

                                    <div className="mt-auto d-flex gap-2">
                                        <Button
                                            variant="primary"
                                            className="flex-grow-1"
                                            as="a"
                                            href={APPLY_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            disabled={job.isActive === false}>
                                            Apply Now
                                        </Button>
                                        <Button
                                            variant="outlined-secondary"
                                            className="flex-grow-1"
                                            as="a"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            disabled={job.isActive === false}>
                                            <Link to={`/careers/${job.slug}`}>View Details</Link>
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* fixed decorative image at right corner */}
            <img
                src={fixedImage}
                alt="careers"
                style={{
                    position: 'fixed',
                    right: 24,
                    bottom: 24,
                    width: 140,
                    height: 'auto',
                    opacity: 0.12,
                    borderRadius: 12,
                    pointerEvents: 'none',
                    objectFit: 'cover',
                    zIndex: 1,
                }}
            />

            {/* Details Modal */}
            <Modal show={show} onHide={closeModal} centered size="lg">
                <Modal.Header closeButton>
                    <div className="w-100">
                        <h5 className="mb-1">{activeJob?.title}</h5>
                        <div className="d-flex flex-wrap align-items-center gap-2">
                            {activeJob?.department ? (
                                <Badge bg="info" text="dark">
                                    {activeJob.department}
                                </Badge>
                            ) : null}
                            {activeJob?.employmentType ? (
                                <Badge bg="light" text="dark">
                                    {fmt.emp(activeJob.employmentType)}
                                </Badge>
                            ) : null}
                            {activeJob?.location ? <Badge bg="secondary">{activeJob.location}</Badge> : null}
                            {activeJob?.isActive ? (
                                <Badge bg="success">Active</Badge>
                            ) : (
                                <Badge bg="secondary">Closed</Badge>
                            )}
                        </div>
                    </div>
                </Modal.Header>

                <Modal.Body style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                    {/* printable content wrapper */}
                    <div ref={printRef}>
                        {activeJob?.thumbnailUrl ? (
                            <img
                                src={activeJob.thumbnailUrl}
                                alt={activeJob.title}
                                className="img-fluid rounded mb-3"
                                style={{ maxHeight: 260, objectFit: 'cover', width: '100%' }}
                            />
                        ) : null}

                        <Row className="g-3 mb-3">
                            {activeJob?.noOfVacancies != null && (
                                <Col sm={6} md={4}>
                                    <div className="p-2 rounded border bg-light">
                                        <div className="small text-muted">Vacancies</div>
                                        <div className="fw-semibold">{activeJob.noOfVacancies}</div>
                                    </div>
                                </Col>
                            )}
                            {activeJob?.experience != null && (
                                <Col sm={6} md={4}>
                                    <div className="p-2 rounded border bg-light">
                                        <div className="small text-muted">Experience</div>
                                        <div className="fw-semibold">{activeJob.experience} yr(s)</div>
                                    </div>
                                </Col>
                            )}
                            {activeJob?.salary && (
                                <Col sm={6} md={4}>
                                    <div className="p-2 rounded border bg-light">
                                        <div className="small text-muted">Salary</div>
                                        <div className="fw-semibold">{activeJob.salary}</div>
                                    </div>
                                </Col>
                            )}
                            {activeJob?.applicationDeadline && (
                                <Col sm={6} md={4}>
                                    <div className="p-2 rounded border bg-light">
                                        <div className="small text-muted">Apply By</div>
                                        <div className="fw-semibold">{fmt.date(activeJob.applicationDeadline)}</div>
                                    </div>
                                </Col>
                            )}
                        </Row>

                        <div className="prose" dangerouslySetInnerHTML={{ __html: activeJob?.content || '' }} />
                    </div>
                </Modal.Body>

                <Modal.Footer className="d-flex justify-content-between">
                    <Button variant="outline-secondary" onClick={handleDownloadPdf}>
                        Download PDF
                    </Button>
                    <div className="d-flex gap-2">
                        <Button variant="secondary" onClick={closeModal}>
                            Close
                        </Button>
                        <Button
                            variant="primary"
                            as="a"
                            href={APPLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            disabled={activeJob?.isActive === false}>
                            Apply Now
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </section>
    );
};

export default Jobs;
