import React from 'react';
import OutfitArticle from './outfit-article';

class OutfitDesigner extends React.Component {

  constructor(props){
    super(props)
    console.log(this.props.userCloset)


    this.state = {
      outfitTop: null,
      outfitBottom: null,
      outfitShoes: null,
      outfitAccessories: [null]
    }

    this.handleTopChange.bind(this)
    this.handleBottomChange.bind(this)
    this.handleShoeChange.bind(this)
    this.handleAccessoriesChange.bind(this)
  }

  handleTopChange(data){
    this.setState({
      outfitTop: data
    })
    console.log(data)
  }

  handleBottomChange(data){
    this.setState({
      outfitBottom: data
    })
  }

  handleShoeChange(data){
    this.setState({
      outfitShoes: data
    })
  }
  handleAccessoriesChange(data){
    this.setState({
      outfitAccessories: data
    })
  }
  componentDidMount(){
    if(this.props.loggedIn === false){
      this.props.history.pushState(null, '/');
    }

  }


  render() {
    let self = this.props
    let tops = self.userTops.map(item => {
      return <OutfitArticle key={item.objectId}
                            img={item.img}
                            discription={item.discription}
                            changeItem={this.handleTopChange.bind(this)}/>
    })
    let bottoms = self.userBottoms.map(item => {
      return <OutfitArticle key={item.objectId}
                            img={item.img}
                            discription={item.discription}
                            changeItem={this.handleBottomChange.bind(this)}/>
    })
    let shoes = self.userShoes.map(item => {
      return <OutfitArticle key={item.objectId}
                            img={item.img}
                            discription={item.discription}
                            changeItem={this.handleShoeChange.bind(this)}/>
    })
    let accessories = self.userAccessories.map(item => {
      return <OutfitArticle key={item.objectId}
                            img={item.img}
                            discription={item.discription}
                            changeItem={this.handleAccessoriesChange.bind(this)}/>
    })


    let outfitTop = (<img src={this.state.outfitTop}/>)

    let outfitBottom = (<img src={this.state.outfitBottom}/>)

    let outfitShoes = (<img src={this.state.outfitShoes}/>)

    let outfitAccessories = (<img src={this.state.outfitAccessories}/>)

    return (
      <main className="outfittMain">
        <section>
          <ul className="closetItems">
            <h2>Tops</h2>
              {tops}
            </ul>
            <ul className="closetItems">
              <h2>Bottoms</h2>
              {bottoms}
            </ul>
            <ul className="closetItems">
              <h2>Shoes</h2>
              {shoes}
            </ul>
            <ul className="closetItems">
              <h2>Accessories</h2>
              {accessories}
            </ul>
        </section>
        <section className="outfitDesigner">
          <h3>selected top</h3>
          <div className="designerTop">
            {outfitTop}
          </div>
          <div className="designerBottom">
            {outfitBottom}
          </div>
          <div className="designShoes">
            {outfitShoes}
          </div>
          <div className="designAccessories">
            {outfitAccessories}
          </div>
        </section>

      </main>
    )
  }
  }

  export default OutfitDesigner;
