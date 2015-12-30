import React, { PropTypes } from 'react';
import {Link} from 'react-router';

class User extends React.Component {
  render () {
    return (
    <li className="user">
        <img src="http://www.fillmurray.com/200/200" />
        <span>{this.props.username}</span>
        <Link className="usersPublicFeed" to="/closet" >Their Closet</Link>
        <Link className="usersPublicFeed" to="/outfits" >Saved Outfits</Link>
        <Link className="usersPublicFeed" to="/outfitdesigner" >Design an Outfit</Link>
    </li>
    )
  }
}

export default User;
