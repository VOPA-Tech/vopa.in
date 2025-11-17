//Import Mixpanel SDK
import mixpanel from 'mixpanel-browser';

// Near entry of your product, init Mixpanel
console.log('pro12345', process.env.REACT_APP_MIXPANEL_TOKEN);
mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN, {
    debug: false,
    track_pageview: true,
    // persistence: 'localStorage',
    // record_sessions_percent: 100, //records 100% of all sessions
    // record_heatmap_data: true,
});

export default mixpanel;
