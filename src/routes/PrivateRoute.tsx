import { Suspense } from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';

// helpers
import { APICore } from '../helpers/api/apiCore';

// hooks
import { useUser } from '../hooks/auth';

type PrivateRouteProps = {
    roles?: string[];
};

const loading = () => <div className=""></div>;

/**
 * Private Route forces the authorization before the route can be accessed
 * @param {*} param0
 * @returns
 */
const PrivateRoute = ({ roles }: PrivateRouteProps) => {
    const location = useLocation();
    const [loggedInUser] = useUser();
    const api = new APICore();

    if (!api.isUserAuthenticated()) {
        return <Navigate to="/auth/login" state={{ from: location }} replace />;
    }

    if (roles && !roles.includes(loggedInUser.role)) {
        return <Navigate to="/" />;
    }

    return (
        <Suspense fallback={<div className=""></div>}>
            <Outlet />
        </Suspense>
    );
};

export default PrivateRoute;
