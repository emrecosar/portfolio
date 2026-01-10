import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { unregister } from './registerServiceWorker';
import ReactGA from 'react-ga4';

ReactGA.initialize('G-0N5C0TE0HR');
ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });

ReactDOM.render(<App />, document.getElementById('root'));
unregister();
