import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // make sure AOS animations work

// routes
import Routes from './routes/Routes';

// Themes
import './assets/scss/theme.scss';

// 📊 Mixpanel
import mixpanel from './helpers/mixpanel';
import { useLocation } from 'react-router-dom';

const App = () => {
    const location = useLocation();

    useEffect(() => {
        // Initialize AOS (animations)
        AOS.init();

        // Optional: Track app loaded
        mixpanel.track('App Loaded');
    }, []);

    // Track page views whenever route changes
    useEffect(() => {
        console.log('Page view tracked:', location.pathname);
        mixpanel.track('Page View', {
            path: location.pathname,
        });
    }, [location]);

    return <Routes />;
};

export default App;
