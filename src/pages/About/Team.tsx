import { Badge, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

type TeamProps = {
    teamMembers: any[];
};

const Team = ({ teamMembers }: TeamProps) => {
    if (!teamMembers || teamMembers.length === 0) return null;

    // Separate priority members
    const leaders = teamMembers.filter((member) => member?.content?.priority);
    const others = teamMembers.filter((member) => !member?.content?.priority);
    const sortedMembers = [...leaders, ...others];

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
                        <Col lg={4} md={6} key={index.toString()}>
                            <div className="d-flex align-items-center mb-5 pb-md-4">
                                <img
                                    src={member?.content?.Photo?.filename || '/images/placeholder.jpg'}
                                    alt={member?.name || 'Team Member'}
                                    style={{ width: '100px', height: '125px' }}
                                    className="avatar-xl d-block rounded me-4"
                                />
                                <div className="flex-grow-1">
                                    <h5 className="mt-0 mb-1 fw-medium d-flex align-items-center">
                                        {member?.name || 'Unnamed'}
                                    </h5>
                                    <p className="text-muted fw-medium mb-0">
                                        {member?.content?.Designation || 'Designation'}
                                    </p>
                                    {member?.content?.LinkedIn && (
                                        <a
                                            href={member.content.LinkedIn}
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
