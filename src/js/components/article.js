import React, { PropTypes } from 'react'

class Article extends React.Component {
  render () {
    return(
      <section className="outfitTypesList">
        <article className="tops">tops:{this.props.userCloset.data.tops}</article>
        <article className="bottom">bottom:{this.props.userCloset.data.bottom}</article>
        <article className="shoes">shoes:{this.props.userCloset.data.shoes}</article>
        <article className="accessories">acc:{this.props.userCloset.data.accessories}</article>
      </section>
    )
  }
}

export default Article;
