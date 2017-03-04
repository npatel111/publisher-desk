import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Welcome from './components/Welcome'
import Careers from './components/Careers'
import Contact from './components/Contact'
import Publishers from './components/Publishers'

import './index.css';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <Route path="/" component={Welcome} />
      <Route path="publishers" component={Publishers} />
      <Route path="/careers" component={Careers} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>,
  document.getElementById('root')
);
