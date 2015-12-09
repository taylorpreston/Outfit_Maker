import React from 'react'
import { Link } from 'react-router'
import $ from 'jquery'


class Home extends React.Component {


  render () {
    return(
      <div className="mainWrap">

        {this.props.children}
      </div>
    )
  }
}

export default Home;
