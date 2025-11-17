import { Badge, Col, Container, Image, Row, Card } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

type TeamMember = {
    level?: number;
    name?: string;
    photo?: string;
    role?: string;
    linkedin?: string;
};

type TeamProps = {
    teamMembers?: TeamMember[] | null;
};

const Team = ({ teamMembers }: TeamProps) => {
    // Ensure teamMembers is an array
    const safeTeamMembers = Array.isArray(teamMembers) ? teamMembers : [];

    if (safeTeamMembers.length === 0) return null;

    const sortByName = (a: any, b: any) => a.name?.localeCompare(b.name || '');

    // Separate and sort priority members alphabetically
    const level3 = safeTeamMembers.filter((member) => member?.level === 3).sort(sortByName);
    const level2 = safeTeamMembers.filter((member) => member?.level === 2).sort(sortByName);
    const level1 = safeTeamMembers.filter((member) => member?.level === 1).sort(sortByName);

    // Merge in order of priority
    const sortedMembers = [...level3, ...level2, ...level1];

    return (
        <section className="pb-5 pt-6 mt-4 position-relative" data-aos="fade-up" style={{ background: '#f9f9f9' }}>
            <Container>
                {/* Title section */}
                <Row className="text-center mb-4">
                    <Col>
                        <h3 className="display-4 text-primary mb-3">Donate to VOPA</h3>
                        <p className="text-muted">Your generous contributions make a big difference. Thank you!</p>
                    </Col>
                </Row>

                {/* Bank details and QR code section */}
                <Row className="p-4">
                    {/* Bank Transfer Details */}
                    <Col md={6}>
                        <Card className="shadow-sm border-light rounded">
                            <Card.Body>
                                <h5 className="mb-4">Bank Transfer Details</h5>
                                <ul className="list-unstyled mb-2">
                                    <li>
                                        <strong>Account Name:</strong> VOWELS OF THE PEOPLE ASSOCIATION
                                    </li>
                                    <li>
                                        <strong>Bank:</strong> Kotak Mahindra Bank
                                    </li>
                                    <li>
                                        <strong>Branch:</strong> Kothrud, Pune
                                    </li>
                                    <li>
                                        <strong>Account No:</strong> 1112842861
                                    </li>
                                    <li>
                                        <strong>IFSC:</strong> KKBK0001765
                                    </li>
                                    <li>
                                        <strong>Email:</strong> contact.vopa@ybl
                                    </li>
                                    <li>
                                        <strong>Alt Email:</strong> contact.vopa@axl
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* QR Code Section */}
                    <Col md={6} className="text-center">
                        <div className="d-flex flex-column align-items-center">
                            <Image
                                src="https://uploads.justech-ai.in/vopa-website/donate/1758272293057_qr.png"
                                alt="QR Code"
                                fluid
                                style={{
                                    maxHeight: 200,
                                    marginBottom: 20,
                                    borderRadius: '10px',
                                    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
                                }}
                            />
                            <p className="text-muted">Scan to donate via UPI</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Team;
