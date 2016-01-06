import React, { PropTypes } from 'react';
import Article from './article'


class Category extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      isVisible: true,
      page: 0
    };


    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);

    console.log(this.props)
  }

  handlePrev() {
    let page;
    page = this.state.page - 1;
    this.setState({
      page: page
    });
  }

  handleNext() {
    let self = this.state
    let page = self.page + 1;
    this.setState({
      page: page
    });
  }

  render () {
    let preBTN;
    let nextBTN;
    let showNextBtn = (this.state.page+1) * this.props.limit < this.props.articles.length;
    if(this.state.page >= 1){
      preBTN = <button className="fa fa-arrow-left" onClick={this.handlePrev}></button>
    } if (showNextBtn) {
      nextBTN = <button className="fa fa-arrow-right" onClick={this.handleNext}></button>
    }

    let articles = this.props.articles.filter((item, index) => {
      let start = this.state.page * this.props.limit;
      let end = start + this.props.limit;

      if (index >= start && index < end) {
        return true;
      }
      return false;
    }).map(item => {
      return <Article key={item.objectId} img={item.img} style={item.style} item={item}/>
    });

    return (
      <div>
          <div className="BTNContainer">{preBTN}</div>
        <ul className="closetItems">
          <h2>{this.props.title}</h2>
          {articles}
        </ul>
          <div className="BTNContainer">{nextBTN}</div>
      </div>
    )
  }
}

export default Category;
