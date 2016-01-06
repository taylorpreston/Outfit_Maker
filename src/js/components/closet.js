import React from 'react';
import {Link} from 'react-router';
import AddItem from './additem';
import $ from '../ajax';
import Category from './category';

class Closet extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      userCloset: {data: {results: []}},
      userTops:[],
      userBottoms:[],
      userShoes:[],
      userAccessories:[],
    }
    this.handleUserCloset = this.handleUserCloset.bind(this)
  }

  componentDidMount(){
    if(this.props.loggedIn === false){
      // this.props.history.pushState(null, '/')
    }
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
          self.handleUserCloset(response)
      },
      error: function(){
        console.log("error error")
      }
    })
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

  render() {
    console.log(this.props);

    if(this.props.publicFeedUser.user === false){
    return (
      <main className="closetMain">
        <Link className="addItemView" to="/additem">Add Item</Link>
        <Category title="Tops" limit={3} articles={this.state.userTops} />
        <Category title="Bottoms" limit={3} articles={this.state.userBottoms} />
        <Category title="Shoes" limit={3} articles={this.state.userShoes} />
        <Category title="Accessories" limit={3} articles={this.state.userAccessories} />
      </main>
    )}else{
      return(
        <main className="closetMain">
          <Category title="Tops" limit={3} articles={this.props.publicFeedUser.userTops} />
          <Category title="Bottoms" limit={3} articles={this.props.publicFeedUser.userBottoms} />
          <Category title="Shoes" limit={3} articles={this.props.publicFeedUser.userShoes} />
          <Category title="Accessories" limit={3} articles={this.props.publicFeedUser.userAccessories} />
        </main>
      )
    }
  }
}

export default Closet;
