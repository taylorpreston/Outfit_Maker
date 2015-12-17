import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import Header from './header';
import setUp from '../headers-setup'

class Home extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      loggedIn: false,
      userSession: {},
      userCloset: []
    }
    this.handleLogoutUser = this.handleLogoutUser.bind(this);
    this.handleLoginUser = this.handleLoginUser.bind(this)
    this.handleUserCloset = this.handleUserCloset.bind(this)
  }

  handleUserCloset(data) {
    this.setState({
      userCloset: {
        data
      }
    })
  }

  handleLogoutUser() {
    this.setState({
      loggedIn: false,
      userSession: {}
    })
    localStorage.removeItem('userSession')
    console.log('logged out success!');
    this.props.history.pushState(null, '/')
  }
  handleLoginUser(data) {
    this.setState({
        loggedIn: true,
        userSession: data
      })
      // this saves the sessionToken
    localStorage.setItem('userSession', JSON.stringify(data));
    this.props.history.pushState(null, '/dashboard');
    console.log(localStorage.getItem('userSession'));
  }


  render() {
    let childrenProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        loggedIn: this.state.loggedIn,
        userSession: this.state.userSession,
        userCloset: this.state.userCloset,
        loginUser: this.handleLoginUser,
        createUserCloset: this.handleUserCloset
      })
    });
    return (
      <div className = "mainWrap" >
        <Header loggedIn = {this.state.loggedIn}
                      userSession = {this.state.userSession}
                      userCloset = {this.state.userCloset}
                      logoutUser = {this.handleLogoutUser}
                      createUserCloset = {this.handleUserCloset}/>
        {childrenProps}
      </div>
    )

  }
}

export default Home;
