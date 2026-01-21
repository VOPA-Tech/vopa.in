import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { FormInput } from 'components/form';
import { SwiperSlider3 } from 'components/sliders';

// components
// import { FormInput } from '../form';
// import SwiperSlider3 from '../sliders/SwiperSlider3';

const MapImage = () => {
    return (
        <section className="py-1 pb-sm-6 bg-paper-texture position-relative overflow-hidden">
            <Row className="align-items-center justify-content-center zindex-1">
                <Col xs={10} className="text-center zindex-1">
                    <p className="display-4">Official Collaborations with ZP</p>

                    <img
                        src="https://uploads.justech-ai.in/vopa-website/vschoolPage/1758275207925_maharashtramap.png" // 🔁 Replace with your image path
                        alt="Video Thumbnail"
                        width="100%"
                        className="image-fluid"
                        style={{ objectFit: 'cover', borderRadius: '8px' }}
                    />
                </Col>
            </Row>
        </section>
    );
};

export default MapImage;
