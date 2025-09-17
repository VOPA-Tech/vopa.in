import { Badge, Col, Container, Row } from 'react-bootstrap';
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
        <section className="pb-5 pt-6 mt-4 position-relative" data-aos="fade-up">
            <Container>
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-success px-2 py-1">
                            Our Team
                        </Badge>
                        <h1 className="display-5 fw-medium">Meet Our Team</h1>
                        <p className="text-muted mx-auto">
                            On Ground. In Sync. <span className="text-dark fw-bold">Always</span>.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    {sortedMembers.map((member, index) => (
                        <Col lg={4} md={6} key={index}>
                            <div className="d-flex align-items-center mb-5 pb-md-4">
                                <img
                                    src={member?.photo || '/images/placeholder.jpg'}
                                    alt={member?.name || 'Team Member'}
                                    style={{ width: '120px', height: '150px', objectFit: 'cover' }}
                                    className="avatar-xl d-block rounded me-4"
                                />

                                <div className="flex-grow-1">
                                    <h5 className="mt-0 mb-1 fw-medium d-flex align-items-center">
                                        {member?.name || 'Unnamed'}
                                    </h5>
                                    <p className="text-muted fw-medium mb-0">{member?.role || 'Designation'}</p>
                                    {member?.linkedin && (
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted mt-1 d-inline-block">
                                            <FeatherIcon icon="linkedin" size={16} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Team;
