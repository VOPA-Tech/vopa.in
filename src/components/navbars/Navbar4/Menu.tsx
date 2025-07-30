import { useUser } from 'hooks/auth';
import { Dropdown, Nav } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { NavLink, useLocation } from 'react-router-dom';

const Menu = () => {
    const location = useLocation();
    const [loggedInUser] = useUser();
    const currentPath = location.pathname;

    const greenColor = '#00c853';
    const isActiveRoute = (path: string) => location.pathname.includes(path);

    return (
        <Nav as="ul" className="mx-auto">
            {loggedInUser.role === 'Admin' && (
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
            )}
            {loggedInUser.role === 'Admin' && (
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
            )}

            {/* Content Dropdown */}
            <Dropdown as="li" className="nav-item">
                <Dropdown.Toggle as={Nav.Link} id="navbarDocs" className={isActiveRoute('/content') ? 'active' : ''}>
                    Content <FeatherIcon icon="chevron-down" className="icon icon-xxs ms-1" />
                </Dropdown.Toggle>
                <Dropdown.Menu renderOnMount>
                    <Nav as="ul" navbar={false}>
                        {[
                            { to: '/account/content/vacancies', label: 'Vacancies' },
                            { to: '/account/content/employees', label: 'Employees' },
                            { to: '/account/content/blogs', label: 'Blogs' },
                            { to: '/account/content/work_reports', label: 'Work Reports' },
                            { to: '/account/content/magazines', label: 'Magazines' },
                        ].map((item, idx) => (
                            <Nav.Item as="li" key={idx}>
                                <NavLink to={item.to} end className="nav-link">
                                    {item.label}
                                </NavLink>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Dropdown.Menu>
            </Dropdown>
            <Nav.Item as="li" className="pe-3">
                <Nav.Link
                    href="/account/gallery"
                    className={currentPath === '/account/gallery' ? 'active fw-bold text-success' : ''}>
                    <div className="d-flex align-items-center">
                        <span className="icon-xxs me-1 flex-shrink-0"></span>
                        <div className="flex-grow-1">Gallery</div>
                    </div>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default Menu;
