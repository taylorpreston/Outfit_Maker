import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import User from './user';

class PublicFeed extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hasLoaded: false,
      users: []
    };
  }
  componentDidMount() {
    $.ajax({
      url: 'https://api.parse.com/1/users',
      type: 'GET',
      success: (response) => {
        console.log(response.results);
        this.setState({users: response.results})
      }
    });

  }

  render() {
    let names = this.state.users.map(user => {
      let username = user.username
      console.log(username);
      return <User key={user.objectId} username={username}/>;
    })
    console.log(names);
    return (
      <main className="publicfeedMain">
        <ul className="usersList">
          {names}
        </ul>
      </main>
    )
  }
}

export default PublicFeed;
