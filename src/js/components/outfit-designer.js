import React from 'react';
import Category from './category';
import $ from 'jquery';

class OutfitDesigner extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      userCloset: {data: {results: []}},
      userTops:[],
      userBottoms:[],
      userShoes:[],
      userAccessories:[],

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
    // this.updateUserOutfits = this.updateUserOutfits.bind(this)
    this.handleUserCloset = this.handleUserCloset.bind(this)
  }

  saveOutfit(){
    console.log("you saved an OUTFIT!!!!", this.state)
    let self = this
    let top = this.state.outfitTop
    let bottom = this.state.outfitBottom
    let shoes =  this.state.outfitShoes
    let accessories = this.state.outfitAccessories
    let userId = undefined
    if(this.props.publicFeedUser.user === false){
       userId = this.props.userSession.objectId
    }else{
       userId = this.props.publicFeedUserId
    }

    let createdBy = this.props.userSession.username
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
      // self.updateUserOutfits()
      self.setState({
        outfitTop: null,
        outfitBottom: null,
        outfitShoes: null,
        outfitAccessories: null,

        outfitTopImg: null,
        outfitBottomImg: null,
        outfitShoesImg: null,
        outfitAccessoriesImg: [null]
        })
      self.refs.outfitName.value = ''
      })
    }
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

  handleUserCloset(data) {
    let allClothes = data.results
    function tops(item){
      return item.type === "Top";
    }
    function bottoms(item){
      return item.type === "Bottom";
    }
    function shoes(item){
      return item.type === "Shoes";
    }
    function accessories(item){
      return item.type === "Accessory";
    }

    let userTops = allClothes.filter(tops)
    let userBottoms = allClothes.filter(bottoms)
    let userShoes = allClothes.filter(shoes)
    let userAccessories = allClothes.filter(accessories)

    this.setState({
      userCloset: {
        data
      },
      userTops,
      userBottoms,
      userShoes,
      userAccessories
    });
  }

  componentDidMount(){
    if(this.props.loggedIn === false){
      this.props.history.pushState(null, '/');
    }

    let self = this
    let userId = this.props.userSession.objectId
    $.ajax({
      url: 'https://api.parse.com/1/classes/Article',
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
        console.log('you made a closet',response)
          self.handleUserCloset(response)
      },
      error: function(){
        console.log("error error")
      }
    })

  }


  render() {
   if(this.props.publicFeedUser.user === false){

    let self = this.state

    let tOPS = self.userTops
    let bOTTOMS = self.userBottoms
    let sHOES = self.userShoes
    let aCCESSORIES = self.userAccessories

    let outfitTop = (<img className='designImg' src={this.state.outfitTopImg}/>)

    let outfitBottom = (<img className='designImg' src={this.state.outfitBottomImg}/>)

    let outfitShoes = (<img className='designImg' src={this.state.outfitShoesImg}/>)

    let outfitAccessories = (<img className='designImg' src={this.state.outfitAccessoriesImg}/>)

    return (
      <main className="outfitMain">
        <section className='closetSection'>
          <h3>Make an Outfit</h3>
          <ul className="closetItems">
              <Category title="Tops"
                        limit={3}
                        articles={tOPS}
                        hangeItem={this.handleBottomChange}
                        className="outfitArticle"
                         />
            </ul>
            <ul className="closetItems">
                <Category title="Bottoms"
                          limit={3}
                          articles={bOTTOMS}
                          hangeItem={this.handleBottomChange}
                          className="outfitArticle"
                           />
            </ul>
            <ul className="closetItems">

                <Category title="Shoes"
                          limit={3}
                          articles={sHOES}
                          hangeItem={this.handleBottomChange}
                          className="outfitArticle"
                           />
            </ul>
            <ul className="closetItems">
                <Category title="Accessories"
                          limit={3}
                          articles={aCCESSORIES}
                          hangeItem={this.handleBottomChange}
                          className="outfitArticle"
                           />
            </ul>
        </section>
        <section className="outfitDesigner">
          <input className="outfitName" type="text" ref="outfitName" placeholder="Name Your Outfit"/>
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
        </section>
        <button className="saveOutfit" onClick={this.saveOutfit}>Save This Outfit</button>
      </main>
    )}

    else{

    let self = this.props.publicFeedUser

    let tOPS = self.userTops
    let bOTTOMS = self.userBottoms
    let sHOES = self.userShoes
    let aCCESSORIES = self.userAccessories

    let outfitTop = (<img className='designImg' src={this.state.outfitTopImg}/>)

    let outfitBottom = (<img className='designImg' src={this.state.outfitBottomImg}/>)

    let outfitShoes = (<img className='designImg' src={this.state.outfitShoesImg}/>)

    let outfitAccessories = (<img className='designImg' src={this.state.outfitAccessoriesImg}/>)

    return (
      <main className="outfittMain">
        <section className='closetSection'>
          <ul className="closetItems">
              <Category title="Tops"
                        limit={3}
                        articles={tOPS}
                        hangeItem={this.handleBottomChange}
                        className="outfitArticle"
                         />
            </ul>
            <ul className="closetItems">
                <Category title="Bottoms"
                          limit={3}
                          articles={bOTTOMS}
                          hangeItem={this.handleBottomChange}
                          className="outfitArticle"
                          />
            </ul>
            <ul className="closetItems">

                <Category title="Shoes"
                          limit={3}
                          articles={sHOES}
                          hangeItem={this.handleBottomChange}
                          className="outfitArticle"
                           />
            </ul>
            <ul className="closetItems">
                <Category title="Accessories"
                          limit={3}
                          articles={aCCESSORIES}
                          hangeItem={this.handleBottomChange}
                          className="outfitArticle"
                           />
            </ul>
        </section>
        <section className="outfitDesigner">
                    <input className="outfitName" type="text" ref="outfitName" placeholder="Name Your Outfit"/>
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
        </section>
        <button className="saveOutfit" onClick={this.saveOutfit}>Save This Outfit</button>
      </main>
    )}
   }
  }

  export default OutfitDesigner;
