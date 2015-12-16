import React from 'react';
class Closet extends React.Component {

  constructor(props){
    super(props)

    console.log(this.props)
  }
  componentDidMount(){
    if(this.props.loggedIn === false){
      this.props.history.pushState(null, '/');
    }
  }
  render() {
    return (
      <main className="closetMain">
        <button>
          boom
        </button>
        <section className="closetTops">
          <h2>Tops</h2>

        </section>
        <section className="closetBottoms">
          <h2>Bottoms</h2>

        </section>
        <section className="closetShoes">
          <h2>Shoes</h2>

        </section>
        <section className="closetAccessories">
          <h2>Accessories</h2>

        </section>
      </main>
    )
  }
}

export default Closet;
