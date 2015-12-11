import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import $ from 'jquery'

class Register extends React.Component {


  render () {
    return(
      <main className="registerMain">
        <section>
          <form>
            <input type="text" ref="username" placeholder="username"/>
            <input type="password" ref="password" placeholder="password"/>
            <input type="password" ref="confirmPassword" placeholder="confirm password"/>
            <input className="subBtn" type="submit" ref="submitBtn"/>
          </form>
          <span>Have An Account?<Link to="/">Login Here</Link></span>
        </section>

      </main>
    )
  }
}

export default Register ;
