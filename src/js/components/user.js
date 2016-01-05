import React, { PropTypes } from 'react';
import {Link} from 'react-router';
import $ from 'jquery';


class User extends React.Component {

  constructor(props){
    super(props)
    this.getUserData = this.getUserData.bind(this)
    this.getUserOutfitData = this.getUserOutfitData.bind(this)
    this.getUserClosetData = this.getUserClosetData.bind(this)
    this.getUserId = this.getUserId.bind(this)
  }

  getUserData(){
    this.getUserClosetData()
    this.getUserOutfitData()
    this.getUserId()
  }

  getUserId(){
    this.props.setPublicFeedUserId(this.props.user.objectId)
  }

  getUserOutfitData(){
    console.log(this.props.user.objectId)
    let self = this
    let userId = this.props.user.objectId
    $.ajax({
      url: 'https://api.parse.com/1/classes/Outfit',
      type: 'GET',
      data: {
        where: JSON.stringify({
          "user": {
            "__type": "Pointer",
            "className": "_User",
            "objectId": userId
          }
        })

      },
      success: function(response){
        console.log('you made public user OUTFIT THING',response)
          self.props.createPublicFeedUserOutfits(response.results)
      },
      error: function(){
        console.log("error error")
      }
    })
  }

  getUserClosetData(){
    return new Promise((resolve, reject) => {
    console.log(this.props.user.objectId)
    let self = this
    let userId = this.props.user.objectId
    $.ajax({
      url: 'https://api.parse.com/1/classes/Article',
      type: 'GET',
      data: {
        where: JSON.stringify({
          "user": {
            "__type": "Pointer",
            "className": "_User",
            "objectId": userId
          }
        })

      },
      success: function(response){
        console.log('you made public user CLOSET THING',response)
          self.props.createPublicFeedUser(response)
      },
      error: function(){
        console.log("error error")

      }
    })
   })
  }


  render () {
    return (
    <li className="user">
        <img src="http://www.fillmurray.com/200/200" />
        <span>{this.props.username}</span>
        <Link className="usersPublicFeed" onClick={this.getUserData} to="/closet">usercloset</Link>
        <Link className="usersPublicFeed" onClick={this.getUserData} to="/outfits" >Outfits</Link>
        <Link className="usersPublicFeed" onClick={this.getUserData} to="/outfitdesigner" >Design</Link>
    </li>
    )
  }
}

export default User;
