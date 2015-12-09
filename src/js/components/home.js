import React from 'react'
import { Link } from 'react-router'
import $ from 'jquery'


class Home extends React.Component {


  render () {
    return(
      <div className="mainWrap">
        <header className="main">
            <Link className="homelink" to="/"> Home </Link>
            <Link className="loginlink" to="/login"> Login </Link>
            <Link className="registerlink" to="/register"> Register </Link>
        </header>
        {this.props.children}
      </div>
    )
  }
}

export default Home;
