import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { FormInput } from 'components/form';
import { SwiperSlider3 } from 'components/sliders';

// components
// import { FormInput } from '../form';
// import SwiperSlider3 from '../sliders/SwiperSlider3';

const MapImage = () => {
    return (
        <section className="py-1 pb-sm-6">
            <Row className="align-items-center justify-content-center zindex-1">
                <Col xs={10} className="text-center zindex-1">
                    <Card className="rounded-lg shadow" data-aos="fade-up" data-aos-duration="2000">
                        <p className="display-3">Official Collaborations with ZP</p>
                        <div className="video-container">
                            <img
                                src="https://uploads.justech-ai.in/vopa-website/vschoolPage/1758275207925_maharashtramap.png" // 🔁 Replace with your image path
                                alt="Video Thumbnail"
                                width="100%"
                                height="515"
                                style={{ objectFit: 'contain', borderRadius: '8px' }}
                            />
                        </div>
                    </Card>
                </Col>
            </Row>
        </section>
    );
};

export default MapImage;
