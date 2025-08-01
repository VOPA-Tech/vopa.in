import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FeatherIcon from 'feather-icons-react';

// components
import { FormInput } from 'components/form';

const ContactUs = () => {
    // form validation schema
    const schemaResolver = yupResolver(
        yup.object().shape({
            fname: yup.string().required('Please enter first name'),
            lname: yup.string().required('Please enter last name'),
            email: yup.string().required('Please enter Email').email('Please enter valid Email'),
            message: yup.string().required('Please enter Message'),
        })
    );

    // form method
    const methods = useForm({ resolver: schemaResolver });
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = methods;

    // handle form submission
    const onSubmit = () => {};

    return (
        <section className="section pb-lg-7 py-4 position-relative">
            <Container>
                {/* <Row className="align-items-center">
                    <Col lg={6}>
                        <Card className="shadow-none">
                            <Card.Body className="p-xl-5 p-0">
                                <h2 className="mb-2 mt-0 fw-medium">Let's Talk Further</h2>
                                <p className="mb-5">
                                    Please fill out the following form and we will get back to you shortly
                                </p>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Row>
                                        <Col md={6}>
                                            <FormInput
                                                type="text"
                                                name="fname"
                                                label="First Name"
                                                placeholder="Your First Name"
                                                containerClass={'mb-3'}
                                                register={register}
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                        <Col md={6}>
                                            <FormInput
                                                type="text"
                                                name="lname"
                                                label="Last Name"
                                                placeholder="Your Last Name"
                                                containerClass={'mb-3'}
                                                register={register}
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                        <Col lg={12}>
                                            <FormInput
                                                type="email"
                                                name="email"
                                                label="Email Name"
                                                placeholder="Your Email"
                                                containerClass={'mb-3'}
                                                register={register}
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                        <Col lg={12}>
                                            <FormInput
                                                type="textarea"
                                                name="message"
                                                label="Message"
                                                placeholder="Type Your message..."
                                                rows={5}
                                                containerClass={'mb-3'}
                                                register={register}
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                        <Col lg="auto" className="mb-0">
                                            <Button type="submit">
                                                Send
                                                <span className="icon icon-xs text-white ms-1">
                                                    <FeatherIcon icon="send" />
                                                </span>
                                            </Button>
                                        </Col>
                                    </Row>
                                </form>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={{ offset: 1, span: 5 }}>
                        <div style={{ height: '520px' }}>
                            <GoogleMapReact defaultZoom={12} defaultCenter={{ lat: 40.749179, lng: -73.989276 }} />
                        </div>
                    </Col>
                </Row> */}
                <Row className="mt-5 align-items-center">
                    <Col md={4}>
                        <div className="d-flex px-md-1 px-lg-5 mb-md-0 mb-3">
                            <span className="bg-soft-success avatar avatar-sm rounded icon icon-with-bg icon-xs text-success me-3 flex-shrink-0">
                                <FeatherIcon icon="mail" className="icon-dual-success" />
                            </span>
                            <div className="flex-grow-1">
                                <h5 className="m-0 fw-medium">Email</h5>
                                <Link to="#" className="text-muted fw-normal h5 my-1">
                                    hr.vopa@vopa.in
                                </Link>
                            </div>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className="d-flex px-md-1 px-lg-5 mb-md-0 mb-3">
                            <span className="bg-soft-success avatar avatar-sm rounded icon icon-with-bg icon-xs text-success me-3 flex-shrink-0">
                                <FeatherIcon icon="phone-call" className="icon-dual-success" />
                            </span>
                            <div className="flex-grow-1">
                                <h5 className="m-0 fw-medium">Phone</h5>
                                <Link to="#" className="text-muted fw-normal h5 my-1">
                                    9158799972
                                </Link>
                            </div>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className="d-flex px-md-1 px-lg-5 mb-md-0 mb-3">
                            <span className="bg-soft-success avatar avatar-sm rounded icon icon-with-bg icon-xs text-success me-3 flex-shrink-0">
                                <FeatherIcon icon="map-pin" className="icon-dual-success" />
                            </span>
                            <div className="flex-grow-1">
                                <h5 className="m-0 fw-medium">Address</h5>
                                <Link to="#" className="text-muted fw-normal h5 my-1">
                                    Paud Road, Kothrud
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactUs;
