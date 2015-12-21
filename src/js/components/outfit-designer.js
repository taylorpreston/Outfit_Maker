import React from 'react';
import Article from './article';

class OutfitDesigner extends React.Component {

  constructor(props){
    super(props)

    console.log(this.props)
  }
  componentDidMount(){
    if(this.props.loggedIn === false){
      this.props.history.pushState(null, '/');
    }

  }


  render () {
    console.log(this.props.userCloset.data.results[3].discription);
    return (
      <main className="outfitdesignerMain">
      </main>
    )
  }
}

export default OutfitDesigner;
