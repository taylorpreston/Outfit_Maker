import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class PublicFeed extends React.Component {
  render () {
    return (
      <main className="publicfeedMain">
        <section className="user">
            <img src="http://www.fillmurray.com/200/200" />
            <span>"USERNAME"</span>
            <Link to="/closet" >usercloset</Link>
            <Link to="/outfits" >Outfits</Link>
            <Link to="/outfitdesigner" >Design</Link>
        </section>
      </main>
    )
  }
}

export default PublicFeed;
