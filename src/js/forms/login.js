import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

import headers from '../headers-setup'

class Login extends React.Component {

  constructor(props) {
    super(props)
    this.loginUser = this.loginUser.bind(this)
    this.createCloset = this.createCloset.bind(this)
    this.getUserOutfits = this.getUserOutfits.bind(this)
    this.logTheUser = this.logTheUser.bind(this)
  }

  loginUser() {

    return new Promise((resolve, reject) => {
      let self = this
      let username = this.refs.username.value
      let password = this.refs.password.value
      let userToken = this.props.userToken

      if (!username || !password) {
        alert('Please enter your Username and Password.')
      } else {
        $.ajax({
          url: `https://api.parse.com/1/login?username=${username}&password=${password}`,
          type: 'GET',
          success: function(response) {
            console.log('this is the response', response)
            self.props.loginUser(response);
            resolve();
          },
          error: function(xhr, status, error){
              alert('please enter your correct details!')
              reject();
          }
        })
      }
    });

  }

  createCloset(){


  return new Promise ((resolve, reject) => {
    console.log('you created a user closet')
    let self = this
    let userId = this.props.userSession.objectId

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
        console.log('you made a closet',response)
          self.props.createUserCloset(response)
          resolve()
      },
      error: function(){
        console.log("error error")
        reject()
      }
    })
  })
}

  getUserOutfits(){
    let self = this
    let userId = this.props.userSession.objectId

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
        console.log('you got outfits',response)
        self.props.createUserOutfits(response)
      }
    })
  }



  logTheUser(e){
    e.preventDefault()
    this.loginUser().then(() => {
      this.createCloset().then(() => {
        this.getUserOutfits()
      })
    });
    console.log(this.props)
  }

  componentDidMount() {
    if(this.props.loggedIn === true){
      this.props.history.pushState(null, '/dashboard');
    }
  }

  render () {

    return(
      <main className="loginMain">
        <section>
          <form>
            <input className="input" type="text" ref="username" placeholder="username"/>
            <input className="input" type="password" ref="password" placeholder="password"/>
            <input className="subBtn" type="submit" ref="submitBtn" onClick={this.logTheUser}/>
            <Link className="registerLink" to="/register">Register Now</Link>
          </form>
        </section>
      </main>
    )
  }
}

export default Login;
