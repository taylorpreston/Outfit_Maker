import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import $ from 'jquery'

class Register extends React.Component {


  render () {
    return(
      <main className="registerMain">
        <section>
          <form>
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
