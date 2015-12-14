import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import $ from 'jquery'

$.ajaxSetup({
  headers: {
    "X-Parse-Application-Id": "JkVIkXdDdNLB2JdYaoZFsG6cAgDU2CicLd8s7xTn",
    "X-Parse-REST-API-Key": "SuMuSHoO3R9CXoopQQNbVgWj3aRsxXs6WDdgWyLw"
  }
});

class Register extends React.Component {

  constructor(props){
    super(props)

    this.registerUser = this.registerUser.bind(this)
  }

  registerUser(e){
    e.preventDefault
    let self = this
    let username = this.refs.username.value
    let email = this.refs.email.value
    let password= this.refs.password.value
    let passConfirm = this.refs.confirmPassword.value

    if(!username || !password || !email || passConfirm !== password){
      console.log('error reg');
      return
    }
    else {
      $.ajax({
        url: 'https://api.parse.com/1/users',
        type: POST,
        success: function(response) {
          console.log('reg request');
        }
      })
    }
  }
  render () {
    return(
      <main className="registerMain">
        <section>
          <form>
            <input className="input" type="text" ref="username" placeholder="username"/>
            <input className="input" type="text" ref="email" placeholder="email"/>
            <input className="input" type="password" ref="password" placeholder="password"/>
            <input className="input" type="password" ref="confirmPassword" placeholder="confirm password"/>
            <input className="subBtn" type="submit" ref="submitBtn" onClick={this.registerUser}/>
          </form>
          <Link className="loginLink" to="/">Login Here</Link>
        </section>

      </main>
    )
  }
}

export default Register ;
