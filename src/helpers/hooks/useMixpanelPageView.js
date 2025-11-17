import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import mixpanel from '../mixpanel';

const useMixpanelPageView = () => {
    const location = useLocation();

    useEffect(() => {
        mixpanel.track('Page View', {
            path: location.pathname,
        });
    }, [location]);
};

export default useMixpanelPageView;
