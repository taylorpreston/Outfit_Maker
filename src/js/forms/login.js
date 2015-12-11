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
            <input type="text" ref="username" placeholder="username"/>
            <input type="password" ref="password" placeholder="password"/>
            <input className="subBtn" type="submit" ref="submitBtn"/>
          </form>
          <span>Don't Have A Account?<Link to="/register"> Register Now </Link></span>
        </section>
      </main>
    )
  }
}

export default Login ;
