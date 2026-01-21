import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// images
import google from 'assets/images/buttons/google.png';
import store from 'assets/images/buttons/store.png';

const CTA = () => {
    return (
        <section className="bg-paper-texture">
            <Container className="text-center my-3">
                <Row className="align-items-center">
                    <Col>
                        {/* <h1 className="display-5 fw-medium">Start offering your users a better experience</h1> */}
                        <p className="text-muted mx-auto">Ensuring Right to Quality Education</p>

                        <div className="text-center">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://play.google.com/store/apps/details?id=com.saiyyammobile"
                                className="d-block d-sm-inline-flex">
                                <img src={google} alt="" height="52" />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CTA;
