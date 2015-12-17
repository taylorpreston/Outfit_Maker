import React from 'react'
import AddItem from './additem';


class Outfits extends React.Component {
constructor(props){
  super(props)
}

  componentDidMount(){
    if(this.props.loggedIn === false){
      this.props.history.pushState(null, '/');
    }
  }

  render () {
    return(
      <h1>outfits</h1>
    )
  }
}

export default Outfits;
