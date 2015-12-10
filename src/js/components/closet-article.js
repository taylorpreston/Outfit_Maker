import React, { PropTypes } from 'react'
import { connect } from 'react-redux';

class ClosetArticle extends React.Component {

  constructor(props){
    super(props)
    this.showStore =this.showStore.this
    console.log(this.props)
  }

  showStore(event){
    event.preventDefault()
  }

  render () {
    return(
      <section className="closetArticle">
        <h3>Discription</h3>
        <img src="http://lorempixel.com/240/240/fashion/"/>
        <p>type</p>
        <p>Brand</p>
        <p>Weather</p>
        <p>Color</p>
        <a>click me</a>
      </section>
    )
  }
}

export default ClosetArticle;
