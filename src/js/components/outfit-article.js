import React, { PropTypes } from 'react'

class OutfitArticle extends React.Component {

  constructor(props){
    super(props)
  }

  changeOutfitImage(e){
    e.preventDefault()
    console.log(this.props.item)
    this.props.changeItem(this.props.item)
  }



  render () {
    return(
      <li>
          <span>{this.props.discription}</span>
          <img onClick={this.changeOutfitImage.bind(this)} src={this.props.item.img}/>
      </li>
    )
  }
}

export default OutfitArticle
