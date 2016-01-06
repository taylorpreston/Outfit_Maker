import React, { PropTypes } from 'react'

class Article extends React.Component {

  constructor(props){
    super(props)
    console.log(this.props)
    this.deleteArticle = this.deleteArticle.bind(this)
  }

  deleteArticle(){
    let objId = this.props.item.objectId
    console.log(objId)
    $.ajax({
      url: `https://api.parse.com/1/classes/Outfit/${objId}`,
      type: 'DELETE',
    })
  }

  render () {

    return(
        <li>
          <span>{this.props.style}</span>
          <img src={this.props.img}/>
        </li>
      )
    }
  }

export default Article
