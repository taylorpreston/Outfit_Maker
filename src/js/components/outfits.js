import React from 'react'

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
    return  (
      <h1>Outfits</h1>
    )
  }
}

export default Outfits;
