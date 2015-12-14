import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class Dashboard extends React.Component {
  render () {
    return (
      <main className="dashboardMain">
        <Link className="dashboardNavBox1" to="/closet">CLOSET</Link>
        <Link className="dashboardNavBox2" to="/outfits">OUTFITS</Link>
        <Link className="dashboardNavBox1" to="/outfitdesigner">OUTFIT DESIGNER</Link>
        <Link className="dashboardNavBox2" to="/publicfeed">PUBLIC FEED</Link>
      </main>
    )
  }
}

export default Dashboard;
