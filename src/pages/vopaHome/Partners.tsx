import { Badge, Col, Container, Row } from 'react-bootstrap';

// images
import amazon from 'assets/images/brands/amazon.svg';
import google from 'assets/images/brands/google.svg';
import paypal from 'assets/images/brands/paypal.svg';
import shopify from 'assets/images/brands/shopify.svg';
const partners = [
    'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758194723014_act.png',
    'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758194723015_asymmetrical.png',
    'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758194723016_atlan.png',
    'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758194723017_bajajfinserv.png',
    'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758194723019_cegis.png',
    'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758194723018_edumentum.png',
    'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758194723165_image.png',
    'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758194723188_koita.png',
    'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758194723236_morde.png',
    'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758194723380_nocil.png',
    'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758194723404_roomtoread.png',
    'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1758194723403_tarachand.png',
];
const Partners = () => {
    return (
        <section className="py-5 position-relative bg-paper-texture">
            <Container data-aos="fade-up">
                <Row className="">
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-success px-2 py-1">
                            Our Partners
                        </Badge>
                        <h2 className="display-5 fw-medium">We are supported by</h2>
                        <p className="text-muted mx-auto">
                            <span className="text-dark fw-bold">VOPA</span> collaborates with government bodies, NGOs,
                            and educational partners to scale impact across Maharashtra.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-5 justify-content-center gap-4 flex-wrap">
                    {partners.map((logo, idx) => (
                        <Col key={idx} xs="auto" className="d-flex align-items-center justify-content-center mb-3">
                            <img src={logo} alt={`partner-${idx}`} height="45" width={'100%'} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Partners;
