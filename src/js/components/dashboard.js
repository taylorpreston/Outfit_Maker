import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import $ from 'jquery'

import headers from '../headers-setup'

class Dashboard extends React.Component {

  constructor(props){
    super(props)

    // console.log(this.props)

  }

  componentDidMount() {
    let self = this
    let username = this.props.userSession.username
      if(this.props.loggedIn === false){
        this.props.history.pushState(null, '/');
      } else { let userCLoset = $.ajax({
      url:'https://api.parse.com/1/classes/usercloset',
      type:'GET',
      success: function(response){
        let allClosets = response.results

      function myCloset(closet){

        let closetUsername = closet.username
        let sessionUsername = self.props.userSession.username

          if(closetUsername === sessionUsername)
            // console.log('I am the user closet', closet)
            return closet
        }
        let usersFilteredCloset = allClosets.filter(myCloset)
        self.props.createUserCloset(usersFilteredCloset)
      }
    })
   }
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
