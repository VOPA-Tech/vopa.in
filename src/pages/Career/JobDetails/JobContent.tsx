import React, { useMemo, useState } from 'react';
import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

type JobContentProps = { job: any };

const APPLY_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScM6CEiwnfAutSDHOwR1B2ra1DPsrpyj6KYR3MfyZnfIg8iyw/viewform';

const JobContent = ({ job }: JobContentProps) => {
    const jobs: any[] = useSelector((state: any) => state.jobsState.jobs ?? []);
    const [copied, setCopied] = useState(false);

    const otherJobs = useMemo(() => {
        if (!Array.isArray(jobs)) return [];
        return jobs
            .filter((j) => j && (job?._id ? j._id !== job._id : true) && (job?.slug ? j.slug !== job.slug : true))
            .slice(0, 8);
    }, [jobs, job]);

    const fmtEmp = (t?: string) => (t ? t.replace('-', ' ') : undefined);
    const fmtDate = (d?: string | Date | null) => (d ? new Date(d).toLocaleDateString() : undefined);

    const handleShare = async () => {
        try {
            const url = window.location.href;
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(url);
            } else {
                // Fallback for older browsers / non-secure context
                const input = document.createElement('input');
                input.value = url;
                document.body.appendChild(input);
                input.select();
                document.execCommand('copy');
                document.body.removeChild(input);
            }
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch {
            // no-op
        }
    };

    return (
        <section className="position-relative pb-5">
            <Container>
                <Row className="g-4">
                    {/* LEFT: Job details */}
                    <Col lg={8}>
                        <div>
                            <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                                {job?.department && (
                                    <Badge bg="" className="badge-soft-info">
                                        {job.department}
                                    </Badge>
                                )}
                                {job?.isActive ? (
                                    <Badge bg="success">Active</Badge>
                                ) : (
                                    <Badge bg="secondary">Closed</Badge>
                                )}

                                {job?.applicationDeadline && (
                                    <Badge bg="light" text="dark">
                                        Apply by {fmtDate(job.applicationDeadline)}
                                    </Badge>
                                )}
                                {job?.employmentType && (
                                    <Badge bg="light" text="dark">
                                        <Link to="#">{job?.employmentType?.replace('-', ' ') || 'Position'}</Link>
                                    </Badge>
                                )}
                                {job?.location && (
                                    <Badge bg="light" text="dark">
                                        {job?.location && <div className="text-muted small">📍 {job.location}</div>}
                                    </Badge>
                                )}
                            </div>

                            <Row className="g-3 mb-4">
                                {job?.noOfVacancies != null && (
                                    <Col sm={6} md={4}>
                                        <div className="p-3 rounded border bg-light">
                                            <div className="small text-muted mb-1">Vacancies</div>
                                            <div className="fw-semibold">{job.noOfVacancies}</div>
                                        </div>
                                    </Col>
                                )}
                                {job?.experience != null && (
                                    <Col sm={6} md={4}>
                                        <div className="p-3 rounded border bg-light">
                                            <div className="small text-muted mb-1">Experience</div>
                                            <div className="fw-semibold">{job.experience} yr(s)</div>
                                        </div>
                                    </Col>
                                )}
                                {job?.salary && (
                                    <Col sm={6} md={4}>
                                        <div className="p-3 rounded border bg-light">
                                            <div className="small text-muted mb-1">Salary</div>
                                            <div className="fw-semibold">{job.salary}</div>
                                        </div>
                                    </Col>
                                )}
                            </Row>

                            {job?.content ? (
                                <div
                                    style={{ color: '#212529', fontSize: '1rem', lineHeight: '1.7' }}
                                    dangerouslySetInnerHTML={{ __html: job.content }}
                                />
                            ) : (
                                <p className="text-muted">No description available.</p>
                            )}
                        </div>

                        {/* Actions */}
                        <div className="d-flex flex-wrap gap-2 mt-4">
                            <Button
                                variant="primary"
                                as="a"
                                href={APPLY_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                disabled={job?.isActive === false}>
                                Apply Now
                            </Button>

                            <Button variant="outline-info" onClick={handleShare}>
                                {copied ? 'Copied!' : 'Share'}
                            </Button>

                            <Button variant="light" className="border">
                                <Link to="/join-us">Back</Link>
                            </Button>
                        </div>
                    </Col>

                    {/* RIGHT: Sidebar */}
                    <Col lg={4}>
                        <h6 className="mb-3">More jobs</h6>
                        <div className="d-flex flex-column gap-3">
                            {otherJobs.length === 0 && <div className="text-muted small">No other jobs available.</div>}

                            {otherJobs.map((j, idx) => (
                                <React.Fragment key={j._id || j.slug || j.title}>
                                    <div className="d-flex align-items-center gap-3 py-2">
                                        {j?.thumbnailUrl ? (
                                            <img
                                                src={j.thumbnailUrl}
                                                alt={j.title}
                                                style={{
                                                    width: 56,
                                                    height: 56,
                                                    objectFit: 'cover',
                                                    borderRadius: 8,
                                                    flex: '0 0 auto',
                                                }}
                                            />
                                        ) : (
                                            <div
                                                style={{
                                                    width: 56,
                                                    height: 56,
                                                    background: '#eee',
                                                    borderRadius: 8,
                                                    flex: '0 0 auto',
                                                }}
                                            />
                                        )}

                                        <div className="flex-grow-1">
                                            <h6 className="mb-1">
                                                <Link
                                                    to={`/join-us/${j.slug || j._id}`}
                                                    className="text-decoration-none">
                                                    {j.title}
                                                </Link>
                                            </h6>

                                            <div className="text-muted small">
                                                {j.department && <span>{j.department}</span>}
                                                {j.location && (
                                                    <span className={j.department ? 'ms-2' : ''}>• {j.location}</span>
                                                )}
                                                {j.employmentType && (
                                                    <span className="ms-2">• {fmtEmp(j.employmentType)}</span>
                                                )}
                                            </div>

                                            <div className="d-flex gap-2 mt-2">
                                                <Button
                                                    size="sm"
                                                    variant="outline-primary"
                                                    as="a"
                                                    href={APPLY_URL}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    disabled={j?.isActive === false}>
                                                    Apply
                                                </Button>
                                                <Button size="sm" variant="light" className="border">
                                                    <Link to={`/join-us/${j.slug || j._id}`}>View</Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* visible separator between items */}
                                    {idx !== otherJobs.length - 1 && (
                                        <div className="border-top my-2" style={{ borderColor: '#dee2e6' }} />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default JobContent;
