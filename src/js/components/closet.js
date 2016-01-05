import React from 'react';
import {Link} from 'react-router';
import AddItem from './additem';
import $ from 'Jquery';
import headers from '../headers-setup';
import Category from './category';

class Closet extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    if(this.props.loggedIn === false){
      // this.props.history.pushState(null, '/')
    }
  }
  render() {
    return (
      <main className="closetMain">
        <Link className="addItemView" to="/additem">Add Item</Link>
        <Category title="Tops" limit={3} articles={this.props.userTops} />
        <Category title="Bottoms" limit={3} articles={this.props.userBottoms} />
        <Category title="Shoes" limit={3} articles={this.props.userShoes} />
        <Category title="Accessories" limit={3} articles={this.props.userAccessories} />
      </main>
    )
  }
}

export default Closet;
