import React from 'react';
// import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
// images
import amazon from 'assets/images/brands/amazon.svg';
import google from 'assets/images/brands/google.svg';
import paypal from 'assets/images/brands/paypal.svg';
import person from 'assets/images/avatars/img-1.jpg';
import { Link } from 'react-router-dom';
import { Badge, Col, Container, Row } from 'react-bootstrap';
// import ScrollAnimation from 'react-animate-on-scroll';

const teamData = [
    {
        image: 'team-dark-01',
        name: 'Mr. Prafulla Shashikant',
        photo: '/images/aboutUs/vopaStaff/nobg/prafullaShashikant.png',
        designation: 'Founder Director',
        location: 'Pune',
        description: 'Yes, I am a product designer. I have a passion for product design.',
        socialNetwork: [
            {
                icon: amazon,
                url: '#',
            },
            {
                icon: amazon,
                url: '#',
            },
            {
                icon: amazon,
                url: '#',
            },
        ],
    },
    {
        image: 'team-dark-02',
        name: 'Shilpa Hulsurkar',
        designation: 'Head of Partnerships & Fundraising',
        location: 'Pune',
        photo: '/images/aboutUs/vopaStaff/nobg/shilpaHulsurkar.png',
        description: 'Yes, I am a product designer. I have a passion for product design.',
        socialNetwork: [
            {
                icon: amazon,
                url: '#',
            },
            {
                icon: amazon,
                url: '#',
            },
            {
                icon: amazon,
                url: '#',
            },
        ],
    },
    {
        image: 'team-dark-02',
        name: 'Rutuja Jeve',
        designation: 'Additional Director',
        location: 'Pune',
        photo: '/images/aboutUs/vopaStaff/nobg/rutujaJeve.png',
        description: 'Yes, I am a product designer. I have a passion for product design.',
        socialNetwork: [
            {
                icon: amazon,
                url: '#',
            },
            {
                icon: amazon,
                url: '#',
            },
            {
                icon: amazon,
                url: '#',
            },
        ],
    },
];

const TeamFour = ({ column, teamStyle }) => {
    return (
        <section className="py-5 mb-xl-5 mb-sm-4 position-relative" data-aos="fade-up">
            {' '}
            <Container>
                <Row className="justify-content-center">
                    <Col className="text-center">
                        {/* <Badge pill bg="" className="badge-soft-info px-2 py-1">
                            Leadership
                        </Badge> */}
                        <h1 className="display-5 fw-medium">Leadership</h1>
                        <p className="text-muted mx-auto">
                            Leading with <span className="text-dark fw-bold">Purpose</span> and{' '}
                            <span className="text-dark fw-bold">Empathy</span>
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    {teamData.map((data, index) => (
                        <div className={`${column}`} key={index}>
                            {/* <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={true}> */}
                            <div className={`rn-team ${teamStyle}`}>
                                <div className="inner">
                                    <figure className="thumbnail">
                                        <img src={data.photo} alt="Corporate React Template" />
                                    </figure>
                                    <figcaption className="content">
                                        <div className="team-info">
                                            <h2 className="title">{data.name}</h2>
                                            <h6 className="subtitle text-white ">{data.designation}</h6>
                                            <div className="team-form">
                                                <span className="location">{data.location}</span>
                                            </div>
                                        </div>
                                    </figcaption>
                                </div>
                            </div>
                            {/* </ScrollAnimation> */}
                        </div>
                    ))}
                </Row>
            </Container>
        </section>
    );
};
export default TeamFour;
