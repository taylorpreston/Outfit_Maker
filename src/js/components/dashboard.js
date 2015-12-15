import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import $ from 'jquery'

import headers from '../headers-setup'

class Dashboard extends React.Component {

  constructor(props){
    super(props)

    console.log(this.props)

  }

  componentDidMount() {
    let self = this
    let username = this.props.userSession.username
    let userCLoset = $.ajax({
      url:'https://api.parse.com/1/classes/usercloset',
      type:'GET',
      success: function(response){
        console.log(response.results);
        self.response.results
      }
    })

    console.log(userCLoset)

  }
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
