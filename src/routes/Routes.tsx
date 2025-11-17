// src/routes/Routes.tsx
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from '.';
import FeedbackModal from 'components/modals/FeedbackModal';

const Routes = () => {
    return (
        <>
            {' '}
            <AllRoutes />
            <FeedbackModal />
        </>
    );
};

export default Routes;
