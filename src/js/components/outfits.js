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
    console.log(this.props)
    return(
      <h1>outfits</h1>
    )
  }
}

export default Outfits;
