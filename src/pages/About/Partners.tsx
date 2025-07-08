import { Badge, Col, Container, Row } from 'react-bootstrap';

// images
import amazon from 'assets/images/brands/amazon.svg';
import google from 'assets/images/brands/google.svg';
import paypal from 'assets/images/brands/paypal.svg';
import shopify from 'assets/images/brands/shopify.svg';
const partners = [
    'Act.png',
    'Asymmetrical.png',
    'atlan.png',
    'BajajFinserv.png',
    'CEGIS.png',
    'Edumentum.png',
    'image.png',
    'KOITA.png',
    'Morde.png',
    'NOCIL.png',
    'Roomtoread.png',
    'Tarachand.png',
];
const Partners = () => {
    return (
        <section className="py-5  bg-light position-relative" data-aos="fade-up">
            <Container>
                <Row className="">
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-success px-2 py-1">
                            Our Partners
                        </Badge>
                        <h1 className="display-5 fw-medium">We are backed by</h1>
                        <p className="text-muted mx-auto">
                            "<span className="text-dark fw-bold">VOPA</span> collaborates with government bodies, NGOs,
                            and educational partners to scale impact across Maharashtra."
                        </p>
                    </Col>
                </Row>
                <Row className="mt-5 justify-content-center gap-4 flex-wrap">
                    {partners.map((name, idx) => (
                        <Col key={idx} xs="auto" className="d-flex align-items-center justify-content-center mb-3">
                            <img src={`/images/homePage/partners/${name}`} alt={`partner-${idx}`} height="45" />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Partners;
