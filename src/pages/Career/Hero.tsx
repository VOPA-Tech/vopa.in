import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsDonationModalOpen } from 'reduxFolder/appSlice';
import MovingImageTrain from './MovingImageTrain';

const Hero4 = () => {
    const dispatch = useDispatch();

    return (
        <section className="hero-4 bg-soft-success pt-7 pb-3 py-sm-7 overflow-hidden">
            <Container>
                <Row className="align-items-center">
                    <h1 className="hero-title">Let's work together. Join VOPA!</h1>
                    <p className="mt-4 fs-17">
                        We're always open for new creative, analytical and technical minds to join our team. Search for
                        the suitable job.
                    </p>
                    <Row className="testimonials-2" data-aos="fade-up" data-aos-duration="200">
                        <Col>
                            <div className="slider">
                                <MovingImageTrain
                                    images={[
                                        'https://uploads.justech-ai.in/vopa-website/websiteAboutSection/1758255642375_vopateam.webp',
                                        'https://uploads.justech-ai.in/vopa-website/websiteAboutSection/1758255642378_office2.webp',
                                        'https://uploads.justech-ai.in/vopa-website/websiteAboutSection/1758255642381_office3.webp',
                                        'https://uploads.justech-ai.in/vopa-website/websiteAboutSection/1758713972062_1000073126.jpg',
                                        'https://uploads.justech-ai.in/vopa-website/websiteAboutSection/1758800214830_media-14.jpg',
                                    ]}
                                />
                            </div>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </section>
    );
};

export default Hero4;
