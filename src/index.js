import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Experience from './components/Experience'
import Contact from './components/Contact'
import Samples from './components/Samples'
import Welcome from './components/Welcome'
import './index.css';
import {Router, Route, browserHistory} from 'react-router';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <Route path="samples" component={Samples} />
      <Route path="/experience" component={Experience} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>,
  document.getElementById('root')
);
