import React from 'react';

class OutfitDesigner extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    if(this.props.loggedIn === false){
      this.props.history.pushState(null, '/');
    }
  }

  render () {
    return (
      <main className="outfitdesignerMain">
      <h1>OutfitDesigner</h1>
      </main>
    )
  }
}

export default OutfitDesigner;
