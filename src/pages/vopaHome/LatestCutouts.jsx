import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMediaCutouts } from 'reduxFolder/mediaCutoutsSlice';
import { useEffect, useMemo } from 'react';

const LatestCutouts = () => {
    const dispatch = useDispatch();
    const mediaCutouts = useSelector((state) => state.mediaCutoutsState?.mediaCutouts);

    useEffect(() => {
        dispatch(fetchMediaCutouts());
    }, [dispatch]);

    const items = useMemo(() => {
        if (!Array.isArray(mediaCutouts)) return [];
        // keep first 4, drop falsy entries
        return mediaCutouts.slice(0, 3).filter(Boolean);
    }, [mediaCutouts]);

    const bgUrl = 'https://uploads.justech-ai.in/vopa-website/NewsAndMediaPage/1758273220833_woodtable.webp';

    const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;

    return (
        <section className="pt-lg-7 position-relative bg-soft ">
            <Container
                className="rounded-lg  position-relative shadow-lg "
                style={{
                    backgroundImage: `linear-gradient(rgba(49,63,49,0.3), rgba(22,23,21,0.9)), url('${bgUrl}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    maxHeight: '360px',
                }}>
                <div className="">
                    {items.length === 0 ? (
                        <div className="py-5 text-center text-light-50">
                            <FeatherIcon icon="image" />
                            <div className="mt-2 small">No media cutouts yet.</div>
                        </div>
                    ) : (
                        <Row data-aos="fade-up" className="g-1 g-sm-3">
                            {items.map((cutout, index) => {
                                const photo = cutout?.photoUrl || 'https://via.placeholder.com/400x200?text=Cutout';
                                const title = cutout?.title || 'Media Cutout';
                                const tilt = isDesktop
                                    ? index % 2 === 0
                                        ? 'rotate(-1deg) translateX(-4px)'
                                        : 'rotate(1deg) translateX(4px)'
                                    : 'none';

                                return (
                                    <Col md={12} lg={12} sm={12} xs={12} key={cutout?._id || index}>
                                        <Link
                                            to="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                if (cutout?.photoUrl)
                                                    window.open(cutout.photoUrl, '_blank', 'noopener,noreferrer');
                                            }}
                                            className="image-popup"
                                            title={title}>
                                            <Card
                                                className="rounded-sm media-card"
                                                style={{
                                                    maxHeight: '130px',
                                                    overflow: 'hidden',
                                                    marginTop: '-40px',
                                                    boxShadow: '0 -4px 6px -2px rgba(19,19,19,1)',
                                                    transform: tilt,
                                                    backgroundImage: `repeating-linear-gradient(
                            to bottom,
                            #333 0px,
                            #333 2px,
                            transparent 2px,
                            transparent 5px
                          )`,
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundSize: '100% 10px',
                                                    backgroundPosition: 'top',
                                                }}>
                                                <Card.Body className="p-1">
                                                    <img
                                                        width={1000}
                                                        height={600}
                                                        src={photo}
                                                        alt={title}
                                                        className="img-fluid rounded-sm"
                                                    />
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Col>
                                );
                            })}
                        </Row>
                    )}
                </div>
            </Container>
        </section>
    );
};

export default LatestCutouts;
