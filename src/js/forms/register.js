import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import $ from 'jquery'

import setUp from '../headers-setup';

class Register extends React.Component {

  constructor(props){
    super(props)
    this.registerUser = this.registerUser.bind(this)
  }

  componentDidMount(){
    if(this.props.loggedIn === true){
      this.props.history.pushState(null, '/dashboard')
    }
  }

  registerUser(e){
    e.preventDefault()
    let self = this
    let username = this.refs.username.value.replace(/\s+/g, '').toLowerCase;
    let email = this.refs.email.value.replace(/\s+/g, '').toLowerCase;
    let password = this.refs.password.value.replace(/\s+/g, '').toLowerCase;
    let passConfirm = this.refs.confirmPassword.value.replace(/\s+/g, '').toLowerCase;
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

  render () {
    return(
      <main className="registerMain">
        <section>
          <span>register with us</span>
          <form onSubmit={this.registerUser}>
            <input className="input" type="text" ref="username" placeholder="username"/>
            <input className="input" type="text" ref="email" placeholder="email"/>
            <input className="input" type="password" ref="password" placeholder="password"/>
            <input className="input" type="password" ref="confirmPassword" placeholder="confirm password"/>
            <input className="subBtn" type="submit" ref="submitBtn"/>
            <Link className="loginLink" to="/">Login Here</Link>
          </form>
        </section>

      </main>
    )
  }
}

export default Register ;
