import React from 'react';
import ReactDOM from 'react-dom/client';
import * as Sentry from '@sentry/react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

Sentry.init({
  dsn: 'https://87c91d443eb8452592bce8a94dfb7f4f@o4505324737265664.ingest.sentry.io/4505498423721984',
  integrations: [
    new Sentry.BrowserTracing({
      tracePropagationTargets: ['localhost'],
    }),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 1.0,
  replaysOnErrorSampleRate: 1.0,
});

if (process.env['PERFORMANCE_TEST'] === 'cypress') {
  Sentry.setTag('test', 'peformance-test');
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
