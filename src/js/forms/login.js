import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

import headers from '../headers-setup'

class Login extends React.Component {

  constructor(props) {
    super(props)

    this.loginUser = this.loginUser.bind(this)
    console.log(this.props)
  }

  componentDidMount() {
    if(this.props.loggedIn === true){
      this.props.history.pushState(null, '/dashboard');
    }
  }

  loginUser(e) {
    e.preventDefault()
    let self = this
    let username = this.refs.username.value
    let password = this.refs.password.value
    let userToken = this.props.userToken

    if (!username || !password) {
      alert('Please enter your Username and Password.')
    } else {
      $.ajax({
        url: `https://api.parse.com/1/login?username=${username}&password=${password}`,
        type: 'GET',
        success: function(response) {
          console.log('logined response!', response)
          self.props.loginUser(response)
        },
        error: function(xhr, status, error){
            console.log('error!', error);
            alert('please enter your correct details!')
        }
      })
    }
  }

  render () {

    return(
      <main className="loginMain">
        <section>
          <form>
            <input className="input" type="text" ref="username" placeholder="username"/>
            <input className="input" type="password" ref="password" placeholder="password"/>
            <input className="subBtn" type="submit" ref="submitBtn" onClick={this.loginUser}/>
          </form>
          <Link className="registerLink" to="/register">Register Now</Link>
        </section>
      </main>
    )
  }
}

export default Login;
