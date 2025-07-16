// src/routes/Routes.tsx
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from '.';

const Routes = () => {
    return (
        <BrowserRouter>
            <AllRoutes />
        </BrowserRouter>
    );
};

export default Routes;
