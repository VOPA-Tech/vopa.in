import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Routes from './routes/Routes';
import { useLocation } from 'react-router-dom';
import './assets/scss/theme.scss';
import mixpanel from 'mixpanel-browser';

mixpanel.init('b28d62e96d30a29ebd78ae8d0d937275', {
    debug: true,
    track_pageview: false,
    persistence: 'localStorage',
    record_sessions_percent: 100,
    record_heatmap_data: true,
});

const App = () => {
    const location = useLocation();

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        mixpanel.track('Page View', {
            path: location.pathname,
        });
    }, [location]);

    return <Routes />;
};
export default App;
