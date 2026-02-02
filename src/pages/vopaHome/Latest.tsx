import { Col, Container, Row } from 'react-bootstrap';
import LatestCutouts from './LatestCutouts';
import LatestMentions from './LatestMentions';
import LatestBrochures from './LatestBrochures';
import LatestMagazines from './LatestMagazines';

const Latest = () => {
    return (
        <section id="demos" className="position-relative overflow-hidden py-5 latest-section">
            <style>
                {`
                /* 🌿 Parallax background setup */
                .latest-section {
                    position: relative;
                    background-image: url('https://uploads.justech-ai.in/vopa-website/websiteHomepage/1762342702701_media-doodles.jpg');
                    background-size: cover;
                    background-position: center;
                    background-attachment: fixed; /* 👈 This creates the parallax effect */
                    z-index: 1;
                }

                /* Optional: dark overlay for better readability */
                .latest-section::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                       background: linear-gradient(90deg, hsla(186, 33%, 94%, 0.92) 0%, hsla(216, 41%, 79%, 0.95) 100%);
                    z-index: 0;
                }

                .latest-section .container {
                    position: relative;
                    z-index: 2;
                }

                /* Pulse dot + title styles */
                .latest-kicker {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-weight: 600;
                    letter-spacing: .06em;
                }
                .latest-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #28c76f;
                    box-shadow: 0 0 0 0 rgba(40,199,111,0.45);
                    animation: pulse 1.8s infinite;
                }
                @keyframes pulse {
                    0%   { box-shadow: 0 0 0 0 rgba(40,199,111,0.45); }
                    70%  { box-shadow: 0 0 0 12px rgba(40,199,111,0); }
                    100% { box-shadow: 0 0 0 0 rgba(40,199,111,0); }
                }

                .latest-title {
                    line-height: 1.1;
                    margin-bottom: .35rem;
                }

                .latest-sub {
                    max-width: 760px;
                }

                .title-underline {
                    height: 4px;
                    width: 340px;
                    margin: 12px auto 0;
                    border-radius: 999px;
                    background: linear-gradient(90deg, #28c76f, #286df9);
                    opacity: .85;
                }
                `}
            </style>

            <Container>
                <Row>
                    <Col className="text-center">
                        <div className="latest-kicker text-uppercase text-primary mb-2">
                            <span className="latest-dot" />
                            <h3 className="display-5 pt-3 fw-bold latest-title text-primary">Latest Updates</h3>
                        </div>

                        <p className="text-black mx-auto latest-sub mb-2">
                            Fresh press mentions, media cutouts, and highlights—catch the buzz as it happens.
                        </p>

                        <div className="title-underline" />
                    </Col>
                </Row>
                <Row className="mt-4" data-aos="fade-up" data-duration="600">
                    <Col lg={6} className="mb-4 mb-lg-0 ">
                        <LatestMentions />
                    </Col>
                    <Col lg={6}>
                        <LatestCutouts />
                    </Col>{' '}
                </Row>{' '}
                <Row className="mt-4" data-aos="fade-up" data-duration="600">
                    <Col lg={6} className="mb-4 mb-lg-0">
                        <LatestBrochures />
                    </Col>
                    <Col lg={6}>
                        <LatestMagazines />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Latest;
