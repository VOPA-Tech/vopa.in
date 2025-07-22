import { Col, Container, Row } from 'react-bootstrap';

// component
import { Navbar4 } from 'components/navbars';
import { Footer3 } from 'components/footer';
import { useLogin } from 'hooks/auth';
import { useEffect } from 'react';

const Dashboard = () => {
    const [user, error, login] = useLogin();
    useEffect(() => {
        console.log('User User', user);
    }, [user]);

    return (
        <>
            {/* header */}
            <Navbar4 fixedWidth />

            {/* page content */}
            <section className="position-relative overflow-hidden bg-gradient2 py-3 px-3">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="page-title">
                                <h3 className="mb-0">Hi Mayuresh</h3>
                                <p className="mt-1 fw-medium">Welcome to VOPA!</p>
                            </div>
                        </Col>
                    </Row>
                    <Row></Row>

                    {/* users */}
                    {/* <UserList users={users} /> */}
                </Container>
            </section>

            {/* footer */}
            <Footer3 />
        </>
    );
};

export default Dashboard;
