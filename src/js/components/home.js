import React from 'react';
import {Link} from 'react-router';
import $ from '../ajax';
import Header from './header';


class Home extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      loggedIn: false,
      userSession: {},
      publicFeedUser:{
        user: false,
        closet:{},
        userTops:[],
        userBottoms:[],
        userShoes:[],
        userAccessories:[]
      },
      publicFeedUserOutfits:[],
      publicFeedUserId: {}
    }
    this.handleLogoutUser = this.handleLogoutUser.bind(this);
    this.handleLoginUser = this.handleLoginUser.bind(this)
    this.handlePublicFeedUser = this.handlePublicFeedUser.bind(this)
    this.handlePublicFeedUserOutfits = this.handlePublicFeedUserOutfits.bind(this)
    this.handlePublicFeedUserId =this.handlePublicFeedUserId.bind(this)
    this.getRidOfPublicFeedUser = this.getRidOfPublicFeedUser.bind(this)
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


  getRidOfPublicFeedUser(){
    console.log("did the thing with the thing")
    this.setState({
      publicFeedUser:{
        user: false,
        closet:{},
        userTops:[],
        userBottoms:[],
        userShoes:[],
        userAccessories:[]
      }
    })
    this.setState({
      publicFeedUserOutifts:[]
    })
    this.setState({
      publicFeedUserId: {}
    })
  }

  handlePublicFeedUserId(data){
    console.log('set the pub user id')
    this.setState({
      publicFeedUserId: data
    })
  }

  handlePublicFeedUserOutfits(data){
    console.log("got pub user outfits", data)

    this.setState({
      publicFeedUserOutfits: data
    })
  }

  handlePublicFeedUser(data) {
    console.log("got pub user closet")
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
      publicFeedUser:{
        user: true,
        closet: data,
        userTops,
        userBottoms,
        userShoes,
        userAccessories,
      }
    })
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
      console.log(data);
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
        handleUserCloset : this.handleUserCloset,
        createUserOutfits: this.handleUserOutfits,
        createPublicFeedUser: this.handlePublicFeedUser,
        createPublicFeedUserOutfits: this.handlePublicFeedUserOutfits,
        publicFeedUser: this.state.publicFeedUser,
        publicFeedUserOutfits: this.state.publicFeedUserOutfits,
        publicFeedUserId: this.state.publicFeedUserId,
        getRidOfPublicFeedUser: this.getRidOfPublicFeedUser,
        setPublicFeedUserId: this.handlePublicFeedUserId
      })
    });
    return (
      <div className = "mainWrap" >
        <Header userSession = {this.state.userSession}
                loggedIn = {this.state.loggedIn}
                loginUser = {this.handleLoginUser}
                getRidOfPublicFeedUser = {this.getRidOfPublicFeedUser}
                userSession = {this.state.userSession}
                logoutUser = {this.handleLogoutUser}/>

        {childrenProps}
      </div>
    )

  }
}

export default Home;
