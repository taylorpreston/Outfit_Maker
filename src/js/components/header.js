import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import setUp from '../headers-setup';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      user: []
    }

    // this.toggleNav = this.toggleNav.bind(this)
    this.logoutUser = this.logoutUser.bind(this)
  }

componentDidMount(){
  let self = this
  if (localStorage.getItem('userSession')) {
    let ID = JSON.parse(localStorage.getItem('userSession')).objectId;
    console.log(ID);

    $.ajax({
      url: `https://api.parse.com/1/users/${ID}`,
      type: 'GET',
      success: (response) => {
        self.setState({user: response.username})
        console.log(response.username);
      }
    });
  }
}
  // toggleNav() {
  //   this.setState({
  //     isVisible: !this.state.isVisible
  //   })
  // }

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
        self.props.logoutUser();
      }
    })

  }
  render() {
    // let className = 'headerNav';
    // if (this.state.isVisible) {
    //   className = className + ' visible';
    // }
    let links;
    let user = this.props.userSession.username;
    if (this.props.loggedIn === true) {
      links = (
        <div>
        <div className="userbox">
        <span href="#" className="avatar"><img src="http://www.fillmurray.com/50/50" /></span>
        <span className="userlink">Welcome, {user}</span>
        </div>
        <section className="headerNav">
          <Link id="headerlink" className="fa fa-home " to="/dashboard">
            Dashboard
          </Link>
          <Link id="headerlink" className="fa fa-columns " to="/closet">
            Closet
          </Link>
          <Link id="headerlink" className="fa fa-suitcase " to="/outfits">
            Outfits
          </Link>
          <Link id="headerlink" className="fa fa-scissors " to="/outfitdesigner">
            Outfit Designer
          </Link>
          <Link id="headerlink" className="fa fa-users " to="/publicfeed">
            Public Feed
          </Link>
          <Link id="headerlink" className="fa fa-sign-out " to="/" onClick={this.logoutUser}>
            Logout
          </Link>
        </section>
        </div>
      )
    }
    return (
      <header className="mainheader">
        <a href="#" className="logo">OUTFIT MAKER</a>
          {links}
      </header>
    )
  }
}

export default Header;
