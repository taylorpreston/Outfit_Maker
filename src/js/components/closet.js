import React from 'react';
import {Link} from 'react-router';
import AddItem from './additem';
import $ from 'Jquery';
import headers from '../headers-setup';
import Article from './article';

class Closet extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    if(this.props.loggedIn === false){
      this.props.history.pushState(null, '/')
    }
  }
  render() {
    console.log(JSON.stringify(this.props.userShoes));
    let self = this.props
    let tops = self.userTops.map(item => {
      return <Article key={item.objectId} img={item.img} discription={item.discription}/>
    })
    let bottoms = self.userBottoms.map(item => {
      return <Article key={item.objectId} img={item.img} discription={item.discription}/>
    })
    let shoes = self.userShoes.map(item => {
      return <Article key={item.objectId} img={item.img} discription={item.discription}/>
    })
    let accessories = self.userAccessories.map(item => {
      return <Article key={item.objectId} img={item.img} discription={item.discription}/>
    })

    return (
      <main className="closetMain">
      <Link className="AddItemView" to="/additem">Add Item</Link>
        <ul className="closetItems">
          <h2>Tops</h2>
          {tops}
        </ul>
        <ul className="closetItems">
          <h2>Bottoms</h2>
          {bottoms}
        </ul>
        <ul className="closetItems">
          <h2>Shoes</h2>
          {shoes}
        </ul>
        <ul className="closetItems">
          <h2>Accessories</h2>
          {accessories}
        </ul>
      </main>
    )
  }
}

export default Closet;
