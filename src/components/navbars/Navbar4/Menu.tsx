import { Nav } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { useLocation } from 'react-router-dom';

const Menu = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <Nav as="ul" className="mx-auto">
            <Nav.Item as="li" className="pe-3">
                <Nav.Link
                    href="/account/dashboard"
                    className={currentPath === '/account/dashboard' ? 'active fw-bold text-success' : ''}>
                    <div className="d-flex align-items-center">
                        <span className="icon-xxs me-1 flex-shrink-0">
                            {/* <FeatherIcon icon="grid" className="icon-dual-dark" /> */}
                        </span>
                        <div className="flex-grow-1">Dashboard</div>
                    </div>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="pe-3">
                <Nav.Link
                    href="/account/userManagement"
                    className={currentPath === '/account/userManagement' ? 'active fw-bold text-success' : ''}>
                    <div className="d-flex align-items-center">
                        <span className="icon-xxs me-1 flex-shrink-0">
                            {/* <FeatherIcon icon="grid" className="icon-dual-dark" /> */}
                        </span>
                        <div className="flex-grow-1">User Management</div>
                    </div>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="pe-3">
                <Nav.Link
                    href="/account/content"
                    className={currentPath === '/account/content' ? 'active fw-bold text-success' : ''}>
                    <div className="d-flex align-items-center">
                        <span className="icon-xxs me-1 flex-shrink-0"></span>
                        <div className="flex-grow-1">Content</div>
                    </div>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default Menu;
