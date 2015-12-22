import React from 'react';
import OutfitArticle from './outfit-article';
import $ from 'jquery';

class OutfitDesigner extends React.Component {

  constructor(props){
    super(props)
    console.log(this.props.userCloset)


    this.state = {
      outfitTop: null,
      outfitBottom: null,
      outfitShoes: null,
      outfitAccessories: null,

      outfitTopImg: null,
      outfitBottomImg: null,
      outfitShoesImg: null,
      outfitAccessoriesImg: [null]
    }

    this.handleTopChange = this.handleTopChange.bind(this)
    this.handleBottomChange = this.handleBottomChange.bind(this)
    this.handleShoeChange = this.handleShoeChange.bind(this)
    this.handleAccessoriesChange = this.handleAccessoriesChange.bind(this)
    this.saveOutfit = this.saveOutfit.bind(this)
    this.updateUserOutfits = this.updateUserOutfits.bind(this)
  }

  saveOutfit(){
    console.log(this.state)
    let self = this
    let top = this.state.outfitTop
    let bottom = this.state.outfitBottom
    let shoes =  this.state.outfitShoes
    let accessories = this.state.outfitAccessories
    let userId = this.props.userSession.objectId
    let user = {
      "__type": "Pointer",
      "className": "_User",
      "objectId": userId
    };

    let newOutfit = {
      outfitName: this.refs.outfitName.value,
      top,
      bottom,
      shoes,
      accessories,
      user
    }

    if(!this.state.outfitTop || !this.state.outfitBottom || !this.state.outfitShoes || !this.refs.outfitName){
      alert('please select outfit items')
    }else{
    $.ajax({
      url:'https://api.parse.com/1/classes/Outfit',
      type: 'POST',
      data: JSON.stringify(newOutfit)
    }).done((result) => {
      console.log('saved outfit', result)
      self.updateUserOutfits()
      })
    }
  }

  updateUserOutfits(){
    let self = this
    let userId = this.props.userSession.objectId

    $.ajax({
      url: 'https://api.parse.com/1/classes/Outfit',
      type: 'GET',
      data: {
        where: JSON.stringify({
          "user": {
            "__type": "Pointer",
            "className": "_User",
            "objectId": userId
          }
        })
      },
      success: function(response){
        console.log('you got outfits',response)
          self.props.createUserOutfits(response)
      }
    })
  }


  handleTopChange(data){
    console.log('this is my TOP state', data)
    this.setState({
      outfitTop: data,
      outfitTopImg: data.img
    })
  }

  handleBottomChange(data){
    console.log('this is my BOTTOM state', data)
    this.setState({
      outfitBottom: data,
      outfitBottomImg: data.img
    })
  }

  handleShoeChange(data){
    console.log('this is my SHOE state', data)
    this.setState({
      outfitShoes: data,
      outfitShoesImg: data.img
    })
  }
  handleAccessoriesChange(data){
    console.log('this is my ACCESSORIES state', data)
    this.setState({
      outfitAccessories: data,
      outfitAccessoriesImg: data.img
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
                            item={item}
                            changeItem={this.handleTopChange}
                            className="outfitArticle"/>
    })
    let bottoms = self.userBottoms.map(item => {
      return <OutfitArticle key={item.objectId}
                            item={item}
                            changeItem={this.handleBottomChange}
                            className="outfitArticle"/>
    })
    let shoes = self.userShoes.map(item => {
      return <OutfitArticle key={item.objectId}
                            item={item}
                            changeItem={this.handleShoeChange}
                            className="outfitArticle"/>
    })
    let accessories = self.userAccessories.map(item => {
      return <OutfitArticle key={item.objectId}
                            item={item}
                            changeItem={this.handleAccessoriesChange}
                            className="outfitArticle"/>
    })


    let outfitTop = (<img className='designImg' src={this.state.outfitTopImg}/>)

    let outfitBottom = (<img className='designImg' src={this.state.outfitBottomImg}/>)

    let outfitShoes = (<img className='designImg' src={this.state.outfitShoesImg}/>)

    let outfitAccessories = (<img className='designImg' src={this.state.outfitAccessoriesImg}/>)

    return (
      <main className="outfittMain">
        <section className='closetSection'>
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
          <div className="designerTop, design">
            {outfitTop}
          </div>
          <div className="designerBottom, design">
            {outfitBottom}
          </div>
          <div className="designShoes, design">
            {outfitShoes}
          </div>
          <div className="designAccessories">
            {outfitAccessories}
          </div>
          <input className="input" type="text" ref="outfitName" placeholder="Name Your Outfit"/>
        </section>
        <button onClick={this.saveOutfit}>Save Your Outfit</button>
      </main>
    )
  }
  }

  export default OutfitDesigner;
