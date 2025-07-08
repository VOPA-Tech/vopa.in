// src/routes/Routes.tsx
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from '.';
import { AppProvider } from '../context/AppContext';

const Routes = () => {
    return (
        <BrowserRouter>
            <AppProvider>
                <AllRoutes />
            </AppProvider>
        </BrowserRouter>
    );
};

export default Routes;
