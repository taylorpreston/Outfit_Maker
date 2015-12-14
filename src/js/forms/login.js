import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

class Login extends React.Component {

  render () {
    console.log(this.props);
    return(
      <main className="loginMain">
        <section>
          <form>
            <input className="input" type="text" ref="username" placeholder="username"/>
            <input className="input" type="password" ref="password" placeholder="password"/>
            <input className="subBtn" type="submit" ref="submitBtn"/>
          </form>
          <Link className="registerLink" to="/register"> Register Now </Link>
        </section>
      </main>
    )
  }
}

export default Login ;
