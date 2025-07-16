import React from 'react';
import './StoryBlockConfig/storyBlockConfig';
import ReactDOM from 'react-dom/client'; // 👈 Updated import
import './i18n';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './reduxFolder/store';
// ✅ Create root for React 18/19
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

// If you want to start measuring performance in your app
reportWebVitals();
