import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import Header from './header';
import setUp from '../headers-setup'

class Home extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      loggedIn: false,
      userSession: {},
      userCloset: {data: {results: []}},
      userTops:[],
      userBottoms:[],
      userShoes:[],
      userAccessories:[]
    }
    this.handleLogoutUser = this.handleLogoutUser.bind(this);
    this.handleLoginUser = this.handleLoginUser.bind(this)
    this.handleUserCloset = this.handleUserCloset.bind(this)
  }

  handleUserCloset(data) {

    let allClothes = data.results
    console.log('data-results', data.results);

    function tops(item){
      return item.type === "Top";
    }

    function bottoms(item){
      return item.type === "Bottom";
    }

    function shoes(item){
      return item.type === "Shoes";
    }

    function accessories(item){
      return item.type === "Accessory";
    }

    let userTops = allClothes.filter(tops)
    let userBottoms = allClothes.filter(bottoms)
    let userShoes = allClothes.filter(shoes)
    let userAccessories = allClothes.filter(accessories)


    this.setState({
      userCloset: {
        data
      },
      userTops,
      userBottoms,
      userShoes,
      userAccessories
    });

    console.log('user tops', userTops)
  }


  handleLogoutUser() {
    this.setState({
      loggedIn: false,
      userSession: {}
    })
    localStorage.removeItem('userSession')
    console.log('logged out success!');
    this.props.history.pushState(null, '/')
  }
  handleLoginUser(data) {
    this.setState({
        loggedIn: true,
        userSession: data
      })
      // this saves the sessionToken
    localStorage.setItem('userSession', JSON.stringify(data));
    this.props.history.pushState(null, '/dashboard');
    console.log(localStorage.getItem('userSession'));
  }


  render() {
    let childrenProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        loggedIn: this.state.loggedIn,
        userSession: this.state.userSession,
        userCloset: this.state.userCloset,
        userTops: this.state.userTops,
        userBottoms: this.state.userBottoms,
        userShoes:  this.state.userShoes,
        userAccessories: this.state.userAccessories,
        loginUser: this.handleLoginUser,
        createUserCloset: this.handleUserCloset
      })
    });
    return (
      <div className = "mainWrap" >
        <Header loggedIn = {this.state.loggedIn}
                      userSession = {this.state.userSession}
                      userCloset = {this.state.userCloset}
                      userTops = {this.state.userTops}
                      userBottoms = {this.state.userBottoms}
                      userShoes = {this.state.userShoes}
                      userAccessories = {this.state.userAccessories}
                      logoutUser = {this.handleLogoutUser}
                      createUserCloset = {this.handleUserCloset}/>
        {childrenProps}
      </div>
    )

  }
}

export default Home;
