import React from 'react';

import ReactDOM from 'react-dom/client'; // 👈 Updated import
import './i18n';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './reduxFolder/store';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
// ✅ Create root for React 18/19
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <HelmetProvider>
        <Provider store={store}>
            <BrowserRouter>
                {' '}
                {/* 👈 Wrap App inside Router */}
                <App />
            </BrowserRouter>
        </Provider>
    </HelmetProvider>
);

// If you want to start measuring performance in your app
reportWebVitals();
