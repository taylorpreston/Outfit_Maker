import React, { PropTypes } from 'react'
import $ from 'jquery'

class Register extends React.Component {


  render () {
    return(
      <section className="user-form register">
        <input type="text" ref="username" placeholder="username"/>
        <input type="password" ref="password" placeholder="password"/>
        <input type="password" ref="confirmPassword" placeholder="confirm password"/>
        <input className="subBtn" type="submit" ref="submitBtn"/>
      </section>
    )
  }
}

export default Register ;
