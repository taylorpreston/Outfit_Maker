import React, { PropTypes } from 'react'

class Dashboard extends React.Component {
  render () {
    return (
      <main className="dashboardMain">
        <div className="dashboardNavBox"><a href="#closet">CLOSET</a></div>
        <div className="dashboardNavBox"><a href="#outfits">OUTFITS</a></div>
        <div className="dashboardNavBox"><a href="#outfitdesigner">OUTFIT DESIGNER</a></div>
        <div className="dashboardNavBox"><a href="#publicfeed">PUBLIC FEED</a></div>
      </main>
    )
  }
}

export default Dashboard;
