import React, { PropTypes } from 'react';

class PublicFeed extends React.Component {
  render () {
    return (
      <main className="publicfeedMain">
        <section className="user">
            <img src="http://www.fillmurray.com/200/200" />
            <span>"USERNAME"</span>
            <a href="#" >usercloset</a>
            <a href="#" >Outfits</a>
            <a href="#" >Design</a>
        </section>
      </main>
    )
  }
}

export default PublicFeed;
