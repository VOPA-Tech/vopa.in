import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsDonationModalOpen } from 'reduxFolder/appSlice';
import MovingImageTrain from './MovingImageTrain';

const Hero4 = () => {
    const dispatch = useDispatch();

    return (
        <section className="hero-4 bg-paper-texture pt-7 pb-3 py-sm-7 overflow-hidden">
            <Container>
                <Row className="align-items-center">
                    <h1 className="hero-title">Digital Learning Project</h1>
                    <p className="mt-4 fs-17 newspaper-text">
                        VOPA’s Digital Learning Project is supporting 20 schools in Pune by strengthening how children
                        learn and how teachers teach. The programme equips teachers with simple, effective teaching
                        practices, improves essential school facilities, and closely tracks student progress through
                        regular assessments. Students also receive additional learning support through the V-School app.
                        By focusing on the real needs of schools, the project is helping create meaningful and lasting
                        improvements in classrooms. This balanced approach is enhancing student learning outcomes and
                        empowering teachers with greater confidence to adopt new, effective teaching methods.
                    </p>
                    <Row className="testimonials-2" data-aos="fade-up" data-aos-duration="200">
                        <Col>
                            <div className="slider">
                                <MovingImageTrain
                                    images={[
                                        'https://uploads.justech-ai.in/vopa-website/DLPPage/1764219586966_shared-image-89.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/DLPPage/1764219586948_shared-image-2025-11-13t164420156.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/DLPPage/1764219586795_shared-image-2025-11-20t101830643.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/DLPPage/1764219586492_media-62-1.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/DLPPage/1764219586308_shared-image-90.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/DLPPage/1764219586250_shared-image-88.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/DLPPage/1764219586158_media-2025-08-05t115609381-2.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/DLPPage/1764219586151_shared-image-2025-08-20t164815133-1.jpg',
                                    ]}
                                />
                            </div>
                        </Col>
                    </Row>
                    <div className="pt-3 pt-sm-5">
                        <Button
                            className="mb-2"
                            variant="success"
                            onClick={() => dispatch(setIsDonationModalOpen(true))}>
                            Support a Child’s Education
                        </Button>
                        <Link className="mt-sm-2" to="/contact-us">
                            <Button variant="outline-success" className="me-2 mb-2 ms-2">
                                Join as a Volunteer
                            </Button>
                        </Link>
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default Hero4;
