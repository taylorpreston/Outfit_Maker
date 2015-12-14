import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getAllArticles } from '../actions';

class ClosetArticle extends React.Component {
  componentDidMount() {
    this.props.getAllArticles(this.props.type);
  }

  render () {
    const articles = this.props.articles;
    console.log('articles', articles);
    return (
      <div className="closeArtlceGroup">
      {
        articles.map(article => {
          <section className="closetArticle" key={article.id}>
            <h3>{article.description}</h3>
            <img src={article.img}/>
            <p>{article.type}</p>
            <p>{article.brand}</p>
            <p>{article.weather}</p>
            <p>{article.color}</p>
            <a>click me</a>
          </section>
        })
      }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    articles: state.articlesByCategory[ownProps.type] || []
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getAllArticles }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ClosetArticle);
