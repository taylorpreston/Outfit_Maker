import React from 'react';
import {Link} from 'react-router';
import AddItem from './additem';
import $ from 'Jquery';
import headers from '../headers-setup';


class Closet extends React.Component {
  constructor(props){
    super(props)
    console.log(this.props)
  }

  componentDidMount(){
    if(this.props.loggedIn === false){
      this.props.history.pushState(null, '/')
    }
  }
  render() {

    console.log(this.props.userTops);

    return (
      <main className="closetMain">
      <Link className="AddItemView" to="/additem">Add Item</Link>
        <section className="closetItems">
          <h2>Tops</h2>

        </section>
        <section className="closetItems">
          <h2>Bottoms</h2>

        </section>
        <section className="closetItems">
          <h2>Shoes</h2>

        </section>
        <section className="closetItems">
          <h2>Accessories</h2>

        </section>
      </main>
    )
  }
}

export default Closet;
