import { useEffect } from 'react';
import { Card, Col, ProgressBar, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'reduxFolder/contactFormSlice';
import { fetchVolunteers } from 'reduxFolder/volunteerFormSlice';

const WebsiteFormStats = () => {
    const dispatch = useDispatch();

    const contactState = useSelector((state) => state.contactFormState);
    const volunteerState = useSelector((state) => state.volunteerFormState);

    useEffect(() => {
        dispatch(fetchContacts());
        dispatch(fetchVolunteers());
    }, [dispatch]);

    // CONTACT FORM METRICS
    const totalContacts = contactState.totalCount || 0;
    const respondedContacts = totalContacts - (contactState.unrespondedCount || 0);
    const contactPercent = totalContacts ? ((respondedContacts / totalContacts) * 100).toFixed(1) : 0;

    // VOLUNTEER FORM METRICS
    const totalVolunteers = volunteerState.totalCount || 0;
    const respondedVolunteers = totalVolunteers - (volunteerState.unrespondedCount || 0);
    const volunteerPercent = totalVolunteers ? ((respondedVolunteers / totalVolunteers) * 100).toFixed(1) : 0;

    return (
        <Col lg={5}>
            <Card>
                <Card.Body>
                    <h4 className="mb-3 fs-16">Form Response Overview</h4>

                    {/* CONTACT FORM */}
                    <Row className="align-items-center mb-3">
                        <Col md={12}>
                            <p className="float-end mb-0">
                                {respondedContacts}/{totalContacts}
                            </p>
                            <h6 className="fw-medium my-0">Contact Form Responded</h6>

                            <ProgressBar
                                now={contactPercent}
                                variant="orange"
                                className="mt-2"
                                style={{ height: '6px' }}
                            />
                        </Col>
                    </Row>

                    {/* VOLUNTEER FORM */}
                    <Row className="align-items-center mb-2">
                        <Col md={12}>
                            <p className="float-end mb-0">
                                {respondedVolunteers}/{totalVolunteers}
                            </p>
                            <h6 className="fw-medium my-0">Volunteer Form Responded</h6>

                            <ProgressBar
                                now={volunteerPercent}
                                variant="orange"
                                className="mt-2"
                                style={{ height: '6px' }}
                            />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default WebsiteFormStats;
