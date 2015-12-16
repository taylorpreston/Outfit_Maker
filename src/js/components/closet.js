import React from 'react';
import {Link} from 'react-router';
import AddItem from './additem';
import $ from 'Jquery';
import headers from '../headers-setup';

class Closet extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      hasLoaded: false,
      articles: []
    }
    console.log(this.props)
  }
  componentDidMount(){
    let self = this;
    $.ajax({
      url: 'https://api.parse.com/1/classes/Article/5kIvw289qp',
      hasLoaded: true,
      type: 'GET',
      success: (response) => {
        self.setState({articles: response.results})
        console.log(response.results);
      }
    })
  }
  render() {
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
