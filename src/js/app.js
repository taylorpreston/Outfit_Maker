import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';

import Home from './components/home';
import Login from './forms/login';
import Register from './forms/register';
import Dashboard from './components/dashboard';
import OutfitDesigner from './components/outfit-designer';
import PublicFeed from './components/publicfeed';
import Outfits from './components/outfits';
import Closet from './components/closet';


ReactDOM.render((
  <Router>
    <Route path="/" component={Home}>
      <Route path="login" component={Login}/>
      <Route path="register" component={Register}/>
      <Route path="dashboard" component={Dashboard}/>
      <Route path="closet" component={Closet}/>
      <Route path="outfits" component={Outfits}/>
      <Route path="outfitdesigner" component={OutfitDesigner}/>
      <Route path="publicfeed" component={PublicFeed}/>
    </Route>
  </Router>
),document.getElementById('app'));
