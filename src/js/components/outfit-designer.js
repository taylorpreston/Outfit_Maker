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
      <section className="designTops"></section>
      <h2>tops</h2>
      <section className="designBottom"></section>
      <h3>bottoms</h3>
      <section className="designShoes"></section>
      <h4>shoes</h4>
      <section className="designAccessories"></section>
      <h5>accessories</h5>
      </main>
    )
  }
}

export default OutfitDesigner;
