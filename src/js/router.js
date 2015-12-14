import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import Home from './components/home';
import Login from './forms/login';
import Register from './forms/register';
import Dashboard from './components/dashboard';
import OutfitDesigner from './components/outfit-designer';
import PublicFeed from './components/publicfeed';
import Outfits from './components/outfits';
import Closet from './components/closet';


class App extends React.Component {
  render () {
    return(
      <Router>
        <Route path="/" component={Home}>
          <Route path="login" test="test test test" component={Login}/>
          <Route path="register" component={Register}/>
          <Route path="dashboard" component={Dashboard}/>
          <Route path="closet" component={Closet}/>
          <Route path="outfits" component={Outfits} />
          <Route path="outfitdesigner" component={OutfitDesigner} />
          <Route path="publicfeed" component={PublicFeed}/>
        </Route>
      </Router>
    )
  }
}

export default App ;
