import React, { PropTypes } from 'react'

class Article extends React.Component {

  constructor(props){
    super(props)
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
