import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import $ from 'jquery'

import setUp from '../headers-setup';

class Register extends React.Component {

  constructor(props){
    super(props)

    this.registerUser = this.registerUser.bind(this)
    this.createCloset = this.createCloset.bind(this)
    this.regUser = this.regUser.bind(this)
  }

  registerUser(e){
    let self = this
    let username = this.refs.username.value
    let email = this.refs.email.value
    let password = this.refs.password.value
    let passConfirm = this.refs.confirmPassword.value
    let user = {
      username,
      email,
      password
    }
    console.log(JSON.stringify(user));

    if(!username || !password || !email || passConfirm !== password){
      alert('Please enter information correctly!');
      return
    }
    else {
      $.ajax({
        url: 'https://api.parse.com/1/users',
        type: 'POST',
        data: JSON.stringify(user),
        success: function(response){
          self.props.loginUser(response);
        }
        })
        console.log('sent to parse');
      }
    }

  createCloset(){
    console.log('you created a user closet')
    let username = this.refs.username.value
    let closet = []
    let userCloset =  {
      username,
      closet
    }
    $.ajax({
      url: 'https://api.parse.com/1/classes/usercloset',
      type: 'POST',
      data: JSON.stringify(userCloset)
    })
  }

  regUser(e){
    e.preventDefault()
    this.createCloset()
    this.registerUser()
  }

  render () {
    return(
      <main className="registerMain">
        <section>
          <form onSubmit={this.regUser}>
            <input className="input" type="text" ref="username" placeholder="username"/>
            <input className="input" type="text" ref="email" placeholder="email"/>
            <input className="input" type="password" ref="password" placeholder="password"/>
            <input className="input" type="password" ref="confirmPassword" placeholder="confirm password"/>
            <input className="subBtn" type="submit" ref="submitBtn"/>
          </form>
          <Link className="loginLink" to="/">Login Here</Link>
        </section>

      </main>
    )
  }
}

export default Register ;
