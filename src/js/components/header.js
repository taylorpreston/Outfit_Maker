import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import $ from '../ajax';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      user: []
    }

    this.logoutUser = this.logoutUser.bind(this)
    this.getRidOfPublicFeedUser = this.getRidOfPublicFeedUser.bind(this)


    let self = this
    if (localStorage.getItem('userSession')) {
      let ID = JSON.parse(localStorage.getItem('userSession')).objectId;

      $.ajax({
        url: `https://api.parse.com/1/users/${ID}`,
        type: 'GET',
        success: (response) => {
          self.setState({user: response.username})
          self.props.loginUser(response)
          console.log(response)
        }
      });
    }
  }

  componentDidMount(){

  }


  getRidOfPublicFeedUser(){
    this.props.getRidOfPublicFeedUser()
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
            <Link id="headerlink" onClick={this.getRidOfPublicFeedUser} className="fa fa-home " to="/dashboard">
              Dashboard
            </Link>
            <Link id="headerlink" onClick={this.getRidOfPublicFeedUser} className="fa fa-columns " to="/closet">
              Closet
            </Link>
            <Link id="headerlink" onClick={this.getRidOfPublicFeedUser} className="fa fa-suitcase " to="/outfits">
              Outfits
            </Link>
            <Link id="headerlink" onClick={this.getRidOfPublicFeedUser} className="fa fa-scissors " to="/outfitdesigner">
              Outfit Designer
            </Link>
            <Link id="headerlink" onClick={this.getRidOfPublicFeedUser} className="fa fa-users " to="/publicfeed">
              Public Feed
            </Link>
            <Link id="headerlink" onClick={this.getRidOfPublicFeedUser} className="fa fa-sign-out " to="/" onClick={this.logoutUser}>
              Logout
            </Link>
          </section>
        </div>
      )
    }
    return (
      <header className="mainheader">
        <h1 className="hangerlogo">
          <a href="#" className="drobe">DROBE</a>
        </h1>
        {links}
      </header>
    )
  }
}

export default Header;
