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


    this.logoutUser = this.logoutUser.bind(this)
  }

componentDidMount(){
  let self = this
  if (localStorage.getItem('userSession')) {
    let ID = JSON.parse(localStorage.getItem('userSession')).objectId;

    $.ajax({
      url: `https://api.parse.com/1/users/${ID}`,
      type: 'GET',
      success: (response) => {
        self.setState({user: response.username})
      }
    });
  }
}

  logoutUser(e) {
    let self = this;
    e.preventDefault();

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
        <div className="linkContainer">
          <div className="userbox">
            <span href="#" className="avatar"><img src="http://www.fillmurray.com/50/50" /></span>
            <span className="userlink">Welcome, {user}</span>
          </div>
          <section className="headerNav">
            <Link className="headerlink" to="/dashboard">
              Dashboard
            </Link>
            <Link className="headerlink" to="/closet">
               Closet
            </Link>
            <Link className="headerlink" to="/outfits">
               Outfits
            </Link>
            <Link className="headerlink" to="/outfitdesigner">
               Outfit Designer
            </Link>
            <Link className="headerlink" to="/publicfeed">
               Public Feed
            </Link>
            <Link className="headerlink" to="/" onClick={this.logoutUser}>
               Logout
            </Link>
          </section>
        </div>
      )
    }
    return (
      <header className="mainheader">
        <img className="hangerlogo" src="../../img/vechanger.png"/>
        <a href="#" className="drobe">DROBE</a>
          {links}
      </header>
    )
  }
}

export default Header;
