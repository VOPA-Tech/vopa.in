import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Badge, Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

type Job = {
    _id?: string;
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
    const rows = useMemo(() => (Array.isArray(jobs) ? jobs : []), [jobs]);
    const [show, setShow] = useState(false);
    const [activeJob, setActiveJob] = useState<Job | null>(null);
    const printRef = useRef<HTMLDivElement>(null);

    // track which card just copied
    const [copiedKey, setCopiedKey] = useState<string | null>(null);

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

    const cardKey = (job: Job) => job.slug || job._id || job.title;

    const copyLink = async (job: Job) => {
        const slugOrId = job.slug || job._id || '';
        const url = `${window.location.origin}/careers/${slugOrId}`;
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(url);
            } else {
                const input = document.createElement('input');
                input.value = url;
                document.body.appendChild(input);
                input.select();
                document.execCommand('copy');
                document.body.removeChild(input);
            }
            const key = cardKey(job);
            setCopiedKey(key);
            setTimeout(() => setCopiedKey((k) => (k === key ? null : k)), 1400);
        } catch {
            // no-op
        }
    };

    const fixedImage =
        rows.find((r) => !!r.thumbnailUrl)?.thumbnailUrl || 'https://via.placeholder.com/240x160?text=Careers';

    return (
        <section className="py-5 position-relative bg-paper-texture" id="job-openings" style={{ overflow: 'hidden' }}>
            <Container>
                <Row>
                    <Col className="text-center">
                        <h1 className="display-5 fw-semibold">Job Openings</h1>
                        <p className="text-muted mx-auto">Interested? Come show us what you're made of!</p>
                    </Col>
                </Row>

                <Row className="mt-4 g-4">
                    {rows
                        .filter((job: any) => job.isActive)
                        .map((job) => (
                            <Col key={job.slug || job.title} xs={12} md={6} lg={4}>
                                {/* Card with background image */}
                                <Card className="h-100 shadow-sm border-2 rounded position-relative overflow-hidden">
                                    {job.thumbnailUrl && (
                                        <div
                                            aria-hidden
                                            className="position-absolute top-0 start-0 w-100 h-100"
                                            style={{
                                                backgroundImage: `linear-gradient(rgba(255,255,255,.9), rgba(255,255,255,.9)), url(${job.thumbnailUrl})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                filter: 'grayscale(10%)',
                                                pointerEvents: 'none',
                                            }}
                                        />
                                    )}

                                    {/* Share button / copied indicator */}
                                    <div className="position-absolute top-0 end-0 p-2" style={{ zIndex: 2 }}>
                                        {copiedKey === cardKey(job) ? (
                                            <span className="badge bg-success">Copied!</span>
                                        ) : (
                                            <button
                                                type="button"
                                                className="btn btn-outline btn-sm rounded-circle "
                                                aria-label="Copy share link"
                                                onClick={() => copyLink(job)}
                                                title="Copy share link">
                                                <FeatherIcon icon="share-2" size={16} />
                                            </button>
                                        )}
                                    </div>

                                    <Card.Body className="d-flex flex-column position-relative" style={{ zIndex: 1 }}>
                                        <div className="d-flex align-items-center gap-2 mb-2">
                                            {job.isActive ? (
                                                <Badge bg="success">Active</Badge>
                                            ) : (
                                                <Badge bg="secondary">Closed</Badge>
                                            )}
                                            {job.department ? (
                                                <Badge bg="soft-info" text="dark">
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

                                        <div className="mt-auto d-flex gap-2">
                                            <Button
                                                variant="outline-info"
                                                className="flex-grow-1"
                                                as="a"
                                                href={APPLY_URL}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                disabled={job.isActive === false}>
                                                Apply Now
                                            </Button>

                                            <Button
                                                variant="outline-info"
                                                className="flex-grow-1"
                                                as="a"
                                                href={`/join-us/${job.slug || job._id}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                disabled={job.isActive === false}>
                                                View Details
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
                src="https://uploads.justech-ai.in/vopa-website/careerPage/1768910406969_vowels_of_the_people_association_in_english_2026_certification_badge-removebg-pr.png"
                alt="careers"
                style={{
                    position: 'fixed',
                    right: 24,
                    top: 84,
                    width: 140,
                    height: 'auto',
                    opacity: 0.22,
                    borderRadius: 12,
                    pointerEvents: 'none',
                    objectFit: 'cover',
                    zIndex: 1,
                }}
            />

            {/* (Legacy) Details Modal retained as in your file */}
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

                        <div
                            className="blog-content porse"
                            dangerouslySetInnerHTML={{ __html: activeJob?.content || '' }}
                        />
                    </div>
                </Modal.Body>

                <Modal.Footer className="d-flex justify-content-between">
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
