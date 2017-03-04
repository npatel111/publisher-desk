import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Welcome from './components/Welcome'
import './index.css';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/publishers" component={App} />
    <Route path="/careers" component={App} />
    <Route path="/contact" component={App} />
  </Router>,
  document.getElementById('root')
);
