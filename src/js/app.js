import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers'

import Home from './components/home';
import Login from './forms/login';
import Register from './forms/register';
import Dashboard from './components/dashboard';
import OutfitDesigner from './components/outfit-designer';
import PublicFeed from './components/publicfeed';
import Outfits from './components/outfits';
import Closet from './components/closet';

const store = createStore(reducers)

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <Route path="/" component={Home} store={store}>
        <Route path="login" component={Login}/>
        <Route path="register" component={Register}/>
        <Route path="dashboard" component={Dashboard}/>
        <Route path="closet" component={Closet} store={store}/>
        <Route path="outfits" component={Outfits}/>
        <Route path="outfitdesigner" component={OutfitDesigner}/>
        <Route path="publicfeed" component={PublicFeed}/>
      </Route>
    </Router>
  </Provider>
),document.getElementById('app'));
