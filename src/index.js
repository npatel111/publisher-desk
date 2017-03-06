import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Careers from './components/Careers'
import Contact from './components/Contact'
import Samples from './components/Publishers'
import Welcome from './components/Welcome'
import './index.css';
import {Router, Route, browserHistory} from 'react-router';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <Route path="samples" component={Samples} />
      <Route path="/careers" component={Careers} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>,
  document.getElementById('root')
);
