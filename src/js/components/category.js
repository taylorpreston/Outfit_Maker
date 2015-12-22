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
  }

  handlePrev() {
    // do some checks to make sure we're not past page 0
    let page;

    if(page = 0){
      document.getElementsByClassName('.prevBtn').style.visibility = "hidden";
      console.log('hiding prev')
    };
    page = this.state.page - 1;

    this.setState({
      page: page
    });
  }

  handleNext() {
    // do some checks to make sure we're not past the total number of items
    let self = this.state

    let page = self.page + 1;

    this.setState({
      page: page
    });
  }

  render () {
    let articles = this.props.articles.filter((item, index) => {
      let start = this.state.page * this.props.limit;
      let end = start + this.props.limit;

      if (index >= start && index < end) {
        return true;
      }
      return false;
    }).map(item => {
      return <Article key={item.objectId} img={item.img} discription={item.discription}/>
    });

    return (
      <div>
        <button className="prevBtn" onClick={this.handlePrev}>Prev</button>
        <ul className="closetItems">
          <h2>{this.props.title}</h2>
          {articles}
        </ul>
        <button className="nextBtn" onClick={this.handleNext}>Next</button>
      </div>
    )
  }
}

export default Category;
