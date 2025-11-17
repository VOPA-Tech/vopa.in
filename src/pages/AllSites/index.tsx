import { Card, Col, Container, Row } from 'react-bootstrap';
import { Navbar3 } from 'components/navbars';
import { Footer1 } from 'components/footer';
import BackToTop from 'components/BackToTop';

const AllSites = () => {
    const allSites = [
        {
            name: 'Lessons',
            url: 'https://lessons.vopa.in/login',
        },
        {
            name: 'V-School India',
            url: 'https://vschoolindia.com/',
        },
        { name: 'HM V-School India', url: 'https://hm.vschoolindia.com/login' },
        { name: 'LO ZP Ratnagiri', url: 'https://lo-zpratnagiri.vopa.in/' },
        // { name: 'Shikshan AI LMS', url: 'https://lms.justech-ai.in/login' },
        { name: 'NIPUN', url: 'http://nipun.vopa.in/login' },
        { name: 'MYCA', url: 'https://myca.vopa.in/' },
        // { name: 'VOPA Website', url: 'https://vopa.in/' },
        // { name: 'Justech AI Website', url: 'https://www.justech-ai.in/' },
    ];

    return (
        <>
            <div>
                <div className="overlay"></div>
                <Navbar3
                    navClass="navbar-light zindex-10"
                    buttonClass="btn-outline-secondary btn-sm"
                    fixedWidth
                    isSticky
                />
            </div>

            <section className="pt-6 pb-4 position-relative bg-paper-texture-dark">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={12}>
                            <h1 className="hero-title text-white mt-0 text-center">All Sites</h1>
                        </Col>
                    </Row>

                    <Row className="justify-content-center">
                        {allSites.map((site, index) => (
                            <Col key={index} xs={6} sm={4} md={4} lg={3} className="d-flex justify-content-center mb-4">
                                <a href={site.url} target="_blank" rel="noopener noreferrer" className="site-link">
                                    <Card className="card-listing-item site-card">
                                        <img
                                            src={
                                                'https://uploads.justech-ai.in/vopa-website/NewsAndMediaPage/1758273220833_woodtable.webp'
                                            }
                                            alt={`${site.name} Thumbnail`}
                                            className="site-card-img"
                                        />
                                        <div className="site-card-overlay">
                                            <h6 className="display-4 text-white m-0">{site.name}</h6>
                                        </div>
                                    </Card>
                                </a>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <Footer1 />
            <BackToTop variant="success" />

            {/* ✅ Scoped Styles */}
            <style>
                {`
                .site-link {
                    width: 100%;
                    text-decoration: none;
                    display: block;
                }

                .site-card {
                    position: relative;
                    border-radius: 10px;
                    overflow: hidden;
                    transition: transform 0.25s ease, box-shadow 0.25s ease;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    cursor: pointer;
                }

                .site-card:hover {
                    transform: scale(1.05);
                    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.25);
                }

                .site-card-img {
                    width: 100%;
                    object-fit: cover;
                    transition: transform 0.4s ease;
                }

                .site-card:hover .site-card-img {
                    transform: scale(1.1);
                }

                .site-card-overlay {
                    background: rgba(0, 0, 0, 0.75);
                    padding: 10px;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    text-align: center;
                }
            `}
            </style>
        </>
    );
};

export default AllSites;
