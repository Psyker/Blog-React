import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'spectre.css/dist/spectre.min.css'
import 'spectre.css/dist/spectre-icons.min.css'
import './index.css';
import './custom.css'
import 'animate.css/animate.min.css'



ReactDOM.render(
    <Router>
        <App />
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
