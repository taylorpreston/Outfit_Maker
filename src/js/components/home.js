import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import Header from './header';

import setUp from '../headers-setup'

class Home extends React.Component {

  constructor(props){

    super(props)

    this.state = {
      loggedIn: false,
      userSession: {}
    }
    this.handleLogoutUser = this.handleLogoutUser.bind(this);
    this.handleLoginUser = this.handleLoginUser.bind(this)
  }

  handleLogoutUser(){
    this.setState({
      loggedIn: false,
      userSession: {}
      })
    localStorage.removeItem('userSession')
    console.log('logged out succes!');
    window.location.href = '#/'
  }
  handleLoginUser(data){
      this.setState({
        loggedIn: true,
        userSession: data
      })
      // this saves the sessionToken
      localStorage.setItem('userSession', JSON.stringify(data));
      window.location.href = '#/dashboard'
      console.log(localStorage.getItem('userSession'));
      console.log(this.state)
  }




  render () {
    let childrenProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {loggedIn: this.state.loggedIn,
                                        userSession: this.state.userSession,
                                        loginUser: this.handleLoginUser
                                      })
    })
    return(
      <div className="mainWrap">
        <Header loggedIn={this.state.loggedIn} userSession={this.state.userSession} logoutUser={this.handleLogoutUser}/>
        {childrenProps}
      </div>
    )
  }
}

export default Home;
