import React, { PropTypes } from 'react'

class User extends React.Component {
  render () {
    <li className="user">
        <img src="http://www.fillmurray.com/200/200" />
        <span>{this.props.username}</span>
        <Link to="/closet" >usercloset</Link>
        <Link to="/outfits" >Outfits</Link>
        <Link to="/outfitdesigner" >Design</Link>
    </li>
  }
}

export default User;
