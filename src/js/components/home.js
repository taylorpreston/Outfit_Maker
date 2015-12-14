import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import Header from './header';

class Home extends React.Component {

  constructor(props){

    super(props)

    this.state = {
      loggedIn: flase,
      userCloser: {
        tops: false,
        bottoms: false,
        shoes: false,
        accessories: false
      },
      userOutfits: []
    }

  }

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
