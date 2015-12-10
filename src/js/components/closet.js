import React from 'react';

import ClosetArticle from './closet-article'

class Closet extends React.Component {
  render () {
    return(
      <main className="closetMain">
        <section className="closetTops">
          <h2>Tops</h2>
          <ClosetArticle/>
        </section>
        <section className="closetBottoms">
          <h2>Bottoms</h2>
          <ClosetArticle/>
        </section>
        <section className="closetShoes">
          <h2>Shoes</h2>
          <ClosetArticle/>
        </section>
        <section className="closetAccessories">
          <h2>Accessories</h2>
          <ClosetArticle/>
        </section>
      </main>
    )
  }
}

export default Closet;
