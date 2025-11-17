import { Col, Container, Row } from 'react-bootstrap';

// component
import { Navbar4 } from 'components/navbars';
import { Footer3 } from 'components/footer';

import ProfileWidget from './ProfileWidget';
import ReecentProjects from './RecentProjects';
import RevenueWidget from './RevenueWidget';
import StatWidget from './StatWidget';
import Tasks from './Tasks';

// dummy data
import { projects, tasks } from './data';
import { useLogin, useUser } from 'hooks/auth';
import { Navigate } from 'react-router-dom';
import WebsiteRating from './WebsiteRating';

const Dashboard = () => {
    const [loggedInUser] = useUser();

    if (loggedInUser?.role === 'User') {
        return <Navigate to="/account/media/media_kit" replace />;
    }
    return (
        <>
            {/* header */}
            <Navbar4 fixedWidth />

            {/* page content */}
            <section className="position-relative overflow-hidden bg-gradient2 py-3 px-3">
                <Container>
                    <Row>
                        {/* profile widget */}
                        <WebsiteRating />

                        {/* stat widgets */}
                        {/* <Col lg={3}>
                            <StatWidget icon="check-circle" variant="success" stats={21} title="Tasks Completed" />
                            <StatWidget icon="edit-3" variant="info" stats={21} title="Tasks Inprogress" />
                        </Col> */}

                        {/* revenue widget */}
                        {/* <RevenueWidget /> */}
                    </Row>

                    {/* recent projects */}
                    {/* <ReecentProjects projects={projects} /> */}

                    {/* tasks */}
                    {/* <Tasks tasks={tasks} /> */}
                </Container>
            </section>

            {/* footer */}
            <Footer3 />
        </>
    );
};

export default Dashboard;
