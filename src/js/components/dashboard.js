import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class Dashboard extends React.Component {
  render () {
    return (
      <main className="dashboardMain">
        <Link className="dashboardNavBox" to="/closet">CLOSET</Link>
        <Link className="dashboardNavBox" to="/outfits">OUTFITS</Link>
        <Link className="dashboardNavBox" to="/outfitdesigner">OUTFIT DESIGNER</Link>
        <Link className="dashboardNavBox" to="/publicfeed">PUBLIC FEED</Link>
      </main>
    )
  }
}

export default Dashboard;
