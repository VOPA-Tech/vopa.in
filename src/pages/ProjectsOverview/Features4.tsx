import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// images
import Marketing from 'assets/images/features/marketing4.jpg';
type TabContentType = {
    id: number;
    title: string;
    icon?: string;
    text: string;
    text2: string;
};

type Features4Props = {
    tab: TabContentType;
};
const Features4 = ({ tab }: Features4Props) => {
    return (
        <section className="section py-4 py-sm-8 bg-gradient3 position-relative" data-aos="fade-up">
            {/* <div className="divider top d-none d-sm-block"></div> */}
            <Container>
                <Row>
                    <Col lg={5}>
                        <h1 className="display-4 fw-semibold mb-4">{tab.text}</h1>
                        <p className="mb-5">{tab.text2}</p>
                        <Link to="#" className="btn btn-primary">
                            About Us
                            <FeatherIcon icon="arrow-right" className="ms-2 icon-xs" />
                        </Link>
                    </Col>
                    <Col lg={{ span: 6, offset: 1 }}>
                        <img src={tab.icon} alt="marketing" className="img-fluid d-block mx-auto mt-4 mt-lg-0" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Features4;
