import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';

import Home from './components/home';
import Login from './forms/login';
import Register from './forms/register';

ReactDOM.render((
  <Router>
    <Route path="/" component={Home}>
      <Route path="login" component={Login}/>
      <Route path="register" component={Register}/>
    </Route>
  </Router>
),document.getElementById('app'));
