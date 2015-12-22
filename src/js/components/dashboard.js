import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import $ from 'jquery'

import headers from '../headers-setup'

class Dashboard extends React.Component {

  constructor(props){
    super(props)
  }

  componentDidMount() {
    let self = this
    let username = this.props.userSession.username
      if(this.props.loggedIn === false){
        this.props.history.pushState(null, '/');
      }
   }

  render () {
    console.log(this.props)
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
