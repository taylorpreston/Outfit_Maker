import React, { PropTypes } from 'react'
import $ from 'jquery'

class Login extends React.Component {

  render () {
    console.log(this.props);
    return(
      <section className="loginform">
        <input type="text" ref="username" placeholder="username"/>
        <input type="password" ref="password" placeholder="password"/>
        <input className="subBtn" type="submit" ref="submitBtn"/>
      </section>
    )
  }
}

export default Login ;
