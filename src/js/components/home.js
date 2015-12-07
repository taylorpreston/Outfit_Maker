import React from 'react'
import { Link } from 'react-router'
import $ from 'jquery'


class Home extends React.Component {


  render () {
    return(
      <div className="mainWrap">
        <header className="main">
            <Link to="/"> Home </Link>
            <Link to="/login"> Login </Link>
            <Link to="/register"> Register </Link>
        </header>
        {this.props.children}
      </div>
    )
  }
}

export default Home;
