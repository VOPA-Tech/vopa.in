// ProfileDropdown.tsx
import React from 'react';
import { Dropdown, Nav } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// types
import { ProfileOption } from './types';
import { useLogout } from 'hooks/auth';

type ProfileProps = {
    profileOptions: ProfileOption[];
};

const ProfileDropdown = ({ profileOptions }: ProfileProps) => {
    const [logout] = useLogout(); // ✅ call hook

    const handleItemClick = (label: string, redirectTo: string) => {
        if (label === 'Sign Out') {
            logout(); // ✅ trigger logout
        } else {
            // fallback redirect
            if (redirectTo && redirectTo !== '#') {
                window.location.href = redirectTo;
            }
        }
    };

    return (
        <Dropdown as="li" className="nav-item">
            <Dropdown.Toggle as={Nav.Link} id="user">
                <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                        <img
                            src="/images/aboutUs/vopaStaff/rutujaJeve.jpg"
                            alt="user"
                            className="avatar avatar-xs rounded-circle me-2"
                        />
                    </div>
                    <div className="flex-grow-1 ms-1 lh-base">
                        <span className="fw-semibold fs-13 d-block line-height-normal">Rutuja Jeve</span>
                        <span className="text-muted fs-13">Admin</span>
                    </div>
                </div>
            </Dropdown.Toggle>

            <Dropdown.Menu className="p-2" renderOnMount>
                {(profileOptions || []).map((profile, index) => (
                    <React.Fragment key={index.toString()}>
                        {index === profileOptions.length - 1 && <Dropdown.Divider as="div" />}
                        <Dropdown.Item
                            className="p-2"
                            onClick={() => handleItemClick(profile.label, profile.redirectTo)}>
                            <FeatherIcon icon={profile.icon} className="icon icon-xxs me-1 icon-dual" />
                            {profile.label}
                        </Dropdown.Item>
                    </React.Fragment>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default ProfileDropdown;
