import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import User from './user';

class PublicFeed extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      hasLoaded: false,
      users: []
    };
  }
    componentDidMount(){
      $.ajax({
        url: 'https://api.parse.com/1/users',
        type: 'GET',
        success: function(response){
          console.log(response);
          users: response[0].username
          console.log(users);
        }
      });

    }

  render () {
    return (
      <main className="publicfeedMain">
      <ul className="usersList">

      </ul>
      </main>
    )
  }
}

export default PublicFeed;
