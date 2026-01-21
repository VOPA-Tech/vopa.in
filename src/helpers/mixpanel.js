import mixpanel from 'mixpanel-browser';

const token = process.env.REACT_APP_MIXPANEL_TOKEN;

if (!token) {
    console.error('❌ MIXPANEL ERROR: REACT_APP_MIXPANEL_TOKEN is missing!');
} else {
    mixpanel.init(token, {
        debug: true,
        persistence: 'localStorage',
    });

    console.log('✅ Mixpanel initialized successfully');
}

export default mixpanel;
