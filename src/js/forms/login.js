import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import $ from '../ajax';

class Login extends React.Component {

  constructor(props) {
    super(props)
    this.loginUser = this.loginUser.bind(this)
    // this.getUserOutfits = this.getUserOutfits.bind(this)
    // this.createCloset = this.createCloset.bind(this)
    this.logTheUser = this.logTheUser.bind(this)
  }

  loginUser() {

    return new Promise((resolve, reject) => {
      let self = this
      let username = this.refs.username.value.replace(/\s+/g, '').toLowerCase();
      let password = this.refs.password.value.replace(/\s+/g, '').toLowerCase();
      let userToken = this.props.userToken

      if (!username || !password) {
        alert('Please enter your Username and Password.')
      } else {
        $.ajax({
          url: `https://api.parse.com/1/login?username=${username}&password=${password}`,
          type: 'GET',
          success: function(response) {
            console.log('this is the response', response)
            self.props.loginUser(response);
          },
          error: function(xhr, status, error){
              alert('please enter your correct details!')
          }
        })
      }
    });
  }

  logTheUser(e){
    e.preventDefault()
    this.loginUser()
  }

  componentDidMount() {

  }

  render () {

    return(
      <main className="loginMain">
        <section>
          <span className="motto"><b>Take the</b> <span className="highlight">WAR</span> <b>out of your </b><span className="highlight">WAR</span><b>DROBE</b>.</span>
          <form>
            <input className="input" type="text" ref="username" placeholder="username"/>
            <input className="input" type="password" ref="password" placeholder="password"/>
            <input className="subBtn" type="submit" ref="submitBtn" onClick={this.logTheUser}/>
            <Link className="registerLink" to="/register">Register Now</Link>
          </form>
        </section>
      </main>
    )
  }
}

export default Login;
