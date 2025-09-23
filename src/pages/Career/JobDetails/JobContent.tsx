import { useMemo, useRef } from 'react';
import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

type JobContentProps = { job: any };

const APPLY_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScM6CEiwnfAutSDHOwR1B2ra1DPsrpyj6KYR3MfyZnfIg8iyw/viewform';

const JobContent = ({ job }: JobContentProps) => {
    const jobs: any[] = useSelector((state: any) => state.jobsState.jobs ?? []);

    const printRef = useRef<HTMLDivElement>(null);
    const downloadingRef = useRef(false);

    const otherJobs = useMemo(() => {
        if (!Array.isArray(jobs)) return [];
        return jobs
            .filter((j) => j && (job?._id ? j._id !== job._id : true) && (job?.slug ? j.slug !== job.slug : true))
            .slice(0, 8);
    }, [jobs, job]);

    const fmtEmp = (t?: string) => (t ? t.replace('-', ' ') : undefined);
    const fmtDate = (d?: string | Date | null) => (d ? new Date(d).toLocaleDateString() : undefined);

    const downloadPdf = async () => {
        if (!printRef.current || !job) return;
        if (downloadingRef.current) return;
        downloadingRef.current = true;

        // Create an offscreen clone to control layout for export
        const host = document.createElement('div');
        host.style.position = 'fixed';
        host.style.left = '-99999px';
        host.style.top = '0';
        host.style.width = '800px'; // export width target
        host.style.background = '#ffffff';
        document.body.appendChild(host);

        const clone = printRef.current.cloneNode(true) as HTMLElement;

        // 1) Remove ALL images from the PDF export
        clone.querySelectorAll('img').forEach((img) => img.remove());

        // 2) Tighten layout so it fits on one page before scaling
        clone.style.margin = '0';
        clone.style.padding = '0';
        clone.style.fontSize = '12px';
        clone.style.lineHeight = '1.4';

        host.appendChild(clone);

        try {
            const canvas = await html2canvas(clone, {
                scale: 2,
                useCORS: true,
                allowTaint: true,
                logging: false,
                backgroundColor: '#ffffff',
                windowWidth: clone.scrollWidth,
            });

            const pdf = new jsPDF('p', 'pt', 'a4');
            const pageW = pdf.internal.pageSize.getWidth();
            const pageH = pdf.internal.pageSize.getHeight();
            const margin = 28; // ~1cm
            const availW = pageW - margin * 2;
            const availH = pageH - margin * 2;

            // Fit the snapshot to a single page
            const ratio = Math.min(availW / canvas.width, availH / canvas.height);
            const imgW = canvas.width * ratio;
            const imgH = canvas.height * ratio;

            const imgData = canvas.toDataURL('image/jpeg', 0.92);
            pdf.addImage(imgData, 'JPEG', margin, margin, imgW, imgH);

            const filename = `${(job.title || 'Job_Description').replace(/[^\w\s-]/g, '').replace(/\s+/g, '_')}.pdf`;
            pdf.save(filename);
        } finally {
            document.body.removeChild(host);
            downloadingRef.current = false;
        }
    };

    return (
        <section className="position-relative pb-5">
            <Container>
                <Row className="g-4">
                    {/* LEFT: Job details */}
                    <Col lg={8}>
                        {/* Only this content is exported (images are stripped in clone) */}
                        <div ref={printRef}>
                            <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                                {job?.isActive ? (
                                    <Badge bg="success">Active</Badge>
                                ) : (
                                    <Badge bg="secondary">Closed</Badge>
                                )}
                                {job?.department && (
                                    <Badge bg="info" text="dark">
                                        {job.department}
                                    </Badge>
                                )}
                                {job?.employmentType && (
                                    <Badge bg="light" text="dark">
                                        {fmtEmp(job.employmentType)}
                                    </Badge>
                                )}
                                {job?.location && <Badge bg="secondary">{job.location}</Badge>}
                                {job?.applicationDeadline && (
                                    <Badge bg="light" text="dark">
                                        Apply by {fmtDate(job.applicationDeadline)}
                                    </Badge>
                                )}
                            </div>

                            {/* Keep image in UI, but it's removed for PDF in the clone */}
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

                            <Button variant="outline-secondary" onClick={downloadPdf} disabled={!job}>
                                Download JD (PDF)
                            </Button>

                            <Button variant="light" className="border">
                                <Link to="/career">Back to Careers</Link>
                            </Button>
                        </div>
                    </Col>

                    {/* RIGHT: Sidebar */}
                    <Col lg={4}>
                        <h6 className="mb-3">More jobs</h6>
                        <div className="d-flex flex-column gap-3">
                            {otherJobs.length === 0 && <div className="text-muted small">No other jobs available.</div>}

                            {otherJobs.map((j) => (
                                <Card key={j._id || j.slug || j.title} className="border-0 shadow-sm">
                                    <Card.Body className="p-3">
                                        <div className="d-flex gap-3">
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
                                                        to={`/careers/${j.slug || j._id}`}
                                                        className="text-decoration-none">
                                                        {j.title}
                                                    </Link>
                                                </h6>

                                                <div className="text-muted small">
                                                    {j.department && <span>{j.department}</span>}
                                                    {j.location && (
                                                        <span className={j.department ? 'ms-2' : ''}>
                                                            • {j.location}
                                                        </span>
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
                                                        <Link to={`/careers/${j.slug || j._id}`}>View</Link>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default JobContent;
