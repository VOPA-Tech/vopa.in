import { useEffect } from 'react';
import { Container, Nav, Navbar, Modal, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { setIsDonationModalOpen } from 'reduxFolder/appSlice';
// import { RootState } from 'store'; // ✅ make sure this points to your store's RootState
import FeatherIcon from 'feather-icons-react';
// components
import Menu from './Menu';

type Navbar3Props = {
    isSticky?: boolean;
    navClass?: string;
    buttonClass?: string;
    fixedWidth?: boolean;
};

const Navbar3 = ({ isSticky, navClass, buttonClass, fixedWidth }: Navbar3Props) => {
    const successGreen = '#28c76f';
    // Hover handlers
    const hoverStyle = (e: any) => (e.currentTarget.style.color = successGreen);
    const unhoverStyle = (e: any) => (e.currentTarget.style.color = 'inherit');
    const dispatch = useDispatch();
    const isDonationModalOpen = useSelector((state: any) => state.appState.isDonationModalOpen); // updated to match slice name

    useEffect(() => {
        const btnTop = document.getElementById('btn-back-to-top');
        const navbar = document.getElementById('sticky');
        window.addEventListener('scroll', (e) => {
            e.preventDefault();
            if (btnTop) {
                if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
                    btnTop.classList.add('show');
                } else {
                    btnTop.classList.remove('show');
                }
            }
            if (navbar) {
                if (document.body.scrollTop >= 240 || document.documentElement.scrollTop >= 240) {
                    navbar.classList.add('navbar-sticky');
                } else {
                    navbar.classList.remove('navbar-sticky');
                }
            }
        });
    }, []);

    const toggleDonationModal = () => {
        dispatch(setIsDonationModalOpen(!isDonationModalOpen));
    };

    return (
        <header>
            <Navbar
                id={isSticky ? 'sticky' : ''}
                collapseOnSelect
                expand="lg"
                className={classNames('topnav-menu', navClass)}>
                <Container fluid={!fixedWidth}>
                    <Navbar.Brand href="/" className="logo">
                        <img src="/logo.webp" height="40" width="120" className="align-top logo-dark" alt="logo" />
                        <img
                            src="/logo-light.webp"
                            height="40"
                            width="120"
                            className="align-top logo-light"
                            alt="logo"
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Menu navClass="mx-auto" buttonClass={buttonClass || 'btn-primary'} />
                        <Nav as="ul" className="align-items-lg-center">
                            <Nav.Item as="li">
                                <Link
                                    to="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleDonationModal();
                                    }}
                                    className={classNames('btn', 'btn-xl', 'btn-success')}>
                                    <strong>Donate</strong>
                                </Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Donation Modal */}
            <Modal show={isDonationModalOpen} onHide={() => dispatch(setIsDonationModalOpen(false))} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>SUPPORT US!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="p-4">
                        <Col md={6}>
                            <h5>Bank Transfer Details</h5>
                            <ul className="list-unstyled mb-2">
                                <li>
                                    <strong>Account Name:</strong> VOWELS OF THE PEOPLE ASSOCIATION
                                </li>
                                <li>
                                    <strong>Bank:</strong> Kotak Mahindra Bank
                                </li>
                                <li>
                                    <strong>Branch:</strong> Kothrud, Pune
                                </li>
                                <li>
                                    <strong>Account No:</strong> 1112842861
                                </li>
                                <li>
                                    <strong>IFSC:</strong> KKBK0001765
                                </li>
                                <li>
                                    <strong>UPI:</strong> contact.vopa@ybl
                                </li>
                                <li>
                                    <strong>Alt UPI:</strong> contact.vopa@axl
                                </li>
                            </ul>
                        </Col>
                        <Col md={6} className="text-center">
                            <Image
                                src="https://uploads.justech-ai.in/vopa-website/donate/1758272293057_qr.png"
                                alt="QR Code"
                                fluid
                                style={{ maxHeight: 200, marginBottom: 10 }}
                            />
                            <p className="text-muted">Scan to donate via UPI</p>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </header>
    );
};

export default Navbar3;
