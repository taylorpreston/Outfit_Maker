import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import setUp from '../headers-setup';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    }
    this.toggleNav = this.toggleNav.bind(this)
    this.logoutUser = this.logoutUser.bind(this)
  }
  toggleNav() {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  logoutUser(e) {
    let self = this;
    e.preventDefault();
    console.log('trying to log out...');
    $.ajax({
      headers: {
        "X-Parse-Session-Token": JSON.parse(localStorage.getItem('userSession')).sessionToken
      },
      url: `https://api.parse.com/1/logout`,
      type: 'POST',
      success: function() {
<<<<<<< HEAD
        // console.log(self.props);
=======
>>>>>>> bb3e218344b442a9bd1ea6f1c1cd639e73492b54
        self.props.logoutUser();
        self.toggleNav();
      }
    })

  }
  render() {
    let className = 'headerNav';
    if (this.state.isVisible) {
      className = className + ' visible';
    }
<<<<<<< HEAD
    return (
      <header className="mainheader">
        <a href="#">OUTFIT MAKER</a>
        <span onClick={this.toggleNav} href="#" className="click">Click</span>
=======
    let links;
    if (this.props.loggedIn === true) {
      links = (
        <div>
        <span onClick={this.toggleNav} href="#" className="click"><img src="http://www.fillmurray.com/50/50" /></span>
>>>>>>> bb3e218344b442a9bd1ea6f1c1cd639e73492b54
        <section className={className}>
          <Link onClick={this.toggleNav} className="headerlink" to="/dashboard">
            Dashboard
          </Link>
          <Link onClick={this.toggleNav} className="headerlink" to="/closet">
            Closet
          </Link>
          <Link onClick={this.toggleNav} className="headerlink" to="/outfits">
            Outfits
          </Link>
          <Link onClick={this.toggleNav} className="headerlink" to="/outfitdesigner">
            Outfit Designer
          </Link>
          <Link onClick={this.toggleNav} className="headerlink" to="/publicfeed">
            Public Feed
          </Link>
          <Link onClick={this.logoutUser} className="headerlink" to="/login">
            Logout
          </Link>
        </section>
        </div>
      )
    }
    return (
      <header className="mainheader">
        <a href="#">OUTFIT MAKER</a>
          {links}
      </header>
    )
  }
}

export default Header;
