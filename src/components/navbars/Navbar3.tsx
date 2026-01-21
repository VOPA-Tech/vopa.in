import { useEffect, useState } from 'react';
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
    const dispatch = useDispatch();
    const isDonationModalOpen = useSelector((state: any) => state.appState.isDonationModalOpen); // updated to match slice name

    const [showUpdateBar, setShowUpdateBar] = useState(true);

    useEffect(() => {
        const dismissed = localStorage.getItem('hideUpdateBar');
        if (dismissed === 'true') setShowUpdateBar(false);
    }, []);

    const dismissUpdateBar = () => {
        localStorage.setItem('hideUpdateBar', 'true');
        setShowUpdateBar(false);
    };

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
            {/* 🔹 TOP INFO BAR */}
            {showUpdateBar && (
                <div
                    style={{
                        width: '100%',
                        background: '#f1f5f9',
                        padding: '8px 0',
                        textAlign: 'center',
                        fontSize: '14px',
                        color: '#333',
                        borderBottom: '1px solid #e2e8f0',
                        fontWeight: 500,
                        position: 'relative',
                        animation: 'fadeIn 1s ease',
                    }}>
                    Last reviewed & updated on:{' '}
                    {new Date().toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                    })}
                    {/* ❌ Close Button */}
                    <span
                        onClick={dismissUpdateBar}
                        style={{
                            position: 'absolute',
                            right: '12px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            fontSize: '16px',
                            color: '#666',
                        }}>
                        ✕
                    </span>
                </div>
            )}

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
            <Modal
                show={isDonationModalOpen}
                onHide={() => dispatch(setIsDonationModalOpen(false))}
                size="lg"
                centered
                dialogClassName="modern-donation-modal">
                <Modal.Header
                    closeButton
                    style={{
                        background: 'linear-gradient(135deg, #bfd648ff, #6add40ff)',
                        color: 'white',
                        borderBottom: 'none',
                        padding: '20px 24px',
                    }}>
                    <Modal.Title style={{ fontWeight: '700', letterSpacing: 1 }}>SUPPORT US ❤️</Modal.Title>
                </Modal.Header>

                <Modal.Body
                    style={{
                        padding: '32px',
                        background: '#f8f9fb',
                        borderBottomLeftRadius: '12px',
                        borderBottomRightRadius: '12px',
                    }}>
                    <Row className="g-4">
                        {/* BANK DETAILS */}
                        <Col md={6}>
                            <div
                                style={{
                                    background: 'white',
                                    padding: '20px',
                                    borderRadius: '12px',
                                    boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
                                }}>
                                <h5 style={{ fontWeight: 600, marginBottom: 15 }}>💳 Bank Transfer Details</h5>
                                <ul className="list-unstyled">
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
                            </div>
                        </Col>

                        {/* QR CODE */}
                        <Col md={6} className="text-center">
                            <div
                                style={{
                                    background: 'white',
                                    padding: '20px',
                                    borderRadius: '12px',
                                    boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
                                }}>
                                <Image
                                    src="https://uploads.justech-ai.in/vopa-website/donate/1758272293057_qr.png"
                                    alt="QR Code"
                                    fluid
                                    style={{
                                        maxHeight: 220,
                                        borderRadius: 10,
                                        marginBottom: 12,
                                        boxShadow: '0 3px 10px rgba(0,0,0,0.15)',
                                    }}
                                />
                                <p className="text-muted" style={{ fontSize: 14 }}>
                                    Scan to donate via UPI
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </header>
    );
};

export default Navbar3;
