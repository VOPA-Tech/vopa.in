import { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Modal, Button, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// hooks
import { useUser } from '../../hooks/auth';

// components
import Menu from './Menu';

// images
import logo from '../../assets/images/logo.webp';
import { useAppContext } from 'context/AppContext';

type Navbar3Props = {
    isSticky?: boolean;
    navClass?: string;
    buttonClass?: string;
    fixedWidth?: boolean;
};

const Navbar3 = ({ isSticky, navClass, buttonClass, fixedWidth }: Navbar3Props) => {
    const [loggedInUser] = useUser();
    const { setIsDonationModalOpen, isDonationModalOpen } = useAppContext();
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

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

    return (
        <header>
            <Navbar
                id={isSticky ? 'sticky' : ''}
                collapseOnSelect
                expand="lg"
                className={classNames('topnav-menu', navClass)}>
                <Container fluid={!fixedWidth}>
                    <Navbar.Brand href="/">
                        <img src={logo} height="30" className="d-inline-block align-top" alt="Logo" />
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
                                        setIsDonationModalOpen(true);
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
            <Modal show={isDonationModalOpen} onHide={() => setIsDonationModalOpen(false)} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>SUPPORT US TO HELP THEM!</Modal.Title>
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
                                    <strong>contact.vopa@ybl</strong>
                                </li>
                                <li>
                                    <strong>contact.vopa@axl</strong>
                                </li>
                            </ul>
                        </Col>
                        <Col md={6} className="text-center">
                            <Image
                                src={'/images/donate/qr.png'}
                                alt="QR Code"
                                fluid
                                style={{ maxHeight: 200, marginBottom: 10 }}
                            />
                            <p className="text-muted">Scan to donate via UPI</p>
                        </Col>
                    </Row>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => alert('Thank you for your interest in supporting us!')}>
                        Proceed
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </header>
    );
};

export default Navbar3;
