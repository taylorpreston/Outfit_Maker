import React, { PropTypes } from 'react'

class OutfitArticle extends React.Component {

  constructor(props){
    super(props)
    console.log(this.props.changeItem)
  }

  clickedIt(e){
    e.preventDefault()
    console.log(this.props.img)
    this.props.changeItem(this.props.img)
  }

  render () {
    return(
      <li>
          <span>{this.props.discription}</span>
          <img onClick={this.clickedIt.bind(this)} src={this.props.img}/>
      </li>
    )
  }
}

export default OutfitArticle
