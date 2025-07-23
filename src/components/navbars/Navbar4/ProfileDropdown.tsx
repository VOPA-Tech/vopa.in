import React from 'react';
import { Dropdown, Nav } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

import { ProfileOption } from './types';
import { useLogin, useLogout } from 'hooks/auth';

type ProfileProps = {
    profileOptions: ProfileOption[];
};

const ProfileDropdown = ({ profileOptions }: ProfileProps) => {
    const [logout] = useLogout();
    const [user, error] = useLogin();
    const handleItemClick = (label: string) => {
        if (label === 'Sign Out') {
            logout();
        }
    };

    return (
        <Dropdown as="li" className="nav-item">
            <Dropdown.Toggle as={Nav.Link} id="user">
                <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                        {/* <img
                            src="/images/aboutUs/vopaStaff/rutujaJeve.jpg"
                            alt="user"
                            className="avatar avatar-xs rounded-circle me-2"
                        /> */}
                    </div>
                    <div className="flex-grow-1 ms-1 lh-base">
                        <span className="fw-semibold fs-13 d-block line-height-normal">{user.email}</span>
                        <span className="text-muted fs-13">{user.role}</span>
                    </div>
                </div>
            </Dropdown.Toggle>

            <Dropdown.Menu className="p-2" renderOnMount>
                {(profileOptions || []).map((profile, index) => {
                    const isSignOut = profile.label === 'Sign Out';
                    return (
                        <React.Fragment key={index.toString()}>
                            {isSignOut && <Dropdown.Divider as="div" />}
                            <Dropdown.Item
                                className="p-2"
                                onClick={() => isSignOut && handleItemClick(profile.label)}
                                disabled={!isSignOut}>
                                <FeatherIcon icon={profile.icon} className="icon icon-xxs me-1 icon-dual" />
                                {profile.label}
                            </Dropdown.Item>
                        </React.Fragment>
                    );
                })}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default ProfileDropdown;
