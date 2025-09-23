import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

// auth
const Login = React.lazy(() => import('../pages/auth/Login'));
const SignUp = React.lazy(() => import('../pages/auth/SignUp'));
const ForgetPassword = React.lazy(() => import('../pages/auth/ForgetPassword'));
const Confirm = React.lazy(() => import('../pages/auth/Confirm'));
const Logout = React.lazy(() => import('../pages/auth/Logout'));

// Projects
const Vschool = React.lazy(() => import('../pages/Vschool'));
const DLP = React.lazy(() => import('../pages/DigitalLearningProgram'));
const MYCA = React.lazy(() => import('../pages/MYCA'));
const NipunMaharashtra = React.lazy(() => import('../pages/NipunMaharashtra'));
const ProjectsOverview = React.lazy(() => import('../pages/ProjectsOverview'));

//Website Pages
const BlogPost = React.lazy(() => import('../pages/Publications/Blogs/BlogPost'));
const EventPost = React.lazy(() => import('../pages/NewsAndMedia/Events/EventPost'));
const JobDetails = React.lazy(() => import('../pages/Career/JobDetails'));
const PressReleasesPost = React.lazy(() => import('../pages/NewsAndMedia/PressReleases/PressRelease'));
const Brouchers = React.lazy(() => import('../pages/Publications/Brouchers'));
const WorkReports = React.lazy(() => import('../pages/ImpactWorkReports'));
const Magazines = React.lazy(() => import('../pages/Publications/Magazines'));
const Blogs = React.lazy(() => import('../pages/Publications/Blogs'));
const FeedbackTestimonials = React.lazy(() => import('../pages/ImpactTestimonialFeedback'));
const MediaMensions = React.lazy(() => import('../pages/NewsAndMedia/MediaMensions'));
const PressReleases = React.lazy(() => import('../pages/NewsAndMedia/PressReleases'));
const Events = React.lazy(() => import('../pages/NewsAndMedia/Events'));
const MediaKit = React.lazy(() => import('../pages/NewsAndMedia/MediaKit'));
const VopaHome = React.lazy(() => import('../pages/vopaHome'));
const About = React.lazy(() => import('../pages/About'));
const Contact = React.lazy(() => import('../pages/Contact'));
const Career = React.lazy(() => import('../pages/Career'));

// CMSpages
const BlogCMS = React.lazy(() => import('../pages/account/Content/Blogs/index'));
const PressReleasesCMS = React.lazy(() => import('../pages/account/Content/PressReleases/index'));
const EventCMS = React.lazy(() => import('../pages/account/Content/Events/index'));
const EmployeesCMS = React.lazy(() => import('../pages/account/Content/Employees/index'));
const VacanciesCMS = React.lazy(() => import('../pages/account/Content/Vacancies/index'));
const JobsCMS = React.lazy(() => import('../pages/account/Content/Jobs/index'));
const Dashboard = React.lazy(() => import('../pages/account/Dashboard'));
const Gallery = React.lazy(() => import('../pages/account/Gallery'));
const UserManagement = React.lazy(() => import('../pages/account/UserManagement'));
const Settings = React.lazy(() => import('../pages/account/Settings'));
const WorkReportsCMS = React.lazy(() => import('../pages/account/Content/WorkReports/index'));
const MediaMentionsCMS = React.lazy(() => import('../pages/account/Content/MediaMentions/index'));
const MediaCutoutsCMS = React.lazy(() => import('../pages/account/Content/MediaCutouts/index'));
const MediaKitCMS = React.lazy(() => import('../pages/account/Content/MediaKit/index'));
const MagzinesCMS = React.lazy(() => import('../pages/account/Content/Magazines/index'));
const BrouchersCMS = React.lazy(() => import('../pages/account/Content/Brouchers/index'));
// Terms and Policies
const NipunMaharashtraTermsAndPolicies = React.lazy(() => import('../pages/TermsAndPolicies'));

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
            path: '/',
            element: <LoadComponent component={VopaHome} />,
        },
        {
            path: '/about',
            element: <LoadComponent component={About} />,
        },

        {
            path: '/blog/post/:id',
            element: <LoadComponent component={BlogPost} />,
        },
        {
            path: '/career',
            element: <LoadComponent component={Career} />,
        },
        {
            path: '/careers/:id',
            element: <LoadComponent component={JobDetails} />, // the shareable details page
        },
        {
            path: '/contact',
            element: <LoadComponent component={Contact} />,
        },
        {
            path: '/blog',
            element: <LoadComponent component={Magazines} />,
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
                    path: 'publications',
                    children: [
                        { path: 'magazines', element: <LoadComponent component={Magazines} /> },
                        { path: 'blogs', element: <LoadComponent component={Blogs} /> },
                        { path: 'brouchers', element: <LoadComponent component={Brouchers} /> },
                    ],
                },
                {
                    path: 'impact',
                    children: [
                        { path: 'work-reports', element: <LoadComponent component={WorkReports} /> },

                        {
                            path: 'news-and-media',
                            children: [
                                { path: 'media-mentions', element: <LoadComponent component={MediaMensions} /> },
                                {
                                    path: 'press-releases/post/:id',
                                    element: <LoadComponent component={PressReleasesPost} />,
                                },
                                { path: 'press-releases', element: <LoadComponent component={PressReleases} /> },
                                {
                                    path: 'events/post/:id',
                                    element: <LoadComponent component={EventPost} />,
                                },
                                { path: 'events', element: <LoadComponent component={Events} /> },
                                { path: 'media-kit', element: <LoadComponent component={MediaKit} /> },
                            ],
                        },

                        {
                            path: 'feedback-and-testimonials',
                            element: <LoadComponent component={FeedbackTestimonials} />,
                        },
                    ],
                },

                {
                    path: 'projects',
                    children: [
                        { path: 'vschool', element: <LoadComponent component={Vschool} /> },
                        { path: 'nipun-maharashtra', element: <LoadComponent component={NipunMaharashtra} /> },
                        { path: 'digital-learning-project', element: <LoadComponent component={DLP} /> },
                        { path: 'myca', element: <LoadComponent component={MYCA} /> },
                        { path: 'overview', element: <LoadComponent component={ProjectsOverview} /> },
                    ],
                },
                {
                    path: 'terms-and-policies',
                    children: [
                        {
                            path: 'nipun-maharashtra',
                            element: <LoadComponent component={NipunMaharashtraTermsAndPolicies} />,
                        },
                    ],
                },
            ],
        },
        {
            // protected routes
            path: '/',
            element: <PrivateRoute roles={['Admin', 'User']} />,
            children: [
                {
                    path: 'account',
                    children: [
                        { path: 'dashboard', element: <LoadComponent component={Dashboard} /> },
                        { path: 'userManagement', element: <LoadComponent component={UserManagement} /> },
                        { path: 'settings', element: <LoadComponent component={Settings} /> },
                        { path: 'gallery', element: <LoadComponent component={Gallery} /> },
                        {
                            path: 'media',
                            children: [
                                { path: 'events', element: <LoadComponent component={EventCMS} /> },
                                { path: 'work_reports', element: <LoadComponent component={WorkReportsCMS} /> },
                                { path: 'media_mentions', element: <LoadComponent component={MediaMentionsCMS} /> },
                                { path: 'media_cutouts', element: <LoadComponent component={MediaCutoutsCMS} /> },
                                { path: 'media_kit', element: <LoadComponent component={MediaKitCMS} /> },
                                { path: 'press_releases', element: <LoadComponent component={PressReleasesCMS} /> },
                            ],
                        },
                        {
                            path: 'publications',
                            children: [
                                { path: 'blogs', element: <LoadComponent component={BlogCMS} /> },
                                { path: 'magazines', element: <LoadComponent component={MagzinesCMS} /> },
                                { path: 'brochures', element: <LoadComponent component={BrouchersCMS} /> },
                            ],
                        },
                        {
                            path: 'adminOps',
                            children: [
                                { path: 'employees', element: <LoadComponent component={EmployeesCMS} /> },
                                { path: 'vacancies', element: <LoadComponent component={VacanciesCMS} /> },
                                { path: 'jobs', element: <LoadComponent component={JobsCMS} /> },
                            ],
                        },
                    ],
                },
            ],
        },
    ]);
};

export default AllRoutes;
