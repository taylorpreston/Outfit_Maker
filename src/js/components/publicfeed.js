import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import User from './user';

class PublicFeed extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      hasLoaded: false,
      users: [],
      currentUser: {}
    };
  }

  handleCurrentUser(data){
    console.log(data)
    this.setStae({
      currentUser: data
    })
  }

  componentDidMount() {
    let self = this;
    if(this.props.loggedIn === false){
      this.props.history.pushState(null, '/')
    } else {
      $.ajax({
      url: 'https://api.parse.com/1/users',
      type: 'GET',
      success: (response) => {
        self.setState({users: response.results})
      }
    });
  }
  }

  render() {
      let names = this.state.users.map(user => {
      let username = user.username
      let publicFeedUser = this.props.createPublicFeedUser
      let publicFeedUserOutfits = this.props.createPublicFeedUserOutfits
      let publicFeedUserId = this.props.setPublicFeedUserId
      return <User key={user.objectId}
                   username={username}
                   user={user}
                   createPublicFeedUser={publicFeedUser}
                   createPublicFeedUserOutfits = {publicFeedUserOutfits}
                   setPublicFeedUserId = {publicFeedUserId}
                   />;
    })
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
