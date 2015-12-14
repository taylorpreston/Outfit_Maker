import React from 'react';
import {connect} from 'react-redux'

import ClosetArticle from './closet-article'

class Closet extends React.Component {
  render () {
    return(
      <main className="closetMain">
        <button> boom </button>
        <section className="closetTops">
          <h2>Tops</h2>
          <ClosetArticle type="tops"/>
        </section>
        <section className="closetBottoms">
          <h2>Bottoms</h2>
          <ClosetArticle type="bottoms"/>
        </section>
        <section className="closetShoes">
          <h2>Shoes</h2>
          <ClosetArticle type="shoes"/>
        </section>
        <section className="closetAccessories">
          <h2>Accessories</h2>
          <ClosetArticle type="accessories"/>
        </section>
      </main>
    )
  }
}

export default Closet;
