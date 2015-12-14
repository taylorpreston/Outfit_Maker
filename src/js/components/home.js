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

    this.handleLoginUser = this.handleLoginUser.bind(this)
  }

  handleLoginUser(data){
      this.setState({
        loggedIn: true,
        userSession: data
      })
      console.log(this.state)
  }



  render () {
    let childrenProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {loggedIn: this.state.loggedIn,
                                        userSession: this.state.userSession,
                                        loginUser: this.handleLoginUser})
    })
    return(
      <div className="mainWrap">
        <Header/>
        {childrenProps}
      </div>
    )
  }
}

export default Home;
