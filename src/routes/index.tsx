import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

// auth
const Login = React.lazy(() => import('../pages/auth/Login'));
const SignUp = React.lazy(() => import('../pages/auth/SignUp'));
const ForgetPassword = React.lazy(() => import('../pages/auth/ForgetPassword'));
const Confirm = React.lazy(() => import('../pages/auth/Confirm'));
const Logout = React.lazy(() => import('../pages/auth/Logout'));

// home
const Home = React.lazy(() => import('../pages/Home'));

const Vschool = React.lazy(() => import('../pages/Vschool'));
const DLP = React.lazy(() => import('../pages/DigitalLearningProgram'));
const MYCA = React.lazy(() => import('../pages/MYCA'));
const NipunBharat = React.lazy(() => import('../pages/NipunBharat'));
const ProjectsOverview = React.lazy(() => import('../pages/ProjectsOverview'));

const BlogPost = React.lazy(() => import('../pages/BlogPost'));
const Blog = React.lazy(() => import('../pages/BlogsAndMagzines'));
const WorkReports = React.lazy(() => import('../pages/ImpactWorkReports'));
const NewsMedia = React.lazy(() => import('../pages/ImpactNewsAndMedia'));
const FeedbackTestimonials = React.lazy(() => import('../pages/ImpactTestimonialFeedback'));

const Company = React.lazy(() => import('../pages/vopaHome'));
const About = React.lazy(() => import('../pages/About'));
const Contact = React.lazy(() => import('../pages/Contact'));
const Career = React.lazy(() => import('../pages/Career'));

// pages
const Dashboard = React.lazy(() => import('../pages/account/Dashboard'));
const Settings = React.lazy(() => import('../pages/account/Settings'));
const Content = React.lazy(() => import('../pages/account/Content'));

const loading = () => <div className=""></div>;

type LoadComponentProps = {
    component: React.LazyExoticComponent<() => JSX.Element>;
};

const LoadComponent = ({ component: Component }: LoadComponentProps) => (
    <Suspense fallback={loading()}>
        <Component />
    </Suspense>
);

const AllRoutes = () => {
    return useRoutes([
        {
            // root route
            path: '/',
            element: <LoadComponent component={Company} />,
        },
        {
            // root route
            path: '/about',
            element: <LoadComponent component={About} />,
        },
        {
            // root route
            path: '/blog',
            element: <LoadComponent component={Blog} />,
        },
        {
            // root route
            path: '/blog/post/:id',
            element: <LoadComponent component={BlogPost} />,
        },
        {
            // root route
            path: '/career',
            element: <LoadComponent component={Career} />,
        },
        {
            // root route
            path: '/contact',
            element: <LoadComponent component={Contact} />,
        },

        {
            // public routes
            path: '/',
            children: [
                {
                    path: 'auth',
                    children: [
                        { path: 'login', element: <LoadComponent component={Login} /> },
                        { path: 'signup', element: <LoadComponent component={SignUp} /> },
                        { path: 'forget-password', element: <LoadComponent component={ForgetPassword} /> },
                        { path: 'confirm', element: <LoadComponent component={Confirm} /> },
                        { path: 'logout', element: <LoadComponent component={Logout} /> },
                    ],
                },
                {
                    path: 'impact',
                    children: [
                        { path: 'work-reports', element: <LoadComponent component={WorkReports} /> },
                        { path: 'news-and-media', element: <LoadComponent component={NewsMedia} /> },
                        {
                            path: 'feedback-and-testimonials',
                            element: <LoadComponent component={FeedbackTestimonials} />,
                        },
                    ],
                },

                {
                    path: 'home',
                    element: <LoadComponent component={Home} />,
                },

                {
                    path: 'projects',
                    children: [
                        {
                            path: 'blog',
                            children: [{ path: '', element: <LoadComponent component={Blog} /> }],
                        },
                        { path: 'vschool', element: <LoadComponent component={Vschool} /> },
                        { path: 'nipun-bharat', element: <LoadComponent component={NipunBharat} /> },
                        { path: 'digital-learning-project', element: <LoadComponent component={DLP} /> },
                        { path: 'myca', element: <LoadComponent component={MYCA} /> },
                        { path: 'overview', element: <LoadComponent component={ProjectsOverview} /> },
                    ],
                },
            ],
        },
        {
            // protected routes
            path: '/',
            element: <PrivateRoute roles={'Admin'} />,
            children: [
                {
                    path: 'account',
                    children: [
                        { path: 'dashboard', element: <LoadComponent component={Dashboard} /> },
                        { path: 'content', element: <LoadComponent component={Content} /> },
                        { path: 'settings', element: <LoadComponent component={Settings} /> },
                    ],
                },
            ],
        },
    ]);
};

export default AllRoutes;
