import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class Dashboard extends React.Component {
  render () {
    return (
      <main className="dashboardMain">
        <div className="dashboardNavBox"><Link to="/closet">CLOSET</Link></div>
        <div className="dashboardNavBox"><Link to="/outfits">OUTFITS</Link></div>
        <div className="dashboardNavBox"><Link to="/outfitdesigner">OUTFIT DESIGNER</Link></div>
        <div className="dashboardNavBox"><Link to="/publicfeed">PUBLIC FEED</Link></div>
      </main>
    )
  }
}

export default Dashboard;
