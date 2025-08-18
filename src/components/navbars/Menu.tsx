import { Nav, Dropdown } from 'react-bootstrap';
import { NavLink, Link, useLocation } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';

const greenColor = '#00c853';

type MenuProps = {
    showDownload?: boolean;
    navClass?: string;
    buttonClass?: string;
    loggedInUser?: {};
};

const Menu = ({ navClass, buttonClass, showDownload, loggedInUser }: MenuProps) => {
    const location = useLocation();

    const isActiveRoute = (path: string) => location.pathname.includes(path);

    const linkStyle = {
        color: 'inherit',
        textDecoration: 'none',
    };

    const activeLinkStyle = {
        color: greenColor,
        fontWeight: 'bold',
    };

    const hoverStyle = {
        color: greenColor,
    };

    return (
        <Nav as="ul" className={classNames('align-items-lg-center', navClass)}>
            <Nav.Item as="li">
                <NavLink
                    to="/"
                    end
                    className="nav-link"
                    style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
                    Home
                </NavLink>
            </Nav.Item>
            <Nav.Item as="li">
                <NavLink
                    to="/about"
                    end
                    className="nav-link"
                    style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
                    About
                </NavLink>
            </Nav.Item>

            {/* Projects Dropdown */}
            <Dropdown as="li" className="nav-item">
                <Dropdown.Toggle
                    as={Nav.Link}
                    id="navbarPages"
                    className={isActiveRoute('/projects') ? 'active' : ''}
                    style={isActiveRoute('/projects') ? activeLinkStyle : linkStyle}>
                    Projects <FeatherIcon icon="chevron-down" className="icon icon-xxs ms-1" />
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-lg" renderOnMount>
                    <Nav as="ul" navbar={false}>
                        {[
                            { to: '/projects/overview', label: 'Projects Overview' },
                            {
                                to: '/projects/vschool',
                                label: 'VSchool - Free Digital Education (3 Million+ Students)',
                            },
                            {
                                to: '/projects/nipun-maharashtra',
                                label: 'Mission NIPUN Maharashtra - SCERT Maharashtra',
                            },
                            {
                                to: '/projects/digital-learning-project',
                                label: 'Digital Learning Project (21 Schools)',
                            },
                            { to: '/projects/myca', label: 'MYCA - Mental Health For All (Aim - 100K Citizens)' },
                        ].map((item, idx) => (
                            <Nav.Item as="li" key={idx}>
                                <NavLink
                                    to={item.to}
                                    end
                                    className="nav-link"
                                    style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
                                    {item.label}
                                </NavLink>
                                {idx !== 4 && <hr className="my-2" />}
                            </Nav.Item>
                        ))}
                    </Nav>
                </Dropdown.Menu>
            </Dropdown>

            {/* Impacts Dropdown */}
            <Dropdown as="li" className="nav-item">
                <Dropdown.Toggle
                    as={Nav.Link}
                    id="navbarDocs"
                    className={isActiveRoute('/impact') ? 'active' : ''}
                    style={isActiveRoute('/impact') ? activeLinkStyle : linkStyle}>
                    Impacts <FeatherIcon icon="chevron-down" className="icon icon-xxs ms-1" />
                </Dropdown.Toggle>
                <Dropdown.Menu renderOnMount>
                    <Nav as="ul" navbar={false}>
                        {[
                            { to: '/impact/work-reports', label: 'Work Reports' },
                            { to: '/impact/news-and-media', label: 'News & Media' },
                            { to: '/impact/feedback-and-testimonials', label: 'Feedback & Testimonials' },
                        ].map((item, idx) => (
                            <Nav.Item as="li" key={idx}>
                                <NavLink
                                    to={item.to}
                                    end
                                    className="nav-link"
                                    style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
                                    {item.label}
                                </NavLink>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Dropdown.Menu>
            </Dropdown>

            <Nav.Item as="li">
                <NavLink
                    to="/blog"
                    end
                    className="nav-link"
                    style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
                    Blogs/Magzines
                </NavLink>
            </Nav.Item>
            <Nav.Item as="li">
                <NavLink
                    to="/career"
                    end
                    className="nav-link"
                    style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
                    Career
                </NavLink>
            </Nav.Item>
            <Nav.Item as="li">
                <NavLink
                    to="/contact"
                    end
                    className="nav-link"
                    style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
                    Contact
                </NavLink>
            </Nav.Item>
        </Nav>
    );
};

export default Menu;
