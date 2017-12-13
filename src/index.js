import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <Home />
    </Router>
, document.getElementById('root'));
registerServiceWorker();
