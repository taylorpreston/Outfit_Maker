import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import Header from './header';


class Home extends React.Component {

  render () {
    return(
      <div className="mainWrap">
        <Header/>
        {this.props.children}
      </div>
    )
  }
}

export default Home;
