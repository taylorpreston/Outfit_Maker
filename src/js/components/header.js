import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  render () {
    return (
      <header className="main">
          <Link className="homelink" to="/"> Home </Link>
          <Link className="loginlink" to="/login"> Login </Link>
          <Link className="registerlink" to="/register"> Register </Link>
          <Link className="dashboard" to="/dashboard"> Dashboard </Link>
          <Link className="closet" to="/closet"> Closet </Link>
          <Link className="oufits" to="/outfits"> Outfits </Link>
          <Link className="outfit-designer" to="/outfitdesigner"> Outfit Designer </Link>
          <Link className="publicfeed" to="/publicfeed"> Public Feed </Link>
      </header>
    )
  }
}

export default Header;
