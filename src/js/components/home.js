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
      userOutfits:[],
      userCloset: {data: {results: []}},
      userTops:[],
      userBottoms:[],
      userShoes:[],
      userAccessories:[]
    }
    this.handleLogoutUser = this.handleLogoutUser.bind(this);
    this.handleLoginUser = this.handleLoginUser.bind(this)
    this.handleUserCloset = this.handleUserCloset.bind(this)
    this.handleUserOutfits = this.handleUserOutfits.bind(this)
  }

  handleUserOutfits(data) {
    this.setState({
      userOutfits: data
    })
  }

  componentDidMount(){
    let userSession = JSON.parse(localStorage.getItem('userSession'));

    console.log('SESSION', userSession);
    if (userSession) {
      this.setState({
        loggedIn: true,
        userSession: userSession
      });
    } 
  }

  handleUserCloset(data) {

    let allClothes = data.results

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
  }


  handleLogoutUser() {
    this.setState({
      loggedIn: false,
      userSession: {}
    })
    localStorage.removeItem('userSession')
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
        userOutfits: this.state.userOutfits,
        loginUser: this.handleLoginUser,
        createUserCloset: this.handleUserCloset,
        createUserOutfits: this.handleUserOutfits
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
                      createUserCloset = {this.handleUserCloset}
                      createUserOutfits = {this.handleUserOutfits}/>
        {childrenProps}
      </div>
    )

  }
}

export default Home;
